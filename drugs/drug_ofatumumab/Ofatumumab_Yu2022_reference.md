<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;ofatumumab&quot;,&quot;href&quot;:&quot;drugs/drug_ofatumumab/&quot;},{&quot;label&quot;:&quot;Yu_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ofatumumab_Struemper2014_reference&quot;,&quot;label&quot;:&quot;Struemper_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ofatumumab/Ofatumumab_Struemper2014_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ofatumumab — `Ofatumumab_Yu2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The elimination rate constant's unit, Vc,lwt70, is not a standard pharmacokinetic unit, causing a dimension mismatch that rejected the record.

<div class="pk-model-meta" hidden drug="ofatumumab" model-id="Ofatumumab_Yu2022_reference" status="rejected" stale="false" population="adults with relapsing multiple sclerosis" measured-compound="ofatumumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Yu H, Graham G, David OJ, Kahn JM, Savelieva M, Pigeolet E et al. Population Pharmacokinetic-B Cell Modeling for Ofatumumab in Patients with Relapsing Multiple Sclerosis. CNS drugs 36(3):283–300 (2022).
  ·  DOI: [10.1007/s40263-021-00895-w](https://doi.org/10.1007/s40263-021-00895-w)

## Population and dosing

**Population:** adults with relapsing multiple sclerosis · condition relapsing multiple sclerosis · age group adult.

**Dosing:** 20 mg, sc, multiple, every 288 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| ka (day−1) | kabs | 0.157 | day−1 | 5.80 | 0.652 (None% RSE) |
| F (–) | Fab | 0.685 |  | 3.10 | 0.531 (None% RSE) |
| Vc (L) | V1 | 2.62 | L | 2.11 | 0.116 (None% RSE) |
| β(Vc,lwt70) | kel | 1.2 | Vc,lwt70 | 8.66 | 1.14 (None% RSE) |
| CL (L/day) | CL | 0.34 | L/day | 2.99 | 0.486 (None% RSE) |
| Q (L/day) | Q | 0.358 | L/day | 10.9 | 0.705 (None% RSE) |
| Vp (L) | V2 | 2.8 | L |  |  |
| KD (nmol/L) | KD | 0.167 | nmol/L |  |  |
| koff (day−1) | koff | 5.53 | day−1 |  |  |
| QB (L/day) | Qb | 0.78 | L/day |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.913). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The elimination rate constant's unit, Vc,lwt70, is not a standard pharmacokinetic unit, causing a dimension mismatch that rejected the record.**

The parameter labeled as the elimination rate constant has a value of 1.2 with the unit Vc,lwt70, which is not a recognized rate unit. This non-standard unit prevented conversion to SI, leading to a dimension mismatch on a structural parameter. Additionally, the second reader identified missing parameters for additive concentration and blood volume that were not present in the record. Extracted — ofatumumab: kabs 0.157 day−1, Fab 0.685, V1 2.62 L, kel 1.2 Vc,lwt70, CL 0.34 L/day, Q 0.358 L/day, V2 2.8 L, KD 0.167 nmol/L, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of ofatumumab conc. additive: this record has none, the second reading 0.0316; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (day−1) | `Q49` · kabs | 0.157 | day−1 | 1.817e-06 | 1/s | 1/d | 5.80 | exact (1) | Tab3:row2:col1, Tab3:row2:col2 | 0.652 (None% RSE) |
| F (–) | `Q40` · Fab | 0.685 |  |  |  |  | 3.10 | exact (1) | Tab3:row4:col1, Tab3:row4:col2 | 0.531 (None% RSE) |
| Vc (L) | `Q63` · V1 | 2.62 | L | 0.00262 | m3 | l | 2.11 | exact (1) | Tab3:row5:col1, Tab3:row5:col2 | 0.116 (None% RSE) |
| β(Vc,lwt70) | `Q47` · kel | 1.2 | Vc,lwt70 |  |  | vc | 8.66 | exact (1) | Tab3:row6:col1, Tab3:row6:col2 | 1.14 (None% RSE) |
| CL (L/day) | `Q22` · CL | 0.34 | L/day | 3.935e-09 | m3/s | l/d | 2.99 | exact (1) | Tab3:row14:col1, Tab3:row14:col2 | 0.486 (None% RSE) |
| Q (L/day) | `Q30` · Q | 0.358 | L/day | 4.144e-09 | m3/s | l/d | 10.9 | exact (1) | Tab3:row17:col1, Tab3:row17:col2 | 0.705 (None% RSE) |
| Vp (L) | `Q64` · V2 | 2.8 | L | 0.0028 | m3 | l |  | exact (1) | Tab3:row19:col1 |  |
| KD (nmol/L) | `Q331` · KD | 0.167 | nmol/L |  |  | nM/l |  | exact (1) | Tab3:row20:col1 |  |
| koff (day−1) | `Q330` · koff | 5.53 | day−1 | 6.4e-05 | 1/s | 1/d |  | exact (1) | Tab3:row21:col1 |  |
| QB (L/day) | `Q54` · Qb | 0.78 | L/day | 9.028e-09 | m3/s | l/d |  | exact (1) | Tab3:row36:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ka (day−1)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'F (–)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'Vc (L)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ke(P) (days−1)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ksyn0 (nmol/L/day)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'R0 (nmol/L)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'CL (L/day)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'Q (L/day)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'kdes (year−1)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ksyn∞ (nmol/L/day)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'B0 (cells/µL)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'Emax (–)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'EC50 (mg/L)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'Gamma (–)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'kout (day−1)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'Vb (L)' routed out of structural estimates ('Inter-individual variability')
- dropped value-less row: 'β(ka,lwt70)' (captured trailing unit 'ka,lwt70' for child rows)
- unit_dimension_unknown: 'Vc,lwt70' (kel)
- dropped duplicate Q47 ('ke(P) (days−1)', value '1.31') — already have one for this compound
- unit 'ka,lwt70' inherited from a section-header row for kel (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- unit_dimension_unknown: 'ka,lwt70' (kel)
- dropped duplicate Q47 ('β(ke(P),AI)', value '0.713') — already have one for this compound
- dropped PD-category row 'ksyn0 (nmol/L/day)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row9:col1', 'Tab3:row9:col2'])
- dropped value-less row: 'β(ksyn0,lwt70)' (captured trailing unit 'ksyn0,lwt70' for child rows)
- dropped PD-category row 'R0 (nmol/L)' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row11:col1', 'Tab3:row11:col2'])
- dropped value-less row: 'β(R0,AI)' (captured trailing unit 'R0,AI' for child rows)
- unit_dimension_unknown: 'R0,IV' (kel)
- dropped duplicate Q47 ('β(R0,IV)', value '0.987') — already have one for this compound
- unit_dimension_unknown: 'CL,lwt70' (kel)
- dropped duplicate Q47 ('β(CL,lwt70)', value '1.52') — already have one for this compound
- dropped value-less row: 'β(CL,IV)' (captured trailing unit 'CL,IV' for child rows)
- unit_dimension_mismatch: 'KD (nmol/L)' → Q331 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q47 ('kdes (year−1)', value '2.58') — already have one for this compound
- dropped unlinked row (NIL): 'ksyn∞ (nmol/L/day)' — extend the ontology if this is a real PK parameter (source ['Tab3:row23:col1', 'Tab3:row23:col2'])
- unit_dimension_unknown: 'ksyn∞,IV' (kel)
- dropped duplicate Q47 ('β(ksyn∞,IV)', value '2.49') — already have one for this compound
- dropped unlinked row (NIL): 'B0 (cells/µL)' — extend the ontology if this is a real PK parameter (source ['Tab3:row25:col1', 'Tab3:row25:col2'])
- dropped value-less row: 'β(B0,lage38)' (captured trailing unit 'B0,lage38' for child rows)
- unit_dimension_unknown: 'B0,lwt70' (kel)
- dropped duplicate Q47 ('β(B0,lwt70)', value '0.271') — already have one for this compound
- dropped PD-category row 'Emax (–)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row28:col1', 'Tab3:row28:col2'])
- unit_dimension_unknown: 'Emax,lBc200' (kel)
- dropped duplicate Q47 ('β(Emax,lBc200)', value '0.275') — already have one for this compound
- unit_dimension_unknown: 'Emax,APLIOS' (kel)
- dropped duplicate Q47 ('β(Emax,APLIOS)', value '0.503') — already have one for this compound
- dropped PD-category row 'EC50 (mg/L)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row31:col1', 'Tab3:row31:col2'])
- dropped PD-category row 'Gamma (–)' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row32:col1', 'Tab3:row32:col2'])
- dropped PD-category row 'kout (day−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row33:col1', 'Tab3:row33:col2'])
- dropped value-less row: 'β(kout,lwt70)' (captured trailing unit 'kout,lwt70' for child rows)
- dropped value-less row: 'β(kout,MIRROR)' (captured trailing unit 'kout,MIRROR' for child rows)
- unit_dimension_mismatch: 'Vb (L)' → Q54 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q54 ('Vb (L)', value '3.7') — already have one for this compound
- dropped unlinked row (NIL): 'Corr_Vb_Emax' — extend the ontology if this is a real PK parameter (source ['Tab3:row38:col1', 'Tab3:row38:col2'])
- dropped PD-category row 'Corr_kout_Vb' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row39:col2', 'Tab3:row40:col1', 'Tab3:row40:col2'])
- dropped value-less row: 'Corr_ka_CL'
- dropped unlinked row (NIL): 'Corr_kdes_CL' — extend the ontology if this is a real PK parameter (source ['Tab3:row42:col1', 'Tab3:row42:col2'])
- dropped unlinked row (NIL): 'Corr_kdes_ka' — extend the ontology if this is a real PK parameter (source ['Tab3:row43:col1', 'Tab3:row43:col2'])
- dropped value-less row: 'Corr_ke(P)_R0'
- dropped unlinked row (NIL): 'Corr_ksyn∞_R0' — extend the ontology if this is a real PK parameter (source ['Tab3:row45:col1', 'Tab3:row45:col2'])
- dropped value-less row: 'Corr_ksyn∞_ke(P)' (captured trailing unit 'P' for child rows)
- dropped unlinked row (NIL): 'Ofatumumab conc. additive (mg/L)' — extend the ontology if this is a real PK parameter (source ['Tab3:row47:col1', 'Tab3:row47:col2'])
- dropped unlinked row (NIL): 'Ofatumumab conc. proportional' — extend the ontology if this is a real PK parameter (source ['Tab3:row48:col1', 'Tab3:row48:col2'])
- dropped unlinked row (NIL): 'B cell count additive (cells/µL)' — extend the ontology if this is a real PK parameter (source ['Tab3:row49:col1'])
- dropped unlinked row (NIL): 'B cell count proportional' — extend the ontology if this is a real PK parameter (source ['Tab3:row50:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ofatumumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'ofatumumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab3:row2:col4 = '3.95 [52]'
- unparsed cell Tab3:row3:col1 = '− 0.457'
- unparsed cell Tab3:row4:col4 = '9.00 [72]'
- unparsed cell Tab3:row5:col4 = '19.3 [NA]'
- unparsed cell Tab3:row7:col4 = '5.10 [65]'
- unparsed cell Tab3:row9:col4 = '64.1 [99]'
- unparsed cell Tab3:row10:col1 = '− 1.52'
- unparsed cell Tab3:row11:col4 = '4.66 [61]'
- unparsed cell Tab3:row12:col1 = '− 0.544'
- unparsed cell Tab3:row14:col4 = '4.66 [53]'
- unparsed cell Tab3:row16:col1 = '− 1.07'
- unparsed cell Tab3:row17:col4 = '27.3 [81]'
- unparsed cell Tab3:row22:col4 = '7.01 [58]'
- unparsed cell Tab3:row23:col4 = '10.3 [64]'
- unparsed cell Tab3:row25:col4 = '2.63 [26]'
- unparsed cell Tab3:row26:col1 = '− 0.282'
- unparsed cell Tab3:row28:col4 = '4.17 [57]'
- unparsed cell Tab3:row31:col4 = '9.68 [81]'
- unparsed cell Tab3:row32:col4 = '4.79 [80]'
- unparsed cell Tab3:row33:col4 = '4.64 [64]'
- unparsed cell Tab3:row34:col1 = '− 0.624'
- unparsed cell Tab3:row35:col1 = '− 0.554'
- unparsed cell Tab3:row37:col4 = '5.16 [51]'
- unparsed cell Tab3:row39:col1 = '− 0.336'
- unparsed cell Tab3:row41:col1 = '− 0.294'
- unparsed cell Tab3:row44:col1 = '− 0.551'
- unparsed cell Tab3:row46:col1 = '− 0.464'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.913 (21/23 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ofatumumab conc. additive]` |  | 0.0316 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vb]` |  | 3.7 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab3:row14:col1', 'Tab3:row14:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab3:row17:col1', 'Tab3:row17:col2'] |
| C5_dimension_Q330 | pass | 1 / [time] |  | ['Tab3:row21:col1'] |
| C5_dimension_Q331 | fail | [substance] / [length] ** 3 | nmol/L | ['Tab3:row20:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C5_dimension_Q54 | pass | [length] ** 3 / [time] |  | ['Tab3:row36:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab3:row5:col1', 'Tab3:row5:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab3:row19:col1'] |
| C5_unit_missing_Q47 | fail | 1 / [time] | Vc,lwt70 | ['Tab3:row6:col1', 'Tab3:row6:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.34 | ['Tab3:row14:col1', 'Tab3:row14:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0142 L/h | ['Tab3:row14:col1', 'Tab3:row14:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.62 L | ['Tab3:row5:col1', 'Tab3:row5:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.8 L | ['Tab3:row19:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bofatumumab%5D%20Ofatumumab_Yu2022_reference&body=Drug%3A%20ofatumumab%0ARecord%3A%20Ofatumumab_Yu2022_reference%0APaper%3A%20Yu_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ofatumumab/Ofatumumab_Yu2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 18:37 UTC</sub>
