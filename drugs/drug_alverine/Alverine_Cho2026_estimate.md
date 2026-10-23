<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;alverine&quot;,&quot;href&quot;:&quot;drugs/drug_alverine/&quot;},{&quot;label&quot;:&quot;Cho_2026 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alverine — `Alverine_Cho2026_estimate`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span>

> Rejected because the alverine mouse model's clearance/volume values fall outside the physiological window, indicating a unit or scale extraction error (e.g., CL 0.512 L/h, V1 0.443 L, V2 0.29 L).

<div class="pk-model-meta" hidden drug="alverine" model-id="Alverine_Cho2026_estimate" status="rejected" stale="false" population="mice" measured-compound="alverine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Cho A, Jeong HC, Kim M, Cho I, Na HJ, Ko KC et al. Development of Integrated Parent-Metabolite Pharmacokinetic Model With Apparent Presystemic Metabolism to Characterize the Disposition of Alverine. CPT: pharmacometrics & systems pharmacology 15(9):e70342 (2026).
  ·  DOI: [10.1002/psp4.70342](https://doi.org/10.1002/psp4.70342)

## Population and dosing

**Population:** mice · condition healthy.

**Dosing:** 350, 5250 mg, iv, oral, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 18 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL | CL | 0.512 | L/h |
| kp,total ‡ | Kp | 1.156 |  |
| Vp1 | V1 | 0.443 | L |
| Vp2 | V2 | 0.29 | L |
| Q | Q | 0.372 | L/h |
| km1 | kfm | 0.582 | 1/h |
| km3 ‡ | kfm | 1.131 | 1/h |
| ka † | kabs | 6.9 | 1/h |
| kam1 | kabs | 2.183 | 1/h |
| kam3 | kabs | 823.25 | 1/h |
| fm1 ‡ | fm | 0.92 |  |
| fm3 | fm | 0.0399 |  |
| Vm1 | V | 47.905 | L |
| km2 ‡ | kfm | 1.064 | 1/h |
| km1,total | kel | 1.064 | 1/h |
| km2,total | kel | 1874.08 | 1/h |
| Vm3 | V | 2.287 | L |
| km3,total | kel | 1.683 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.773). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected because the alverine mouse model's clearance/volume values fall outside the physiological window, indicating a unit or scale extraction error (e.g., CL 0.512 L/h, V1 0.443 L, V2 0.29 L).**

The record for alverine in mice lists CL = 0.512 L/h, V1 = 0.443 L, V2 = 0.29 L and Q = 0.372 L/h, which the review judged physiologically implausible in magnitude, consistent with a unit or scale extraction error. Implausible metabolite values also appear, such as an M2 elimination rate constant of 1874.08 1/h and an M3 absorption rate constant of 823.25 1/h. A second reader disagreed on the dose compound and primary analyte (alverine) and left the values 2.183, 1.064 and 823.25 for kam1, km1,total and kam3 unconfirmed (null). Extracted — alverine: CL 0.512 L/h, Kp 1.16, V1 0.443 L, V2 0.29 L, Q 0.372 L/h, kabs 6.9 1/h; M1: kfm 0.582 1/h, kabs 2.18 1/h, fm 0.92, V 47.9 L, kel 1.06 1/h; M3: kfm 1.13 1/h, kabs 823 1/h, fm 0.0399, V 2.29 L, kel 1.68 1/h; M2: kfm 1.06 1/h, kel 1.87e+03 1/h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has alverine, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 0.512 | L/h | 1.422e-07 | m3/s | L/h | exact (1) | psp470342-tbl-0003:row2:col2 |
| kp,total ‡ | `Q410` · Kp | 1.156 |  |  |  |  | llm_confirmed (0.6) | psp470342-tbl-0003:row3:col2 |
| Vp1 | `Q63` · V1 | 0.443 | L | 0.000443 | m3 | L | exact (1) | psp470342-tbl-0003:row4:col2 |
| Vp2 | `Q64` · V2 | 0.29 | L | 0.00029 | m3 | L | exact (1) | psp470342-tbl-0003:row5:col2 |
| Q | `Q30` · Q | 0.372 | L/h | 1.033e-07 | m3/s | L/h | exact (1) | psp470342-tbl-0003:row6:col2 |
| km1 | `Q305` · kfm | 0.582 | 1/h | 0.0001617 | 1/s | 1/h | exact (1) | psp470342-tbl-0003:row9:col2 |
| km3 ‡ | `Q305` · kfm | 1.131 | 1/h | 0.0003142 | 1/s | 1/h | exact (1) | psp470342-tbl-0003:row10:col2 |
| ka † | `Q49` · kabs | 6.9 | 1/h | 0.001917 | 1/s | 1/h | exact (1) | psp470342-tbl-0003:row12:col2 |
| kam1 | `Q49` · kabs | 2.183 | 1/h | 0.0006064 | 1/s | 1/h | exact (1) | psp470342-tbl-0003:row13:col2 |
| kam3 | `Q49` · kabs | 823.25 | 1/h | 0.2287 | 1/s | 1/h | exact (1) | psp470342-tbl-0003:row14:col2 |
| fm1 ‡ | `Q45` · fm | 0.92 |  |  |  |  | special_case (0.95) | psp470342-tbl-0003:row16:col2 |
| fm3 | `Q45` · fm | 0.0399 |  |  |  |  | special_case (0.95) | psp470342-tbl-0003:row17:col2 |
| Vm1 | `Q61` · V | 47.905 | L | 0.04791 | m3 | L | exact (1) | psp470342-tbl-0003:row19:col2 |
| km2 ‡ | `Q305` · kfm | 1.064 | 1/h | 0.0002956 | 1/s | 1/h | exact (1) | psp470342-tbl-0003:row21:col2 |
| km1,total | `Q47` · kel | 1.064 | 1/h | 0.0002956 | 1/s | 1/h | exact (1) | psp470342-tbl-0003:row22:col2 |
| km2,total | `Q47` · kel | 1874.08 | 1/h | 0.5206 | 1/s | 1/h | exact (1) | psp470342-tbl-0003:row25:col2 |
| Vm3 | `Q61` · V | 2.287 | L | 0.002287 | m3 | L | exact (1) | psp470342-tbl-0003:row27:col2 |
| km3,total | `Q47` · kel | 1.683 | 1/h | 0.0004675 | 1/s | 1/h | exact (1) | psp470342-tbl-0003:row28:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q410 ('kp', value '0.0249') — already have one for this compound
- dropped unlinked row (NIL): 'fp †' — extend the ontology if this is a real PK parameter (source ['psp470342-tbl-0003:row15:col2'])
- implicit units: 'CL' → L/h (from the popPK convention: 'Clearance (CL) is conventionally expressed in L/h in population PK models. The value 0.512 is consistent with this unit ')
- implicit units: 'Vp1' → L (from the popPK convention: 'Volume of distribution (Vp1) is conventionally expressed in L. The value 0.443 is consistent with a central volume in a ')
- implicit units: 'Vp2' → L (from the popPK convention: 'Volume of distribution (Vp2) is conventionally expressed in L. The value 0.29 is consistent with a peripheral volume in ')
- implicit units: 'Q' → L/h (from the popPK convention: 'Intercompartmental clearance (Q) is conventionally expressed in L/h. The value 0.372 is consistent with this unit.')
- implicit units: 'km1' → 1/h (from the popPK convention: 'First-order rate constant (km1) is conventionally expressed in 1/h. The value 0.582 is consistent with this unit.')
- implicit units: 'km3 ‡' → 1/h (from the popPK convention: 'First-order rate constant (km3) is conventionally expressed in 1/h. The value 1.131 is consistent with this unit.')
- implicit units: 'ka †' → 1/h (from the popPK convention: 'Absorption rate constant (ka) is conventionally expressed in 1/h. The value 6.9 is consistent with this unit.')
- implicit units: 'kam1' → 1/h (from the popPK convention: 'Absorption rate constant (kam1) is conventionally expressed in 1/h. The value 2.183 is consistent with this unit.')
- implicit units: 'kam3' → 1/h (from the popPK convention: 'Absorption rate constant (kam3) is conventionally expressed in 1/h. The value 823.25 is consistent with this unit, indic')
- implicit units: 'Vm1' → L (from the popPK convention: 'Apparent distribution volume (Vm1) is conventionally expressed in L. The value 47.905 is consistent with this unit.')
- implicit units: 'km2 ‡' → 1/h (from the popPK convention: 'First-order rate constant (km2) is conventionally expressed in 1/h. The value 1.064 is consistent with this unit.')
- implicit units: 'km1,total' → 1/h (from the popPK convention: 'Elimination rate constant (km1,total) is conventionally expressed in 1/h. The value 1.064 is consistent with this unit.')
- implicit units: 'km2,total' → 1/h (from the popPK convention: 'Elimination rate constant (km2,total) is conventionally expressed in 1/h. The value 1874.08 is consistent with this unit')
- implicit units: 'Vm3' → L (from the popPK convention: 'Apparent distribution volume (Vm3) is conventionally expressed in L. The value 2.287 is consistent with this unit.')
- implicit units: 'km3,total' → 1/h (from the popPK convention: 'Elimination rate constant (km3,total) is conventionally expressed in 1/h. The value 1.683 is consistent with this unit.')
- metabolite volume: 'Vm1' Q63→Q61 for M1 — it is 1-compartment, so its central volume is its only volume
- metabolite volume: 'Vm3' Q63→Q61 for M3 — it is 1-compartment, so its central volume is its only volume
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL); Q63 (Vp1); Q64 (Vp2); Q30 (Q); Q61 (Vm1); Q61 (Vm3)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alverine
- topology: 3 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — 3 metabolites — the templates hold two (site hepatic: 'Beyond PBPK modeling, semi‐physiological population PK approaches have incorporated presystemic metabolite formation usi')
- population split: 'estimate' subgroup of Cho_2026 (paper reports 7 populations: estimate, m1, m1 (4‐hydroxy alverine), m2 (4‐hydroxy alverine glucuronide), m3 (n‐desethyl alverine), parent (alverine), po)
- row roles (LLM): model_class=compartmental; 32/32 row label(s) assigned, 43 linked by role; re-tagged parent→M1 ×11, parent→M3 ×10, parent→M2 ×5, M1→parent ×3, M2→parent ×5, M3→parent ×3
- molar mass: no plausible PubChem entry for 'M3' ('N-desethyl alverine') — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'M2' (LLM) — left in mass units
- molar mass: none found for 'M2' — its concentrations stay mass-only
- molar mass: none found for 'M3' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell psp470342-tbl-0003:row3:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row8:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row9:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row10:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row12:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row13:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row14:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row14:col3 = '8.82×103'
- unparsed cell psp470342-tbl-0003:row21:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row22:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row24:col2 = '8.1 × 10−5'
- unparsed cell psp470342-tbl-0003:row24:col4 = '5.5E‐05–0.00012'
- unparsed cell psp470342-tbl-0003:row25:col1 = 'h−1'
- unparsed cell psp470342-tbl-0003:row28:col1 = 'h−1'
- transposed table Cho_2026_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 1 transcribed (42 record(s))
- companion parameter table S2 transcribed (3 record(s))
- LLM selected parameter table(s) 1, 3, S2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.773 (17/22 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[kam1]` | 2.183 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[kam3]` | 823.25 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[km1,total]` | 1.064 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | alverine | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | alverine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 18 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp470342-tbl-0003:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp470342-tbl-0003:row6:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['psp470342-tbl-0003:row9:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['psp470342-tbl-0003:row10:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['psp470342-tbl-0003:row21:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['psp470342-tbl-0003:row22:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['psp470342-tbl-0003:row25:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['psp470342-tbl-0003:row28:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp470342-tbl-0003:row12:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp470342-tbl-0003:row13:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp470342-tbl-0003:row14:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['psp470342-tbl-0003:row19:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['psp470342-tbl-0003:row27:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp470342-tbl-0003:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp470342-tbl-0003:row5:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.512 | ['psp470342-tbl-0003:row2:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.512 L/h | ['psp470342-tbl-0003:row2:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 47.9 L | ['psp470342-tbl-0003:row19:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.29 L | ['psp470342-tbl-0003:row27:col2'] |
| C9_phys_window_Q63 | fail | volume within physiological range | 0.443 L | ['psp470342-tbl-0003:row4:col2'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.29 L | ['psp470342-tbl-0003:row5:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balverine%5D%20Alverine_Cho2026_estimate&body=Drug%3A%20alverine%0ARecord%3A%20Alverine_Cho2026_estimate%0APaper%3A%20Cho_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_alverine/Alverine_Cho2026_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 12:23 UTC</sub>
