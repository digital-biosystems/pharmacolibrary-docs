<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;dasatinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dasatinib_Ande2018_reference&quot;,&quot;label&quot;:&quot;Ande_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dasatinib/Dasatinib_Ande2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dasatinib_Wang2013_reference&quot;,&quot;label&quot;:&quot;Wang_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dasatinib/Dasatinib_Wang2013_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# dasatinib

- **generic name:** dasatinib
- **ATC codes:** `L01EA02`
- **DrugBank:** [DB01254](https://go.drugbank.com/drugs/DB01254) · **PubChem:** [CID 3062316](https://pubchem.ncbi.nlm.nih.gov/compound/3062316)
- **molar mass:** 488.006 g/mol (C22H26ClN7O2S) — DrugBank
- **groups:** approved, investigational

## About

Dasatinib is a tyrosine-kinase inhibitor used to treat certain leukemias, including chronic myelogenous leukemia and precursor lymphoblastic leukemia-lymphoma. It is an approved medicine, authorised in the European Union, and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419940](https://www.wikidata.org/wiki/Q419940) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dasatinib | parent | 488.006 | C22H26ClN7O2S | DrugBank | [3062316](https://pubchem.ncbi.nlm.nih.gov/compound/3062316) | He_2023, Wang_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:31 | 9:20 | 2/1/1 | 5/0/1 | 0/0/0 | 249,227/52,880 | openai / gpt-6-luna | 8 | 2/6 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ande_2018_reference](drugs/drug_dasatinib/Dasatinib_Ande2018_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Ande A et al., Utility of a Novel Three-Dimensional an…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00403](https://doi.org/10.3389/fphar.2018.00403) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2013_reference](drugs/drug_dasatinib/Dasatinib_Wang2013_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Wang X et al., Differential effects of dosing regimen…, Clinical pharmacology : adv… (2013) | [10.2147/CPAA.S42796](https://doi.org/10.2147/CPAA.S42796) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [He_2023_reference](drugs/drug_dasatinib/Dasatinib_He2023_reference.md) | — | 1-compartment (no model) | 1 | He S et al., Population Pharmacokinetics and Pharmac…, Pharmaceutical research (2023) | [10.1007/s11095-023-03603-z](https://doi.org/10.1007/s11095-023-03603-z) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hassouneh_2024_reference](drugs/drug_dasatinib/Dasatinib_Hassouneh2024_reference.md) | — | 1-compartment (no model) | 0 | Hassouneh WB et al., Population Pharmacokinetics of Dasatini…, Pharmaceuticals (Basel, Swi… (2024) | [10.3390/ph17060671](https://doi.org/10.3390/ph17060671) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ande_2018_active_caspase_3](drugs/drug_dasatinib/pd_Ande_2018_active_caspase_3.md) | active caspase-3 ← dasatinib and everolimus · delayed effect through transit (transduction) compartments | model (no simulator) | Ande A et al., Utility of a Novel Three-Dimensional an…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00403](https://doi.org/10.3389/fphar.2018.00403) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ande_2018_active_caspase_3_activity](drugs/drug_dasatinib/pd_Ande_2018_active_caspase_3_activity.md) | active caspase-3 activity ← dasatinib and everolimus · delayed effect through transit (transduction) compartments | model (no simulator) | Ande A et al., Utility of a Novel Three-Dimensional an…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00403](https://doi.org/10.3389/fphar.2018.00403) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Araujo_2009_osteoclast_differentiation](drugs/drug_dasatinib/pd_Araujo_2009_osteoclast_differentiation.md) | osteoclast differentiation ← dasatinib · inhibition effect | — | Araujo JC et al., Dasatinib inhibits both osteoclast acti…, Cancer biology & therapy (2009) | [10.4161/cbt.8.22.9770](https://doi.org/10.4161/cbt.8.22.9770) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Ji_2009_200799_at](drugs/drug_dasatinib/pd_Ji_2009_200799_at.md) | HSP1A1 ← dasatinib · direct sigmoid Emax (Hill) effect | — | Ji RR et al., Transcriptional profiling of the dose r…, PLoS computational biology (2009) | [10.1371/journal.pcbi.1000512](https://doi.org/10.1371/journal.pcbi.1000512) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Ji_2009_202705_at](drugs/drug_dasatinib/pd_Ji_2009_202705_at.md) | CCNB2 ← dasatinib · direct sigmoid Emax (Hill) effect | — | Ji RR et al., Transcriptional profiling of the dose r…, PLoS computational biology (2009) | [10.1371/journal.pcbi.1000512](https://doi.org/10.1371/journal.pcbi.1000512) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Ji_2009_203077_s_at](drugs/drug_dasatinib/pd_Ji_2009_203077_s_at.md) | SMAD2 ← dasatinib · direct sigmoid Emax (Hill) effect | — | Ji RR et al., Transcriptional profiling of the dose r…, PLoS computational biology (2009) | [10.1371/journal.pcbi.1000512](https://doi.org/10.1371/journal.pcbi.1000512) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Ji_2009_204014_at](drugs/drug_dasatinib/pd_Ji_2009_204014_at.md) | DUSP4 ← dasatinib · direct sigmoid Emax (Hill) effect | — | Ji RR et al., Transcriptional profiling of the dose r…, PLoS computational biology (2009) | [10.1371/journal.pcbi.1000512](https://doi.org/10.1371/journal.pcbi.1000512) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Ji_2009_205016_at](drugs/drug_dasatinib/pd_Ji_2009_205016_at.md) | Transforming Growth Factor Alpha ← dasatinib · direct sigmoid Emax (Hill) effect | — | Ji RR et al., Transcriptional profiling of the dose r…, PLoS computational biology (2009) | [10.1371/journal.pcbi.1000512](https://doi.org/10.1371/journal.pcbi.1000512) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Ji_2009_205698_at](drugs/drug_dasatinib/pd_Ji_2009_205698_at.md) | MAP2K6 ← dasatinib · direct sigmoid Emax (Hill) effect | — | Ji RR et al., Transcriptional profiling of the dose r…, PLoS computational biology (2009) | [10.1371/journal.pcbi.1000512](https://doi.org/10.1371/journal.pcbi.1000512) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Ji_2009_205749_at](drugs/drug_dasatinib/pd_Ji_2009_205749_at.md) | CYP1A1 ← dasatinib · direct sigmoid Emax (Hill) effect | — | Ji RR et al., Transcriptional profiling of the dose r…, PLoS computational biology (2009) | [10.1371/journal.pcbi.1000512](https://doi.org/10.1371/journal.pcbi.1000512) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Ji_2009_207574_s_at](drugs/drug_dasatinib/pd_Ji_2009_207574_s_at.md) | GADD45B ← dasatinib · direct sigmoid Emax (Hill) effect | — | Ji RR et al., Transcriptional profiling of the dose r…, PLoS computational biology (2009) | [10.1371/journal.pcbi.1000512](https://doi.org/10.1371/journal.pcbi.1000512) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Ji_2009_207826_s_at](drugs/drug_dasatinib/pd_Ji_2009_207826_s_at.md) | ID3 ← dasatinib · direct sigmoid Emax (Hill) effect | — | Ji RR et al., Transcriptional profiling of the dose r…, PLoS computational biology (2009) | [10.1371/journal.pcbi.1000512](https://doi.org/10.1371/journal.pcbi.1000512) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Obr_2014_BCR_ABL](drugs/drug_dasatinib/pd_Obr_2014_BCR_ABL.md) | BCR-ABL dephosphorylation ← dasatinib · direct sigmoid Emax (Hill) effect | — | Obr A et al., Real-time analysis of imatinib- and das…, PloS one (2014) | [10.1371/journal.pone.0107367](https://doi.org/10.1371/journal.pone.0107367) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Obr_2014_HCK](drugs/drug_dasatinib/pd_Obr_2014_HCK.md) | HCK dephosphorylation ← dasatinib · direct sigmoid Emax (Hill) effect | — | Obr A et al., Real-time analysis of imatinib- and das…, PloS one (2014) | [10.1371/journal.pone.0107367](https://doi.org/10.1371/journal.pone.0107367) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Obr_2014_LYN](drugs/drug_dasatinib/pd_Obr_2014_LYN.md) | LYN dephosphorylation ← dasatinib · direct sigmoid Emax (Hill) effect | — | Obr A et al., Real-time analysis of imatinib- and das…, PloS one (2014) | [10.1371/journal.pone.0107367](https://doi.org/10.1371/journal.pone.0107367) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Obr_2014_SFK](drugs/drug_dasatinib/pd_Obr_2014_SFK.md) | SFK dephosphorylation ← dasatinib · direct sigmoid Emax (Hill) effect | — | Obr A et al., Real-time analysis of imatinib- and das…, PloS one (2014) | [10.1371/journal.pone.0107367](https://doi.org/10.1371/journal.pone.0107367) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Obr_2014_cell_death_induction](drugs/drug_dasatinib/pd_Obr_2014_cell_death_induction.md) | cell death induction ← dasatinib · direct sigmoid Emax (Hill) effect | — | Obr A et al., Real-time analysis of imatinib- and das…, PloS one (2014) | [10.1371/journal.pone.0107367](https://doi.org/10.1371/journal.pone.0107367) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Obr_2014_cell_growth_inhibition](drugs/drug_dasatinib/pd_Obr_2014_cell_growth_inhibition.md) | cell growth inhibition ← dasatinib · direct sigmoid Emax (Hill) effect | — | Obr A et al., Real-time analysis of imatinib- and das…, PloS one (2014) | [10.1371/journal.pone.0107367](https://doi.org/10.1371/journal.pone.0107367) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sauvey_2021_percent_inhibition_of_E_histolytica_trophozoite_growth](drugs/drug_dasatinib/pd_Sauvey_2021_percent_inhibition_of_E_histolytica_trophozoite_.md) | percent inhibition of E. histolytica trophozoite growth ← dasatinib · inhibition effect | — | Sauvey C et al., Antineoplastic kinase inhibitors: A new…, PLoS neglected tropical dis… (2021) | [10.1371/journal.pntd.0008425](https://doi.org/10.1371/journal.pntd.0008425) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ande_2018_cell_viability](drugs/drug_dasatinib/pd_Ande_2018_cell_viability.md) | cell viability ← dasatinib · direct sigmoid Emax (Hill) effect | model (no simulator) | Ande A et al., Utility of a Novel Three-Dimensional an…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00403](https://doi.org/10.3389/fphar.2018.00403) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Wang_2013_MCyR](drugs/drug_dasatinib/pd_Wang_2013_MCyR.md) | major cytogenetic response ← dasatinib · categorical (graded) response model | — | Wang X et al., Differential effects of dosing regimen…, Clinical pharmacology : adv… (2013) | [10.2147/CPAA.S42796](https://doi.org/10.2147/CPAA.S42796) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Wang_2013_pleural_effusion](drugs/drug_dasatinib/pd_Wang_2013_pleural_effusion.md) | pleural effusion ← dasatinib · time-to-event model | — | Wang X et al., Differential effects of dosing regimen…, Clinical pharmacology : adv… (2013) | [10.2147/CPAA.S42796](https://doi.org/10.2147/CPAA.S42796) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ande_2018_cellular_response_cell_count](drugs/drug_dasatinib/pd_Ande_2018_cellular_response_cell_count.md) | cellular response (cell count) ← active caspase-3 · disease-progression model | — | Ande A et al., Utility of a Novel Three-Dimensional an…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00403](https://doi.org/10.3389/fphar.2018.00403) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ande_2018_number_of_tumor_cells](drugs/drug_dasatinib/pd_Ande_2018_number_of_tumor_cells.md) | number of tumor cells ← active caspase-3 · disease-progression model | — | Ande A et al., Utility of a Novel Three-Dimensional an…, Frontiers in pharmacology (2018) | [10.3389/fphar.2018.00403](https://doi.org/10.3389/fphar.2018.00403) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dasatinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `FMO3` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate, `CYP1B1` substrate | DrugBank actor |
| metabolism | skin | `CYP1B1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABL1 (inhibitor), ABL1 (multitarget), ABL2 (multitarget), BCR (inhibitor), BTK (inhibitor), CSK (inhibitor), EPHA2 (target), EPHA5 (inhibitor), EPHB4 (inhibitor), FGR (inhibitor), FRK (binder), FYN (inhibitor), FYN (multitarget), HSPA8 (binder), KIT (target), LCK (inhibitor), LCK (multitarget), LYN (inhibitor), MAP3K20 (binder), MAPK14 (binder), NR4A3 (inhibitor), PDGFRB (target), PPAT (binder), SRC (inhibitor), SRC (multitarget), STAT5B (inhibitor), YES1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 26 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 2  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `He_2023.pdf` | He S et al., Population Pharmacokinetics and Pharmac…, Pharmaceutical research (2023) | popPK | 10 | [10.1007/s11095-023-03603-z](https://doi.org/10.1007/s11095-023-03603-z) | [37726405](https://pubmed.ncbi.nlm.nih.gov/37726405) | Human dasatinib population-PK model reports numeric CL/F of 126 L/h. |
| `Yang_2022.pdf` | Yang F et al., Population Pharmacokinetics and Safety…, Clinical pharmacokinetics (2022) | popPK | 10 | [10.1007/s40262-021-01054-6](https://doi.org/10.1007/s40262-021-01054-6) | [34240339](https://pubmed.ncbi.nlm.nih.gov/34240339) | This is a pediatric dasatinib population-PK study, but the evidence gives AUC values rather than numeric model disposition parameters. |
| `Ishida_2016.pdf` | Ishida Y et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (2016) | popPK | 9 | [10.1007/s00228-015-1968-y](https://doi.org/10.1007/s00228-015-1968-y) | [26507546](https://pubmed.ncbi.nlm.nih.gov/26507546) | Human population-PK analysis is reported, but no numeric dasatinib disposition parameters are provided in the evidence. |

<sub>queue written 2026-10-06T23:23:11.112988+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ande_2018 | irrelevant | 0 | 0 | Dasatinib is co-administered in an in vitro study, but the numeric disposition parameters shown are for paclitaxel, not dasatinib. |
| popPK | Araujo_2009 | irrelevant | 0 | 0 | In vitro pharmacology study with no quantitative dasatinib disposition parameters. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | Dasatinib is only a co-administered covariate in a methotrexate PK study, with no dasatinib parameters reported. |
| popPK | Gibson_2021 | irrelevant | 0 | 0 | The study models crizotinib, while dasatinib is only co-administered and no dasatinib PK values are reported. |
| popPK | Ishida_2016 | relevant | 9 | 1 | Human population-PK analysis is reported, but no numeric dasatinib disposition parameters are provided in the evidence. |
| popPK | Ji_2009 | irrelevant | 0 | 0 | This is an in-vitro transcriptional dose-response study, not a study reporting dasatinib disposition parameters. |
| popPK | Kim_2009 | irrelevant | 2 | 0 | Human dasatinib pharmacokinetic analyses are mentioned, but no quantitative disposition parameter values are provided. |
| popPK | Mashkani_2016 | irrelevant | 0 | 0 | This docking and cell-assay study reports no quantitative dasatinib pharmacokinetic parameters. |
| popPK | Moghrabi_2022 | irrelevant | 1 | 1 | This is an in vitro dissolution/absorption study, not a quantitative disposition-parameter study; no such parameter values are provided. |
| popPK | Obr_2014 | irrelevant | 0 | 0 | This is an in-vitro cell study reporting kinase-inhibition EC50 values, not dasatinib disposition parameters. |
| popPK | Sauvey_2021 | irrelevant | 0 | 0 | Dasatinib is tested for anti-amoebic activity in vitro, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Vechalapu_2024 | irrelevant | 0 | 0 | Dasatinib is only a combination-treatment agent; no dasatinib disposition parameters are reported. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | This is an in-vitro ADC activity study with no quantitative pharmacokinetic parameters reported. |
| popPK | Yang_2022 | relevant | 10 | 2 | This is a pediatric dasatinib population-PK study, but the evidence gives AUC values rather than numeric model disposition parameters. |
| popPK | Yuan_2025 | irrelevant | 0 | 0 | This is a pediatric vincristine PopPK study; dasatinib is only co-administered, with no dasatinib parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:23 UTC</sub>
