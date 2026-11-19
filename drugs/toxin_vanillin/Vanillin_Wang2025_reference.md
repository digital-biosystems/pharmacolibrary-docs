<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Vanillin&quot;,&quot;href&quot;:&quot;drugs/toxin_vanillin/&quot;},{&quot;label&quot;:&quot;Wang_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vanillin_Beaudry2010_reference&quot;,&quot;label&quot;:&quot;Beaudry_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_vanillin/Vanillin_Beaudry2010_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Vanillin — `Vanillin_Wang2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q374 unit Da ([time]) vs [mass] / [substance]; Q301 unit Da ([time]) vs 1 / [time]; Q18 unit Da ([time]) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="Vanillin" model-id="Vanillin_Wang2025_reference" status="rejected" stale="false" population="rats dosed with Moringa oleifera seed preparation" measured-compound="Vanillin" parameterization="apparent" topology="1C"></div>

## Citation
Wang J, Cao J, Wang H, Zhang Y, Jiang L, Zhan J et al. In vitro identification and in vivo metabolic profiling of chemical constituents in Moringa oleifera seeds. Food chemistry: X 30:102899 (2025).
  ·  DOI: [10.1016/j.fochx.2025.102899](https://doi.org/10.1016/j.fochx.2025.102899)

## Population and dosing

**Population:** rats dosed with Moringa oleifera seed preparation · condition healthy · age group adult · n = 6.

**Dosing:** 25.44, 32.2 g crude equivalent/kg body weight, oral, single.

**Dosed compound ≠ measured compound:** dosed Moringa oleifera seed extract (compound MOS granule), measured Vanillin.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 1 | MW | 131.0411 | Da |
| 11 | equation variable | 209.0308 | Da |
| 12 | k12 | 115.0042 | Da |
| 18 | AUCSS | 147.1122 | Da |
| 21 | AUC ratio | 191.0204 | Da |
| 24 | CLu | 117.0198 | Da |
| 27 | CL/F | 424.0383 | Da |
| 41 | FG | 570.0962 | Da |
| 47 | kel | 337.0931 | Da |
| 48 | kcomp | 353.0878 | Da |
| 51 | kmet | 447.0940 | Da |
| a | kabs | 0.104 | min -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.1). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q374 unit Da ([time]) vs [mass] / [substance]; Q301 unit Da ([time]) vs 1 / [time]; Q18 unit Da ([time]) vs [mass] * [time] / [length] ** 3.**

A reported unit could not be converted (MW, equation variable, k12 and AUCSS), so that value has no SI equivalent. Extracted — vanillin: MW 131 Da, k12 115 Da, AUCSS 147 Da, AUC ratio 191 Da, CLu 117 Da, CL/F 424 Da, FG 570 Da, kel 337 Da, … (+3).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Moringa oleifera seed extract (compound MOS granule), the second reading Moringa oleifera seed granule; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 1 | `Q374` · MW | 131.0411 | Da |  |  | d·a | llm (0.6) | t0005:row1:col1, t0005:row1:col2, t0005:row1:col3, t0005:row1:col4 |
| 11 | `Q900` · equation variable | 209.0308 | Da |  |  | d·a | llm (0.6) | t0005:row11:col1, t0005:row11:col2, t0005:row11:col3, t0005:row11:col4 |
| 12 | `Q301` · k12 | 115.0042 | Da |  |  | d·a | llm (0.6) | t0005:row12:col1, t0005:row12:col2, t0005:row12:col3, t0005:row12:col4, t0005:row12:col5 |
| 18 | `Q18` · AUCSS | 147.1122 | Da |  |  | d·a | llm (0.6) | t0005:row18:col1, t0005:row18:col2, t0005:row18:col3, t0005:row18:col4 |
| 21 | `Q21` · AUC ratio | 191.0204 | Da |  |  | d·a | llm (0.6) | t0005:row21:col1, t0005:row21:col2, t0005:row21:col3, t0005:row21:col4 |
| 24 | `Q24` · CLu | 117.0198 | Da |  |  | d·a | llm (0.6) | t0005:row24:col1, t0005:row24:col2, t0005:row24:col3, t0005:row24:col4 |
| 27 | `Q27` · CL/F | 424.0383 | Da |  |  | d·a | llm (0.6) | t0005:row27:col1, t0005:row27:col2, t0005:row27:col3, t0005:row27:col4 |
| 41 | `Q41` · FG | 570.0962 | Da |  |  | d·a | llm (0.6) | t0005:row41:col1, t0005:row41:col2, t0005:row41:col3, t0005:row41:col4 |
| 47 | `Q47` · kel | 337.0931 | Da |  |  | d·a | llm (0.6) | t0005:row47:col1, t0005:row47:col2, t0005:row47:col3, t0005:row47:col4 |
| 48 | `Q48` · kcomp | 353.0878 | Da |  |  | d·a | llm (0.6) | t0005:row48:col1, t0005:row48:col2, t0005:row48:col3, t0005:row48:col4 |
| 51 | `Q51` · kmet | 447.0940 | Da |  |  | d·a | llm (0.6) | t0005:row51:col1, t0005:row51:col2, t0005:row51:col3, t0005:row51:col4 |
| a | `Q49` · kabs | 0.104 | min -1 | 0.001733 | 1/s | 1/h | review_gapfill (0.7) | Li_2007:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'tr' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'theoretical m/z (da)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ms/ms' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'compounds' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: '1' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- unit_dimension_mismatch: '2' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('2', value '131.0720') — already have one for this compound
- unit_dimension_mismatch: '3' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('3', value '177.0550') — already have one for this compound
- unit_dimension_mismatch: '4' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('4', value '175.1187') — already have one for this compound
- unit_dimension_mismatch: '5' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('5', value '120.0651') — already have one for this compound
- unit_dimension_mismatch: '6' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('6', value '146.0466') — already have one for this compound
- dropped unlinked row (NIL): '7' — extend the ontology if this is a real PK parameter (source ['t0005:row7:col1', 't0005:row7:col2', 't0005:row7:col3', 't0005:row7:col4'])
- unit_dimension_mismatch: '8' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('8', value '105.0196') — already have one for this compound
- unit_dimension_mismatch: '9' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('9', value '191.0567') — already have one for this compound
- unit_dimension_mismatch: '10' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('10', value '115.0044') — already have one for this compound
- unit_dimension_mismatch: '12' → Q301 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: '13' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('13', value '341.1088') — already have one for this compound
- unit_dimension_mismatch: '14' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('14', value '133.0150') — already have one for this compound
- unit_dimension_mismatch: '15' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('15', value '287.0544') — already have one for this compound
- dropped duplicate Q900 ('16', value '191.0202') — already have one for this compound
- unit_dimension_mismatch: '17' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('17', value '173.0096') — already have one for this compound
- unit_dimension_mismatch: '18' → Q18 (unit '[time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): '19' — extend the ontology if this is a real PK parameter (source ['t0005:row19:col1', 't0005:row19:col2', 't0005:row19:col3', 't0005:row19:col4'])
- unit_dimension_mismatch: '20' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('20', value '163.0478') — already have one for this compound
- unit_dimension_mismatch: '22' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('22', value '106.0495') — already have one for this compound
- unit_dimension_mismatch: '23' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('23', value '182.0805') — already have one for this compound
- unit_dimension_mismatch: '24' → Q24 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): '25' — extend the ontology if this is a real PK parameter (source ['t0005:row25:col1', 't0005:row25:col2', 't0005:row25:col3', 't0005:row25:col4'])
- unit_dimension_mismatch: '26' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('26', value '147.0306') — already have one for this compound
- unit_dimension_mismatch: '27' → Q27 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q900 ('28', value '219.1747') — already have one for this compound
- unit_dimension_mismatch: '29' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('29', value '199.0608') — already have one for this compound
- unit_dimension_mismatch: '30' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('30', value '243.0635') — already have one for this compound
- dropped duplicate Q900 ('31', value '492.1556') — already have one for this compound
- unit_dimension_mismatch: '32' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('32', value '586.0921') — already have one for this compound
- unit_dimension_mismatch: '33' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('33', value '474.1423') — already have one for this compound
- unit_dimension_mismatch: '34' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('34', value '331.0672') — already have one for this compound
- dropped unlinked row (NIL): '35' — extend the ontology if this is a real PK parameter (source ['t0005:row35:col1', 't0005:row35:col2', 't0005:row35:col3', 't0005:row35:col4'])
- unit_dimension_mismatch: '36' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('36', value '408.0424') — already have one for this compound
- unit_dimension_mismatch: '37' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('37', value '328.1372') — already have one for this compound
- unit_dimension_mismatch: '38' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('38', value '359.0975') — already have one for this compound
- unit_dimension_mismatch: '39' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('39', value '315.0721') — already have one for this compound
- dropped unlinked row (NIL): '40' — extend the ontology if this is a real PK parameter (source ['t0005:row40:col1', 't0005:row40:col2', 't0005:row40:col3', 't0005:row40:col4'])
- unit_dimension_mismatch: '42' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('42', value '344.1162') — already have one for this compound
- unit_dimension_mismatch: '43' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('43', value '353.0880') — already have one for this compound
- unit_dimension_mismatch: '44' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('44', value '328.1387') — already have one for this compound
- dropped unlinked row (NIL): '45' — extend the ontology if this is a real PK parameter (source ['t0005:row45:col1', 't0005:row45:col2', 't0005:row45:col3', 't0005:row45:col4'])
- dropped unlinked row (NIL): '46' — extend the ontology if this is a real PK parameter (source ['t0005:row46:col1', 't0005:row46:col2', 't0005:row46:col3', 't0005:row46:col4'])
- unit_dimension_mismatch: '47' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: '48' → Q48 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): '49' — extend the ontology if this is a real PK parameter (source ['t0005:row49:col1', 't0005:row49:col2', 't0005:row49:col3', 't0005:row49:col4', 't0005:row49:col5'])
- unit_dimension_mismatch: '50' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('50', value '367.1038') — already have one for this compound
- unit_dimension_mismatch: '51' → Q51 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: '52' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('52', value '337.0933') — already have one for this compound
- unit_dimension_mismatch: '53' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('53', value '353.0882') — already have one for this compound
- unit_dimension_mismatch: '54' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('54', value '137.0251') — already have one for this compound
- unit_dimension_mismatch: '55' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('55', value '612.1069') — already have one for this compound
- unit_dimension_mismatch: '56' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('56', value '367.1028') — already have one for this compound
- unit_dimension_mismatch: '57' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('57', value '298.1298') — already have one for this compound
- unit_dimension_mismatch: '58' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('58', value '431.0990') — already have one for this compound
- unit_dimension_mismatch: '59' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('59', value '463.0889') — already have one for this compound
- unit_dimension_mismatch: '60' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('60', value '593.1517') — already have one for this compound
- unit_dimension_mismatch: '61' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('61', value '549.0890') — already have one for this compound
- dropped unlinked row (NIL): '62' — extend the ontology if this is a real PK parameter (source ['t0005:row62:col1', 't0005:row62:col2', 't0005:row62:col3', 't0005:row62:col4'])
- dropped duplicate Q900 ('63', value '367.1032') — already have one for this compound
- unit_dimension_mismatch: '64' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('64', value '477.1043') — already have one for this compound
- dropped unlinked row (NIL): '65' — extend the ontology if this is a real PK parameter (source ['t0005:row65:col1', 't0005:row65:col2', 't0005:row65:col3', 't0005:row65:col4'])
- dropped unlinked row (NIL): '66' — extend the ontology if this is a real PK parameter (source ['t0005:row66:col1', 't0005:row66:col2', 't0005:row66:col3', 't0005:row66:col4'])
- unit_dimension_mismatch: '67' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('67', value '609.1469') — already have one for this compound
- dropped unlinked row (NIL): '68' — extend the ontology if this is a real PK parameter (source ['t0005:row68:col1', 't0005:row68:col2', 't0005:row68:col3', 't0005:row68:col4'])
- unit_dimension_mismatch: '69' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('69', value '431.0987') — already have one for this compound
- unit_dimension_mismatch: '70' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('70', value '463.0888') — already have one for this compound
- unit_dimension_mismatch: '71' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('71', value '187.0981') — already have one for this compound
- dropped unlinked row (NIL): '72' — extend the ontology if this is a real PK parameter (source ['t0005:row72:col1', 't0005:row72:col2', 't0005:row72:col3', 't0005:row72:col4'])
- unit_dimension_mismatch: '73' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('73', value '151.0408') — already have one for this compound
- unit_dimension_mismatch: '74' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('74', value '201.1138') — already have one for this compound
- unit_dimension_mismatch: '75' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('75', value '137.0250') — already have one for this compound
- unit_dimension_mismatch: '76' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('76', value '179.0704') — already have one for this compound
- dropped unlinked row (NIL): '77' — extend the ontology if this is a real PK parameter (source ['t0005:row77:col1', 't0005:row77:col2', 't0005:row77:col3', 't0005:row77:col4'])
- unit_dimension_mismatch: '78' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('78', value '183.0654') — already have one for this compound
- unit_dimension_mismatch: '79' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('79', value '163.0390') — already have one for this compound
- unit_dimension_mismatch: '80' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('80', value '295.1890') — already have one for this compound
- unit_dimension_mismatch: '81' → Q374 (unit '[time]' vs ontology '[mass] / [substance]') — route to review
- dropped duplicate Q374 ('81', value '181.0723') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Vanillin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 5 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Li_2007's review values (primary lacked it)

**Extraction notes:**
- table t0005: unparsed_numeric_cell

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.1 (2/20 fields) | 18 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[11]` | 209.0308 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[12]` | 115.0042 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[18]` | 147.1122 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[1]` | 131.0411 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[21]` | 191.0204 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[24]` | 117.0198 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[27]` | 424.0383 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[30]` |  | 2.29 | only_one_extracted |
| `gpt-oss:120b` | `parameters[38]` |  | -2.50 | only_one_extracted |
| `gpt-oss:120b` | `parameters[39]` |  | 3.15 | only_one_extracted |
| `gpt-oss:120b` | `parameters[41]` | 570.0962 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[46]` |  | 3.37 | only_one_extracted |
| `gpt-oss:120b` | `parameters[47]` | 337.0931 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[48]` | 353.0878 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[51]` | 447.0940 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[54]` |  | 1.81 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Moringa oleifera seed extract (compound MOS granule) | Moringa oleifera seed granule | mismatch |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q18 | fail | [mass] * [time] / [length] ** 3 | Da ([time]) | ['t0005:row18:col1', 't0005:row18:col2', 't0005:row18:col3', 't0005:row18:col4'] |
| C5_dimension_Q24 | fail | [length] ** 3 / [time] | Da ([time]) | ['t0005:row24:col1', 't0005:row24:col2', 't0005:row24:col3', 't0005:row24:col4'] |
| C5_dimension_Q27 | fail | [length] ** 3 / [time] | Da ([time]) | ['t0005:row27:col1', 't0005:row27:col2', 't0005:row27:col3', 't0005:row27:col4'] |
| C5_dimension_Q301 | fail | 1 / [time] | Da ([time]) | ['t0005:row12:col1', 't0005:row12:col2', 't0005:row12:col3', 't0005:row12:col4', 't0005:row12:col5'] |
| C5_dimension_Q374 | fail | [mass] / [substance] | Da ([time]) | ['t0005:row1:col1', 't0005:row1:col2', 't0005:row1:col3', 't0005:row1:col4'] |
| C5_dimension_Q47 | fail | 1 / [time] | Da ([time]) | ['t0005:row47:col1', 't0005:row47:col2', 't0005:row47:col3', 't0005:row47:col4'] |
| C5_dimension_Q48 | fail | 1 / [time] | Da ([time]) | ['t0005:row48:col1', 't0005:row48:col2', 't0005:row48:col3', 't0005:row48:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Li_2007:review'] |
| C5_dimension_Q51 | fail | 1 / [time] | Da ([time]) | ['t0005:row51:col1', 't0005:row51:col2', 't0005:row51:col3', 't0005:row51:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvanillin%5D%20Vanillin_Wang2025_reference&body=Drug%3A%20vanillin%0ARecord%3A%20Vanillin_Wang2025_reference%0APaper%3A%20Wang_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_vanillin/Vanillin_Wang2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 19:56 UTC</sub>
