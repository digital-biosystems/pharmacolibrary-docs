<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;ibrutinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ibrutinib_Gisleskog2025_final_updated_population_pk_model&quot;,&quot;label&quot;:&quot;Gisleskog_2025_final_updated_population_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibrutinib_Gisleskog2025_previous_population_pk_model&quot;,&quot;label&quot;:&quot;Gisleskog_2025_previous_population_pk_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_previous_population_pk_model.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ibrutinib

- **generic name:** ibrutinib
- **ATC codes:** `L01EL01`
- **DrugBank:** [DB09053](https://go.drugbank.com/drugs/DB09053) · **PubChem:** [CID 24821094](https://pubchem.ncbi.nlm.nih.gov/compound/24821094)
- **molar mass:** 440.507 g/mol (C25H24N6O2) — DrugBank
- **groups:** approved, investigational

## About

Ibrutinib is a Bruton's tyrosine kinase inhibitor used to treat B-cell blood cancers such as chronic lymphocytic leukemia, mantle cell lymphoma, and other lymphomas. It is an approved medicine, authorised in the European Union, and is widely used in oncology care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5984881](https://www.wikidata.org/wiki/Q5984881) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ibrutinib | parent | 440.507 | C25H24N6O2 | DrugBank | [24821094](https://pubchem.ncbi.nlm.nih.gov/compound/24821094) | Gisleskog_2025, Ogawa_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:30 | 8:52 | 2/1/0 | 3/1/1 | 0/0/0 | 261,097/50,402 | openai / gpt-6-luna | 9 | 0/9 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gisleskog_2025_final_updated_population_pk_model](drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_final_updated_population_pk_model.md) | ▶ model + simulator | 1-compartment, oral | 8 (+1 cov.) | Gisleskog PO et al., Population Pharmacokinetic and Exposure…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70061](https://doi.org/10.1002/psp4.70061) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gisleskog_2025_previous_population_pk_model](drugs/drug_ibrutinib/Ibrutinib_Gisleskog2025_previous_population_pk_model.md) | ▶ model + simulator | 1-compartment, oral | 8 (+2 cov.) | Gisleskog PO et al., Population Pharmacokinetic and Exposure…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70061](https://doi.org/10.1002/psp4.70061) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Ogawa_2023_reference](drugs/drug_ibrutinib/Ibrutinib_Ogawa2023_reference.md) | — | 1-compartment (no model) | 1 | Ogawa T et al., Population Pharmacokinetic and Exposure…, Journal of clinical pharmac… (2023) | [10.1002/jcph.2200](https://doi.org/10.1002/jcph.2200) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Daneshmanesh_2018_MTT](drugs/drug_ibrutinib/pd_Daneshmanesh_2018_MTT.md) | Cytotoxicity (MTT) ← ibrutinib · direct sigmoid Emax (Hill) effect | — | Daneshmanesh AH et al., A receptor tyrosine kinase ROR1 inhibit…, PloS one (2018) | [10.1371/journal.pone.0198038](https://doi.org/10.1371/journal.pone.0198038) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gallais_2021_ALC](drugs/drug_ibrutinib/pd_Gallais_2021_ALC.md) | Absolute lymphocyte count ← ibrutinib · stimulation effect | — | Gallais F et al., Population PK-PD Modeling of Circulatin…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2189](https://doi.org/10.1002/cpt.2189) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sauvey_2021_Percent_inhibition_of_trophozoite_growth](drugs/drug_ibrutinib/pd_Sauvey_2021_Percent_inhibition_of_trophozoite_growth.md) | Percent inhibition of trophozoite growth ← ibrutinib · inhibition effect | — | Sauvey C et al., Antineoplastic kinase inhibitors: A new…, PLoS neglected tropical dis… (2021) | [10.1371/journal.pntd.0008425](https://doi.org/10.1371/journal.pntd.0008425) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gisleskog_2025_CRR](drugs/drug_ibrutinib/pd_Gisleskog_2025_CRR.md) | CRR ← ibrutinib · categorical (graded) response model | — | Gisleskog PO et al., Population Pharmacokinetic and Exposure…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70061](https://doi.org/10.1002/psp4.70061) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gisleskog_2025_OS](drugs/drug_ibrutinib/pd_Gisleskog_2025_OS.md) | OS ← ibrutinib · time-to-event model | — | Gisleskog PO et al., Population Pharmacokinetic and Exposure…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70061](https://doi.org/10.1002/psp4.70061) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gisleskog_2025_PFS](drugs/drug_ibrutinib/pd_Gisleskog_2025_PFS.md) | PFS ← ibrutinib · time-to-event model | — | Gisleskog PO et al., Population Pharmacokinetic and Exposure…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70061](https://doi.org/10.1002/psp4.70061) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gisleskog_2025_atrial_fibrillation_any](drugs/drug_ibrutinib/pd_Gisleskog_2025_atrial_fibrillation_any.md) | atrial fibrillation (any) ← ibrutinib · categorical (graded) response model | — | Gisleskog PO et al., Population Pharmacokinetic and Exposure…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70061](https://doi.org/10.1002/psp4.70061) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gisleskog_2025_hemorrhage_any](drugs/drug_ibrutinib/pd_Gisleskog_2025_hemorrhage_any.md) | hemorrhage (any) ← ibrutinib · categorical (graded) response model | — | Gisleskog PO et al., Population Pharmacokinetic and Exposure…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70061](https://doi.org/10.1002/psp4.70061) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Ibrahim_2023_dBP](drugs/drug_ibrutinib/pd_Ibrahim_2023_dBP.md) | diastolic blood pressure ← ibrutinib · indirect response — drug stimulates the production of diastolic blood pressure | model (no simulator) | Ibrahim EIK et al., Assessment of ibrutinib scheduling on l…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13010](https://doi.org/10.1002/psp4.13010) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Ibrahim_2023_pBtk](drugs/drug_ibrutinib/pd_Ibrahim_2023_pBtk.md) | phosphorylated Btk ← ibrutinib · indirect response — drug inhibits the production of phosphorylated Btk | model (no simulator) | Ibrahim EIK et al., Assessment of ibrutinib scheduling on l…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13010](https://doi.org/10.1002/psp4.13010) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Ibrahim_2023_sBP](drugs/drug_ibrutinib/pd_Ibrahim_2023_sBP.md) | systolic blood pressure ← ibrutinib · indirect response — drug stimulates the production of systolic blood pressure | model (no simulator) | Ibrahim EIK et al., Assessment of ibrutinib scheduling on l…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13010](https://doi.org/10.1002/psp4.13010) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ibrahim_2023_SPD](drugs/drug_ibrutinib/pd_Ibrahim_2023_SPD.md) | sum of the product of perpendicular diameters of lymph nodes ← ibrutinib · indirect response — drug inhibits the production of sum of the product of perpendicular diameters of lymph nodes | — | Ibrahim EIK et al., Assessment of ibrutinib scheduling on l…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13010](https://doi.org/10.1002/psp4.13010) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ibrahim_2023_leukocyte_count](drugs/drug_ibrutinib/pd_Ibrahim_2023_leukocyte_count.md) | leukocyte count ← ibrutinib · indirect response — drug inhibits the production of leukocyte count | — | Ibrahim EIK et al., Assessment of ibrutinib scheduling on l…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13010](https://doi.org/10.1002/psp4.13010) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ibrutinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: BTK (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 19 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Al-Ghazawi_2021.pdf` | Al-Ghazawi M et al., Population Pharmacokinetics of Ibrutini…, European journal of drug me… (2021) | popPK | 10 | [10.1007/s13318-021-00679-z](https://doi.org/10.1007/s13318-021-00679-z) | [33740218](https://pubmed.ncbi.nlm.nih.gov/33740218) | The human population-PK model is relevant, but numerical parameter values are not provided in the evidence. |
| `Gallais_2020.pdf` | Gallais F et al., Population Pharmacokinetics of Ibrutini…, Clinical pharmacokinetics (2020) | popPK | 10 | [10.1007/s40262-020-00884-0](https://doi.org/10.1007/s40262-020-00884-0) | [32328976](https://pubmed.ncbi.nlm.nih.gov/32328976) | The human population-PK model is relevant, but numeric CL and other disposition estimates are not provided; only variability and exposure values appear. |
| `Ogawa_2023.pdf` | Ogawa T et al., Population Pharmacokinetic and Exposure…, Journal of clinical pharmac… (2023) | popPK | 10 | [10.1002/jcph.2200](https://doi.org/10.1002/jcph.2200) | [36597869](https://pubmed.ncbi.nlm.nih.gov/36597869) | The population-PK analysis reports numeric relative-bioavailability covariate effects, though CL and volume values are not shown. |
| `Kimura_2025.pdf` | Kimura S et al., Simulation of perioperative Ibrutinib w…, Cancer chemotherapy and pha… (2025) | popPK | 8 | [10.1007/s00280-025-04816-2](https://doi.org/10.1007/s00280-025-04816-2) | [41264019](https://pubmed.ncbi.nlm.nih.gov/41264019) | Uses a previously reported ibrutinib PopPK model, but its parameter values are not given here; only AUC values are reported. |

<sub>queue written 2026-10-07T01:23:16.592811+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Ghazawi_2021 | relevant | 10 | 1 | The human population-PK model is relevant, but numerical parameter values are not provided in the evidence. |
| popPK | Daneshmanesh_2018 | irrelevant | 0 | 0 | This is an in-vitro cytotoxicity study, not a pharmacokinetic study, and reports no ibrutinib disposition parameters. |
| popPK | Eisenmann_2021 | relevant | 9 | 2 | The study reports mouse ibrutinib pharmacokinetics and a population-PK model, but numeric model parameter estimates are not readable here and appear to be in tables or figures not provided. |
| popPK | Gallais_2020 | relevant | 10 | 3 | The human population-PK model is relevant, but numeric CL and other disposition estimates are not provided; only variability and exposure values appear. |
| popPK | Gallais_2021 | irrelevant | 2 | 0 | The model describes lymphocyte dynamics using ibrutinib concentrations but reports no quantitative ibrutinib disposition parameters. |
| popPK | Ghaderi_2020 | irrelevant | 0 | 0 | Ibrutinib is only a comparator, and the mouse half-life mentioned is for KAN0441571C with data not shown. |
| popPK | Hossain_2025 | irrelevant | 1 | 0 | The numeric disposition values shown are for S-XL6, not ibrutinib. |
| popPK | Ibrahim_2023 | relevant | 8 | 2 | Human ibrutinib PK-PD modeling uses a referenced two-compartment PK model, but its disposition parameter values are not reported here. |
| popPK | Kimura_2025 | relevant | 8 | 1 | Uses a previously reported ibrutinib PopPK model, but its parameter values are not given here; only AUC values are reported. |
| popPK | Sauvey_2021 | irrelevant | 0 | 0 | This is an in-vitro anti-amoebic efficacy study, not a PK study, and the referenced EC50 tables and figures are not provided. |
| popPK | Schulz_2024 | irrelevant | 0 | 0 | This models CLL cell kinetics under ibrutinib, not ibrutinib pharmacokinetics, and reports no drug disposition parameter values. |
| popPK | Tam_2021 | irrelevant | 0 | 0 | This review focuses on zanubrutinib; ibrutinib is only mentioned as a clinical-trial comparator, with no quantitative PK values reported. |
| popPK | Waitman_2024 | irrelevant | 0 | 0 | The study tests hybrid compounds, not ibrutinib; the reported PK values are for compound 4f. |
| popPK | de_2020 | relevant | 9 | 1 | The study measured ibrutinib PK, but its values are only reported in Table S1, which is not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:23 UTC</sub>
