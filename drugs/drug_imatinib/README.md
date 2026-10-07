<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;imatinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Imatinib_Chien2022_reference&quot;,&quot;label&quot;:&quot;Chien_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_imatinib/Imatinib_Chien2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Imatinib_Garrett2023_reference&quot;,&quot;label&quot;:&quot;Garrett_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_imatinib/Imatinib_Garrett2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Imatinib_Khosravan2016_reference&quot;,&quot;label&quot;:&quot;Khosravan_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_imatinib/Imatinib_Khosravan2016_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# imatinib

- **generic name:** imatinib
- **ATC codes:** `L01EA01`, `L01XE01`
- **DrugBank:** [DB00619](https://go.drugbank.com/drugs/DB00619) · **PubChem:** [CID 5291](https://pubchem.ncbi.nlm.nih.gov/compound/5291)
- **molar mass:** 493.6027 g/mol (C29H31N7O) — DrugBank
- **groups:** approved, investigational

## About

Imatinib is a tyrosine-kinase inhibitor used to treat several cancers, including chronic myeloid leukemia, gastrointestinal stromal tumors, dermatofibrosarcoma protuberans, and other leukemias. It is widely used and appears on the WHO list of essential medicines, with several products authorised in the European Union for these conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q177094](https://www.wikidata.org/wiki/Q177094) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| imatinib | parent | 493.603 | C29H31N7O | DrugBank | [5291](https://pubchem.ncbi.nlm.nih.gov/compound/5291) | Chien_2022, Delbaldo_2006 |
| CGP 74588 | metabolite | 479.588 | C28H29N7O | PubChem | [9869737](https://pubchem.ncbi.nlm.nih.gov/compound/9869737) | Delbaldo_2006 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:42 | 10:32 | 3/1/1 | 1/1/0 | 0/0/0 | 303,416/60,479 | openai / gpt-6-luna | 12 | 2/10 | 10/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chien_2022_reference](drugs/drug_imatinib/Imatinib_Chien2022_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 | Chien YH et al., Population pharmacokinetic modelling of…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04454-y](https://doi.org/10.1007/s00280-022-04454-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Garrett_2023_reference](drugs/drug_imatinib/Imatinib_Garrett2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Garrett M et al., Population modeling of bosutinib exposu…, Cancer medicine (2023) | [10.1002/cam4.6439](https://doi.org/10.1002/cam4.6439) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Khosravan_2016_reference](drugs/drug_imatinib/Imatinib_Khosravan2016_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Khosravan R et al., Population Pharmacokinetic/Pharmacodyna…, Clinical pharmacokinetics (2016) | [10.1007/s40262-016-0404-5](https://doi.org/10.1007/s40262-016-0404-5) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Delbaldo_2006_reference](drugs/drug_imatinib/Imatinib_Delbaldo2006_reference.md) | — | parent + metabolite (no model) | 4 | Delbaldo C et al., Pharmacokinetic-pharmacodynamic relatio…, Clinical cancer research :… (2006) | [10.1158/1078-0432.CCR-05-2596](https://doi.org/10.1158/1078-0432.CCR-05-2596) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Baalbaki_2023_reference](drugs/drug_imatinib/Imatinib_Baalbaki2023_reference.md) | — | 1-compartment (no model) | 0 | Baalbaki N et al., Pharmacokinetics and pharmacodynamics o…, European journal of pharmac… (2023) | [10.1016/j.ejps.2023.106418](https://doi.org/10.1016/j.ejps.2023.106418) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Huynh_2023_SARS_CoV_2_propagation_in_Calu_3_cells_pre_post](drugs/drug_imatinib/pd_Huynh_2023_SARS_CoV_2_propagation_in_Calu_3_cells_pre_post.md) | SARS-CoV-2 propagation in Calu-3 cells (pre-post) ← imatinib · inhibition effect | — | Huynh TTX et al., Amuvatinib Blocks SARS-CoV-2 Infection…, Microbiology spectrum (2023) | [10.1128/spectrum.05105-22](https://doi.org/10.1128/spectrum.05105-22) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Huynh_2023_SARS_CoV_2_propagation_in_Calu_3_cells_pretreatment](drugs/drug_imatinib/pd_Huynh_2023_SARS_CoV_2_propagation_in_Calu_3_cells_pretreatme.md) | SARS-CoV-2 propagation in Calu-3 cells (pretreatment) ← imatinib · inhibition effect | — | Huynh TTX et al., Amuvatinib Blocks SARS-CoV-2 Infection…, Microbiology spectrum (2023) | [10.1128/spectrum.05105-22](https://doi.org/10.1128/spectrum.05105-22) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Huynh_2023_anti_SARS_CoV_2_activity_in_Vero_E6_cells](drugs/drug_imatinib/pd_Huynh_2023_anti_SARS_CoV_2_activity_in_Vero_E6_cells.md) | anti-SARS-CoV-2 activity in Vero E6 cells ← imatinib · inhibition effect | — | Huynh TTX et al., Amuvatinib Blocks SARS-CoV-2 Infection…, Microbiology spectrum (2023) | [10.1128/spectrum.05105-22](https://doi.org/10.1128/spectrum.05105-22) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Said_2025_ICU_stay](drugs/drug_imatinib/pd_Said_2025_ICU_stay.md) | ICU stay ← imatinib (total and unbound) and N-desmethyl-imatinib (total; included in PM) · model not identified | — | Said MM et al., Exposure-response analysis of oral and…, European journal of pharmac… (2025) | [10.1016/j.ejps.2025.107332](https://doi.org/10.1016/j.ejps.2025.107332) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Said_2025_P_F](drugs/drug_imatinib/pd_Said_2025_P_F.md) | P/F ratio ← imatinib (total and unbound) and N-desmethyl-imatinib (total; included in PM) · model not identified | — | Said MM et al., Exposure-response analysis of oral and…, European journal of pharmac… (2025) | [10.1016/j.ejps.2025.107332](https://doi.org/10.1016/j.ejps.2025.107332) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Said_2025_WHO_score](drugs/drug_imatinib/pd_Said_2025_WHO_score.md) | WHO score ← imatinib (total and unbound) and N-desmethyl-imatinib (total; included in PM) · model not identified | — | Said MM et al., Exposure-response analysis of oral and…, European journal of pharmac… (2025) | [10.1016/j.ejps.2025.107332](https://doi.org/10.1016/j.ejps.2025.107332) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Said_2025_mortality](drugs/drug_imatinib/pd_Said_2025_mortality.md) | mortality ← imatinib (total and unbound) and N-desmethyl-imatinib (total; included in PM) · model not identified | — | Said MM et al., Exposure-response analysis of oral and…, European journal of pharmac… (2025) | [10.1016/j.ejps.2025.107332](https://doi.org/10.1016/j.ejps.2025.107332) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Said_2025_ventilator_free_days](drugs/drug_imatinib/pd_Said_2025_ventilator_free_days.md) | ventilator-free days ← imatinib (total and unbound) and N-desmethyl-imatinib (total; included in PM) · model not identified | — | Said MM et al., Exposure-response analysis of oral and…, European journal of pharmac… (2025) | [10.1016/j.ejps.2025.107332](https://doi.org/10.1016/j.ejps.2025.107332) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=imatinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate, `SLCO1A2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate, `SLC22A5` substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate, `SLC22A5` substrate, `SLCO1A2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor/substrate | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` inhibitor/substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `CYP3A7` inhibitor/substrate, `SLC22A1` substrate, `SLCO1B3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` substrate, `ABCC4` substrate, `SLC22A2` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` substrate, `ABCC2` substrate, `ABCC4` substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCA3 (substrate), ABL1 (inhibitor), BCR (inhibitor), CSF1R (target), DDR1 (target), DDR2 (target), KIT (target), MCL1 (other/unknown), PDGFRA (target), PDGFRB (target), RET (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 91 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 3  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Delbaldo_2006.pdf` | Delbaldo C et al., Pharmacokinetic-pharmacodynamic relatio…, Clinical cancer research :… (2006) | popPK | 10 | [10.1158/1078-0432.CCR-05-2596](https://doi.org/10.1158/1078-0432.CCR-05-2596) | [17062683](https://pubmed.ncbi.nlm.nih.gov/17062683) | Human population-PK results report numeric imatinib clearance and metabolite clearance values. |
| `Said_2025.pdf` | Said MM et al., Exposure-response analysis of oral and…, European journal of pharmac… (2025) | popPK | 9 | [10.1016/j.ejps.2025.107332](https://doi.org/10.1016/j.ejps.2025.107332) | [41109533](https://pubmed.ncbi.nlm.nih.gov/41109533) | Human imatinib PK modeling is described, but numeric disposition parameter values are not present in the evidence. |
| `Corral_2022.pdf` | Corral Alaejos Á et al., External evaluation of population pharm…, British journal of clinical… (2022) | popPK | 8 | [10.1111/bcp.15122](https://doi.org/10.1111/bcp.15122) | [34705297](https://pubmed.ncbi.nlm.nih.gov/34705297) | This is an external evaluation of imatinib popPK models, but no numeric disposition parameter values are present in the evidence. |

<sub>queue written 2026-10-07T01:33:41.370493+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cardoso_2018 | irrelevant | 0 | 0 | This is a review and reports no quantitative imatinib disposition parameters. |
| popPK | Corral_2022 | relevant | 8 | 0 | This is an external evaluation of imatinib popPK models, but no numeric disposition parameter values are present in the evidence. |
| popPK | Cortes_2009 | irrelevant | 1 | 1 | This is a review, not an original population-PK study, and the reported numbers are exposure concentrations rather than disposition parameters. |
| popPK | Dilli_2024 | relevant | 9 | 2 | The paper evaluates imatinib population-PK models, but the parameter-value snippets are too corrupted to read reliably. |
| popPK | Garrett_2023 | irrelevant | 0 | 0 | The quantitative PK parameters are for bosutinib; imatinib is only a comparator. |
| popPK | Giles_2013 | irrelevant | 0 | 0 | The study models nilotinib; imatinib is mentioned only as prior resistance or intolerance, with no imatinib PK values. |
| popPK | Gotta_2013 | irrelevant | 2 | 1 | This is a review, and the evidence gives exposure summaries but no numeric imatinib disposition parameter estimates. |
| popPK | Hanley_2025 | irrelevant | 0 | 0 | The population-PK analyses are for ponatinib; imatinib is only a comparator and no imatinib disposition parameters are reported. |
| popPK | Hansson_2013 | irrelevant | 0 | 0 | The study models sunitinib in human patients; imatinib is only mentioned as prior therapy, and no imatinib parameters are reported. |
| popPK | Huynh_2023 | irrelevant | 0 | 0 | Imatinib is tested in cell-based antiviral assays, reporting efficacy values rather than pharmacokinetic parameters. |
| popPK | Khosravan_2016 | irrelevant | 0 | 0 | The quantitative PK model is for sunitinib and its metabolite, not imatinib. |
| popPK | Michor_2005 | irrelevant | 1 | 0 | This models CML cell kinetics during imatinib therapy, not imatinib disposition, and reports no pharmacokinetic parameter values. |
| popPK | Rasmussen_2026 | irrelevant | 3 | 5 | Human concentration-ratio and time-trend estimates are reported, but no quantitative disposition parameters such as CL, V, or ka are given. |
| popPK | Said_2025 | relevant | 9 | 1 | Human imatinib PK modeling is described, but numeric disposition parameter values are not present in the evidence. |
| popPK | Yang_2025 | relevant | 8 | 1 | This evaluates population-PK models for imatinib, but readable model parameter values are not provided here and appear to be in omitted tables or supplementary material. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:34 UTC</sub>
