<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Lumefantrine&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/&quot;},{&quot;label&quot;:&quot;Kloprogge_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lumefantrine_Kloprogge2018_reference&quot;,&quot;label&quot;:&quot;Kloprogge_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Lumefantrine — `Lumefantrine_Kloprogge2018_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The lumefantrine parent–metabolite record was rejected because the model structure did not match the published topology, the metabolite (desbutyl-lumefantrine) peripheral volume V2/F was not extracted, and the output was set to the parent central compartment instead of the measured analyte.

<div class="pk-model-meta" hidden drug="Lumefantrine" model-id="Lumefantrine_Kloprogge2018_reference" status="rejected" stale="false" population="patients with uncomplicated Plasmodium falciparum malaria (children and pregnant women)" measured-compound="lumefantrine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Kloprogge F, Workman L, Borrmann S, Tékété M, Lefèvre G, Hamed K et al. Artemether-lumefantrine dosing for malaria treatment in young children and pregnant women: A pharmacokinetic-pharmacodynamic meta-analysis. PLoS medicine 15(6):e1002579 (2018).
  ·  DOI: [10.1371/journal.pmed.1002579](https://doi.org/10.1371/journal.pmed.1002579)

## Population and dosing

**Population:** patients with uncomplicated Plasmodium falciparum malaria (children and pregnant women) · condition uncomplicated falciparum malaria · age group mixed · n = 4122.

**Dosing:** 120, 180, 240, 360 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed artemether-lumefantrine, measured lumefantrine.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference/Lumefantrine_Kloprogge2018_reference.svg" alt="Lumefantrine_Kloprogge2018_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| F | Fab | 1 |  |
| ka (h−1) | kabs | 0.0386 | h−1 |
| CL/F (l/h) | CL/F | 1.35 | l/h |
| VC/F (l) | V1/F | 11.2 | l |
| Q/F (l/h) | Q/F | 0.344 | l/h |
| VP/F (l) | V2/F | 59.0 | l |
| CLDLF/F (l/h) | CL/F | 78.4 | l/h |
| VC DLF/F (l) | V1/F | 2470 | l |
| QDLF/F (l/h) | Q/F | 104 | l/h |
| VP DLF/F (l) | V2/F | 8650 | l |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.136). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The lumefantrine parent–metabolite record was rejected because the model structure did not match the published topology, the metabolite (desbutyl-lumefantrine) peripheral volume V2/F was not extracted, and the output was set to the parent central compartment instead of the measured analyte.**

The published structure is a parent (lumefantrine) with a two-compartment metabolite (desbutyl-lumefantrine, formed in the central compartment), but the built model used a one-compartment enteral structure, so the topology check failed. Parameter coverage reached only 7 of 9 expected parameters: the two V2/F values (peripheral volumes of distribution, 59.0 l for lumefantrine and 8650 l for desbutyl-lumefantrine) were neither emitted nor defaulted. The model output pointed at the parent's central compartment rather than the measured lumefantrine analyte compartment. The builder additionally left the lag time (Tlag) at a default and assumed apparent parameterization with F=1, Fm=1 and no molar correction. Extracted — lumefantrine: Fab 1, kabs 0.0386 h−1, CL/F 1.35 l/h, V1/F 11.2 l, Q/F 0.344 l/h, V2/F 59 l; desbutyl-lumefantrine: CL/F 78.4 l/h, V1/F 2.47e+03 l, Q/F 104 l/h, V2/F 8.65e+03 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has artemether-lumefantrine, the second reading lumefantrine; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 1 |  |  |  |  | exact (1) | pmed.1002579.t002:row2:col1, pmed.1002579.t002:row2:col3, Kloprogge_2018_table_4:row1:col1, Kloprogge_2018_table_4:row1:col3 |
| ka (h−1) | `Q49` · kabs | 0.0386 | h−1 | 1.072e-05 | 1/s | 1/h | exact (1) | pmed.1002579.t002:row4:col1, Kloprogge_2018_table_4:row3:col1 |
| CL/F (l/h) | `Q27` · CL/F | 1.35 | l/h | 3.75e-07 | m3/s | l/h | exact (1) | pmed.1002579.t002:row5:col1 |
| VC/F (l) | `Q290` · V1/F | 11.2 | l | 0.0112 | m3 | l | exact (1) | pmed.1002579.t002:row6:col1, pmed.1002579.t002:row6:col3 |
| Q/F (l/h) | `Q69` · Q/F | 0.344 | l/h | 9.556e-08 | m3/s | l/h | exact (1) | pmed.1002579.t002:row7:col1 |
| VP/F (l) | `Q82` · V2/F | 59.0 | l | 0.059 | m3 | l | exact (1) | pmed.1002579.t002:row8:col1 |
| CLDLF/F (l/h) | `Q27` · CL/F | 78.4 | l/h | 2.178e-05 | m3/s | l/h | exact (1) | Kloprogge_2018_table_4:row8:col1, Kloprogge_2018_table_4:row8:col3 |
| VC DLF/F (l) | `Q290` · V1/F | 2470 | l | 2.47 | m3 | l | exact (1) | Kloprogge_2018_table_4:row9:col1, Kloprogge_2018_table_4:row9:col3 |
| QDLF/F (l/h) | `Q69` · Q/F | 104 | l/h | 2.889e-05 | m3/s | l/h | exact (1) | Kloprogge_2018_table_4:row10:col1, Kloprogge_2018_table_4:row10:col3 |
| VP DLF/F (l) | `Q82` · V2/F | 8650 | l | 8.65 | m3 | l | exact (1) | Kloprogge_2018_table_4:row11:col1, Kloprogge_2018_table_4:row11:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F: relative bioavailability | Q87 | llm_confirmed |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'fixed effects' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'random effects' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Dose50 (mg/kg) on F' — extend the ontology if this is a real PK parameter (source ['pmed.1002579.t002:row9:col1', 'Kloprogge_2018_table_4:row12:col1'])
- dropped duplicate Q49 ('Pregnancy on ka', value '0.352') — already have one for this compound
- dropped duplicate Q27 ('CLLF/F (l/h)', value '1.56') — already have one for this compound
- dropped duplicate Q290 ('VC LF/F (l)', value '21.2') — already have one for this compound
- dropped duplicate Q27 ('QLF/F (l/h)', value '0.381') — already have one for this compound
- dropped duplicate Q82 ('VP LF/F (l)', value '53.8') — already have one for this compound
- dropped value-less row: 'Box–Cox shape parameter: shape parameter on Box–Cox transformation'
- dropped value-less row: 'ka: absorption rate constant'
- dropped value-less row: 'CL/F: elimination clearance'
- dropped value-less row: 'VC/F: apparent central volume of distribution'
- dropped value-less row: 'Q/F: inter-compartmental clearance'
- dropped value-less row: 'VP/F: apparent peripheral volume of distribution'
- dropped value-less row: 'dose50: dose (mg/kg) needed for half of maximum dose-dependent saturation of F'
- dropped value-less row: 'pregnancy: categorical covariate effect of pregnancy on ka'
- dropped value-less row: 'parasitaemia: continuous covariate effect of enrolment parasite density on F'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lumefantrine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 30/30 row label(s) assigned, 20 linked by role; re-tagged lumefantrine→desbutyl-lumefantrine ×9
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell pmed.1002579.t002:row2:col4 = '5.95 (65.3–75.3)'
- unparsed cell pmed.1002579.t002:row4:col2 = '2.72 (0.0368 to 0.0410)'
- unparsed cell pmed.1002579.t002:row5:col2 = '29.7 (0.538 to 2.19)'
- unparsed cell pmed.1002579.t002:row6:col2 = '30.3 (4.65 to 18.8)'
- unparsed cell pmed.1002579.t002:row6:col4 = '10.8 (115–165)'
- unparsed cell pmed.1002579.t002:row7:col2 = '29.8 (0.137 to 0.566)'
- unparsed cell pmed.1002579.t002:row8:col2 = '29.7 (23.6 to 96.4)'
- unparsed cell pmed.1002579.t002:row9:col2 = '41.5 (1.25 to 8.04)'
- unparsed cell pmed.1002579.t002:row10:col2 = '21.2 (0.212 to 0.510)'
- unparsed cell pmed.1002579.t002:row12:col2 = '4.88 (0.293 to 0.357)'
- unparsed cell Kloprogge_2018_table_4:row1:col4 = '57.2 (49.0 to 64.9)'
- unparsed cell Kloprogge_2018_table_4:row3:col2 = '13.3 (0.0349 to 0.0567)'
- unparsed cell Kloprogge_2018_table_4:row4:col2 = '6.24 (1.40 to 1.77)'
- unparsed cell Kloprogge_2018_table_4:row5:col2 = '19.5 (14.6 to 30.5)'
- unparsed cell Kloprogge_2018_table_4:row5:col4 = '110 (87.5 to 134)'
- unparsed cell Kloprogge_2018_table_4:row6:col2 = '11.3 (0.313 to 0.497)'
- unparsed cell Kloprogge_2018_table_4:row7:col2 = '8.60 (46.2 to 65.2)'
- unparsed cell Kloprogge_2018_table_4:row8:col2 = '7.80 (64.6 to 88.5)'
- unparsed cell Kloprogge_2018_table_4:row8:col4 = '39.8 (32.0 to 51.0)'
- unparsed cell Kloprogge_2018_table_4:row9:col2 = '13.1 (1,960 to 3,280)'
- unparsed cell Kloprogge_2018_table_4:row9:col4 = '82.3 (49.5 to 110)'
- unparsed cell Kloprogge_2018_table_4:row10:col2 = '13.2 (78.3 to 131)'
- unparsed cell Kloprogge_2018_table_4:row10:col4 = '33.8 (0.339 to 53.0)'
- unparsed cell Kloprogge_2018_table_4:row11:col2 = '14.2 (6,990 to 11,800)'
- unparsed cell Kloprogge_2018_table_4:row11:col4 = '45.3 (0.453 to 68.9)'
- unparsed cell Kloprogge_2018_table_4:row13:col2 = '52.4 (0.264 to 0.889)'
- unparsed cell Kloprogge_2018_table_4:row15:col2 = '11.8 (0.196 to 0.315)'
- unparsed cell Kloprogge_2018_table_4:row16:col2 = '8.46 (0.0467 to 0.0657)'
- companion parameter table 4 transcribed (20 record(s))
- LLM selected parameter table(s) 2, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.136 (3/22 fields) | 19 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` | 1 | 57.9 | mismatch |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 1.35 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 1.35 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cldlf/f].value` | 78.4 | 38.8 | mismatch |
| `gpt-oss-120b` | `parameters[f: relative bioavailability]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  | 57.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 0.0409 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.0386 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` |  | 0.344 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | 0.344 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[qdlf/f].value` | 104 | 34.9 | mismatch |
| `gpt-oss-120b` | `parameters[vc dlf/f].value` | 2470 | 86.0 | mismatch |
| `gpt-oss-120b` | `parameters[vc/f]` |  | 144 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 11.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp dlf/f].value` | 8650 | 47.7 | mismatch |
| `gpt-oss-120b` | `parameters[vp/f]` |  | 59.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f]` | 59.0 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | artemether-lumefantrine | lumefantrine | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['pmed.1002579.t002:row5:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Kloprogge_2018_table_4:row8:col1', 'Kloprogge_2018_table_4:row8:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['pmed.1002579.t002:row6:col1', 'pmed.1002579.t002:row6:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Kloprogge_2018_table_4:row9:col1', 'Kloprogge_2018_table_4:row9:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pmed.1002579.t002:row4:col1', 'Kloprogge_2018_table_4:row3:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['pmed.1002579.t002:row7:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Kloprogge_2018_table_4:row10:col1', 'Kloprogge_2018_table_4:row10:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['pmed.1002579.t002:row8:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Kloprogge_2018_table_4:row11:col1', 'Kloprogge_2018_table_4:row11:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.35 L/h | ['pmed.1002579.t002:row5:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 78.4 L/h | ['Kloprogge_2018_table_4:row8:col1', 'Kloprogge_2018_table_4:row8:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 11.2 L | ['pmed.1002579.t002:row6:col1', 'pmed.1002579.t002:row6:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.47e+03 L | ['Kloprogge_2018_table_4:row9:col1', 'Kloprogge_2018_table_4:row9:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 59 L | ['pmed.1002579.t002:row8:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 8.65e+03 L | ['Kloprogge_2018_table_4:row11:col1', 'Kloprogge_2018_table_4:row11:col3'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable | fail | Metabolite_C (measured=lumefantrine) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage | fail | 9 scholar param(s) emitted or defaulted | 7 covered | neither emitted nor in defaulted[]: ['V2/F', 'V2/F'] |
| T3_shared_parameters | pass | 4 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 120 mg, single dose, first-order absorption (ka 0.0386 /h, F 1). Doses in the paper: 120, 180, 240, 360 mg.

<dbs-fmusim paramsurl="drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference/Lumefantrine_Kloprogge2018_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference/Lumefantrine_Kloprogge2018_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Lumefantrine_Kloprogge2018_reference_params.json` · controls `Lumefantrine_Kloprogge2018_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blumefantrine%5D%20Lumefantrine_Kloprogge2018_reference&body=Drug%3A%20lumefantrine%0ARecord%3A%20Lumefantrine_Kloprogge2018_reference%0APaper%3A%20Kloprogge_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:11 UTC</sub>
