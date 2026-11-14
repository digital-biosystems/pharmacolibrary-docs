<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Thiotepa&quot;,&quot;href&quot;:&quot;drugs/toxin_thiotepa/&quot;},{&quot;label&quot;:&quot;Kondo_2019 \u00b7 totaln_19&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Thiotepa_Kletzel1992_reference&quot;,&quot;label&quot;:&quot;Kletzel_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thiotepa/Thiotepa_Kletzel1992_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Thiotepa_Kondo2019_adult_malignant_lymphoman_10&quot;,&quot;label&quot;:&quot;Kondo_2019_adult_malignant_lymphoman_10&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thiotepa/Thiotepa_Kondo2019_adult_malignant_lymphoman_10.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Thiotepa_Kondo2019_pediatric_solid_tumor_or_pediatric_brain&quot;,&quot;label&quot;:&quot;Kondo_2019_pediatric_solid_tumor_or_pediatric_brain_tumorn_9&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thiotepa/Thiotepa_Kondo2019_pediatric_solid_tumor_or_pediatric_brain.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Thiotepa_Kondo2019_thiotepa&quot;,&quot;label&quot;:&quot;Kondo_2019_thiotepa&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thiotepa/Thiotepa_Kondo2019_thiotepa.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Thiotepa_Kondo2019_totaln_19&quot;,&quot;label&quot;:&quot;Kondo_2019_totaln_19&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thiotepa/Thiotepa_Kondo2019_totaln_19.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Thiotepa_de2004_reference&quot;,&quot;label&quot;:&quot;de_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thiotepa/Thiotepa_de2004_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Thiotepa_Masters1990_reference&quot;,&quot;label&quot;:&quot;Masters_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_thiotepa/Thiotepa_Masters1990_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Thiotepa — `Thiotepa_Kondo2019_totaln_19`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="Thiotepa" model-id="Thiotepa_Kondo2019_totaln_19" status="extracted" stale="false" population="Japanese pediatric patients with solid tumors or brain tumors and adult patients with malignant lymphoma undergoing autologous HSCT" measured-compound="thiotepa" parameterization="mechanistic" topology="1C"></div>

## Citation
Kondo E, Ikeda T, Goto H, Nishikori M, Maeda N, Matsumoto K et al. Pharmacokinetics of thiotepa in high-dose regimens for autologous hematopoietic stem cell transplant in Japanese patients with pediatric tumors or adult lymphoma. Cancer chemotherapy and pharmacology 84(4):849–860 (2019).
  ·  DOI: [10.1007/s00280-019-03914-2](https://doi.org/10.1007/s00280-019-03914-2)

## Population and dosing

**Population:** Japanese pediatric patients with solid tumors or brain tumors and adult patients with malignant lymphoma undergoing autologous HSCT · condition high-dose chemotherapy before autologous hematopoietic stem cell transplantation · age group mixed · n = 19.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 1 covariate effect.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/toxin_thiotepa/Thiotepa_Kondo2019_totaln_19/Thiotepa_Kondo2019_totaln_19.svg" alt="Thiotepa_Kondo2019_totaln_19 diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| decreased_appetite | decreased_appetite | 14 |  |
| Vz (L/m2) | V | 14.6 | L/m2 |
| CL (L/h/m2) | CL | 6.7 | L/h/m2 |
| t½ (h) | t1/2z | 1.5 | h |
| AUC0-t (h*ng/mL)a | AUCt | 17820.1 | h*ng/mL |
| AUC0-∞(h*ng/mL) | AUC∞ | 18071.6 | h*ng/mL |
| λz (/h) | kel | 0.5 | /h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.846). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[auc0-t (h*ng/ml)a].parameter_id`: this record has Q19, the second reading Q74; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| decreased_appetite | `Q900` · decreased_appetite | 14 |  |  |  |  |  | Tab2:row28:col3 |
| Vz (L/m2) | `Q61` · V | 14.6 | L/m2 | 0.02526 | m3 | l/m2 | exact (1) | Kondo_2019_table_S2:row2:col2, Kondo_2019_table_S2:row3:col2, Kondo_2019_table_S2:row4:col2, Kondo_2019_table_S2:row5:col2, Kondo_2019_table_S2:row6:col2, Kondo_2019_table_S2:row7:col2, Kondo_2019_table_S2:row8:col2, Kondo_2019_table_S2:row9:col2, Kondo_2019_table_S2:row11:col2, Kondo_2019_table_S2:row12:col2, Kondo_2019_table_S2:row13:col2, Kondo_2019_table_S2:row14:col2, Kondo_2019_table_S2:row15:col2, Kondo_2019_table_S2:row16:col2, Kondo_2019_table_S2:row17:col2, Kondo_2019_table_S2:row18:col2, Kondo_2019_table_S2:row21:col2, Kondo_2019_table_S2:row22:col2, Kondo_2019_table_S2:row23:col2, Kondo_2019_table_S2:row24:col2, Kondo_2019_table_S2:row25:col2, Kondo_2019_table_S2:row26:col2, Kondo_2019_table_S2:row27:col2, Kondo_2019_table_S2:row28:col2, Kondo_2019_table_S2:row30:col2, Kondo_2019_table_S2:row31:col2, Kondo_2019_table_S2:row32:col2, Kondo_2019_table_S2:row33:col2, Kondo_2019_table_S2:row34:col2, Kondo_2019_table_S2:row35:col2, Kondo_2019_table_S2:row36:col2, Kondo_2019_table_S2:row37:col2 |
| CL (L/h/m2) | `Q22` · CL | 6.7 | L/h/m2 | 3.22e-06 | m3/s | l/(h·m2) | exact (1) | Kondo_2019_table_S2:row2:col3, Kondo_2019_table_S2:row3:col3, Kondo_2019_table_S2:row4:col3, Kondo_2019_table_S2:row5:col3, Kondo_2019_table_S2:row6:col3, Kondo_2019_table_S2:row7:col3, Kondo_2019_table_S2:row8:col3, Kondo_2019_table_S2:row9:col3, Kondo_2019_table_S2:row11:col3, Kondo_2019_table_S2:row12:col3, Kondo_2019_table_S2:row13:col3, Kondo_2019_table_S2:row14:col3, Kondo_2019_table_S2:row15:col3, Kondo_2019_table_S2:row16:col3, Kondo_2019_table_S2:row17:col3, Kondo_2019_table_S2:row18:col3, Kondo_2019_table_S2:row21:col3, Kondo_2019_table_S2:row22:col3, Kondo_2019_table_S2:row23:col3, Kondo_2019_table_S2:row24:col3, Kondo_2019_table_S2:row25:col3, Kondo_2019_table_S2:row26:col3, Kondo_2019_table_S2:row27:col3, Kondo_2019_table_S2:row28:col3, Kondo_2019_table_S2:row30:col3, Kondo_2019_table_S2:row31:col3, Kondo_2019_table_S2:row32:col3, Kondo_2019_table_S2:row33:col3, Kondo_2019_table_S2:row34:col3, Kondo_2019_table_S2:row35:col3, Kondo_2019_table_S2:row36:col3, Kondo_2019_table_S2:row37:col3 |
| t½ (h) | `Q57` · t1/2z | 1.5 | h | 5400 | s | h | half_life_rule (0.95) | Kondo_2019_table_S2:row2:col4, Kondo_2019_table_S2:row3:col4, Kondo_2019_table_S2:row4:col4, Kondo_2019_table_S2:row5:col4, Kondo_2019_table_S2:row6:col4, Kondo_2019_table_S2:row7:col4, Kondo_2019_table_S2:row8:col4, Kondo_2019_table_S2:row9:col4, Kondo_2019_table_S2:row11:col4, Kondo_2019_table_S2:row12:col4, Kondo_2019_table_S2:row13:col4, Kondo_2019_table_S2:row14:col4, Kondo_2019_table_S2:row15:col4, Kondo_2019_table_S2:row16:col4, Kondo_2019_table_S2:row17:col4, Kondo_2019_table_S2:row18:col4, Kondo_2019_table_S2:row21:col4, Kondo_2019_table_S2:row22:col4, Kondo_2019_table_S2:row23:col4, Kondo_2019_table_S2:row24:col4, Kondo_2019_table_S2:row25:col4, Kondo_2019_table_S2:row26:col4, Kondo_2019_table_S2:row27:col4, Kondo_2019_table_S2:row28:col4, Kondo_2019_table_S2:row30:col4, Kondo_2019_table_S2:row31:col4, Kondo_2019_table_S2:row32:col4, Kondo_2019_table_S2:row33:col4, Kondo_2019_table_S2:row34:col4, Kondo_2019_table_S2:row35:col4, Kondo_2019_table_S2:row36:col4, Kondo_2019_table_S2:row37:col4 |
| AUC0-t (h*ng/mL)a | `Q19` · AUCt | 17820.1 | h*ng/mL | 64.15 | kg*s/m3 | (h·ng)/ml | llm_confirmed (0.6) | Kondo_2019_table_S2:row2:col5, Kondo_2019_table_S2:row3:col5, Kondo_2019_table_S2:row4:col5, Kondo_2019_table_S2:row5:col5, Kondo_2019_table_S2:row6:col5, Kondo_2019_table_S2:row7:col5, Kondo_2019_table_S2:row8:col5, Kondo_2019_table_S2:row9:col5, Kondo_2019_table_S2:row11:col5, Kondo_2019_table_S2:row12:col5, Kondo_2019_table_S2:row13:col5, Kondo_2019_table_S2:row14:col5, Kondo_2019_table_S2:row15:col5, Kondo_2019_table_S2:row16:col5, Kondo_2019_table_S2:row17:col5, Kondo_2019_table_S2:row18:col5, Kondo_2019_table_S2:row21:col5, Kondo_2019_table_S2:row22:col5, Kondo_2019_table_S2:row23:col5, Kondo_2019_table_S2:row24:col5, Kondo_2019_table_S2:row25:col5, Kondo_2019_table_S2:row26:col5, Kondo_2019_table_S2:row27:col5, Kondo_2019_table_S2:row28:col5, Kondo_2019_table_S2:row30:col5, Kondo_2019_table_S2:row31:col5, Kondo_2019_table_S2:row32:col5, Kondo_2019_table_S2:row33:col5, Kondo_2019_table_S2:row34:col5, Kondo_2019_table_S2:row35:col5, Kondo_2019_table_S2:row36:col5, Kondo_2019_table_S2:row37:col5 |
| AUC0-∞(h*ng/mL) | `Q17` · AUC∞ | 18071.6 | h*ng/mL | 65.06 | kg*s/m3 | (h·ng)/ml | exact (1) | Kondo_2019_table_S2:row2:col6, Kondo_2019_table_S2:row3:col6, Kondo_2019_table_S2:row4:col6, Kondo_2019_table_S2:row5:col6, Kondo_2019_table_S2:row6:col6, Kondo_2019_table_S2:row7:col6, Kondo_2019_table_S2:row8:col6, Kondo_2019_table_S2:row9:col6, Kondo_2019_table_S2:row11:col6, Kondo_2019_table_S2:row12:col6, Kondo_2019_table_S2:row13:col6, Kondo_2019_table_S2:row14:col6, Kondo_2019_table_S2:row15:col6, Kondo_2019_table_S2:row16:col6, Kondo_2019_table_S2:row17:col6, Kondo_2019_table_S2:row18:col6, Kondo_2019_table_S2:row21:col6, Kondo_2019_table_S2:row22:col6, Kondo_2019_table_S2:row23:col6, Kondo_2019_table_S2:row24:col6, Kondo_2019_table_S2:row25:col6, Kondo_2019_table_S2:row26:col6, Kondo_2019_table_S2:row27:col6, Kondo_2019_table_S2:row28:col6, Kondo_2019_table_S2:row30:col6, Kondo_2019_table_S2:row31:col6, Kondo_2019_table_S2:row32:col6, Kondo_2019_table_S2:row33:col6, Kondo_2019_table_S2:row34:col6, Kondo_2019_table_S2:row35:col6, Kondo_2019_table_S2:row36:col6, Kondo_2019_table_S2:row37:col6 |
| λz (/h) | `Q47` · kel | 0.5 | /h | 0.0001389 | 1/s | 1/h | exact (1) | Kondo_2019_table_S2:row2:col7, Kondo_2019_table_S2:row3:col7, Kondo_2019_table_S2:row4:col7, Kondo_2019_table_S2:row5:col7, Kondo_2019_table_S2:row6:col7, Kondo_2019_table_S2:row7:col7, Kondo_2019_table_S2:row8:col7, Kondo_2019_table_S2:row9:col7, Kondo_2019_table_S2:row11:col7, Kondo_2019_table_S2:row12:col7, Kondo_2019_table_S2:row13:col7, Kondo_2019_table_S2:row14:col7, Kondo_2019_table_S2:row15:col7, Kondo_2019_table_S2:row16:col7, Kondo_2019_table_S2:row17:col7, Kondo_2019_table_S2:row18:col7, Kondo_2019_table_S2:row21:col7, Kondo_2019_table_S2:row22:col7, Kondo_2019_table_S2:row23:col7, Kondo_2019_table_S2:row24:col7, Kondo_2019_table_S2:row25:col7, Kondo_2019_table_S2:row26:col7, Kondo_2019_table_S2:row27:col7, Kondo_2019_table_S2:row28:col7, Kondo_2019_table_S2:row30:col7, Kondo_2019_table_S2:row31:col7, Kondo_2019_table_S2:row32:col7, Kondo_2019_table_S2:row33:col7, Kondo_2019_table_S2:row34:col7, Kondo_2019_table_S2:row35:col7, Kondo_2019_table_S2:row36:col7, Kondo_2019_table_S2:row37:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Blood and lymphatic system disorders' — extend the ontology if this is a real PK parameter (source ['Tab2:row1:col3'])
- dropped unlinked row (NIL): 'Febrile neutropenia' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col3'])
- dropped unlinked row (NIL): 'Cardiac disorders' — extend the ontology if this is a real PK parameter (source ['Tab2:row3:col3'])
- dropped unlinked row (NIL): 'Pericardial effusion' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col3'])
- dropped unlinked row (NIL): 'Gastrointestinal disorders' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col3'])
- dropped unlinked row (NIL): 'Diarrhea' — extend the ontology if this is a real PK parameter (source ['Tab2:row6:col3'])
- dropped unlinked row (NIL): 'Nausea' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col3'])
- dropped unlinked row (NIL): 'Stomatitis' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col3'])
- dropped unlinked row (NIL): 'Vomiting' — extend the ontology if this is a real PK parameter (source ['Tab2:row9:col3'])
- dropped unlinked row (NIL): 'Oral disorder' — extend the ontology if this is a real PK parameter (source ['Tab2:row10:col3'])
- dropped unlinked row (NIL): 'Abdominal pain' — extend the ontology if this is a real PK parameter (source ['Tab2:row11:col3'])
- dropped unlinked row (NIL): 'Anal inflammation' — extend the ontology if this is a real PK parameter (source ['Tab2:row12:col3'])
- dropped unlinked row (NIL): 'Enterocolitis' — extend the ontology if this is a real PK parameter (source ['Tab2:row13:col3'])
- dropped unlinked row (NIL): 'Proctalgia' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col3'])
- dropped unlinked row (NIL): 'General disorders and administration site conditions' — extend the ontology if this is a real PK parameter (source ['Tab2:row15:col3'])
- dropped unlinked row (NIL): 'Malaise' — extend the ontology if this is a real PK parameter (source ['Tab2:row16:col3'])
- dropped unlinked row (NIL): 'Face edema' — extend the ontology if this is a real PK parameter (source ['Tab2:row17:col3'])
- dropped unlinked row (NIL): 'Pyrexia' — extend the ontology if this is a real PK parameter (source ['Tab2:row18:col3'])
- dropped unlinked row (NIL): 'Edema peripheral' — extend the ontology if this is a real PK parameter (source ['Tab2:row19:col3'])
- dropped unlinked row (NIL): 'Infections and infestations' — extend the ontology if this is a real PK parameter (source ['Tab2:row20:col3'])
- dropped unlinked row (NIL): 'Bacterial infection' — extend the ontology if this is a real PK parameter (source ['Tab2:row21:col3'])
- dropped unlinked row (NIL): 'Investigations' — extend the ontology if this is a real PK parameter (source ['Tab2:row22:col3'])
- dropped unlinked row (NIL): 'ALT increased' — extend the ontology if this is a real PK parameter (source ['Tab2:row23:col3'])
- dropped unlinked row (NIL): 'AST increased' — extend the ontology if this is a real PK parameter (source ['Tab2:row24:col3'])
- dropped unlinked row (NIL): 'GGT increased' — extend the ontology if this is a real PK parameter (source ['Tab2:row25:col3'])
- dropped unlinked row (NIL): 'Blood alkaline phosphatase increased' — extend the ontology if this is a real PK parameter (source ['Tab2:row26:col3'])
- dropped unlinked row (NIL): 'Metabolism and nutrition disorders' — extend the ontology if this is a real PK parameter (source ['Tab2:row27:col3'])
- covariate level 'Decreased appetite' → Q900:decreased_appetite = 14 (additive_shift on the model)
- dropped unlinked row (NIL): 'Hypoalbuminemia' — extend the ontology if this is a real PK parameter (source ['Tab2:row29:col3'])
- dropped unlinked row (NIL): 'Hypokalemia' — extend the ontology if this is a real PK parameter (source ['Tab2:row30:col3'])
- dropped unlinked row (NIL): 'Hypocalcemia' — extend the ontology if this is a real PK parameter (source ['Tab2:row31:col3'])
- dropped unlinked row (NIL): 'Nervous system disorders' — extend the ontology if this is a real PK parameter (source ['Tab2:row32:col3'])
- dropped unlinked row (NIL): 'Dysgeusia' — extend the ontology if this is a real PK parameter (source ['Tab2:row33:col3'])
- dropped unlinked row (NIL): 'Psychiatric disorders' — extend the ontology if this is a real PK parameter (source ['Tab2:row34:col3'])
- dropped unlinked row (NIL): 'Anxiety' — extend the ontology if this is a real PK parameter (source ['Tab2:row35:col3'])
- dropped unlinked row (NIL): 'Renal and urinary disorders' — extend the ontology if this is a real PK parameter (source ['Tab2:row36:col3'])
- dropped unlinked row (NIL): 'Acute kidney injury' — extend the ontology if this is a real PK parameter (source ['Tab2:row37:col3'])
- dropped unlinked row (NIL): 'Respiratory, thoracic and mediastinal disorders' — extend the ontology if this is a real PK parameter (source ['Tab2:row38:col3'])
- dropped unlinked row (NIL): 'Pleural effusion' — extend the ontology if this is a real PK parameter (source ['Tab2:row39:col3'])
- dropped unlinked row (NIL): 'Pulmonary edema' — extend the ontology if this is a real PK parameter (source ['Tab2:row40:col3'])
- dropped unlinked row (NIL): 'Skin and subcutaneous tissue disorders' — extend the ontology if this is a real PK parameter (source ['Tab2:row41:col3'])
- dropped unlinked row (NIL): 'Alopecia' — extend the ontology if this is a real PK parameter (source ['Tab2:row42:col3'])
- dropped unlinked row (NIL): 'Rash maculopapular' — extend the ontology if this is a real PK parameter (source ['Tab2:row43:col3'])
- dropped unlinked row (NIL): 'Skin hyperpigmentation' — extend the ontology if this is a real PK parameter (source ['Tab2:row44:col3'])
- dropped unlinked row (NIL): 'Dry skin' — extend the ontology if this is a real PK parameter (source ['Tab2:row45:col3'])
- dropped unlinked row (NIL): 'Vascular disorders' — extend the ontology if this is a real PK parameter (source ['Tab2:row46:col3'])
- dropped unlinked row (NIL): 'Capillary leak syndrome' — extend the ontology if this is a real PK parameter (source ['Tab2:row47:col3'])
- dropped unlinked row (NIL): 'Hypertension' — extend the ontology if this is a real PK parameter (source ['Tab2:row48:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=thiotepa
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- population split: 'totaln = 19' subgroup of Kondo_2019 (paper reports 5 populations: adult malignant lymphoman = 10, pediatric solid tumor or pediatric brain tumorn = 9, tepa, thiotepa, totaln = 19)
- row roles (LLM): model_class=noncompartmental; 0/54 row label(s) assigned, 0 linked by role
- molar mass: none found for 'TEPA (triethylene phosphoramide)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Tab2: units_need_context
- table Kondo_2019_table_S2: ragged_grid
- transposed table Kondo_2019_table_S2: logical view retains original source coordinates
- companion parameter table S2 transcribed (216 record(s))
- LLM selected parameter table(s) S2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.846 (11/13 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auc0-t (h*ng/ml)a].parameter_id` | Q19 | Q74 | mismatch |
| `gpt-oss:120b` | `parameters[vomiting]` |  | 13 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 1.6 | 1.51 | 0.9437 | 0.25 | reported t½β |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Kondo_2019_table_S2:row2:col6', 'Kondo_2019_table_S2:row3:col6', 'Kondo_2019_table_S2:row4:col6', 'Kondo_2019_table_S2:row5:col6', 'Kondo_2019_table_S2:row6:col6', 'Kondo_2019_table_S2:row7:col6', 'Kondo_2019_table_S2:row8:col6', 'Kondo_2019_table_S2:row9:col6', 'Kondo_2019_table_S2:row11:col6', 'Kondo_2019_table_S2:row12:col6', 'Kondo_2019_table_S2:row13:col6', 'Kondo_2019_table_S2:row14:col6', 'Kondo_2019_table_S2:row15:col6', 'Kondo_2019_table_S2:row16:col6', 'Kondo_2019_table_S2:row17:col6', 'Kondo_2019_table_S2:row18:col6', 'Kondo_2019_table_S2:row21:col6', 'Kondo_2019_table_S2:row22:col6', 'Kondo_2019_table_S2:row23:col6', 'Kondo_2019_table_S2:row24:col6', 'Kondo_2019_table_S2:row25:col6', 'Kondo_2019_table_S2:row26:col6', 'Kondo_2019_table_S2:row27:col6', 'Kondo_2019_table_S2:row28:col6', 'Kondo_2019_table_S2:row30:col6', 'Kondo_2019_table_S2:row31:col6', 'Kondo_2019_table_S2:row32:col6', 'Kondo_2019_table_S2:row33:col6', 'Kondo_2019_table_S2:row34:col6', 'Kondo_2019_table_S2:row35:col6', 'Kondo_2019_table_S2:row36:col6', 'Kondo_2019_table_S2:row37:col6'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Kondo_2019_table_S2:row2:col5', 'Kondo_2019_table_S2:row3:col5', 'Kondo_2019_table_S2:row4:col5', 'Kondo_2019_table_S2:row5:col5', 'Kondo_2019_table_S2:row6:col5', 'Kondo_2019_table_S2:row7:col5', 'Kondo_2019_table_S2:row8:col5', 'Kondo_2019_table_S2:row9:col5', 'Kondo_2019_table_S2:row11:col5', 'Kondo_2019_table_S2:row12:col5', 'Kondo_2019_table_S2:row13:col5', 'Kondo_2019_table_S2:row14:col5', 'Kondo_2019_table_S2:row15:col5', 'Kondo_2019_table_S2:row16:col5', 'Kondo_2019_table_S2:row17:col5', 'Kondo_2019_table_S2:row18:col5', 'Kondo_2019_table_S2:row21:col5', 'Kondo_2019_table_S2:row22:col5', 'Kondo_2019_table_S2:row23:col5', 'Kondo_2019_table_S2:row24:col5', 'Kondo_2019_table_S2:row25:col5', 'Kondo_2019_table_S2:row26:col5', 'Kondo_2019_table_S2:row27:col5', 'Kondo_2019_table_S2:row28:col5', 'Kondo_2019_table_S2:row30:col5', 'Kondo_2019_table_S2:row31:col5', 'Kondo_2019_table_S2:row32:col5', 'Kondo_2019_table_S2:row33:col5', 'Kondo_2019_table_S2:row34:col5', 'Kondo_2019_table_S2:row35:col5', 'Kondo_2019_table_S2:row36:col5', 'Kondo_2019_table_S2:row37:col5'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Kondo_2019_table_S2:row2:col3', 'Kondo_2019_table_S2:row3:col3', 'Kondo_2019_table_S2:row4:col3', 'Kondo_2019_table_S2:row5:col3', 'Kondo_2019_table_S2:row6:col3', 'Kondo_2019_table_S2:row7:col3', 'Kondo_2019_table_S2:row8:col3', 'Kondo_2019_table_S2:row9:col3', 'Kondo_2019_table_S2:row11:col3', 'Kondo_2019_table_S2:row12:col3', 'Kondo_2019_table_S2:row13:col3', 'Kondo_2019_table_S2:row14:col3', 'Kondo_2019_table_S2:row15:col3', 'Kondo_2019_table_S2:row16:col3', 'Kondo_2019_table_S2:row17:col3', 'Kondo_2019_table_S2:row18:col3', 'Kondo_2019_table_S2:row21:col3', 'Kondo_2019_table_S2:row22:col3', 'Kondo_2019_table_S2:row23:col3', 'Kondo_2019_table_S2:row24:col3', 'Kondo_2019_table_S2:row25:col3', 'Kondo_2019_table_S2:row26:col3', 'Kondo_2019_table_S2:row27:col3', 'Kondo_2019_table_S2:row28:col3', 'Kondo_2019_table_S2:row30:col3', 'Kondo_2019_table_S2:row31:col3', 'Kondo_2019_table_S2:row32:col3', 'Kondo_2019_table_S2:row33:col3', 'Kondo_2019_table_S2:row34:col3', 'Kondo_2019_table_S2:row35:col3', 'Kondo_2019_table_S2:row36:col3', 'Kondo_2019_table_S2:row37:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  |  |  | ['Kondo_2019_table_S2:row2:col7', 'Kondo_2019_table_S2:row3:col7', 'Kondo_2019_table_S2:row4:col7', 'Kondo_2019_table_S2:row5:col7', 'Kondo_2019_table_S2:row6:col7', 'Kondo_2019_table_S2:row7:col7', 'Kondo_2019_table_S2:row8:col7', 'Kondo_2019_table_S2:row9:col7', 'Kondo_2019_table_S2:row11:col7', 'Kondo_2019_table_S2:row12:col7', 'Kondo_2019_table_S2:row13:col7', 'Kondo_2019_table_S2:row14:col7', 'Kondo_2019_table_S2:row15:col7', 'Kondo_2019_table_S2:row16:col7', 'Kondo_2019_table_S2:row17:col7', 'Kondo_2019_table_S2:row18:col7', 'Kondo_2019_table_S2:row21:col7', 'Kondo_2019_table_S2:row22:col7', 'Kondo_2019_table_S2:row23:col7', 'Kondo_2019_table_S2:row24:col7', 'Kondo_2019_table_S2:row25:col7', 'Kondo_2019_table_S2:row26:col7', 'Kondo_2019_table_S2:row27:col7', 'Kondo_2019_table_S2:row28:col7', 'Kondo_2019_table_S2:row30:col7', 'Kondo_2019_table_S2:row31:col7', 'Kondo_2019_table_S2:row32:col7', 'Kondo_2019_table_S2:row33:col7', 'Kondo_2019_table_S2:row34:col7', 'Kondo_2019_table_S2:row35:col7', 'Kondo_2019_table_S2:row36:col7', 'Kondo_2019_table_S2:row37:col7'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Kondo_2019_table_S2:row2:col4', 'Kondo_2019_table_S2:row3:col4', 'Kondo_2019_table_S2:row4:col4', 'Kondo_2019_table_S2:row5:col4', 'Kondo_2019_table_S2:row6:col4', 'Kondo_2019_table_S2:row7:col4', 'Kondo_2019_table_S2:row8:col4', 'Kondo_2019_table_S2:row9:col4', 'Kondo_2019_table_S2:row11:col4', 'Kondo_2019_table_S2:row12:col4', 'Kondo_2019_table_S2:row13:col4', 'Kondo_2019_table_S2:row14:col4', 'Kondo_2019_table_S2:row15:col4', 'Kondo_2019_table_S2:row16:col4', 'Kondo_2019_table_S2:row17:col4', 'Kondo_2019_table_S2:row18:col4', 'Kondo_2019_table_S2:row21:col4', 'Kondo_2019_table_S2:row22:col4', 'Kondo_2019_table_S2:row23:col4', 'Kondo_2019_table_S2:row24:col4', 'Kondo_2019_table_S2:row25:col4', 'Kondo_2019_table_S2:row26:col4', 'Kondo_2019_table_S2:row27:col4', 'Kondo_2019_table_S2:row28:col4', 'Kondo_2019_table_S2:row30:col4', 'Kondo_2019_table_S2:row31:col4', 'Kondo_2019_table_S2:row32:col4', 'Kondo_2019_table_S2:row33:col4', 'Kondo_2019_table_S2:row34:col4', 'Kondo_2019_table_S2:row35:col4', 'Kondo_2019_table_S2:row36:col4', 'Kondo_2019_table_S2:row37:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['Kondo_2019_table_S2:row2:col2', 'Kondo_2019_table_S2:row3:col2', 'Kondo_2019_table_S2:row4:col2', 'Kondo_2019_table_S2:row5:col2', 'Kondo_2019_table_S2:row6:col2', 'Kondo_2019_table_S2:row7:col2', 'Kondo_2019_table_S2:row8:col2', 'Kondo_2019_table_S2:row9:col2', 'Kondo_2019_table_S2:row11:col2', 'Kondo_2019_table_S2:row12:col2', 'Kondo_2019_table_S2:row13:col2', 'Kondo_2019_table_S2:row14:col2', 'Kondo_2019_table_S2:row15:col2', 'Kondo_2019_table_S2:row16:col2', 'Kondo_2019_table_S2:row17:col2', 'Kondo_2019_table_S2:row18:col2', 'Kondo_2019_table_S2:row21:col2', 'Kondo_2019_table_S2:row22:col2', 'Kondo_2019_table_S2:row23:col2', 'Kondo_2019_table_S2:row24:col2', 'Kondo_2019_table_S2:row25:col2', 'Kondo_2019_table_S2:row26:col2', 'Kondo_2019_table_S2:row27:col2', 'Kondo_2019_table_S2:row28:col2', 'Kondo_2019_table_S2:row30:col2', 'Kondo_2019_table_S2:row31:col2', 'Kondo_2019_table_S2:row32:col2', 'Kondo_2019_table_S2:row33:col2', 'Kondo_2019_table_S2:row34:col2', 'Kondo_2019_table_S2:row35:col2', 'Kondo_2019_table_S2:row36:col2', 'Kondo_2019_table_S2:row37:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.7 |  |  | ['Kondo_2019_table_S2:row2:col3', 'Kondo_2019_table_S2:row3:col3', 'Kondo_2019_table_S2:row4:col3', 'Kondo_2019_table_S2:row5:col3', 'Kondo_2019_table_S2:row6:col3', 'Kondo_2019_table_S2:row7:col3', 'Kondo_2019_table_S2:row8:col3', 'Kondo_2019_table_S2:row9:col3', 'Kondo_2019_table_S2:row11:col3', 'Kondo_2019_table_S2:row12:col3', 'Kondo_2019_table_S2:row13:col3', 'Kondo_2019_table_S2:row14:col3', 'Kondo_2019_table_S2:row15:col3', 'Kondo_2019_table_S2:row16:col3', 'Kondo_2019_table_S2:row17:col3', 'Kondo_2019_table_S2:row18:col3', 'Kondo_2019_table_S2:row21:col3', 'Kondo_2019_table_S2:row22:col3', 'Kondo_2019_table_S2:row23:col3', 'Kondo_2019_table_S2:row24:col3', 'Kondo_2019_table_S2:row25:col3', 'Kondo_2019_table_S2:row26:col3', 'Kondo_2019_table_S2:row27:col3', 'Kondo_2019_table_S2:row28:col3', 'Kondo_2019_table_S2:row30:col3', 'Kondo_2019_table_S2:row31:col3', 'Kondo_2019_table_S2:row32:col3', 'Kondo_2019_table_S2:row33:col3', 'Kondo_2019_table_S2:row34:col3', 'Kondo_2019_table_S2:row35:col3', 'Kondo_2019_table_S2:row36:col3', 'Kondo_2019_table_S2:row37:col3'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 11.6 L/h |  |  | ['Kondo_2019_table_S2:row2:col3', 'Kondo_2019_table_S2:row3:col3', 'Kondo_2019_table_S2:row4:col3', 'Kondo_2019_table_S2:row5:col3', 'Kondo_2019_table_S2:row6:col3', 'Kondo_2019_table_S2:row7:col3', 'Kondo_2019_table_S2:row8:col3', 'Kondo_2019_table_S2:row9:col3', 'Kondo_2019_table_S2:row11:col3', 'Kondo_2019_table_S2:row12:col3', 'Kondo_2019_table_S2:row13:col3', 'Kondo_2019_table_S2:row14:col3', 'Kondo_2019_table_S2:row15:col3', 'Kondo_2019_table_S2:row16:col3', 'Kondo_2019_table_S2:row17:col3', 'Kondo_2019_table_S2:row18:col3', 'Kondo_2019_table_S2:row21:col3', 'Kondo_2019_table_S2:row22:col3', 'Kondo_2019_table_S2:row23:col3', 'Kondo_2019_table_S2:row24:col3', 'Kondo_2019_table_S2:row25:col3', 'Kondo_2019_table_S2:row26:col3', 'Kondo_2019_table_S2:row27:col3', 'Kondo_2019_table_S2:row28:col3', 'Kondo_2019_table_S2:row30:col3', 'Kondo_2019_table_S2:row31:col3', 'Kondo_2019_table_S2:row32:col3', 'Kondo_2019_table_S2:row33:col3', 'Kondo_2019_table_S2:row34:col3', 'Kondo_2019_table_S2:row35:col3', 'Kondo_2019_table_S2:row36:col3', 'Kondo_2019_table_S2:row37:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 25.3 L |  |  | ['Kondo_2019_table_S2:row2:col2', 'Kondo_2019_table_S2:row3:col2', 'Kondo_2019_table_S2:row4:col2', 'Kondo_2019_table_S2:row5:col2', 'Kondo_2019_table_S2:row6:col2', 'Kondo_2019_table_S2:row7:col2', 'Kondo_2019_table_S2:row8:col2', 'Kondo_2019_table_S2:row9:col2', 'Kondo_2019_table_S2:row11:col2', 'Kondo_2019_table_S2:row12:col2', 'Kondo_2019_table_S2:row13:col2', 'Kondo_2019_table_S2:row14:col2', 'Kondo_2019_table_S2:row15:col2', 'Kondo_2019_table_S2:row16:col2', 'Kondo_2019_table_S2:row17:col2', 'Kondo_2019_table_S2:row18:col2', 'Kondo_2019_table_S2:row21:col2', 'Kondo_2019_table_S2:row22:col2', 'Kondo_2019_table_S2:row23:col2', 'Kondo_2019_table_S2:row24:col2', 'Kondo_2019_table_S2:row25:col2', 'Kondo_2019_table_S2:row26:col2', 'Kondo_2019_table_S2:row27:col2', 'Kondo_2019_table_S2:row28:col2', 'Kondo_2019_table_S2:row30:col2', 'Kondo_2019_table_S2:row31:col2', 'Kondo_2019_table_S2:row32:col2', 'Kondo_2019_table_S2:row33:col2', 'Kondo_2019_table_S2:row34:col2', 'Kondo_2019_table_S2:row35:col2', 'Kondo_2019_table_S2:row36:col2', 'Kondo_2019_table_S2:row37:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_thiotepa/Thiotepa_Kondo2019_totaln_19/Thiotepa_Kondo2019_totaln_19_modelica.zip" download>Thiotepa_Kondo2019_totaln_19_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/toxin_thiotepa/Thiotepa_Kondo2019_totaln_19/Thiotepa_Kondo2019_totaln_19_fmi.zip" download>Thiotepa_Kondo2019_totaln_19_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_thiotepa/Thiotepa_Kondo2019_totaln_19/Thiotepa_Kondo2019_totaln_19_matlab.zip" download>Thiotepa_Kondo2019_totaln_19_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_thiotepa/Thiotepa_Kondo2019_totaln_19/Thiotepa_Kondo2019_totaln_19_matlab_simbio.zip" download>Thiotepa_Kondo2019_totaln_19_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_thiotepa/Thiotepa_Kondo2019_totaln_19/Thiotepa_Kondo2019_totaln_19_sbml.zip" download>Thiotepa_Kondo2019_totaln_19_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_thiotepa/Thiotepa_Kondo2019_totaln_19/Thiotepa_Kondo2019_totaln_19_cellml.zip" download>Thiotepa_Kondo2019_totaln_19_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1892 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1e-05 | kg |
| input | model | `Cl` | 3.22e-06 | m3/s |
| input | model | `VdPerKg` | 0.0003608 | m3/kg |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Kondo E, Ikeda T, Goto H, Nishikori M, Maeda N, Matsumoto K et al. Pharmacokinetics of thiotepa in high-dose regimens for autologous hematopoietic stem cell transplant in Japanese patients with pediatric tumors or adult lymphoma. Cancer chemotherapy and pharmacology 84(4):849–860 (2019). [doi:10.1007/s00280-019-03914-2](https://doi.org/10.1007/s00280-019-03914-2)

**This record:** Pharmacolibrary, model `Thiotepa_Kondo2019_totaln_19`. <https://pharmacolibrary.github.io/#/drugs/toxin_thiotepa/Thiotepa_Kondo2019_totaln_19>

```bibtex
@misc{pharmacolibrary_ThiotepaKondo2019totaln19,
  title  = {{Pharmacolibrary model Thiotepa_Kondo2019_totaln_19}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_thiotepa/Thiotepa_Kondo2019_totaln_19},
  note   = {Parameters from doi:10.1007/s00280-019-03914-2},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 10 mg infusion over 10 min, single dose. _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/toxin_thiotepa/Thiotepa_Kondo2019_totaln_19/Thiotepa_Kondo2019_totaln_19_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_thiotepa/Thiotepa_Kondo2019_totaln_19/Thiotepa_Kondo2019_totaln_19_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Thiotepa_Kondo2019_totaln_19_params.json` · controls `Thiotepa_Kondo2019_totaln_19_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bthiotepa%5D%20Thiotepa_Kondo2019_totaln_19&body=Drug%3A%20thiotepa%0ARecord%3A%20Thiotepa_Kondo2019_totaln_19%0APaper%3A%20Kondo_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_thiotepa/Thiotepa_Kondo2019_totaln_19%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 03:28 UTC</sub>
