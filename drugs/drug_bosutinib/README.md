<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;bosutinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bosutinib_Garrett2023_reference&quot;,&quot;label&quot;:&quot;Garrett_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bosutinib/Bosutinib_Garrett2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# bosutinib

- **generic name:** bosutinib
- **ATC codes:** `L01EA04`
- **DrugBank:** [DB06616](https://go.drugbank.com/drugs/DB06616) · **PubChem:** [CID 5328940](https://pubchem.ncbi.nlm.nih.gov/compound/5328940)
- **molar mass:** 530.446 g/mol (C26H29Cl2N5O3) — DrugBank
- **groups:** approved, investigational

## About

Bosutinib is a protein kinase inhibitor used to treat leukemia, specifically myeloid leukemia. It is authorised in the European Union and is an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q894611](https://www.wikidata.org/wiki/Q894611) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bosutinib | parent | 530.446 | C26H29Cl2N5O3 | DrugBank | [5328940](https://pubchem.ncbi.nlm.nih.gov/compound/5328940) | Garrett_2023, Hsyu_2014 |

## Start here

> **Garrett_2023_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> adults with newly diagnosed chronic phase chronic myeloid leukemia, n = 574. [Run it in the simulator](drugs/drug_bosutinib/Bosutinib_Garrett2023_reference.md?tab=Simulation) · [record](drugs/drug_bosutinib/Bosutinib_Garrett2023_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 56.3 | L/h | 56.3 L/h | adults with newly diagnosed chronic phase chronic myeloid leukemia | 574 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Garrett_2023_reference](drugs/drug_bosutinib/Bosutinib_Garrett2023_reference.md) |
| CL | CL/F | 120 | L/h | 120 L/h | patients with solid tumors or Philadelphia chromosome-positive leukemia | 870 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hsyu_2014_reference](drugs/drug_bosutinib/Bosutinib_Hsyu2014_reference.md) |
| V | V | 1326 | L | 1325.7 L | adults with newly diagnosed chronic phase chronic myeloid leukemia | 574 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Garrett_2023_reference](drugs/drug_bosutinib/Bosutinib_Garrett2023_reference.md) |
| ka | kabs | 0.358 | 1/h | 0.358 per hour | adults with newly diagnosed chronic phase chronic myeloid leukemia | 574 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Garrett_2023_reference](drugs/drug_bosutinib/Bosutinib_Garrett2023_reference.md) |
| ka | kabs | 0.358 | 1/h | 0.358 per hour | patients with solid tumors or Philadelphia chromosome-positive leukemia | 870 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hsyu_2014_reference](drugs/drug_bosutinib/Bosutinib_Hsyu2014_reference.md) |
| t½ | t1/2z | 1.14 | h | 1.14 h | patients with solid tumors or Philadelphia chromosome-positive leukemia | 870 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Hsyu_2014_reference](drugs/drug_bosutinib/Bosutinib_Hsyu2014_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">100</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">1000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Garrett_2023 · CL</text><circle cx="321.3" cy="30.0" r="4" fill="#ef6c00"><title>Garrett_2023 · CL: 56.3 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Hsyu_2014 · CL/F</text><circle cx="378.9" cy="46.0" r="4" fill="#ef6c00"><title>Hsyu_2014 · CL/F: 120 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: unreported model parameter default(s): F</sub> | [Garrett_2023_reference](drugs/drug_bosutinib/Bosutinib_Garrett2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Garrett M et al., Population modeling of bosutinib exposu…, Cancer medicine (2023) | [10.1002/cam4.6439](https://doi.org/10.1002/cam4.6439) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Hsyu_2014_reference](drugs/drug_bosutinib/Bosutinib_Hsyu2014_reference.md) | — | 1-compartment (no model) | 4 | Hsyu PH et al., Population pharmacokinetic and pharmaco…, Drug metabolism and pharmac… (2014) | [10.2133/dmpk.DMPK-13-RG-126](https://doi.org/10.2133/dmpk.DMPK-13-RG-126) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hsyu_2013_CCyR](drugs/drug_bosutinib/pd_Hsyu_2013_CCyR.md) | complete cytogenetic response at 1 year ← bosutinib · stimulation effect | — | Hsyu PH et al., Pharmacokinetic-pharmacodynamic relatio…, Cancer chemotherapy and pha… (2013) | [10.1007/s00280-012-1998-4](https://doi.org/10.1007/s00280-012-1998-4) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hsyu_2013_CHR](drugs/drug_bosutinib/pd_Hsyu_2013_CHR.md) | cumulative complete hematologic response at 1 year ← bosutinib · stimulation effect | — | Hsyu PH et al., Pharmacokinetic-pharmacodynamic relatio…, Cancer chemotherapy and pha… (2013) | [10.1007/s00280-012-1998-4](https://doi.org/10.1007/s00280-012-1998-4) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hsyu_2013_CHR_2](drugs/drug_bosutinib/pd_Hsyu_2013_CHR_2.md) | CHR ← bosutinib · inhibition effect | — | Hsyu PH et al., Pharmacokinetic-pharmacodynamic relatio…, Cancer chemotherapy and pha… (2013) | [10.1007/s00280-012-1998-4](https://doi.org/10.1007/s00280-012-1998-4) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hsyu_2013_MCR](drugs/drug_bosutinib/pd_Hsyu_2013_MCR.md) | major cytogenetic response at 24 weeks ← bosutinib · model not identified | — | Hsyu PH et al., Pharmacokinetic-pharmacodynamic relatio…, Cancer chemotherapy and pha… (2013) | [10.1007/s00280-012-1998-4](https://doi.org/10.1007/s00280-012-1998-4) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hsyu_2013_MMR](drugs/drug_bosutinib/pd_Hsyu_2013_MMR.md) | major molecular response at 1 year ← bosutinib · stimulation effect | — | Hsyu PH et al., Pharmacokinetic-pharmacodynamic relatio…, Cancer chemotherapy and pha… (2013) | [10.1007/s00280-012-1998-4](https://doi.org/10.1007/s00280-012-1998-4) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hsyu_2013_incidence_of_rash](drugs/drug_bosutinib/pd_Hsyu_2013_incidence_of_rash.md) | incidence of rash ← bosutinib · stimulation effect | — | Hsyu PH et al., Pharmacokinetic-pharmacodynamic relatio…, Cancer chemotherapy and pha… (2013) | [10.1007/s00280-012-1998-4](https://doi.org/10.1007/s00280-012-1998-4) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hsyu_2013_pooled_incidence_of_diarrhea](drugs/drug_bosutinib/pd_Hsyu_2013_pooled_incidence_of_diarrhea.md) | pooled incidence of diarrhea ← bosutinib · stimulation effect | — | Hsyu PH et al., Pharmacokinetic-pharmacodynamic relatio…, Cancer chemotherapy and pha… (2013) | [10.1007/s00280-012-1998-4](https://doi.org/10.1007/s00280-012-1998-4) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Husiev_2025_cell_growth_inhibition_in_A375_free_bosutinib](drugs/drug_bosutinib/pd_Husiev_2025_cell_growth_inhibition_in_A375_free_bosutinib.md) | cell-growth inhibition in A375 (free bosutinib) ← Bosutinib · inhibition effect | — | Husiev Y et al., A Sterically Open Ruthenium-Based Photo…, Journal of the American Che… (2025) | [10.1021/jacs.5c14772](https://doi.org/10.1021/jacs.5c14772) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Husiev_2025_cell_growth_inhibition_in_U_87MG_free_bosutinib](drugs/drug_bosutinib/pd_Husiev_2025_cell_growth_inhibition_in_U_87MG_free_bosutinib.md) | cell-growth inhibition in U-87MG (free bosutinib) ← Bosutinib · inhibition effect | — | Husiev Y et al., A Sterically Open Ruthenium-Based Photo…, Journal of the American Che… (2025) | [10.1021/jacs.5c14772](https://doi.org/10.1021/jacs.5c14772) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sauvey_2021_inhibition](drugs/drug_bosutinib/pd_Sauvey_2021_inhibition.md) | E. histolytica trophozoite inhibition ← Bosutinib · inhibition effect | — | Sauvey C et al., Antineoplastic kinase inhibitors: A new…, PLoS neglected tropical dis… (2021) | [10.1371/journal.pntd.0008425](https://doi.org/10.1371/journal.pntd.0008425) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yang_2021_CC50](drugs/drug_bosutinib/pd_Yang_2021_CC50.md) | Huh7 cell viability (SARS2-S pseudovirus assay) ← bosutinib · direct sigmoid Emax (Hill) effect | — | Yang L et al., Identification of SARS-CoV-2 entry inhi…, Acta pharmacologica Sinica (2021) | [10.1038/s41401-020-00556-6](https://doi.org/10.1038/s41401-020-00556-6) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yang_2021_CC50_2](drugs/drug_bosutinib/pd_Yang_2021_CC50_2.md) | Huh-7 cell viability (SARS-CoV and MERS-CoV S pseudovirus assays) ← bosutinib · direct sigmoid Emax (Hill) effect | — | Yang L et al., Identification of SARS-CoV-2 entry inhi…, Acta pharmacologica Sinica (2021) | [10.1038/s41401-020-00556-6](https://doi.org/10.1038/s41401-020-00556-6) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yang_2021_MERS_CoV_S](drugs/drug_bosutinib/pd_Yang_2021_MERS_CoV_S.md) | MERS-CoV S pseudovirus infection ← bosutinib · direct sigmoid Emax (Hill) effect | — | Yang L et al., Identification of SARS-CoV-2 entry inhi…, Acta pharmacologica Sinica (2021) | [10.1038/s41401-020-00556-6](https://doi.org/10.1038/s41401-020-00556-6) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yang_2021_SARS2_S](drugs/drug_bosutinib/pd_Yang_2021_SARS2_S.md) | SARS2-S pseudovirus infectivity ← bosutinib · direct sigmoid Emax (Hill) effect | — | Yang L et al., Identification of SARS-CoV-2 entry inhi…, Acta pharmacologica Sinica (2021) | [10.1038/s41401-020-00556-6](https://doi.org/10.1038/s41401-020-00556-6) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yang_2021_SARS_CoV_S](drugs/drug_bosutinib/pd_Yang_2021_SARS_CoV_S.md) | SARS-CoV S pseudovirus infection ← bosutinib · direct sigmoid Emax (Hill) effect | — | Yang L et al., Identification of SARS-CoV-2 entry inhi…, Acta pharmacologica Sinica (2021) | [10.1038/s41401-020-00556-6](https://doi.org/10.1038/s41401-020-00556-6) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yang_2021_viral_RNA_load](drugs/drug_bosutinib/pd_Yang_2021_viral_RNA_load.md) | SARS-CoV-2 viral RNA load ← bosutinib · direct sigmoid Emax (Hill) effect | — | Yang L et al., Identification of SARS-CoV-2 entry inhi…, Acta pharmacologica Sinica (2021) | [10.1038/s41401-020-00556-6](https://doi.org/10.1038/s41401-020-00556-6) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zerva_2026_HIPK4](drugs/drug_bosutinib/pd_Zerva_2026_HIPK4.md) | HIPK4 inhibition ← bosutinib · direct sigmoid Emax (Hill) effect | — | Zerva A et al., Macrocyclization of Broad-Spectrum Kina…, bioRxiv : the preprint serv… (2026) | [10.64898/2026.04.22.720179](https://doi.org/10.64898/2026.04.22.720179) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zerva_2026_HIPK4_2](drugs/drug_bosutinib/pd_Zerva_2026_HIPK4_2.md) | HIPK4 cellular target engagement ← bosutinib · direct Emax (saturable) effect | — | Zerva A et al., Macrocyclization of Broad-Spectrum Kina…, bioRxiv : the preprint serv… (2026) | [10.64898/2026.04.22.720179](https://doi.org/10.64898/2026.04.22.720179) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Garrett_2023_ALT](drugs/drug_bosutinib/pd_Garrett_2023_ALT.md) | elevated alanine aminotransferase ← bosutinib · categorical (graded) response model | — | Garrett M et al., Population modeling of bosutinib exposu…, Cancer medicine (2023) | [10.1002/cam4.6439](https://doi.org/10.1002/cam4.6439) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Garrett_2023_AST](drugs/drug_bosutinib/pd_Garrett_2023_AST.md) | elevated aspartate aminotransferase ← bosutinib · categorical (graded) response model | — | Garrett M et al., Population modeling of bosutinib exposu…, Cancer medicine (2023) | [10.1002/cam4.6439](https://doi.org/10.1002/cam4.6439) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Garrett_2023_CCyR](drugs/drug_bosutinib/pd_Garrett_2023_CCyR.md) | cumulative complete cytogenetic response ← bosutinib · categorical (graded) response model | — | Garrett M et al., Population modeling of bosutinib exposu…, Cancer medicine (2023) | [10.1002/cam4.6439](https://doi.org/10.1002/cam4.6439) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Garrett_2023_MMR](drugs/drug_bosutinib/pd_Garrett_2023_MMR.md) | cumulative major molecular response ← bosutinib · categorical (graded) response model | — | Garrett M et al., Population modeling of bosutinib exposu…, Cancer medicine (2023) | [10.1002/cam4.6439](https://doi.org/10.1002/cam4.6439) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Garrett_2023_diarrhea](drugs/drug_bosutinib/pd_Garrett_2023_diarrhea.md) | diarrhea ← bosutinib · categorical (graded) response model | — | Garrett M et al., Population modeling of bosutinib exposu…, Cancer medicine (2023) | [10.1002/cam4.6439](https://doi.org/10.1002/cam4.6439) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Garrett_2023_nausea](drugs/drug_bosutinib/pd_Garrett_2023_nausea.md) | nausea ← bosutinib · categorical (graded) response model | — | Garrett M et al., Population modeling of bosutinib exposu…, Cancer medicine (2023) | [10.1002/cam4.6439](https://doi.org/10.1002/cam4.6439) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Garrett_2023_neutropenia](drugs/drug_bosutinib/pd_Garrett_2023_neutropenia.md) | neutropenia ← bosutinib · categorical (graded) response model | — | Garrett M et al., Population modeling of bosutinib exposu…, Cancer medicine (2023) | [10.1002/cam4.6439](https://doi.org/10.1002/cam4.6439) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Garrett_2023_rash](drugs/drug_bosutinib/pd_Garrett_2023_rash.md) | rash ← bosutinib · categorical (graded) response model | — | Garrett M et al., Population modeling of bosutinib exposu…, Cancer medicine (2023) | [10.1002/cam4.6439](https://doi.org/10.1002/cam4.6439) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Garrett_2023_thrombocytopenia_Grade_2](drugs/drug_bosutinib/pd_Garrett_2023_thrombocytopenia_Grade_2.md) | thrombocytopenia Grade &gt;2 ← bosutinib · categorical (graded) response model | — | Garrett M et al., Population modeling of bosutinib exposu…, Cancer medicine (2023) | [10.1002/cam4.6439](https://doi.org/10.1002/cam4.6439) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Garrett_2023_vomiting](drugs/drug_bosutinib/pd_Garrett_2023_vomiting.md) | vomiting ← bosutinib · categorical (graded) response model | — | Garrett M et al., Population modeling of bosutinib exposu…, Cancer medicine (2023) | [10.1002/cam4.6439](https://doi.org/10.1002/cam4.6439) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bosutinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABL1 (inhibitor), CAMK2G (inhibitor), FGR (inhibitor), HCK (inhibitor), LYN (inhibitor), MAP2K1 (inhibitor), MAP2K2 (inhibitor), MAP3K2 (inhibitor), SLK (inhibitor), SRC (inhibitor), TEC (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:54 | 10:20 | 2/0/0 | 6/0/0 | 0/0/0 | 324,566/55,213 | openai / gpt-6-luna | 6 | 1/5 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hsyu_2014.pdf` | Hsyu PH et al., Population pharmacokinetic and pharmaco…, Drug metabolism and pharmac… (2014) | popPK | 10 | [10.2133/dmpk.DMPK-13-RG-126](https://doi.org/10.2133/dmpk.DMPK-13-RG-126) | [24919837](https://pubmed.ncbi.nlm.nih.gov/24919837) | Human population-PK model reports numeric bosutinib disposition parameters in the evidence. |
| `Hsyu_2019.pdf` | Hsyu PH et al., Retraction notice to "Population pharma…, Drug metabolism and pharmac… (2019) | popPK | 9 | [10.1016/j.dmpk.2019.01.003](https://doi.org/10.1016/j.dmpk.2019.01.003) | [30922682](https://pubmed.ncbi.nlm.nih.gov/30922682) | The cited study models bosutinib pharmacokinetics, but no numeric parameter values are included in this retraction notice. |

<sub>queue written 2026-10-06T21:44:24.822747+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Combes_2022 | irrelevant | 0 | 0 | Bosutinib is only mentioned as a comparator; the model and quantitative analysis concern asciminib. |
| popPK | Cortes_2019 | irrelevant | 0 | 0 | This patient-reported outcomes study reports no quantitative bosutinib disposition parameters. |
| popPK | Hsyu_2013 | irrelevant | 3 | 0 | It uses exposure estimates from a previously developed model but reports no numeric bosutinib disposition parameters. |
| popPK | Hsyu_2019 | relevant | 9 | 0 | The cited study models bosutinib pharmacokinetics, but no numeric parameter values are included in this retraction notice. |
| popPK | Husiev_2025 | irrelevant | 0 | 0 | This is an in-vitro photochemistry and cytotoxicity study, not a bosutinib disposition study. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The population PK model is for asciminib; bosutinib is mentioned only as an efficacy comparator. |
| popPK | Sauvey_2021 | irrelevant | 0 | 0 | This is an in-vitro anti-amoebic activity study and reports no bosutinib disposition parameters. |
| popPK | Tsuda_2022 | irrelevant | 1 | 0 | This human renal-outcomes study reports eGFR changes, not quantitative bosutinib pharmacokinetic parameters. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | The study reports in-vitro antiviral potency for bosutinib, not pharmacokinetic disposition parameters. |
| popPK | Zerva_2026 | irrelevant | 0 | 0 | Bosutinib is a scaffold/comparator in kinase assays, with no quantitative bosutinib disposition parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 21:44 UTC</sub>
