<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;emtricitabine&quot;,&quot;href&quot;:&quot;drugs/drug_emtricitabine/&quot;},{&quot;label&quot;:&quot;Chen_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Emtricitabine_Valade2014_reference&quot;,&quot;label&quot;:&quot;Valade_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_emtricitabine/Emtricitabine_Valade2014_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# emtricitabine — `Emtricitabine_Chen2016_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Kfm has no unit; the model does not reproduce the paper's terminal half-life (model/paper ratio 0.0185).

<div class="pk-model-meta" hidden drug="emtricitabine" model-id="Emtricitabine_Chen2016_reference" status="needs_review" stale="false" population="HIV-positive and HIV-negative subjects" measured-compound="emtricitabine" parameterization="apparent" topology="general_linear"></div>

## Citation
Chen X, Seifert SM, Castillo-Mancilla JR, Bushman LR, Zheng JH, Kiser JJ et al. Model Linking Plasma and Intracellular Tenofovir/Emtricitabine with Deoxynucleoside Triphosphates. PloS one 11(11):e0165505 (2016).
  ·  DOI: [10.1371/journal.pone.0165505](https://doi.org/10.1371/journal.pone.0165505)

## Population and dosing

**Population:** HIV-positive and HIV-negative subjects · condition HIV infection/PrEP · age group adult · n = 40.

**Dosing:** 200, 300, 600 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed TDF/FTC, measured emtricitabine.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Ka (day-1) | kabs | 13.8 | day-1 |  |
| Vc/F (L) | V1/F | 5.91 | L | 0.288 (None% RSE) |
| CL/F (L/day) | CL/F | 3.98 | L/day | 0.117 (None% RSE) |
| Vp/F (L) | V2/F | 13.5 | L | 0.0335 (None% RSE) |
| Q/F (L/day) | Q/F | 8.94 | L/day | 0.0693 (None% RSE) |
| Kf (day-1) | kfm | 9.52 | day-1 | 0.238 (None% RSE) |
| Kel (day-1) | kel | 4.89 | day-1 | 0.316 (None% RSE) |
| HIV on Kf (Linear) | kfm | 26.9 | Linear |  |
| theta_v1_f_sex | theta_v1_f_sex | 35.9 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.087). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kfm has no unit; the model does not reproduce the paper's terminal half-life (model/paper ratio 0.0185).**

Without a unit the value cannot be converted, so the model cannot use it. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (kfm), so that value has no SI equivalent. Extracted — emtricitabine: kabs 13.8 day-1, V1/F 5.91 L, CL/F 3.98 L/day, V2/F 13.5 L, Q/F 8.94 L/day, kfm 9.52 day-1, kel 4.89 day-1; FTC-triphosphate: kfm 26.9 Linear.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has TDF/FTC, the second reading emtricitabine; it also differs on 20 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| Ka (day-1) | `Q49` · kabs | 13.8 | day-1 | 0.0001597 | 1/s | 1/d | exact (1) | pone.0165505.t001:row4:col1, pone.0165505.t001:row4:col2, pone.0165505.t001:row27:col1, pone.0165505.t001:row27:col2 |  |
| Vc/F (L) | `Q290` · V1/F | 5.91 | L | 0.00591 | m3 | l | exact (1) | pone.0165505.t001:row5:col1, pone.0165505.t001:row5:col2, pone.0165505.t001:row28:col1, pone.0165505.t001:row28:col2 | 0.288 (None% RSE) |
| CL/F (L/day) | `Q27` · CL/F | 3.98 | L/day | 4.606e-08 | m3/s | l/d | exact (1) | pone.0165505.t001:row6:col1, pone.0165505.t001:row6:col2, pone.0165505.t001:row29:col1, pone.0165505.t001:row29:col2 | 0.117 (None% RSE) |
| Vp/F (L) | `Q82` · V2/F | 13.5 | L | 0.0135 | m3 | l | exact (1) | pone.0165505.t001:row7:col1, pone.0165505.t001:row7:col2, pone.0165505.t001:row30:col1, pone.0165505.t001:row30:col2 | 0.0335 (None% RSE) |
| Q/F (L/day) | `Q69` · Q/F | 8.94 | L/day | 1.035e-07 | m3/s | l/d | exact (1) | pone.0165505.t001:row8:col1, pone.0165505.t001:row8:col2, pone.0165505.t001:row31:col1, pone.0165505.t001:row31:col2 | 0.0693 (None% RSE) |
| Kf (day-1) | `Q305` · kfm | 9.52 | day-1 | 0.0001102 | 1/s | 1/d | exact (1) | pone.0165505.t001:row11:col1, pone.0165505.t001:row11:col2, pone.0165505.t001:row35:col1, pone.0165505.t001:row35:col2 | 0.238 (None% RSE) |
| Kel (day-1) | `Q47` · kel | 4.89 | day-1 | 5.66e-05 | 1/s | 1/d | exact (1) | pone.0165505.t001:row13:col1, pone.0165505.t001:row13:col2, pone.0165505.t001:row37:col1, pone.0165505.t001:row37:col2 | 0.316 (None% RSE) |
| HIV on Kf (Linear) | `Q305` · kfm | 26.9 | Linear |  |  | l·inear | llm_confirmed (0.6) | pone.0165505.t001:row39:col1, pone.0165505.t001:row39:col2 |  |
| theta_v1_f_sex | `Q900` · theta_v1_f_sex | 35.9 |  |  |  |  |  | pone.0165505.t001:row32:col1, pone.0165505.t001:row32:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Vc/F (L)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'CL/F (L/day)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Q/F (L/day)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'σ (exponential)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Kf (day-1)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Kel (day-1)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'σ (proportional)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'R0 (fmol/106cells)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'EC50,TFV-DP (fmol/106cells)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'Vp/F (L)' routed out of structural estimates ('Interindividual Variability')
- table section iiv: 'EC50_FTC-TP (fmol/106cells)' routed out of structural estimates ('Interindividual Variability')
- dropped unlinked row (NIL): 'SC50_TFV' — extend the ontology if this is a real PK parameter (source ['pone.0165505.t001:row12:col1', 'pone.0165505.t001:row12:col2'])
- dropped PD-category row 'R (%)' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pone.0165505.t001:row14:col1', 'pone.0165505.t001:row14:col2', 'pone.0165505.t001:row38:col1', 'pone.0165505.t001:row38:col2'])
- dropped PD-category row 'R0 (fmol/106cells)' → Q336 (R0, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pone.0165505.t001:row17:col1', 'pone.0165505.t001:row17:col2', 'pone.0165505.t001:row21:col1', 'pone.0165505.t001:row21:col2', 'pone.0165505.t001:row42:col1', 'pone.0165505.t001:row42:col2', 'pone.0165505.t001:row46:col1', 'pone.0165505.t001:row46:col2'])
- dropped PD-category row 'EC50,TFV-DP (fmol/106cells)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pone.0165505.t001:row18:col1', 'pone.0165505.t001:row18:col2', 'pone.0165505.t001:row22:col1', 'pone.0165505.t001:row22:col2'])
- dropped PD-category row 'gamma' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pone.0165505.t001:row23:col1', 'pone.0165505.t001:row23:col2'])
- dropped unlinked row (NIL): 'SC50_FTC' — extend the ontology if this is a real PK parameter (source ['pone.0165505.t001:row36:col1', 'pone.0165505.t001:row36:col2'])
- unit_dimension_unknown: 'Linear' (kfm)
- dropped PD-category row 'EC50_FTC-TP (fmol/106cells)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pone.0165505.t001:row43:col1', 'pone.0165505.t001:row43:col2', 'pone.0165505.t001:row47:col1', 'pone.0165505.t001:row47:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=emtricitabine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 8 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0, 0]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 18/18 row label(s) assigned, 48 linked by role; re-tagged parent→TFV-diphosphate ×7, parent→FTC-triphosphate ×12
- molar mass: LLM call failed (RateLimitError) — metabolites left in mass units
- molar mass: none found for 'FTC-triphosphate' — its concentrations stay mass-only
- molar mass: none found for 'TFV-diphosphate' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pone.0165505.t001:row4:col3 = '58.9, 101'
- unparsed cell pone.0165505.t001:row4:col4 = '56.9, 124'
- unparsed cell pone.0165505.t001:row5:col3 = '313, 467'
- unparsed cell pone.0165505.t001:row5:col4 = '295, 465'
- unparsed cell pone.0165505.t001:row5:col8 = '0.171, 0.405'
- unparsed cell pone.0165505.t001:row5:col9 = '1.17E-9, 0.435'
- unparsed cell pone.0165505.t001:row6:col3 = '1270, 1550'
- unparsed cell pone.0165505.t001:row6:col4 = '1290, 1540'
- unparsed cell pone.0165505.t001:row6:col8 = '0.0498, 0.184'
- unparsed cell pone.0165505.t001:row6:col9 = '0.0588, 0.184'
- unparsed cell pone.0165505.t001:row7:col3 = '769, 985'
- unparsed cell pone.0165505.t001:row7:col4 = '785, 1060'
- unparsed cell pone.0165505.t001:row8:col3 = '4760, 6020'
- unparsed cell pone.0165505.t001:row8:col4 = '4580, 6310'
- unparsed cell pone.0165505.t001:row8:col8 = '0.0246, 0.136'
- unparsed cell pone.0165505.t001:row8:col9 = '0.00375, 0.221'
- unparsed cell pone.0165505.t001:row9:col8 = '0.0451, 0.104'
- unparsed cell pone.0165505.t001:row9:col9 = '0.0498, 0.107'
- unparsed cell pone.0165505.t001:row11:col3 = '0.877, 1.92'
- unparsed cell pone.0165505.t001:row11:col4 = '0.872, 2.39'
- unparsed cell pone.0165505.t001:row11:col8 = '0.0444, 0.432'
- unparsed cell pone.0165505.t001:row11:col9 = '0.0994, 0.444'
- unparsed cell pone.0165505.t001:row12:col3 = '5.06, 8.04'
- unparsed cell pone.0165505.t001:row12:col4 = '5.08, 9.94'
- unparsed cell pone.0165505.t001:row13:col3 = '0.175, 0.281'
- unparsed cell pone.0165505.t001:row13:col4 = '0.181, 0.311'
- unparsed cell pone.0165505.t001:row13:col8 = '0.0867, 0.545'
- unparsed cell pone.0165505.t001:row13:col9 = '0.0984, 0.587'
- unparsed cell pone.0165505.t001:row14:col3 = '4.47, 7.17'
- unparsed cell pone.0165505.t001:row14:col4 = '4.63, 8.86'
- unparsed cell pone.0165505.t001:row15:col8 = '0.0942, 0.136'
- unparsed cell pone.0165505.t001:row15:col9 = '0.0936, 0.136'
- unparsed cell pone.0165505.t001:row17:col3 = '143, 167'
- unparsed cell pone.0165505.t001:row17:col4 = '142, 167'
- unparsed cell pone.0165505.t001:row17:col8 = '0.173, 0.267'
- unparsed cell pone.0165505.t001:row17:col9 = '0.173, 0.27'
- unparsed cell pone.0165505.t001:row18:col3 = '361, 2890'
- unparsed cell pone.0165505.t001:row18:col4 = '464, 14700'
- unparsed cell pone.0165505.t001:row18:col8 = '0.336, 3.06'
- unparsed cell pone.0165505.t001:row18:col9 = '0.465, 33.4'
- unparsed cell pone.0165505.t001:row19:col8 = '0.233, 0.283'
- unparsed cell pone.0165505.t001:row19:col9 = '0.232, 0.279'
- unparsed cell pone.0165505.t001:row21:col3 = '222, 268'
- unparsed cell pone.0165505.t001:row21:col4 = '241, 273'
- unparsed cell pone.0165505.t001:row21:col8 = '0.146, 0.26'
- unparsed cell pone.0165505.t001:row21:col9 = '0.128, 0.209'
- unparsed cell pone.0165505.t001:row22:col3 = '12.4, 240'
- unparsed cell pone.0165505.t001:row22:col4 = '14.3, 268'
- unparsed cell pone.0165505.t001:row23:col3 = '0.448, 1.41'
- unparsed cell pone.0165505.t001:row23:col4 = '0.46, 1.8'
- unparsed cell pone.0165505.t001:row24:col8 = '0.242, 0.292'
- unparsed cell pone.0165505.t001:row24:col9 = '0.234, 0.284'
- unparsed cell pone.0165505.t001:row27:col3 = '40.6, 70.8'
- unparsed cell pone.0165505.t001:row27:col4 = '41.9, 2.70E+9'
- unparsed cell pone.0165505.t001:row28:col3 = '87.9, 111'
- unparsed cell pone.0165505.t001:row28:col4 = '87.2, 112'
- unparsed cell pone.0165505.t001:row28:col8 = '0.0138, 0.05'
- unparsed cell pone.0165505.t001:row28:col9 = '0.0112, 0.0481'
- unparsed cell pone.0165505.t001:row29:col3 = '444, 520'
- unparsed cell pone.0165505.t001:row29:col4 = '440, 514'
- unparsed cell pone.0165505.t001:row29:col8 = '0.0111, 0.177'
- unparsed cell pone.0165505.t001:row29:col9 = '0.0214, 0.186'
- unparsed cell pone.0165505.t001:row30:col3 = '122, 210'
- unparsed cell pone.0165505.t001:row30:col4 = '107, 239'
- unparsed cell pone.0165505.t001:row30:col8 = '0.00488, 0.0621'
- unparsed cell pone.0165505.t001:row30:col9 = '2.13E-50, 1.25'
- unparsed cell pone.0165505.t001:row31:col3 = '116, 166'
- unparsed cell pone.0165505.t001:row31:col4 = '110, 191'
- unparsed cell pone.0165505.t001:row32:col3 = '7.21, 41.4'
- unparsed cell pone.0165505.t001:row32:col4 = '6.21, 41.6'
- unparsed cell pone.0165505.t001:row33:col8 = '0.073, 0.171'
- unparsed cell pone.0165505.t001:row33:col9 = '0.0781, 0.175'
- unparsed cell pone.0165505.t001:row35:col3 = '33.8, 49.4'
- unparsed cell pone.0165505.t001:row35:col4 = '35.6, 52.2'
- unparsed cell pone.0165505.t001:row35:col8 = '0.0062, 0.0654'
- unparsed cell pone.0165505.t001:row35:col9 = '0.0101, 0.0677'
- unparsed cell pone.0165505.t001:row36:col3 = '2530, 4110'
- unparsed cell pone.0165505.t001:row36:col4 = '2590, 4120'
- unparsed cell pone.0165505.t001:row37:col3 = '1.45, 1.75'
- unparsed cell pone.0165505.t001:row37:col4 = '1.43, 1.74'
- unparsed cell pone.0165505.t001:row37:col8 = '0.0167, 0.0955'
- unparsed cell pone.0165505.t001:row37:col9 = '0.0207, 0.101'
- unparsed cell pone.0165505.t001:row38:col3 = '12.4, 19.6'
- unparsed cell pone.0165505.t001:row38:col4 = '13.0, 21.1'
- unparsed cell pone.0165505.t001:row39:col3 = '14.8, 47.8'
- unparsed cell pone.0165505.t001:row39:col4 = '15.4, 50.3'
- unparsed cell pone.0165505.t001:row40:col8 = '0.0747, 0.114'
- unparsed cell pone.0165505.t001:row40:col9 = '0.0751, 0.116'
- unparsed cell pone.0165505.t001:row42:col3 = '711, 831'
- unparsed cell pone.0165505.t001:row42:col4 = '716, 825'
- unparsed cell pone.0165505.t001:row42:col8 = '0.154, 0.236'
- unparsed cell pone.0165505.t001:row42:col9 = '0.153, 0.239'
- unparsed cell pone.0165505.t001:row43:col3 = '24300, 80800'
- unparsed cell pone.0165505.t001:row43:col4 = '26900, 98700'
- unparsed cell pone.0165505.t001:row43:col8 = '0.118, 1.24'
- unparsed cell pone.0165505.t001:row43:col9 = '3.81E-8, 1.43'
- unparsed cell pone.0165505.t001:row44:col8 = '0.206, 0.252'
- unparsed cell pone.0165505.t001:row44:col9 = '0.205, 0.253'
- unparsed cell pone.0165505.t001:row46:col3 = '271, 399'
- unparsed cell pone.0165505.t001:row46:col4 = '271, 396'
- unparsed cell pone.0165505.t001:row46:col8 = '0.302, 0.464'
- unparsed cell pone.0165505.t001:row46:col9 = '0.293, 0.468'
- unparsed cell pone.0165505.t001:row47:col3 = '11200, 32900'
- unparsed cell pone.0165505.t001:row47:col4 = '11800, 32900'
- unparsed cell pone.0165505.t001:row47:col8 = '0.24, 1.80'
- unparsed cell pone.0165505.t001:row47:col9 = '0.325. 2.1'
- unparsed cell pone.0165505.t001:row48:col8 = '0.328, 0.384'
- unparsed cell pone.0165505.t001:row48:col9 = '0.327, 0.385'
- LLM selected parameter table(s) 1
- LLM region Chen_2016:results_prose: Error code: 429 - {'error': {'message': 'Rate limit exceeded for api_key: 8d79104cac3d0b5a8019d9c3dd60ff02e7a84591fb3552ddb3bbcabd52b31d23. Limit type: max_parallel_requests. Current limit: 4, Remaining: 0. Limit resets at: 2026-10-07 13:29:32 UTC', 'type': 'throttling_error', 'param': None, 'code': '429'}}
- LLM region Chen_2016:results_prose: Error code: 429 - {'error': {'message': 'Rate limit exceeded for api_key: 8d79104cac3d0b5a8019d9c3dd60ff02e7a84591fb3552ddb3bbcabd52b31d23. Limit type: max_parallel_requests. Current limit: 4, Remaining: 0. Limit resets at: 2026-10-07 13:29:36 UTC', 'type': 'throttling_error', 'param': None, 'code': '429'}}

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.087 (2/23 fields) | 21 |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['emtricitabine', 'ftc-triphosphate', 'metabolism'], ['tenofovir', 'tfv-diphosphate', 'metabolism']] | [['emtricitabine', 'ftc-tp', 'metabolism'], ['tenofovir', 'tfv-dp', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f]` | 3.98 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 3.98 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[hiv on kf]` |  | 26.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[hiv on kf]` | 26.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 13.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 13.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kel]` | 4.89 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kel]` |  | 4.89 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kf]` | 9.52 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kf]` |  | 9.52 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | 8.94 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` |  | 8.94 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_sex]` | 35.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_sex]` |  | 35.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 5.91 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` |  | 5.91 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f]` | 13.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f]` |  | 13.5 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | TDF/FTC | emtricitabine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | fail | 55.6 | 1.029 | 0.0185 | 0.25 | reported t½β |
| C2_reference | pass |  |  |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['pone.0165505.t001:row6:col1', 'pone.0165505.t001:row6:col2', 'pone.0165505.t001:row29:col1', 'pone.0165505.t001:row29:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  |  |  | ['pone.0165505.t001:row5:col1', 'pone.0165505.t001:row5:col2', 'pone.0165505.t001:row28:col1', 'pone.0165505.t001:row28:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] |  |  |  | ['pone.0165505.t001:row11:col1', 'pone.0165505.t001:row11:col2', 'pone.0165505.t001:row35:col1', 'pone.0165505.t001:row35:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  |  |  | ['pone.0165505.t001:row13:col1', 'pone.0165505.t001:row13:col2', 'pone.0165505.t001:row37:col1', 'pone.0165505.t001:row37:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['pone.0165505.t001:row4:col1', 'pone.0165505.t001:row4:col2', 'pone.0165505.t001:row27:col1', 'pone.0165505.t001:row27:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  |  |  | ['pone.0165505.t001:row8:col1', 'pone.0165505.t001:row8:col2', 'pone.0165505.t001:row31:col1', 'pone.0165505.t001:row31:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  |  |  | ['pone.0165505.t001:row7:col1', 'pone.0165505.t001:row7:col2', 'pone.0165505.t001:row30:col1', 'pone.0165505.t001:row30:col2'] |
| C5_unit_missing_Q305 | fail | 1 / [time] | Linear |  |  | ['pone.0165505.t001:row39:col1', 'pone.0165505.t001:row39:col2'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.166 L/h |  |  | ['pone.0165505.t001:row6:col1', 'pone.0165505.t001:row6:col2', 'pone.0165505.t001:row29:col1', 'pone.0165505.t001:row29:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 5.91 L |  |  | ['pone.0165505.t001:row5:col1', 'pone.0165505.t001:row5:col2', 'pone.0165505.t001:row28:col1', 'pone.0165505.t001:row28:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 13.5 L |  |  | ['pone.0165505.t001:row7:col1', 'pone.0165505.t001:row7:col2', 'pone.0165505.t001:row30:col1', 'pone.0165505.t001:row30:col2'] |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bemtricitabine%5D%20Emtricitabine_Chen2016_reference&body=Drug%3A%20emtricitabine%0ARecord%3A%20Emtricitabine_Chen2016_reference%0APaper%3A%20Chen_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_emtricitabine/Emtricitabine_Chen2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 12:59 UTC</sub>
