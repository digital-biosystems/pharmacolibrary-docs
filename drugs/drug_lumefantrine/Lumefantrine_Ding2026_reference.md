<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Lumefantrine&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/&quot;},{&quot;label&quot;:&quot;Ding_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lumefantrine_Kloprogge2018_reference&quot;,&quot;label&quot;:&quot;Kloprogge_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Lumefantrine — `Lumefantrine_Ding2026_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

<div class="pk-model-meta" hidden drug="Lumefantrine" model-id="Lumefantrine_Ding2026_reference" status="not_simulated" stale="false" population="patients with uncomplicated Plasmodium falciparum malaria" measured-compound="lumefantrine" parameterization="apparent" topology="general_linear"></div>

## Citation
Ding J, Hoglund RM, van der Pluijm RW, Callery JJ, Peto TJ, Tripura R et al. Population pharmacokinetics of artemether-lumefantrine plus amodiaquine in patients with uncomplicated Plasmodium falciparum malaria. British journal of clinical pharmacology 92(2):589–605 (2026).
  ·  DOI: [10.1002/bcp.70301](https://doi.org/10.1002/bcp.70301)

## Population and dosing

**Population:** patients with uncomplicated Plasmodium falciparum malaria · condition uncomplicated P. falciparum malaria · age group mixed · n = 885.

**Dosing:** 10 mg base/kg/day, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed artemether-lumefantrine plus amodiaquine, measured lumefantrine.

## Model

**Structure:** 2-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 25 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Mean transit time (h) | MTT | 5.43 | h | 62.7 (15.7% RSE) |
| Number of transit compartments | n_transit | 5 | LF |  |
| F | Fab | 1 |  |  |
| CL/F LF (L/h) | CL/F | 4.35 | L/h | 14.9 (12.5% RSE) |
| VC,/F LF (L) | V1/F | 101 | L | 101 (7.8% RSE) |
| Q/F LF (L/h) | Q/F | 1.65 | L/h |  |
| Vp,/F LF (L) | V2/F | 311 | L |  |
| CL/F DLF (L/h) | CL/F | 744 | L/h |  |
| VC/F DLF (L) | V1/F | 8530 | L |  |
| Q/F DLF (L/h) | Q/F | 1100 | L/h |  |
| CL/F ARM (L/h) | CL/F | 79.3 | L/h |  |
| VC/F ARM (L) | V1/F | 141 | L |  |
| Q/F ARM (L/h) | Q/F | 21.7 | L/h |  |
| Vp/F ARM (L) | V3/F | 283 | L |  |
| CL/F DHA (L/h) | CL/F | 255 | L/h |  |
| Vc/F DHA (L) | V1/F | 64.1 | L |  |
| Ka | kabs | 1.93 | 1/h |  |
| CL/F AQ (L/h) | CL/F | 2250 | L/h |  |
| Q/F AQ (L/h) | Q/F | 3020 | L/h |  |
| CL/F DEAQ (L/h) | CL/F | 32.2 | L/h |  |
| VC/F DEAQ (L) | V1/F | 1260 | L |  |
| Q1/F DEAQ (L/h) | Q/F | 117 | L/h |  |
| Vp1/F DEAQ (L) | V2/F | 1640 | L |  |
| Q2/F DEAQ (L/h) | Q2/F | 37.3 | L/h |  |
| Vp2/F DEAQ (L) | V3/F | 6440 | L |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.435). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The lumefantrine record was not simulated because only 12 of 20 expected parameters were extracted or defaulted — V1/F and V2/F for several compounds and the amodiaquine absorption rate constant kabs were missing — and one reported unit could not be converted to SI.**

The parameter-coverage check found 12 of 20 expected parameters covered, leaving eight unaccounted: V1/F and V2/F values (e.g. V1/F 101 L and V2/F 311 L for lumefantrine, V1/F 8530 L for desbutyllumefantrine, V1/F 141 L for artemether, V1/F 1260 L and V2/F 1640 L for desethylamodiaquine) and the amodiaquine kabs of 1.93 1/h were neither emitted nor defaulted. Additionally, one reported unit could not be expressed in SI, so that parameter reached the model builder without a usable numeric value. The builder assumed apparent parameterization with F=1 and Fm=1 and no molar correction. The model was built but has not been simulated yet. Extracted — lumefantrine: MTT 5.43 h, n_transit 5 LF, Fab 1, CL/F 4.35 L/h, V1/F 101 L, Q/F 1.65 L/h, V2/F 311 L; desbutyllumefantrine: CL/F 744 L/h, V1/F 8.53e+03 L, Q/F 1.1e+03 L/h; artemether: CL/F 79.3 L/h, V1/F 141 L, Q/F 21.7 L/h, V3/F 283 L; dihydroartemisinin: CL/F 255 L/h, V1/F 64.1 L; amodiaquine: kabs 1.93 1/h, CL/F 2.25e+03 L/h, Q/F 3.02e+03 L/h; desethylamodiaquine: CL/F 32.2 L/h, V1/F 1.26e+03 L, Q/F 117 L/h, V2/F 1.64e+03 L, Q2/F 37.3 L/h, V3/F 6.44e+03 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has artemether-lumefantrine plus amodiaquine, the second reading lumefantrine; it also differs on 25 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Mean transit time (h) | `Q81` · MTT | 5.43 | h |  |  | h | exact (1) | bcp70301-tbl-0004:row3:col1, Ding_2026_table_2:row2:col1 | 62.7 (15.7% RSE) |
| Number of transit compartments | `Q311` · n_transit | 5 | LF |  |  | l·f | exact (1) | bcp70301-tbl-0004:row4:col1, Ding_2026_table_2:row3:col1 |  |
| F | `Q40` · Fab | 1 |  |  |  |  | exact (1) | bcp70301-tbl-0004:row5:col1, Ding_2026_table_2:row4:col1, Ding_2026_table_3:row3:col1 |  |
| CL/F LF (L/h) | `Q27` · CL/F | 4.35 | L/h | 1.208e-06 | m3/s | l/h | llm_confirmed (0.6) | bcp70301-tbl-0004:row6:col1 | 14.9 (12.5% RSE) |
| VC,/F LF (L) | `Q290` · V1/F | 101 | L | 0.101 | m3 | l | llm_corrected (0.6) | bcp70301-tbl-0004:row7:col1 | 101 (7.8% RSE) |
| Q/F LF (L/h) | `Q69` · Q/F | 1.65 | L/h | 4.583e-07 | m3/s | l/h | llm_confirmed (0.6) | bcp70301-tbl-0004:row8:col1 |  |
| Vp,/F LF (L) | `Q82` · V2/F | 311 | L | 0.311 | m3 | l | llm_corrected (0.6) | bcp70301-tbl-0004:row9:col1 |  |
| CL/F DLF (L/h) | `Q27` · CL/F | 744 | L/h | 0.0002067 | m3/s | l/h | exact (1) | bcp70301-tbl-0004:row12:col1 |  |
| VC/F DLF (L) | `Q290` · V1/F | 8530 | L | 8.53 | m3 | l | exact (1) | bcp70301-tbl-0004:row13:col1 |  |
| Q/F DLF (L/h) | `Q69` · Q/F | 1100 | L/h | 0.0003056 | m3/s | l/h | exact (1) | bcp70301-tbl-0004:row14:col1 |  |
| CL/F ARM (L/h) | `Q27` · CL/F | 79.3 | L/h | 2.203e-05 | m3/s | l/h | llm_confirmed (0.6) | Ding_2026_table_2:row5:col1 |  |
| VC/F ARM (L) | `Q290` · V1/F | 141 | L | 0.141 | m3 | l | llm_confirmed (0.6) | Ding_2026_table_2:row6:col1 |  |
| Q/F ARM (L/h) | `Q69` · Q/F | 21.7 | L/h | 6.028e-06 | m3/s | l/h | llm_confirmed (0.6) | Ding_2026_table_2:row7:col1 |  |
| Vp/F ARM (L) | `Q78` · V3/F | 283 | L | 0.283 | m3 | l | llm_corrected (0.6) | Ding_2026_table_2:row8:col1 |  |
| CL/F DHA (L/h) | `Q27` · CL/F | 255 | L/h | 7.083e-05 | m3/s | l/h | exact (1) | Ding_2026_table_2:row12:col1 |  |
| Vc/F DHA (L) | `Q290` · V1/F | 64.1 | L | 0.0641 | m3 | l | exact (1) | Ding_2026_table_2:row13:col1 |  |
| Ka | `Q49` · kabs | 1.93 | 1/h | 0.0005361 | 1/s | 1/h | exact (1) | Ding_2026_table_3:row2:col1 |  |
| CL/F AQ (L/h) | `Q27` · CL/F | 2250 | L/h | 0.000625 | m3/s | l/h | llm_confirmed (0.6) | Ding_2026_table_3:row4:col1 |  |
| Q/F AQ (L/h) | `Q69` · Q/F | 3020 | L/h | 0.0008389 | m3/s | l/h | llm_confirmed (0.6) | Ding_2026_table_3:row6:col1 |  |
| CL/F DEAQ (L/h) | `Q27` · CL/F | 32.2 | L/h | 8.944e-06 | m3/s | l/h | exact (1) | Ding_2026_table_3:row10:col1 |  |
| VC/F DEAQ (L) | `Q290` · V1/F | 1260 | L | 1.26 | m3 | l | exact (1) | Ding_2026_table_3:row11:col1 |  |
| Q1/F DEAQ (L/h) | `Q69` · Q/F | 117 | L/h | 3.25e-05 | m3/s | l/h | exact (1) | Ding_2026_table_3:row12:col1 |  |
| Vp1/F DEAQ (L) | `Q82` · V2/F | 1640 | L | 1.64 | m3 | l | exact (1) | Ding_2026_table_3:row13:col1 |  |
| Q2/F DEAQ (L/h) | `Q80` · Q2/F | 37.3 | L/h | 1.036e-05 | m3/s | l/h | special_case (0.95) | Ding_2026_table_3:row14:col1 |  |
| Vp2/F DEAQ (L) | `Q78` · V3/F | 6440 | L | 6.44 | m3 | l | exact (1) | Ding_2026_table_3:row15:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'Mean transit time (h)' routed out of structural estimates ('CV for IIV/ISV')
- table section iiv: 'VC,/F LF (L)' routed out of structural estimates ('CV for IIV/ISV')
- table section iiv: 'CL/F DLF (L/h)' routed out of structural estimates ('CV for IIV/ISV')
- table section iiv: 'VC/F DLF (L)' routed out of structural estimates ('CV for IIV/ISV')
- table section iiv: 'CL/F ARM (L/h)' routed out of structural estimates ('CV for IIV/IOV')
- table section iiv: 'CL/F DHA (L/h)' routed out of structural estimates ('CV for IIV/IOV')
- table section iiv: 'CL/F AQ (L/h)' routed out of structural estimates ('CV for IIV/IOV')
- table section iiv: 'CL/F DEAQ (L/h)' routed out of structural estimates ('CV for IIV/IOV')
- table section iiv: 'VC/F DEAQ (L)' routed out of structural estimates ('CV for IIV/IOV')
- column 'nonmem' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'LF' (n_transit)
- dropped unlinked row (NIL): 'Baseline parasite density on F (%)' — extend the ontology if this is a real PK parameter (source ['bcp70301-tbl-0004:row18:col1'])
- dropped unlinked row (NIL): 'Dose (mg/kg) on F' — extend the ontology if this is a real PK parameter (source ['bcp70301-tbl-0004:row19:col1'])
- dropped unlinked row (NIL): 'Baseline temperature on F (%)' — extend the ontology if this is a real PK parameter (source ['bcp70301-tbl-0004:row20:col1'])
- dropped duplicate Q290 ('Study effect (TACT) on VC/F LF (%)', value '-28.1') — already have one for this compound
- dropped unlinked row (NIL): 'Age on CL/F DLF (year)' — extend the ontology if this is a real PK parameter (source ['bcp70301-tbl-0004:row22:col1'])
- dropped unlinked row (NIL): 'Time dependency on CL' — extend the ontology if this is a real PK parameter (source ['Ding_2026_table_2:row9:col1'])
- dropped value-less row: 'TABLE 4. Final parameter estimates of lumefantrine and desbutyl‐lumefantrine population pharmacokinetics in patients with uncomplicated P. falciparum, pooled from the TRACII study (n = 575) and TACT‐CV study (n = 310).'
- dropped value-less row: 'Note: Population estimates are given for a “typical” adult patient weighing 45 kg with baseline parasite density of 104.56 and temperature of 37.5 °C, receiving 9.8 mg/kg dose of lumefantrine.'
- implicit units: 'Ka' → 1/h (from the popPK convention: 'No unit stated in text or table caption for the absorption rate constant; first-order rate constants in population PK ar')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lumefantrine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 3 first-order transfer(s) across 6 compounds → general_linear
- template fit: none — 3 metabolites — the templates hold two
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 39/39 row label(s) assigned, 40 linked by role; re-tagged parent→lumefantrine ×25, parent→desbutyllumefantrine ×8, parent→artemether ×9, parent→dihydroartemisinin ×7, parent→amodiaquine ×8, parent→desethylamodiaquine ×13
- molar mass: none of 6 PubChem candidate(s) is 'dihydroartemisinin' (LLM) — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'desethylamodiaquine' (LLM) — left in mass units
- molar mass: none found for 'dihydroartemisinin' — its concentrations stay mass-only
- molar mass: none found for 'desethylamodiaquine' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell bcp70301-tbl-0004:row3:col2 = '5.56 (5.00–6.25)'
- unparsed cell bcp70301-tbl-0004:row3:col4 = '58.5 (49.5–72.0)'
- unparsed cell bcp70301-tbl-0004:row5:col3 = '57.0 (12.3) /13.3 (19.1)'
- unparsed cell bcp70301-tbl-0004:row5:col4 = '56.9 (49.5–64.9)/ 13.3 (10.3–15.5)'
- unparsed cell bcp70301-tbl-0004:row5:col5 = '44.6/24.3'
- unparsed cell bcp70301-tbl-0004:row6:col2 = '4.35 (4.04–4.61)'
- unparsed cell bcp70301-tbl-0004:row7:col2 = '101 (88.0–121)'
- unparsed cell bcp70301-tbl-0004:row7:col4 = '89.3 (71.2–103)'
- unparsed cell bcp70301-tbl-0004:row8:col2 = '1.66 (1.45–1.83)'
- unparsed cell bcp70301-tbl-0004:row9:col2 = '311 (275–343)'
- unparsed cell bcp70301-tbl-0004:row10:col2 = '0.304 (0.270–0.344)'
- unparsed cell bcp70301-tbl-0004:row12:col2 = '721 (677–775)'
- unparsed cell bcp70301-tbl-0004:row12:col4 = '15.0 (11.5–18.7)'
- unparsed cell bcp70301-tbl-0004:row13:col2 = '8580 (7170‐10 500)'
- unparsed cell bcp70301-tbl-0004:row13:col4 = '97.5 (77.1–122)'
- unparsed cell bcp70301-tbl-0004:row14:col2 = '1050 (879–1200)'
- unparsed cell bcp70301-tbl-0004:row16:col2 = '0.177 (0.160–0.199)'
- unparsed cell bcp70301-tbl-0004:row18:col2 = '−11.6 (−18.0 to −5.6)'
- unparsed cell bcp70301-tbl-0004:row19:col2 = '−6.54 (−8.50 to −4.82)'
- unparsed cell bcp70301-tbl-0004:row20:col2 = '−12.4 (−16.2 to −8.43)'
- unparsed cell bcp70301-tbl-0004:row21:col2 = '−27.7 (−36.3 to −20.0)'
- unparsed cell bcp70301-tbl-0004:row22:col2 = '9.8 (8.1–11.7)'
- unparsed cell Ding_2026_table_2:row2:col2 = '1.55 (1.33–1.77)'
- unparsed cell Ding_2026_table_2:row2:col3 = 'IOV 54.4 (16.3)'
- unparsed cell Ding_2026_table_2:row2:col4 = '54.2 (46.5–65.7)'
- unparsed cell Ding_2026_table_2:row4:col3 = 'IOV 31.6 (22.9)'
- unparsed cell Ding_2026_table_2:row4:col4 = '31.7 (24.7–39.6)'
- unparsed cell Ding_2026_table_2:row5:col2 = '79.2 (71.4–86.6)'
- unparsed cell Ding_2026_table_2:row5:col4 = '21.5 (16.1–27.7)'
- unparsed cell Ding_2026_table_2:row6:col2 = '140 (122–161)'
- unparsed cell Ding_2026_table_2:row7:col2 = '21.5 (18.2–26.1)'
- unparsed cell Ding_2026_table_2:row8:col2 = '279 (203–446)'
- unparsed cell Ding_2026_table_2:row9:col2 = '0.546 (0.387–0.736)'
- unparsed cell Ding_2026_table_2:row10:col2 = '0.230 (0.198–0.265)'
- unparsed cell Ding_2026_table_2:row12:col2 = '254 (229–288)'
- unparsed cell Ding_2026_table_2:row12:col4 = '42.2 (33.4–52.0)'
- unparsed cell Ding_2026_table_2:row13:col2 = '64.3 (44.7–82.7)'
- unparsed cell Ding_2026_table_2:row14:col2 = '0.261 (0.226–0.306)'
- companion parameter table 2 transcribed (20 record(s), model stage 'final')
- unparsed cell Ding_2026_table_3:row2:col2 = '1.92 (1.4–2.91)'
- unparsed cell Ding_2026_table_3:row2:col3 = 'IOV: 254 (29.8)'
- unparsed cell Ding_2026_table_3:row2:col4 = '261 (157–560)'
- unparsed cell Ding_2026_table_3:row3:col3 = 'IOV: 27.5 (15.1)'
- unparsed cell Ding_2026_table_3:row3:col4 = '27.5 (23.2–31.3)'
- unparsed cell Ding_2026_table_3:row4:col2 = '2250 (2120‐2390)'
- unparsed cell Ding_2026_table_3:row4:col4 = '11.8 (7.0–15.4)'
- unparsed cell Ding_2026_table_3:row6:col2 = '3010 (2640‐3540)'
- unparsed cell Ding_2026_table_3:row8:col2 = '0.0676 (0.0561–0.0827)'
- unparsed cell Ding_2026_table_3:row10:col2 = '32.3 (30.1–34.4)'
- unparsed cell Ding_2026_table_3:row10:col4 = '30.7 (24.0–37.5)'
- unparsed cell Ding_2026_table_3:row11:col2 = '1260 (1090‐1500)'
- unparsed cell Ding_2026_table_3:row11:col4 = '42.3 (28.2–57.1)'
- unparsed cell Ding_2026_table_3:row12:col2 = '118 (82.7–161)'
- unparsed cell Ding_2026_table_3:row13:col2 = '1630 (1300‐2250)'
- unparsed cell Ding_2026_table_3:row14:col2 = '37.5 (29.6–45.7)'
- unparsed cell Ding_2026_table_3:row15:col2 = '6420 (5570‐7590)'
- companion parameter table 3 transcribed (23 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.435 (20/46 fields) | 26 |

<details><summary>26 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['lumefantrine', 'desbutyllumefantrine', 'metabolism'], ['artemether', 'dihydroartemisinin', 'metabolism'], ['amodiaquine', 'desethylamodiaquine', 'metabolism']] | [['artemether', 'dihydroartemisinin', 'metabolism'], ['lumefantrine', 'desbutyllumefantrine', 'metabolism'], ['amodiaquine', 'desethylamodiaquine', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f aq].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f arm].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f deaq].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f dha].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f dlf].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f lf]` |  | 4.35 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f lf]` | 4.35 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 1.93 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 1.93 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean transit time]` |  | 5.43 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean transit time]` | 5.43 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[number of transit compartments]` |  | 5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[number of transit compartments]` | 5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f lf]` |  | 1.65 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f lf]` | 1.65 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_age]` |  | 10.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[time dependency on cl]` |  | 0.551 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc,/f lf]` |  | 101 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc,/f lf]` | 101 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp,/f lf]` |  | 311 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp,/f lf]` | 311 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f arm].parameter_id` | Q78 | Q82 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | artemether-lumefantrine plus amodiaquine | lumefantrine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 25 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 17.7 | 16.09 | 0.9093 | 0.25 | reported t½β |
| C2_base_Q40 | fail | 1 | 79.3 | 79.3 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['bcp70301-tbl-0004:row6:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['bcp70301-tbl-0004:row12:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['Ding_2026_table_2:row5:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['Ding_2026_table_2:row12:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['Ding_2026_table_3:row4:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['Ding_2026_table_3:row10:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  |  |  | ['bcp70301-tbl-0004:row7:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  |  |  | ['bcp70301-tbl-0004:row13:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  |  |  | ['Ding_2026_table_2:row6:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  |  |  | ['Ding_2026_table_2:row13:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  |  |  | ['Ding_2026_table_3:row11:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Ding_2026_table_3:row2:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  |  |  | ['bcp70301-tbl-0004:row8:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  |  |  | ['bcp70301-tbl-0004:row14:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  |  |  | ['Ding_2026_table_2:row7:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  |  |  | ['Ding_2026_table_3:row6:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  |  |  | ['Ding_2026_table_3:row12:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  |  |  | ['Ding_2026_table_2:row8:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  |  |  | ['Ding_2026_table_3:row15:col1'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] |  |  |  | ['Ding_2026_table_3:row14:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  |  |  | ['bcp70301-tbl-0004:row9:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  |  |  | ['Ding_2026_table_3:row13:col1'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 4.35 L/h |  |  | ['bcp70301-tbl-0004:row6:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 744 L/h |  |  | ['bcp70301-tbl-0004:row12:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 79.3 L/h |  |  | ['Ding_2026_table_2:row5:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 255 L/h |  |  | ['Ding_2026_table_2:row12:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.25e+03 L/h |  |  | ['Ding_2026_table_3:row4:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 32.2 L/h |  |  | ['Ding_2026_table_3:row10:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 101 L |  |  | ['bcp70301-tbl-0004:row7:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 8.53e+03 L |  |  | ['bcp70301-tbl-0004:row13:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 141 L |  |  | ['Ding_2026_table_2:row6:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 64.1 L |  |  | ['Ding_2026_table_2:row13:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.26e+03 L |  |  | ['Ding_2026_table_3:row11:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 311 L |  |  | ['bcp70301-tbl-0004:row9:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.64e+03 L |  |  | ['Ding_2026_table_3:row13:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | fail | 20 scholar param(s) emitted or defaulted | 12 covered | neither emitted nor in defaulted[]: ['V1/F', 'V2/F', 'V1/F', 'V1/F', 'V1/F', 'kabs', 'V1/F', 'V2/F'] |
| T3_shared_parameters |  | pass | 9 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template |  | pass | general_linear → PK_General_Linear* | PK_General_Linear | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.94 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.85 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 0.82 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 12.7 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 17.7 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 187 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 139 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_lumefantrine/Lumefantrine_Ding2026_reference/Lumefantrine_Ding2026_reference_modelica.zip" download>Lumefantrine_Ding2026_reference_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_lumefantrine/Lumefantrine_Ding2026_reference/Lumefantrine_Ding2026_reference_matlab.zip" download>Lumefantrine_Ding2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_lumefantrine/Lumefantrine_Ding2026_reference/Lumefantrine_Ding2026_reference_matlab_simbio.zip" download>Lumefantrine_Ding2026_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_lumefantrine/Lumefantrine_Ding2026_reference/Lumefantrine_Ding2026_reference_sbml.zip" download>Lumefantrine_Ding2026_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_lumefantrine/Lumefantrine_Ding2026_reference/Lumefantrine_Ding2026_reference_cellml.zip" download>Lumefantrine_Ding2026_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Ding J, Hoglund RM, van der Pluijm RW, Callery JJ, Peto TJ, Tripura R et al. Population pharmacokinetics of artemether-lumefantrine plus amodiaquine in patients with uncomplicated Plasmodium falciparum malaria. British journal of clinical pharmacology 92(2):589–605 (2026). [doi:10.1002/bcp.70301](https://doi.org/10.1002/bcp.70301)

**This record:** Pharmacolibrary v26.09, model `Lumefantrine_Ding2026_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_lumefantrine/Lumefantrine_Ding2026_reference>

```bibtex
@misc{pharmacolibrary_LumefantrineDing2026reference,
  title  = {{Pharmacolibrary model Lumefantrine_Ding2026_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_lumefantrine/Lumefantrine_Ding2026_reference},
  note   = {Parameters from doi:10.1002/bcp.70301},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blumefantrine%5D%20Lumefantrine_Ding2026_reference&body=Drug%3A%20lumefantrine%0ARecord%3A%20Lumefantrine_Ding2026_reference%0APaper%3A%20Ding_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lumefantrine/Lumefantrine_Ding2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:11 UTC</sub>
