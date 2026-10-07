<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;ifosfamide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ifosfamide_Attia2023_reference&quot;,&quot;label&quot;:&quot;Attia_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ifosfamide/Ifosfamide_Attia2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ifosfamide_Kerbusch2001v4_reference&quot;,&quot;label&quot;:&quot;Kerbusch_2001_4_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ifosfamide/Ifosfamide_Kerbusch2001v4_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ifosfamide_Zhang2015_reference&quot;,&quot;label&quot;:&quot;Zhang_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ifosfamide/Ifosfamide_Zhang2015_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ifosfamide

- **generic name:** ifosfamide
- **ATC codes:** `L01AA06`
- **DrugBank:** [DB01181](https://go.drugbank.com/drugs/DB01181) · **PubChem:** [CID 3690](https://pubchem.ncbi.nlm.nih.gov/compound/3690)
- **molar mass:** 261.086 g/mol (C7H15Cl2N2O2P) — DrugBank
- **groups:** approved, investigational

## About

Ifosfamide is an alkylating anticancer drug used to treat various cancers, including sarcomas, lymphomas, and cancers of the breast, ovary, stomach, pancreas, and testis. It is an approved medicine and is included on the WHO list of essential medicines, so it is used widely in cancer care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418560](https://www.wikidata.org/wiki/Q418560) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ifosfamide | parent | 261.086 | C7H15Cl2N2O2P | DrugBank | [3690](https://pubchem.ncbi.nlm.nih.gov/compound/3690) | Kerbusch_2001_2, Kerbusch_2001_4, Valentin_2023 |
| 2-dechloroethyl-ifosfamide | metabolite | 198.587 | C5H12ClN2O2P | PubChem | [119105](https://pubchem.ncbi.nlm.nih.gov/compound/119105) | Kerbusch_2001_2 |
| 2-dechloroifosfamide | metabolite | — (mass units only) | — | — | — | — |
| 3-dechloroethyl-ifosfamide | metabolite | 198.587 | C5H12ClN2O2P | PubChem | [114861](https://pubchem.ncbi.nlm.nih.gov/compound/114861) | Kerbusch_2001_2 |
| 3-dechloroethylifosfamide (3DC) | metabolite | — (mass units only) | — | — | — | — |
| 3-dechloroifosfamide | metabolite | — (mass units only) | — | — | — | — |
| 4-hydroxy-ifosfamide | metabolite | 277.082 | C7H15Cl2N2O3P | PubChem | [308171](https://pubchem.ncbi.nlm.nih.gov/compound/308171) | Kerbusch_2001_2 |
| BMG | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:30 | 20:14 | 5/5/0 | 1/0/0 | 0/0/0 | 716,590/56,368 | einfracz / qwen3.8-27b | 35 | 5/27 | 34/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Attia_2023_reference](drugs/drug_ifosfamide/Ifosfamide_Attia2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Attia S et al., Randomized Phase 2 Clinical Trial of Ol…, Cancers (2023) | [10.3390/cancers15194871](https://doi.org/10.3390/cancers15194871) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kerbusch_2001_2_reference](drugs/drug_ifosfamide/Ifosfamide_Kerbusch2001v2_reference.md) | model (no simulator) | 1-compartment general linear | 3 | Kerbusch T et al., Population pharmacokinetics of ifosfami…, Clinical pharmacokinetics (2001) | [10.2165/00003088-200140080-00005](https://doi.org/10.2165/00003088-200140080-00005) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kerbusch_2001_4_reference](drugs/drug_ifosfamide/Ifosfamide_Kerbusch2001v4_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Kerbusch T et al., Population pharmacokinetics and explora…, European journal of clinica… (2001) | [10.1007/s002280100322](https://doi.org/10.1007/s002280100322) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Valentin_2023_reference](drugs/drug_ifosfamide/Ifosfamide_Valentin2023_reference.md) | model (no simulator) | 1-compartment general linear | 6 | Valentin T et al., Population pharmacokinetic analysis rev…, European journal of pharmac… (2023) | [10.1016/j.ejps.2023.106420](https://doi.org/10.1016/j.ejps.2023.106420) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhang_2015_reference](drugs/drug_ifosfamide/Ifosfamide_Zhang2015_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Zhang W et al., Population pharmacokinetics of high-dos…, Chinese medical journal (2015) | [10.4103/0366-6999.147829](https://doi.org/10.4103/0366-6999.147829) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Boddy_1995_reference](drugs/drug_ifosfamide/Ifosfamide_Boddy1995_reference.md) | — | parent + metabolite (no model) | 0 | Boddy AV et al., The kinetics of the auto-induction of i…, Cancer chemotherapy and pha… (1995) | [10.1007/BF00685732](https://doi.org/10.1007/BF00685732) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Brain_2008_reference](drugs/drug_ifosfamide/Ifosfamide_Brain2008_reference.md) | — | parent + metabolite (no model) | 0 | Brain EG et al., Population pharmacokinetics and explora…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2007.03095.x](https://doi.org/10.1111/j.1365-2125.2007.03095.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Di_2000_reference](drugs/drug_ifosfamide/Ifosfamide_Di2000_reference.md) | — | 1-compartment (no model) | 0 | Di Marco MP et al., New insights into the pharmacokinetics…, Pharmaceutical research (2000) | [10.1023/a:1007561727948](https://doi.org/10.1023/a:1007561727948) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Freyer_2000_reference](drugs/drug_ifosfamide/Ifosfamide_Freyer2000_reference.md) | — | 1-compartment (no model) | 0 | Freyer G et al., Population pharmacokinetics of doxorubi…, British journal of clinical… (2000) | [10.1046/j.1365-2125.2000.00269.x](https://doi.org/10.1046/j.1365-2125.2000.00269.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kerbusch_2000_reference](drugs/drug_ifosfamide/Ifosfamide_Kerbusch2000_reference.md) | — | 1-compartment (no model) | 0 | Kerbusch T et al., Evaluation of the autoinduction of ifos…, British journal of clinical… (2000) | [10.1046/j.1365-2125.2000.00217.x](https://doi.org/10.1046/j.1365-2125.2000.00217.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Brain_2008_ANC](drugs/drug_ifosfamide/pd_Brain_2008_ANC.md) | absolute neutrophil count ← ifosfamide · delayed effect through transit (transduction) compartments | model (no simulator) | Brain EG et al., Population pharmacokinetics and explora…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2007.03095.x](https://doi.org/10.1111/j.1365-2125.2007.03095.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Brain_2008_BMG](drugs/drug_ifosfamide/pd_Brain_2008_BMG.md) | urinary b2-microglobulin ← ifosfamide · indirect response — drug stimulates the production of urinary b2-microglobulin | — | Brain EG et al., Population pharmacokinetics and explora…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2007.03095.x](https://doi.org/10.1111/j.1365-2125.2007.03095.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ifosfamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2A6` substrate, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C8` inducer/substrate, `CYP2C9` substrate, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CYP2C18 (substrate), DNA (cross-linking/alkylation), NR1I2 (activator), PTGS1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 384 matched, 154 returned
- **screened:** 10  ·  **relevant:** 9
- **records:** 10  ·  extracted 5  ·  needs_review 0  ·  rejected 5  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boddy_1995.pdf` | Boddy AV et al., The kinetics of the auto-induction of i…, Cancer chemotherapy and pha… (1995) | popPK | 10 | [10.1007/BF00685732](https://doi.org/10.1007/BF00685732) | [7720176](https://pubmed.ncbi.nlm.nih.gov/7720176) | The abstract provides explicit numeric values for volume of distribution (V), initial and final clearance (Cli, Cls), and metabolite parameters for ifosfamide. |
| `Di_2000.pdf` | Di Marco MP et al., New insights into the pharmacokinetics…, Pharmaceutical research (2000) | popPK | 10 | [10.1023/a:1007561727948](https://doi.org/10.1023/a:1007561727948) | [10955835](https://pubmed.ncbi.nlm.nih.gov/10955835) | The study is a population PK model of ifosfamide in cancer patients and reports specific numeric clearance values (e.g., 4 vs 7 L/h for R-Ifosfamide) directly in the abstract. |
| `Freyer_2000.pdf` | Freyer G et al., Population pharmacokinetics of doxorubi…, British journal of clinical… (2000) | popPK | 10 | [10.1046/j.1365-2125.2000.00269.x](https://doi.org/10.1046/j.1365-2125.2000.00269.x) | [11012554](https://pubmed.ncbi.nlm.nih.gov/11012554) | The paper is a population PK study for ifosfamide in human patients, and the abstract explicitly provides numeric values for clearance and volume of distribution. |
| `Kerbusch_2000.pdf` | Kerbusch T et al., Evaluation of the autoinduction of ifos…, British journal of clinical… (2000) | popPK | 10 | [10.1046/j.1365-2125.2000.00217.x](https://doi.org/10.1046/j.1365-2125.2000.00217.x) | [10848719](https://pubmed.ncbi.nlm.nih.gov/10848719) | The study reports quantitative population pharmacokinetic parameters (CL, V, autoinduction rates) for ifosfamide in humans, with all numeric values explicitly provided in the abstract. |
| `Kerbusch_2001.pdf` | Kerbusch T et al., Influence of dose and infusion duration…, Drug metabolism and disposi… (2001) | popPK | 10 | not captured | [11408362](https://pubmed.ncbi.nlm.nih.gov/11408362) | The paper reports a population PK model for ifosfamide in patients, but the specific numeric parameter values (CL, V, etc.) are not included in the provided text. |
| `Kerbusch_2001_2.pdf` | Kerbusch T et al., Population pharmacokinetics of ifosfami…, Clinical pharmacokinetics (2001) | popPK | 10 | [10.2165/00003088-200140080-00005](https://doi.org/10.2165/00003088-200140080-00005) | [11523727](https://pubmed.ncbi.nlm.nih.gov/11523727) | The study reports quantitative population pharmacokinetic parameters (clearance, volume, intercompartmental clearances) for ifosfamide and its metabolites in children. |
| `Kerbusch_2001_4.pdf` | Kerbusch T et al., Population pharmacokinetics and explora…, European journal of clinica… (2001) | popPK | 10 | [10.1007/s002280100322](https://doi.org/10.1007/s002280100322) | [11699611](https://pubmed.ncbi.nlm.nih.gov/11699611) | The study reports quantitative population PK parameters (clearance and volume of distribution) for ifosfamide in the abstract text. |
| `Kerbusch_2001_5.pdf` | Kerbusch T et al., Population pharmacokinetics of ifosfami…, Cancer chemotherapy and pha… (2001) | popPK | 10 | [10.1007/s002800100277](https://doi.org/10.1007/s002800100277) | [11488525](https://pubmed.ncbi.nlm.nih.gov/11488525) | The study is a population PK study for ifosfamide in humans, but the provided evidence contains only a summary/abstract without specific numeric parameter values (CL, V, etc.), which are likely in the full text or supplementary material not included here. |
| `Lewis_1996.pdf` | Lewis LD, A study of 5 day fractionated ifosfamid…, British journal of clinical… (1996) | popPK | 10 | [10.1046/j.1365-2125.1996.03956.x](https://doi.org/10.1046/j.1365-2125.1996.03956.x) | [8864315](https://pubmed.ncbi.nlm.nih.gov/8864315) | The study reports specific numeric values for total ifosfamide plasma clearance (changes in ml/min) and renal clearance (ml/min) in human patients. |
| `Kerbusch_2001_3.pdf` | Kerbusch T et al., Modulation of the cytochrome P450-media…, Clinical pharmacology and t… (2001) | popPK | 9 | [10.1067/mcp.2001.117283](https://doi.org/10.1067/mcp.2001.117283) | [11503007](https://pubmed.ncbi.nlm.nih.gov/11503007) | The study reports population pharmacokinetic parameters for ifosfamide in humans, including clearance changes due to drug interactions, though specific baseline CL or V values are not explicitly listed in the abstract text provided. |
| `Nelson_1976.pdf` | Nelson RL et al., Pharmacokinetics of divided-dose ifosfa…, Clinical pharmacology and t… (1976) | popPK | 8 | [10.1002/cpt1976193365](https://doi.org/10.1002/cpt1976193365) | [1261170](https://pubmed.ncbi.nlm.nih.gov/1261170) | Study reports PK for ifosfamide with specific half-life values, but key parameters like clearance and volume are described qualitatively without numeric values in the text. |

<sub>queue written 2026-10-07T17:22:18.725393+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for cyclophosphamide (CPA); ifosfamide is only used as an internal standard for HPLC analysis. |
| PGx | Antoniou_2005 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving cytochrome P450 enzymes (e.g., CYP3A4, CYP2B6) but does not report the effect of a specific genetic variant/genotype on the pharmacokinetics or pharmacodynamics of ifosfamide. |
| popPK | Attia_2023 | irrelevant | 0 | 0 | The study evaluates olaratumab, gemcitabine, and docetaxel, and does not provide pharmacokinetic parameters for ifosfamide. |
| PGx | Bathelt_2002 | not_relevant | 1 | 0 | The paper is a computational study on CYP2B6 regioselectivity and does not report pharmacogenomic variations or clinical pharmacokinetic/pharmacodynamic data. |
| popPK | Białk-Bielińska_2017 | irrelevant | 0 | 0 | The study evaluates acute aquatic toxicity and environmental stability, not pharmacokinetic parameters. |
| popPK | Bihorel_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of LY2510924, not ifosfamide. |
| popPK | Bins_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pazopanib, using ifosfamide only as a co-administered drug in the underlying clinical trials to establish a drug-drug interaction model. |
| PGx | Boddy_1993 | not_relevant | 2 | 0 | The study reports interindividual variation and a "weaker" suggestion of polymorphism in metabolism, but does not explicitly link specific gene variants or genotypes to PK/PD parameters. |
| PGx | Chen_2005 | not_relevant | 1 | 5 | The paper describes enzymatic enantioselectivity and cellular cytotoxicity but does not report a pharmacogenomic study (e.g., patient genotype analysis) affecting systemic pharmacokinetic or pharmacodynamic parameters of ifosfamide. |
| PGx | Chen_2006 | not_relevant | 0 | 10 | The study involves experimental RNAi silencing of CYP3A4 in a cell line, not a pharmacogenomic study of genetic variants (SNPs/polymorphisms) in a human population. |
| PGx | Di_2009 | not_relevant | 0 | 0 | The text mentions ifosfamide only as a substrate of CYP2A6 in a general review of the enzyme's function and polymorphism, without reporting specific pharmacogenomic effects on ifosfamide's PK or PD parameters. |
| popPK | Dimitrakopoulou-Strauss_2010 | irrelevant | 0 | 0 | This is a diagnostic imaging study evaluating 18F-FDG PET parameters to predict treatment response, not a pharmacokinetic study of ifosfamide disposition. |
| popPK | Dimitrakopoulou-Strauss_2010_2 | irrelevant | 0 | 0 | The study analyzes FDG PET imaging parameters (SUV, k1-k4) for tumor response, not the pharmacokinetic parameters of ifosfamide itself. |
| PGx | Ensom_2001 | not_relevant | 1 | 0 | The paper is a general discussion on pharmacogenetic TDM concepts and only lists ifosfamide as a potential candidate for future study, without reporting specific gene variant effects on its PK or PD parameters. |
| popPK | Federico_2017 | irrelevant | 0 | 0 | This is a clinical trial focused on the pharmacokinetics and efficacy of the monoclonal antibody hu14.18K322A; ifosfamide was only used as a co-administered chemotherapy agent in specific cycles, and no pharmacokinetic parameters for ifosfamide are reported. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | The paper is a pharmacovigilance and knowledge integration study on drugs causing acute kidney injury, not a pharmacokinetic study reporting disposition parameters for ifosfamide. |
| PGx | Ferrari_2015 | not_relevant | 0 | 0 | The paper is a general review of osteosarcoma chemotherapy and does not contain specific data linking gene variants to pharmacokinetic or pharmacodynamic parameters of ifosfamide. |
| popPK | Freyer_2001 | irrelevant | 3 | 0 | The study focuses on the prognostic value of etoposide AUC, and while it analyzes ifosfamide exposure, the specific quantitative parameter values for ifosfamide (clearance, volume, etc.) are not provided in the evidence text. |
| popPK | Gartrell_2022 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for doxorubicin and its metabolite doxorubicinol, not ifosfamide, which is only mentioned as a co-administered chemotherapy agent. |
| popPK | Giangreco_2022 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse drug event signals in a pediatric database and does not report pharmacokinetic parameters for ifosfamide. |
| PGx | Goričar_2014 | not_relevant | 1 | 0 | The paper reports pharmacogenomic effects on methotrexate PK/PD parameters, not ifosfamide. |
| popPK | Gracia_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of radioisotopic tracers (51Cr-EDTA and 99mTc-DTPA) to measure GFR, not ifosfamide, which is only mentioned as a co-administered chemotherapy causing nephrotoxicity. |
| PGx | Harmsen_2009 | not_relevant | 0 | 0 | The paper investigates ifosfamide as an inducer of CYP3A4 (drug-drug interaction), not as a pharmacogenomic study linking a specific gene variant to a PK/PD parameter of ifosfamide. |
| PGx | Hartley_1994 | not_relevant | 0 | 0 | The paper reports inter-patient variation in ifosfamide metabolism but explicitly states that "no evidence for a genetic polymorphism was found." |
| PGx | Hedrich_2016 | not_relevant | 5 | 0 | The paper is a review that qualitatively describes the association of CYP2B6 genotypes with IFA plasma concentrations but does not report quantitative fitted effect sizes or specific parameter values for ifosfamide in the provided text. |
| PGx | Highley_2022 | not_relevant | 5 | 0 | The paper is a general review that mentions polymorphisms in metabolizing enzymes but does not report specific gene-variant effects on PK or PD parameters. |
| popPK | Hochheiser_2020 | irrelevant | 0 | 0 | The paper is a clinical informatics study on drug-drug interaction models and does not contain pharmacokinetic data for ifosfamide. |
| PGx | Howell_2008 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (aprepitant), not a pharmacogenomic effect (gene variant/genotype) on PK/PD parameters. |
| PGx | Huang_2000 | not_relevant | 2 | 5 | The paper characterizes the enzymatic pathways (CYP3A4/CYP2B6) and their relative contributions but does not report data on how specific gene variants or genotypes affect PK/PD parameters in human subjects. |
| popPK | Kadyrov_2025 | irrelevant | 0 | 0 | The paper is a clinical chemistry toxicity atlas in rats and does not report pharmacokinetic parameters for ifosfamide. |
| PGx | Kan_2002 | not_relevant | 0 | 0 | The paper is a review of a gene therapy strategy using ifosfamide as a prodrug and does not report pharmacogenomic effects of patient genetic variants on its PK or PD. |
| PGx | Kerbusch_2000 | not_relevant | 0 | 0 | The paper investigates population pharmacokinetics and autoinduction of ifosfamide but does not report any gene variants or pharmacogenomic effects. |
| popPK | Kerbusch_2001 | relevant | 10 | 0 | The paper reports a population PK model for ifosfamide in patients, but the specific numeric parameter values (CL, V, etc.) are not included in the provided text. |
| popPK | Kerbusch_2001_3 | relevant | 9 | 4 | The study reports population pharmacokinetic parameters for ifosfamide in humans, including clearance changes due to drug interactions, though specific baseline CL or V values are not explicitly listed in the abstract text provided. |
| PGx | Kerbusch_2001_3 | not_relevant | 0 | 0 | The study investigates pharmacokinetic drug-drug interactions (with ketoconazole and rifampin), not pharmacogenomic effects. |
| popPK | Kerbusch_2001_5 | relevant | 10 | 0 | The study is a population PK study for ifosfamide in humans, but the provided evidence contains only a summary/abstract without specific numeric parameter values (CL, V, etc.), which are likely in the full text or supplementary material not included here. |
| popPK | Lambert_2021 | irrelevant | 0 | 0 | The study analyzes pharmacokinetic parameters of the renal marker 51Cr-EDTA to evaluate kidney function, not the pharmacokinetics of ifosfamide itself. |
| PGx | Le_2009 | not_relevant | 0 | 0 | The paper is a bibliographic review of clinical trials in soft tissue sarcoma and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of ifosfamide. |
| popPK | Le_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of vancomycin, not ifosfamide. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of progression-free survival (a clinical outcome) in non-Hodgkin lymphoma, not a pharmacokinetic study of ifosfamide. |
| popPK | Lin_2023 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of carfilzomib, not ifosfamide, which is only a co-administered drug in the R-ICE regimen. |
| PD | Lin_2023 | not_relevant | 0 | 0 | The paper reports a population PK/PD model for carfilzomib, not ifosfamide; ifosfamide is only part of the background chemotherapy regimen (R-ICE) without specific PD analysis. |
| PGx | Lu_2006 | not_relevant | 2 | 0 | The study investigates stereoselective metabolism and enzyme identification (CYP3A4/CYP2B6) but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| PGx | Ma_2012 | not_relevant | 3 | 2 | The paper studies CYP3A4 expression levels in an in vitro tissue model to assess metabolic activation, not a specific human genetic variant or genotype affecting a defined PK/PD parameter. |
| PGx | Martin-Broto_2014 | not_relevant | 0 | 0 | The study reports MRP1/ABCC1 as independent prognostic factors for survival, not as pharmacogenomic modifiers of ifosfamide pharmacokinetics or pharmacodynamics. |
| popPK | Melhem_2018 | irrelevant | 0 | 0 | The study models G-CSF and neutrophil dynamics, not the pharmacokinetics of ifosfamide. |
| popPK | Mitchell_2025 | irrelevant | 0 | 0 | The paper investigates the long-term genomic effects of chemotherapy (somatic mutations and clonal hematopoiesis) and isosfamide is only mentioned as a context for a mutational signature, with no pharmacokinetic parameters reported. |
| PGx | Mo_2009 | not_relevant | 2 | 0 | The paper lists ifosfamide as a substrate but does not report specific pharmacogenomic data or effect sizes for ifosfamide PK/PD parameters. |
| PGx | Modi_2021 | not_relevant | 2 | 0 | The study investigates clinical risk factors (albumin, CYP2B6 inhibitors) for ifosfamide-induced encephalopathy and does not measure pharmacokinetic parameters or report quantitative pharmacogenomic effect sizes. |
| popPK | Moeung_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of etoposide, not ifosfamide, which is only mentioned as part of the treatment regimen. |
| PGx | Moeung_2020 | not_relevant | 0 | 0 | The study investigates the pharmacogenomics of etoposide (UGT1A1), not ifosfamide. |
| PGx | Moiseeva_2022 | not_relevant | 2 | 1 | The study investigates correlations between gene expression levels of MDR-related genes and in vitro chemosensitivity indices, rather than pharmacokinetic or pharmacodynamic parameters of ifosfamide in the context of pharmacogenomics. |
| popPK | Nelson_1976 | relevant | 8 | 2 | Study reports PK for ifosfamide with specific half-life values, but key parameters like clearance and volume are described qualitatively without numeric values in the text. |
| popPK | Offenbacher_2025 | irrelevant | 0 | 0 | The study focuses on the mechanism of DFMO in Ewing sarcoma, and ifosfamide is only mentioned as a co-administered standard-of-care control in mouse models without any pharmacokinetic parameters reported. |
| PGx | Palmerini_2025 | not_relevant | 0 | 0 | The paper reports clinical survival outcomes (EFS, OS) and drug response, but does not report PK/PD parameters or specific gene variant effects on pharmacokinetics. |
| PGx | Preissner_2015 | not_relevant | 5 | 2 | The text discusses ifosfamide only as a general prodrug example activated by CYPs but does not report specific pharmacogenomic effects on its PK/PD parameters for a particular variant. |
| PGx | Reinhold_2014 | not_relevant | 2 | 5 | The paper reports correlations between gene variants and drug sensitivity (GI50), not pharmacokinetic parameters, and mentions the ifosfamide-RAD52 pairing only as a general example of visualization tool capabilities without providing specific fitted effect sizes or detailed pharmacodynamic analysis in this text. |
| PGx | Rezaï_2007 | not_relevant | 0 | 0 | The paper investigates pharmacokinetic interactions between drugs (imatinib and ifosfamide), not the impact of a gene variant/genotype on drug PK/PD. |
| PGx | Ruiz-Pinto_2016 | not_relevant | 0 | 0 | The paper reports associations between genetic variants and clinical outcomes (Overall Survival), not direct changes in PK/PD parameters (e.g., AUC, clearance) of ifosfamide. |
| popPK | Russo_2018 | irrelevant | 0 | 0 | The study focuses on the ecotoxicity of ifosfamide in aquatic organisms and does not report any pharmacokinetic parameters (clearance, volume, etc.). |
| PGx | Schmidt_2001 | not_relevant | 4 | 5 | The paper compares gender-based differences in ifosfamide metabolism, which is a sex-based effect, not a pharmacogenomic effect driven by specific gene variants or genotypes. |
| PGx | Schmidt_2004 | not_relevant | 0 | 0 | The study investigates intratumoral ifosfamide metabolism using tissue microsomes but does not report gene variants/genotypes altering PK/PD parameters. |
| popPK | Sculier_1999 | irrelevant | 0 | 0 | The study focuses on carboplatin pharmacokinetics in lung cancer patients, with ifosfamide only mentioned as a co-administered agent in the trial design. |
| PGx | Si_2013 | not_relevant | 0 | 0 | The paper studies the effect of curcumin on drug resistance (P-gp expression) and isofamide cytotoxicity in cell lines, but does not report pharmacogenomic effects (gene variant associations) on PK or PD parameters. |
| popPK | Smith_2003 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for mesna (a co-administered agent), not for ifosfamide, which is only mentioned as a co-administered drug facilitating cysteine depletion. |
| popPK | Sperry_2023 | irrelevant | 0 | 0 | The paper focuses on the repurposing of statins for COVID-19 and contains no information regarding ifosfamide. |
| PGx | Storme_2009 | not_relevant | 0 | 0 | The paper describes novel analogs of ifosfamide and their metabolic profiles, but it does not report the effect of specific human gene variants or genotypes on ifosfamide pharmacokinetics or pharmacodynamics. |
| popPK | Su_2025 | irrelevant | 0 | 0 | The paper is a review on nanotechnology and immunotherapy in osteosarcoma treatment and does not provide any pharmacokinetic data or quantitative disposition parameters for ifosfamide. |
| popPK | Subbiah_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of INBRX-109, an antibody, and only mentions ifosfamide as a prior chemotherapy comparator in the introduction. |
| PGx | Vazirian_2022 | not_relevant | 0 | 0 | The paper reviews the interaction between ifosfamide and aprepitant (a drug-drug interaction), not a pharmacogenomic effect. |
| PGx | Virgili_2022 | not_relevant | 1 | 5 | The study reports associations between gene variants and clinical outcomes (survival, toxicity) but does not report direct pharmacokinetic (PK) or pharmacodynamic (PD) parameters such as drug concentrations, clearance, or direct physiological measures. |
| PGx | Walker_1994 | not_relevant | 0 | 0 | The paper identifies CYP3A4 as the enzyme responsible for ifosfamide metabolism in liver microsomes but does not report any genetic variants or genotype-phenotype associations affecting PK/PD parameters. |
| PGx | Wang_2008 | not_relevant | 8 | 2 | The paper is a review discussing the potential impact of CYP2B6 polymorphisms on drugs like ifosfamide, but it does not present original experimental data or fitted pharmacokinetic/pharmacodynamic effect sizes for specific variants of this drug. |
| PGx | Wang_2012 | not_relevant | 2 | 1 | The paper is a review of xenobiotic receptor modulation (drug-drug interactions) of oxazaphosphorines, not a pharmacogenomic study linking genetic variants to PK/PD parameters. |
| popPK | Wang_2014_2 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of vatalanib, not ifosfamide. |
| popPK | Weigt_2011 | irrelevant | 0 | 0 | The study is a teratogenicity assay using zebrafish embryos and reports toxicological endpoints (LC50, EC50, TI) rather than pharmacokinetic disposition parameters like clearance or volume for ifosfamide. |
| popPK | Yan_2024 | irrelevant | 0 | 0 | The paper is a clinical trial of CAR-T cell therapy for lymphoma and mentions ifosfamide only as part of a bridging chemotherapy regimen (ICE/R-ICE), without reporting any pharmacokinetic parameters for ifosfamide. |
| popPK | You_2008 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for etoposide (the subject drug) and only mentions ifosfamide as a co-administered agent affecting etoposide clearance. |
| PGx | Zhang_2005_2 | not_relevant | 2 | 0 | This is a review article discussing general mechanisms of oxazaphosphorine resistance and preclinical approaches; it does not report specific pharmacogenomic effects of gene variants on the PK or PD of ifosfamide. |
| PGx | Zhang_2006 | not_relevant | 2 | 0 | The paper is a general review of resistance mechanisms to oxazaphosphorines and does not report specific pharmacogenomic effects on PK or PD parameters for ifosfamide. |
| popPK | Zhang_2015 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for methotrexate, not ifosfamide. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis comparing the efficacy and safety of chemotherapy regimens for peripheral T-cell lymphoma, containing no pharmacokinetic parameters or data for ifosfamide. |
| popPK | de_2019 | irrelevant | 0 | 0 | The paper investigates prognostic factors (neutrophil count) for trabectedin treatment in sarcomas and does not report pharmacokinetic parameters for ifosfamide. |
| PGx | van_2008 | not_relevant | 5 | 2 | The paper is a narrative review of CYP450 pharmacogenetics; it likely discusses ifosfamide but lacks the specific fitted quantitative PK/PD effect sizes required for extraction. |
| popPK | van_2013 | irrelevant | 0 | 0 | This is a review article discussing modelling and simulation in paediatric oncology generally, and does not report specific quantitative PK parameters for ifosfamide. |
| PGx | van_2015 | not_relevant | 1 | 0 | The study analyzes gender differences in toxicity and efficacy but does not report specific pharmacokinetic or pharmacodynamic parameters or gene variant data for ifosfamide. |
| popPK | van_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vincristine (VCR); ifosfamide is only mentioned in the discussion as a comparison for another study. |
| popPK | Česen_2016 | irrelevant | 0 | 0 | The study focuses on ecotoxicity and genotoxicity in algae, cyanobacteria, and bacteria, not pharmacokinetic disposition parameters in a host organism. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:22 UTC</sub>
