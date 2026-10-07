<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;rofecoxib&quot;}]"></div>

# rofecoxib

- **generic name:** rofecoxib
- **ATC codes:** `M01AH02`
- **DrugBank:** [DB00533](https://go.drugbank.com/drugs/DB00533) · **PubChem:** [CID 5090](https://pubchem.ncbi.nlm.nih.gov/compound/5090)
- **molar mass:** 314.356 g/mol (C17H14O4S) — DrugBank
- **groups:** approved, withdrawn

## About

Rofecoxib is a COX-2 inhibitor painkiller that was used to treat osteoarthritis and pain. It was withdrawn from the market after approval, mainly because of cardiovascular safety concerns.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411412](https://www.wikidata.org/wiki/Q411412) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:21 | 8:50 | 0/0/0 | 0/0/0 | 0/0/0 | 107,961/3,221 | einfracz / qwen3.8-27b | 5 | 1/2 | 4/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rofecoxib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2C8` inhibitor, `CYP2C9` substrate, `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | kidney | `ABCC4` inhibitor | DrugBank actor |
| excretion | liver | `ABCC4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ELN (other/unknown), PTGS1 (substrate), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 149 matched, 82 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_15 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huntjens_2008.pdf` | Huntjens DR et al., Population pharmacokinetic modelling of…, British journal of pharmaco… (2008) | popPK | 10 | [10.1038/sj.bjp.0707643](https://doi.org/10.1038/sj.bjp.0707643) | [18193075](https://pubmed.ncbi.nlm.nih.gov/18193075) | The paper reports a population PK model for rofecoxib in rats, but the abstract only provides qualitative outcomes (exposure increase %) and does not list specific numeric parameter values like CL, V, or Q. |
| `Doret_2002.pdf` | Doret M et al., In vitro study of tocolytic effect of r…, BJOG : an international jou… (2002) | pd | 4 | [10.1111/j.1471-0528.2002.01518.x](https://doi.org/10.1111/j.1471-0528.2002.01518.x) | [12269693](https://www.ncbi.nlm.nih.gov/pubmed/12269693) | metadata signals extractable PD data (EC50) |
| `Rodrigues_2005.pdf` | Rodrigues AD, Impact of CYP2C9 genotype on pharmacoki…, Drug metabolism and disposi… (2005) | pgx | 8 | [10.1124/dmd.105.006452](https://doi.org/10.1124/dmd.105.006452) | [16118328](https://www.ncbi.nlm.nih.gov/pubmed/16118328) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Werner_2002.pdf` | Werner U et al., Investigation of the pharmacokinetics o…, Biomedical chromatography :… (2002) | pgx | 8 | [10.1002/bmc.115](https://doi.org/10.1002/bmc.115) | [11816012](https://www.ncbi.nlm.nih.gov/pubmed/11816012) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Werner_2003.pdf` | Werner U et al., Celecoxib inhibits metabolism of cytoch…, Clinical pharmacology and t… (2003) | pgx | 8 | [10.1016/S0009-9236(03)00120-6](https://doi.org/10.1016/S0009-9236(03)00120-6) | [12891223](https://www.ncbi.nlm.nih.gov/pubmed/12891223) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Werner_2006.pdf` | Werner U et al., Valdecoxib does not interfere with the…, International journal of cl… (2006) | pgx | 8 | [10.5414/cpp44397](https://doi.org/10.5414/cpp44397) | [16995327](https://www.ncbi.nlm.nih.gov/pubmed/16995327) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Zhang_2003.pdf` | Zhang JY et al., Involvement of human UGT2B7 and 2B15 in…, Drug metabolism and disposi… (2003) | pgx | 8 | [10.1124/dmd.31.5.652](https://doi.org/10.1124/dmd.31.5.652) | [12695355](https://www.ncbi.nlm.nih.gov/pubmed/12695355) | metadata signals extractable PGX data (UGT2B7, PK/PD-context) |
| `Bachmann_2003.pdf` | Bachmann K et al., An evaluation of the dose-dependent inh…, Journal of clinical pharmac… (2003) | pgx | 7 | [10.1177/0091270003257454](https://doi.org/10.1177/0091270003257454) | [14517190](https://www.ncbi.nlm.nih.gov/pubmed/14517190) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Backman_2006.pdf` | Backman JT et al., Rofecoxib is a potent inhibitor of cyto…, British journal of clinical… (2006) | pgx | 7 | [10.1111/j.1365-2125.2006.02653.x](https://doi.org/10.1111/j.1365-2125.2006.02653.x) | [16934051](https://www.ncbi.nlm.nih.gov/pubmed/16934051) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Jogiraju_2021.pdf` | Jogiraju VK et al., Physiologically based pharmacokinetic m…, Drug metabolism and pharmac… (2021) | pgx | 7 | [10.1016/j.dmpk.2020.100375](https://doi.org/10.1016/j.dmpk.2020.100375) | [33561738](https://www.ncbi.nlm.nih.gov/pubmed/33561738) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Karjalainen_2006.pdf` | Karjalainen MJ et al., Rofecoxib is a potent, metabolism-depen…, Drug metabolism and disposi… (2006) | pgx | 7 | [10.1124/dmd.106.011965](https://doi.org/10.1124/dmd.106.011965) | [16985100](https://www.ncbi.nlm.nih.gov/pubmed/16985100) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Karjalainen_2008.pdf` | Karjalainen MJ et al., Celecoxib is a CYP1A2 inhibitor in vitr…, European journal of clinica… (2008) | pgx | 7 | [10.1007/s00228-007-0456-4](https://doi.org/10.1007/s00228-007-0456-4) | [18197403](https://www.ncbi.nlm.nih.gov/pubmed/18197403) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Wang_2009.pdf` | Wang B et al., Synthetic and natural compounds that in…, Current medicinal chemistry (2009) | pgx | 7 | [10.2174/092986709789378198](https://doi.org/10.2174/092986709789378198) | [19754423](https://www.ncbi.nlm.nih.gov/pubmed/19754423) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Jarrar_2020.pdf` | Jarrar YB et al., Inhibition of 20-hydroxyeicosatetraenoi…, Prostaglandins, leukotriene… (2020) | pgx | 5 | [10.1016/j.plefa.2020.102055](https://doi.org/10.1016/j.plefa.2020.102055) | [31999978](https://www.ncbi.nlm.nih.gov/pubmed/31999978) | metadata signals extractable PGX data (UGT2B7) |
| `Zhou_2023.pdf` | Zhou W et al., Genetic polymorphisms of pharmacogenomi…, Functional & integrative ge… (2023) | pgx | 5 | [10.1007/s10142-023-01021-3](https://doi.org/10.1007/s10142-023-01021-3) | [36930384](https://www.ncbi.nlm.nih.gov/pubmed/36930384) | metadata signals extractable PGX data (NAT2) |

<sub>queue written 2026-10-07T01:20:37.209417+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bachmann_2003 | not_relevant | 0 | 0 | The paper studies rofecoxib as a drug-drug interaction inhibitor of CYP1A2 (affecting theophylline), and contains no pharmacogenomic analysis or gene variant data. |
| PGx | Backman_2006 | not_relevant | 0 | 0 | The study investigates the effect of rofecoxib on the metabolism of other drugs (tizanidine and caffeine), not the effect of a gene variant on rofecoxib's own PK or PD. |
| PGx | Baillie_2001 | not_relevant | 0 | 0 | The study describes mechanistic reversible metabolism in rats but does not investigate pharmacogenomic variants or their effects on pharmacokinetic parameters. |
| PGx | Coulter_2004 | not_relevant | 0 | 0 | The paper is a case review of visual disturbances (adverse events) and explicitly states that the reactions are not related to standard factors, without reporting any pharmacogenomic effects on PK or PD parameters. |
| popPK | Doret_2002 | irrelevant | 0 | 0 | no_text gate: only 143 chars of text extracted (&lt; 400) |
| PGx | Fosslien_2005 | not_relevant | 0 | 0 | The paper is a review of cardiovascular mechanisms of COX-2 inhibitors and only mentions genotyping in a concluding speculative statement without reporting any specific pharmacogenomic effects on PK/PD parameters. |
| PGx | Fries_2006 | not_relevant | 2 | 1 | The paper discusses interindividual variability and hypothesizes genetic sources but does not report a specific pharmacogenomic effect (e.g., genotype vs. PK/PD parameter). |
| PGx | Fung_1999 | not_relevant | 0 | 0 | The paper is a general review of COX-2 inhibitors and mentions CYP2C9 metabolism for celecoxib, but it does not report any pharmacogenomic data or specific PK/PD effects for rofecoxib. |
| PGx | Garnett_2001 | not_relevant | 2 | 0 | Discusses drug-drug interactions of rofecoxib and celecoxib, not gene variants or pharmacogenomic effects on their PK/PD parameters. |
| popPK | Hannam_2023 | irrelevant | 2 | 0 | The paper models celecoxib, valdecoxib, and rofecoxib for CSF transfer, but the text provides quantitative PK parameters (CL, V, t1/2) only for celecoxib; rofecoxib values are not explicitly reported in the provided evidence. |
| popPK | Huntjens_2008 | relevant | 10 | 2 | The paper reports a population PK model for rofecoxib in rats, but the abstract only provides qualitative outcomes (exposure increase %) and does not list specific numeric parameter values like CL, V, or Q. |
| PGx | Imbimbo_2009 | not_relevant | 0 | 0 | The paper discusses the efficacy of rofecoxib in Alzheimer's disease and mentions Apolipoprotein E as a risk factor for AD, but it does not report a pharmacogenomic effect on the pharmacokinetic or pharmacodynamic parameters of rofecoxib. |
| PGx | Imbimbo_2010 | not_relevant | 0 | 0 | The paper discusses epidemiological associations between APOE genotype and NSAID efficacy in Alzheimer's disease, but does not report changes in rofecoxib pharmacokinetics or pharmacodynamics. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper is a review of herbal drug interactions and mentions rofecoxib in a case report but does not report pharmacogenomic effects (gene variants) on its PK/PD. |
| PGx | Jarrar_2020 | not_relevant | 0 | 0 | The paper investigates the effect of rofecoxib as an inhibitor of 20-HETE glucuronidation, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of rofecoxib itself. |
| PGx | Jogiraju_2021 | not_relevant | 0 | 0 | The paper focuses on tizanidine pharmacokinetics and CYP1A2 drug-drug interactions, not on rofecoxib's PK/PD. |
| PGx | Karjalainen_2006 | not_relevant | 0 | 0 | The paper investigates the metabolic mechanism of rofecoxib's inhibition of CYP1A2 in vitro, but does not report any genetic variants, genotypes, or phenotypes affecting its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Karjalainen_2008 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (celecoxib effect on tizanidine) and does not report any pharmacogenomic effects (gene variants) on rofecoxib. |
| PGx | Karjalainen_2008_2 | not_relevant | 0 | 0 | The paper investigates in vitro CYP1A2 inhibition of rofecoxib to predict drug-drug interactions with tizanidine, rather than a pharmacogenomic effect of a gene variant on rofecoxib's PK/PD parameters. |
| popPK | Klein_2007 | irrelevant | 0 | 0 | The study is an in vitro/mechanistic investigation of celecoxib's vascular effects, with rofecoxib used only as a negative comparator; no pharmacokinetic parameters are reported. |
| PGx | Maghembe_2026 | not_relevant | 0 | 0 | The paper analyzes structural and population-genetic data of PTGS variants, with docking simulations explicitly yielding no functional effect, and states that effects on drug response were not demonstrated. |
| popPK | Ouellet_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of Cox-1/2 selectivity and platelet function, not a pharmacokinetic study, and reports no disposition parameters for rofecoxib. |
| PGx | Reines_2004 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating the efficacy of rofecoxib for Alzheimer's disease and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Rodrigues_2005 | not_relevant | 2 | 0 | The paper argues that CYP2C9 genotype has no clinically meaningful impact on rofecoxib PK because CYP2C9 is a minor clearance pathway, and it does not report specific quantitative pharmacogenomic data for rofecoxib. |
| PGx | Swan_2000 | not_relevant | 0 | 0 | The study evaluates the pharmacodynamic effects of rofecoxib on renal function in elderly patients but does not analyze the influence of specific gene variants or genotypes. |
| PGx | Vincent_2002 | not_relevant | 0 | 0 | The paper describes a case of drug-drug interaction (MTX and rofecoxib) causing toxicity, with no mention of gene variants or pharmacogenetics affecting PK/PD parameters. |
| PGx | Wang_2009 | not_relevant | 1 | 0 | This is a review on CYP1A2 function and interactions; rofecoxib is only mentioned as a CYP1A2 inhibitor, and no pharmacogenomic PK/PD effects of rofecoxib itself are reported. |
| PGx | Werner_2002 | not_relevant | 0 | 0 | The study reports pharmacogenomic effects on the pharmacokinetics of celecoxib, not rofecoxib. |
| PGx | Werner_2003 | not_relevant | 3 | 5 | The paper investigates the drug-drug interaction between NSAIDs (celecoxib/rofecoxib) and metoprolol, showing no significant effect of rofecoxib on metoprolol's PK, and does not report a pharmacogenomic effect on rofecoxib's own PK/PD. |
| popPK | Xu_2019 | irrelevant | 0 | 0 | The study investigates the interaction between levamlodipine and hemoglobin, using rofecoxib only as a co-administered probe to test for binding competition, and contains no rofecoxib pharmacokinetic parameters. |
| PGx | Zhang_2003 | not_relevant | 2 | 0 | The paper discusses the role of UGT2B7 and 2B15 in rofecoxib metabolism and mentions that polymorphisms *may* explain variability, but it does not report data from specific genotypes or demonstrate a measured pharmacogenomic effect on PK parameters. |
| PGx | Zhou_2023 | not_relevant | 0 | 0 | The paper reports allele frequencies for PTGS2 (associated with rofecoxib) in a specific population but does not measure or report any changes in pharmacokinetic or pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
