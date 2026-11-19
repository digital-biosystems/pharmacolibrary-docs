<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Ethinyl Estradiol&quot;,&quot;href&quot;:&quot;drugs/toxin_ethinyl_estradiol/&quot;},{&quot;label&quot;:&quot;Lewis_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ethinyl Estradiol — `EthinylEstradiol_Lewis2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q331 unit μM ([length]) vs [mass] / [length] ** 3; Q331 unit μM ([length]) vs [mass] / [length] ** 3; Q3 unit µl/min/pmol ([length] ** 3 / [time] / [substance]) vs [length] ** 3 / [mass] / [time]; c8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="Ethinyl Estradiol" model-id="EthinylEstradiol_Lewis2024_reference" status="rejected" stale="false" population="healthy women of childbearing potential (COC users) in clinical PK/DDI studies" measured-compound="Ethinyl estradiol and progestins (CYP3A4-mediated kinetics)" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Lewis GJ, Ahire D, Taskar KS. Physiologically-based pharmacokinetic modeling of prominent oral contraceptive agents and applications in drug-drug interactions. CPT: pharmacometrics & systems pharmacology 13(4):563–575 (2024).
  ·  DOI: [10.1002/psp4.13101](https://doi.org/10.1002/psp4.13101)

## Population and dosing

**Population:** healthy women of childbearing potential (COC users) in clinical PK/DDI studies · condition healthy volunteers; oral contraceptive use with CYP3A4 inhibitors/inducers (DDI studies) · age group adult.

**Dosed compound ≠ measured compound:** dosed Ethinyl estradiol (oral/iv contraceptive dosing) and progestins (dienogest, drospirenone, levonorgestrel, norethindrone), measured Ethinyl estradiol and progestins (CYP3A4-mediated kinetics).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 45 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Molecular weight | MW | 311.43 |  |
| Molecular weight | MW | 366.5 |  |
| Molecular weight | MW | 312.45 |  |
| Molecular weight | MW | 298.4 |  |
| log P | Kp | 1.982 |  |
| log P | Kp | 3.24 |  |
| log P | Kp | 3.77 |  |
| log P | Kp | 2.97 |  |
| Protein binding | fu | 90 |  |
| Protein binding | fu | 97 |  |
| Protein binding | fu | 98 |  |
| Protein binding | fu | 80 |  |
| HSA, KD (μM) | KD | 10 | μM |
| HSA, KD (μM) | KD | 175 | μM |
| fa | Fab | 0.977 |  |
| fa | Fab | 0.99 |  |
| fa | Fab | 0.997 |  |
| fa | Fab | 0.997 |  |
| ka (1/h) | kabs | 1.393 | 1/h |
| ka (1/h) | kabs | 4.14 | 1/h |
| ka (1/h) | kabs | 2.52 | 1/h |
| ka (1/h) | kabs | 2.52 | 1/h |
| Lag time (h) | tlag | 0.4 | h |
| Lag time (h) | tlag | 0.4 | h |
| Lag time (h) | tlag | 0.27 | h |
| Lag time (h) | tlag | 1 | h |
| fu gut | FG | 0.0014 |  |
| Qgut | Q3 | 18.71 |  |
| Qgut | Q | 16.006 |  |
| HBD | equation variable | 1 |  |
| Vss (L/Kg) | Vss | 0.59 | L/Kg |
| Vss (L/Kg) | Vss | 3.16 | L/Kg |
| Vss (L/Kg) | Vss | 1.85 | L/Kg |
| Vss (L/Kg) | Vss | 3.64 | L/Kg |
| Enzyme: fmCYP3A4 | fm | 0.67 |  |
| Enzyme: fmCYP3A4 | fm | 0.63 |  |
| Enzyme: fmCYP3A4 | fm | 0.37 |  |
| Enzyme: fmCYP3A4 | fm | 0.34 |  |
| Clint (µl/min/pmol) | CLint | 0.0599 | µl/min/pmol |
| Clint (µl/min/pmol) | CLint | 0.2947 | µl/min/pmol |
| Clint (µl/min/pmol) | CLint | 0.2850 | µl/min/pmol |
| Clint (µl/min/pmol) | CLint | 0.1095 | µl/min/pmol |
| Clrenal (L/h) | CLR | 0.064 | L/h |
| Clrenal (L/h) | CLR | 0.130 | L/h |
| Clrenal (L/h) | CLR | 0.010 | L/h |
| Clrenal (L/h) | CLR | 0.203 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.019). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q331 unit μM ([length]) vs [mass] / [length] ** 3; Q331 unit μM ([length]) vs [mass] / [length] ** 3; Q3 unit µl/min/pmol ([length] ** 3 / [time] / [substance]) vs [length] ** 3 / [mass] / [time]; c8 unreachable/orphan compartment or unlinked metabolite.**

A reported unit could not be converted (KD, KD, CLint and CLint), so that value has no SI equivalent. Extracted — Dienogest: MW 311, Kp 1.98, fu 90, Fab 0.977, kabs 1.39 1/h, tlag 0.4 h, Vss 0.59 L/Kg, fm 0.67, … (+2); ethinyl estradiol: MW 366, Kp 3.24, fu 97, Fab 0.99, kabs 4.14 1/h, tlag 0.4 h, Q3 18.7, Vss 3.16 L/Kg, … (+3); Levonorgestrel: MW 312, Kp 3.77, fu 98, KD 10 μM, Fab 0.997, kabs 2.52 1/h, tlag 0.27 h, FG 0.0014, … (+4); Norethindrone: MW 298, Kp 2.97, fu 80, KD 175 μM, Fab 0.997, kabs 2.52 1/h, tlag 1 h, Q 16, … (+4).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Ethinyl estradiol (oral/iv contraceptive dosing) and progestins (dienogest, drospirenone, levonorgestrel, norethindrone), the second reading ethinyl estradiol; it also differs on 51 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Molecular weight | `Q374` · MW | 311.43 |  |  |  |  | exact (1) | Lewis_2024_table_S1:row1:col1 |
| Molecular weight | `Q374` · MW | 366.5 |  |  |  |  | exact (1) | Lewis_2024_table_S1:row1:col2 |
| Molecular weight | `Q374` · MW | 312.45 |  |  |  |  | exact (1) | Lewis_2024_table_S1:row1:col3 |
| Molecular weight | `Q374` · MW | 298.4 |  |  |  |  | exact (1) | Lewis_2024_table_S1:row1:col4 |
| log P | `Q410` · Kp | 1.982 |  |  |  |  | llm (0.6) | Lewis_2024_table_S1:row2:col1 |
| log P | `Q410` · Kp | 3.24 |  |  |  |  | llm (0.6) | Lewis_2024_table_S1:row2:col2 |
| log P | `Q410` · Kp | 3.77 |  |  |  |  | llm (0.6) | Lewis_2024_table_S1:row2:col3 |
| log P | `Q410` · Kp | 2.97 |  |  |  |  | llm (0.6) | Lewis_2024_table_S1:row2:col4 |
| Protein binding | `Q46` · fu | 90 |  | 0.9 |  |  | exact (1) | Lewis_2024_table_S1:row5:col1 |
| Protein binding | `Q46` · fu | 97 |  | 0.97 |  |  | exact (1) | Lewis_2024_table_S1:row5:col2 |
| Protein binding | `Q46` · fu | 98 |  | 0.98 |  |  | exact (1) | Lewis_2024_table_S1:row5:col3 |
| Protein binding | `Q46` · fu | 80 |  | 0.8 |  |  | exact (1) | Lewis_2024_table_S1:row5:col4 |
| HSA, KD (μM) | `Q331` · KD | 10 | μM |  |  | µM | llm_confirmed (0.6) | Lewis_2024_table_S1:row6:col3 |
| HSA, KD (μM) | `Q331` · KD | 175 | μM |  |  | µM | llm_confirmed (0.6) | Lewis_2024_table_S1:row6:col4 |
| fa | `Q40` · Fab | 0.977 |  | 0.977 |  |  | llm (0.6) | Lewis_2024_table_S1:row9:col1 |
| fa | `Q40` · Fab | 0.99 |  | 0.99 |  |  | llm (0.6) | Lewis_2024_table_S1:row9:col2 |
| fa | `Q40` · Fab | 0.997 |  | 0.997 |  |  | llm (0.6) | Lewis_2024_table_S1:row9:col3 |
| fa | `Q40` · Fab | 0.997 |  | 0.997 |  |  | llm (0.6) | Lewis_2024_table_S1:row9:col4 |
| ka (1/h) | `Q49` · kabs | 1.393 | 1/h | 0.0003869 | 1/s | 1/h | exact (1) | Lewis_2024_table_S1:row10:col1 |
| ka (1/h) | `Q49` · kabs | 4.14 | 1/h | 0.00115 | 1/s | 1/h | exact (1) | Lewis_2024_table_S1:row10:col2 |
| ka (1/h) | `Q49` · kabs | 2.52 | 1/h | 0.0007 | 1/s | 1/h | exact (1) | Lewis_2024_table_S1:row10:col3 |
| ka (1/h) | `Q49` · kabs | 2.52 | 1/h | 0.0007 | 1/s | 1/h | exact (1) | Lewis_2024_table_S1:row10:col4 |
| Lag time (h) | `Q83` · tlag | 0.4 | h | 1440 | s | h | exact (1) | Lewis_2024_table_S1:row11:col1 |
| Lag time (h) | `Q83` · tlag | 0.4 | h | 1440 | s | h | exact (1) | Lewis_2024_table_S1:row11:col2 |
| Lag time (h) | `Q83` · tlag | 0.27 | h | 972 | s | h | exact (1) | Lewis_2024_table_S1:row11:col3 |
| Lag time (h) | `Q83` · tlag | 1 | h | 3600 | s | h | exact (1) | Lewis_2024_table_S1:row11:col4 |
| fu gut | `Q41` · FG | 0.0014 |  | 0.0014 |  |  | llm_corrected (0.6) | Lewis_2024_table_S1:row12:col3 |
| Qgut | `Q308` · Q3 | 18.71 |  |  |  |  | llm (0.6) | Lewis_2024_table_S1:row13:col2 |
| Qgut | `Q30` · Q | 16.006 |  |  |  |  | llm (0.6) | Lewis_2024_table_S1:row13:col4 |
| HBD | `Q900` · equation variable | 1 |  | 1 |  |  | llm (0.6) | Lewis_2024_table_S1:row15:col3 |
| Vss (L/Kg) | `Q65` · Vss | 0.59 | L/Kg | 0.0413 | m3 | l/kg | exact (1) | Lewis_2024_table_S1:row17:col1 |
| Vss (L/Kg) | `Q65` · Vss | 3.16 | L/Kg | 0.2212 | m3 | l/kg | exact (1) | Lewis_2024_table_S1:row17:col2 |
| Vss (L/Kg) | `Q65` · Vss | 1.85 | L/Kg | 0.1295 | m3 | l/kg | exact (1) | Lewis_2024_table_S1:row17:col3 |
| Vss (L/Kg) | `Q65` · Vss | 3.64 | L/Kg | 0.2548 | m3 | l/kg | exact (1) | Lewis_2024_table_S1:row17:col4 |
| Enzyme: fmCYP3A4 | `Q45` · fm | 0.67 |  | 0.67 |  |  | llm (0.6) | Lewis_2024_table_S1:row20:col1 |
| Enzyme: fmCYP3A4 | `Q45` · fm | 0.63 |  | 0.63 |  |  | llm (0.6) | Lewis_2024_table_S1:row20:col2 |
| Enzyme: fmCYP3A4 | `Q45` · fm | 0.37 |  | 0.37 |  |  | llm (0.6) | Lewis_2024_table_S1:row20:col3 |
| Enzyme: fmCYP3A4 | `Q45` · fm | 0.34 |  | 0.34 |  |  | llm (0.6) | Lewis_2024_table_S1:row20:col4 |
| Clint (µl/min/pmol) | `Q3` · CLint | 0.0599 | µl/min/pmol |  |  | µl/(min·pM) | exact (1) | Lewis_2024_table_S1:row21:col1 |
| Clint (µl/min/pmol) | `Q3` · CLint | 0.2947 | µl/min/pmol |  |  | µl/(min·pM) | exact (1) | Lewis_2024_table_S1:row21:col2 |
| Clint (µl/min/pmol) | `Q3` · CLint | 0.2850 | µl/min/pmol |  |  | µl/(min·pM) | exact (1) | Lewis_2024_table_S1:row21:col3 |
| Clint (µl/min/pmol) | `Q3` · CLint | 0.1095 | µl/min/pmol |  |  | µl/(min·pM) | exact (1) | Lewis_2024_table_S1:row21:col4 |
| Clrenal (L/h) | `Q26` · CLR | 0.064 | L/h | 1.778e-08 | m3/s | l/h | llm (0.6) | Lewis_2024_table_S1:row24:col1 |
| Clrenal (L/h) | `Q26` · CLR | 0.130 | L/h | 3.611e-08 | m3/s | l/h | llm (0.6) | Lewis_2024_table_S1:row24:col2 |
| Clrenal (L/h) | `Q26` · CLR | 0.010 | L/h | 2.778e-09 | m3/s | l/h | llm (0.6) | Lewis_2024_table_S1:row24:col3 |
| Clrenal (L/h) | `Q26` · CLR | 0.203 | L/h | 5.639e-08 | m3/s | l/h | llm (0.6) | Lewis_2024_table_S1:row24:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q410 ('B/P', value '0.745') — already have one for this compound
- dropped duplicate Q410 ('B/P', value '0.9') — already have one for this compound
- dropped duplicate Q410 ('B/P', value '0.905') — already have one for this compound
- dropped duplicate Q410 ('B/P', value '0.956') — already have one for this compound
- 'Protein binding' → Q46: printed without a unit and above 1 — read as a percentage
- unit_dimension_mismatch: 'HSA, KD (μM)' → Q331 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'SHBG, KD (μM)' → Q331 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q331 ('SHBG, KD (μM)', value '0.11') — already have one for this compound
- dropped duplicate Q331 ('SHBG, KD (μM)', value '0.45') — already have one for this compound
- dropped duplicate Q46 ('fu gut', value '0.0805') — already have one for this compound
- dropped duplicate Q46 ('fu gut', value '0.0048') — already have one for this compound
- dropped duplicate Q46 ('fu gut', value '0.0089') — already have one for this compound
- dropped unlinked row (NIL): 'Qgut' — extend the ontology if this is a real PK parameter (source ['Lewis_2024_table_S1:row13:col1'])
- dropped unlinked row (NIL): 'Qgut' — extend the ontology if this is a real PK parameter (source ['Lewis_2024_table_S1:row13:col3'])
- dropped unlinked row (NIL): 'PSA' — extend the ontology if this is a real PK parameter (source ['Lewis_2024_table_S1:row14:col1'])
- dropped unlinked row (NIL): 'PSA' — extend the ontology if this is a real PK parameter (source ['Lewis_2024_table_S1:row14:col2'])
- dropped unlinked row (NIL): 'PSA' — extend the ontology if this is a real PK parameter (source ['Lewis_2024_table_S1:row14:col3'])
- dropped unlinked row (NIL): 'PSA' — extend the ontology if this is a real PK parameter (source ['Lewis_2024_table_S1:row14:col4'])
- dropped unlinked row (NIL): 'HBD' — extend the ontology if this is a real PK parameter (source ['Lewis_2024_table_S1:row15:col1'])
- dropped unlinked row (NIL): 'HBD' — extend the ontology if this is a real PK parameter (source ['Lewis_2024_table_S1:row15:col2'])
- dropped unlinked row (NIL): 'HBD' — extend the ontology if this is a real PK parameter (source ['Lewis_2024_table_S1:row15:col4'])
- dropped duplicate Q410 ('Kp Scaler', value '1.25') — already have one for this compound
- dropped duplicate Q410 ('Kp Scaler', value '1.4') — already have one for this compound
- dropped duplicate Q410 ('Kp Scaler', value '0.4') — already have one for this compound
- dropped duplicate Q410 ('Kp Scaler', value '0.47') — already have one for this compound
- unit_dimension_mismatch: 'Clint (µl/min/pmol)' → Q3 (unit '[length] ** 3 / [time] / [substance]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- unit_dimension_mismatch: 'Additional HLM Clint (µl/min/pmol)' → Q3 (unit '[length] ** 3 / [time] / [substance]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped duplicate Q3 ('Additional HLM Clint (µl/min/pmol)', value '1.9811') — already have one for this compound
- dropped duplicate Q3 ('Additional HLM Clint (µl/min/pmol)', value '7.9643') — already have one for this compound
- dropped duplicate Q3 ('Additional HLM Clint (µl/min/pmol)', value '63.136') — already have one for this compound
- dropped duplicate Q3 ('Additional HLM Clint (µl/min/pmol)', value '26.691') — already have one for this compound
- unit_dimension_unknown: 'µl/min/106' (CLint)
- dropped duplicate Q3 ('Clint, bile (µl/min/106)', value '0.599') — already have one for this compound
- dropped duplicate Q3 ('Clint, bile (µl/min/106)', value '4.0115') — already have one for this compound
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 1 column 296 (char 295)) — units left missing
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Ethinyl estradiol and progestins (CYP3A4-mediated kinetics)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted
- molar mass: none found for 'Ethinyl estradiol and progestins (CYP3A4-mediated kinetics)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) S1
- table Lewis_2024_table_S1: unparsed_numeric_cell
- toxin: the located table(s) gave no kinetic value — 23 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.019 (1/53 fields) | 52 |

<details><summary>52 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['ethinyl estradiol', 'cyp3a4 metabolism', 'fraction metabolized (fmcyp3a4 = 0.27)'], ['dienogest', 'cyp3a4 metabolism', 'fraction metabolized (fmcyp3a4 = 0.67)'], ['drospirenone', 'cyp3a4 metabolism', 'fraction metabolized (fmcyp3a4 = 0.63)'], ['levonorgestrel', 'cyp3a4 metabolism', 'fraction metabolized (fmcyp3a4 = 0.37)'], ['norethindrone', 'cyp3a4 metabolism', 'fraction metabolized (fmcyp3a4 = 0.34)']] | [] | mismatch |
| `gpt-oss:120b` | `parameters[1]` |  | 0.80412371134020622 | only_one_extracted |
| `gpt-oss:120b` | `parameters[2]` |  | 1.0451127819548871 | only_one_extracted |
| `gpt-oss:120b` | `parameters[3]` |  | 1.1625000000000001 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clint]` | 0.2947 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clint]` | 0.0599 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clint]` | 0.2850 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clint]` | 0.1095 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clrenal]` | 0.130 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clrenal]` | 0.064 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clrenal]` | 0.010 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clrenal]` | 0.203 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[enzyme: fmcyp3a4]` | 0.63 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[enzyme: fmcyp3a4]` | 0.67 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[enzyme: fmcyp3a4]` | 0.37 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[enzyme: fmcyp3a4]` | 0.34 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[fa]` | 0.99 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[fa]` | 0.977 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[fa]` | 0.997 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[fa]` | 0.997 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[fu gut]` | 0.0014 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[hbd]` | 1 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[hsa, kd]` | 10 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[hsa, kd]` | 175 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 4.14 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 1.393 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 2.52 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 2.52 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[lag time]` | 0.4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[lag time]` | 0.4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[lag time]` | 0.27 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[lag time]` | 1 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[log p]` | 3.24 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[log p]` | 1.982 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[log p]` | 3.77 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[log p]` | 2.97 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[molecular weight]` | 366.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[molecular weight]` | 311.43 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[molecular weight]` | 312.45 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[molecular weight]` | 298.4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[protein binding]` | 97 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[protein binding]` | 90 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[protein binding]` | 98 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[protein binding]` | 80 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[qgut]` | 18.71 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[qgut]` | 16.006 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vss]` | 3.16 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vss]` | 0.59 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vss]` | 1.85 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vss]` | 3.64 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Ethinyl estradiol (oral/iv contraceptive dosing) and progestins (dienogest, drospirenone, levonorgestrel, norethindrone) | ethinyl estradiol | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | Ethinyl estradiol and progestins (CYP3A4-mediated kinetics) | ethinyl estradiol | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 45 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Lewis_2024_table_S1:row24:col1'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Lewis_2024_table_S1:row24:col2'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Lewis_2024_table_S1:row24:col3'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Lewis_2024_table_S1:row24:col4'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [mass] / [time] | µl/min/pmol ([length] ** 3 / [time] / [substance]) | ['Lewis_2024_table_S1:row21:col1'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [mass] / [time] | µl/min/pmol ([length] ** 3 / [time] / [substance]) | ['Lewis_2024_table_S1:row21:col2'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [mass] / [time] | µl/min/pmol ([length] ** 3 / [time] / [substance]) | ['Lewis_2024_table_S1:row21:col3'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [mass] / [time] | µl/min/pmol ([length] ** 3 / [time] / [substance]) | ['Lewis_2024_table_S1:row21:col4'] |
| C5_dimension_Q331 | fail | [mass] / [length] ** 3 | μM ([length]) | ['Lewis_2024_table_S1:row6:col3'] |
| C5_dimension_Q331 | fail | [mass] / [length] ** 3 | μM ([length]) | ['Lewis_2024_table_S1:row6:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Lewis_2024_table_S1:row10:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Lewis_2024_table_S1:row10:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Lewis_2024_table_S1:row10:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Lewis_2024_table_S1:row10:col4'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Lewis_2024_table_S1:row17:col1'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Lewis_2024_table_S1:row17:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Lewis_2024_table_S1:row17:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Lewis_2024_table_S1:row17:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['Lewis_2024_table_S1:row11:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Lewis_2024_table_S1:row11:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Lewis_2024_table_S1:row11:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Lewis_2024_table_S1:row11:col4'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] |  | ['Lewis_2024_table_S1:row13:col4'] |
| C5_unit_missing_Q308 | fail | [length] ** 3 / [time] |  | ['Lewis_2024_table_S1:row13:col2'] |
| C5_unit_missing_Q374 | fail | [mass] / [substance] |  | ['Lewis_2024_table_S1:row1:col1'] |
| C5_unit_missing_Q374 | fail | [mass] / [substance] |  | ['Lewis_2024_table_S1:row1:col2'] |
| C5_unit_missing_Q374 | fail | [mass] / [substance] |  | ['Lewis_2024_table_S1:row1:col3'] |
| C5_unit_missing_Q374 | fail | [mass] / [substance] |  | ['Lewis_2024_table_S1:row1:col4'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['fmCYP3A4', 'fmCYP3A4', 'fmCYP3A4', 'fmCYP3A4', 'fmCYP3A4'] |  |
| C9_phys_window_Q65 | pass | volume within physiological range | 41.3 L | ['Lewis_2024_table_S1:row17:col1'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 221 L | ['Lewis_2024_table_S1:row17:col2'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 130 L | ['Lewis_2024_table_S1:row17:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 255 L | ['Lewis_2024_table_S1:row17:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bethinyl_estradiol%5D%20EthinylEstradiol_Lewis2024_reference&body=Drug%3A%20ethinyl_estradiol%0ARecord%3A%20EthinylEstradiol_Lewis2024_reference%0APaper%3A%20Lewis_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ethinyl_estradiol/EthinylEstradiol_Lewis2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 07:43 UTC</sub>
