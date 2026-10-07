<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;dihydrocodeine&quot;}]"></div>

# dihydrocodeine

- **generic name:** dihydrocodeine
- **ATC codes:** `N02AA08`, `N02AJ01`, `N02AJ02`
- **DrugBank:** [DB01551](https://go.drugbank.com/drugs/DB01551) · **PubChem:** [CID 5284543](https://pubchem.ncbi.nlm.nih.gov/compound/5284543)
- **molar mass:** 301.3801 g/mol (C18H23NO3) — DrugBank
- **groups:** approved, illicit

## About

Dihydrocodeine is an opioid painkiller used to treat pain and cough. It is an approved medicine, available alone and in combination with non-opioid analgesics, and is used fairly widely in some countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q377270](https://www.wikidata.org/wiki/Q377270) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dihydrocodeine | parent | 301.38 | C18H23NO3 | DrugBank | [5284543](https://pubchem.ncbi.nlm.nih.gov/compound/5284543) | Webb_2001 |
| dihydromorphine | metabolite | 287.359 | C17H21NO3 | PubChem | [5359421](https://pubchem.ncbi.nlm.nih.gov/compound/5359421) | Webb_2001 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:56 | 1:42 | 0/2/0 | 0/0/1 | 0/0/0 | 141,952/6,285 | einfracz / qwen3.8-27b | 11 | 2/8 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Rowell_1983_reference](drugs/drug_dihydrocodeine/Dihydrocodeine_Rowell1983_reference.md) | — | 1-compartment (no model) | 0 | Rowell FJ et al., Pharmacokinetics of intravenous and ora…, European journal of clinica… (1983) | [10.1007/BF01037958](https://doi.org/10.1007/BF01037958) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Webb_2001_reference](drugs/drug_dihydrocodeine/Dihydrocodeine_Webb2001_reference.md) | — | parent + metabolite (no model) | 2 | Webb JA et al., Contribution of dihydrocodeine and dihy…, British journal of clinical… (2001) | [10.1046/j.0306-5251.2001.01414.x](https://doi.org/10.1046/j.0306-5251.2001.01414.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Webb_2001_E](drugs/drug_dihydrocodeine/pd_Webb_2001_E.md) | reduction in pain score ← DHC · delayed effect through an effect compartment | — | Webb JA et al., Contribution of dihydrocodeine and dihy…, British journal of clinical… (2001) | [10.1046/j.0306-5251.2001.01414.x](https://doi.org/10.1046/j.0306-5251.2001.01414.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dihydrocodeine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: OPRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 124 matched, 78 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rowell_1983.pdf` | Rowell FJ et al., Pharmacokinetics of intravenous and ora…, European journal of clinica… (1983) | popPK | 10 | [10.1007/BF01037958](https://doi.org/10.1007/BF01037958) | [6628531](https://pubmed.ncbi.nlm.nih.gov/6628531) | The study reports quantitative PK parameters (half-lives, bioavailability, model type) for dihydrocodeine in humans directly in the abstract text. |
| `Gu_2025.pdf` | Gu X et al., PK-PD relationship of poorly absorbable…, Journal of pharmaceutical a… (2025) | pd | 5 | [10.1016/j.jpba.2024.116478](https://doi.org/10.1016/j.jpba.2024.116478) | [39306946](https://www.ncbi.nlm.nih.gov/pubmed/39306946) | metadata signals extractable PD data (PK-PD) |
| `Schmidt_2007.pdf` | Schmidt H et al., Pharmacokinetic-pharmacodynamic modelin…, European journal of clinica… (2007) | pd | 5 | [10.1007/s00228-007-0363-8](https://doi.org/10.1007/s00228-007-0363-8) | [17786418](https://www.ncbi.nlm.nih.gov/pubmed/17786418) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Mei_2022.pdf` | Mei J et al., Identification of bioactive natural pro…, Biomedicine & pharmacothera… (2022) | pd | 4 | [10.1016/j.biopha.2022.112798](https://doi.org/10.1016/j.biopha.2022.112798) | [35286964](https://www.ncbi.nlm.nih.gov/pubmed/35286964) | metadata signals extractable PD data (IC50) |
| `Fromm_1995.pdf` | Fromm MF et al., Dihydrocodeine: a new opioid substrate…, Clinical pharmacology and t… (1995) | pgx | 8 | [10.1016/0009-9236(95)90049-7](https://doi.org/10.1016/0009-9236(95)90049-7) | [7586928](https://www.ncbi.nlm.nih.gov/pubmed/7586928) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Leppert_2011.pdf` | Leppert W, CYP2D6 in the metabolism of opioids for…, Pharmacology (2011) | pgx | 8 | [10.1159/000326085](https://doi.org/10.1159/000326085) | [21494059](https://www.ncbi.nlm.nih.gov/pubmed/21494059) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `unknown_2016.pdf` | unknown, "Weak" opioid analgesics. Codeine, dihy…, Prescrire international (2016) | pgx | 8 | not captured | [27042732](https://www.ncbi.nlm.nih.gov/pubmed/27042732) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Zhao_2026.pdf` | Zhao J et al., Inhibition of human liver cytochrome P4…, Xenobiotica; the fate of fo… (2026) | pgx | 7 | [10.1080/00498254.2026.2650150](https://doi.org/10.1080/00498254.2026.2650150) | [41876357](https://www.ncbi.nlm.nih.gov/pubmed/41876357) | metadata signals extractable PGX data (CYP6D2, PK/PD-context) |
| `Hosseinnejad_2019.pdf` | Hosseinnejad K et al., Lack of Influence by CYP3A4 and CYP3A5…, The journal of applied labo… (2019) | pgx | 5 | [10.1373/jalm.2018.026070](https://doi.org/10.1373/jalm.2018.026070) | [31639687](https://www.ncbi.nlm.nih.gov/pubmed/31639687) | metadata signals extractable PGX data (CYP3A4) |
| `Schmidt_2002.pdf` | Schmidt H et al., Affinities of dihydrocodeine and its me…, Pharmacology & toxicology (2002) | pgx | 5 | [10.1034/j.1600-0773.2002.910203.x](https://doi.org/10.1034/j.1600-0773.2002.910203.x) | [12420793](https://www.ncbi.nlm.nih.gov/pubmed/12420793) | metadata signals extractable PGX data (CYP2D6) |
| `Susce_2006.pdf` | Susce MT et al., Response to hydrocodone, codeine and ox…, Progress in neuro-psychopha… (2006) | pgx | 5 | [10.1016/j.pnpbp.2006.03.018](https://doi.org/10.1016/j.pnpbp.2006.03.018) | [16631290](https://www.ncbi.nlm.nih.gov/pubmed/16631290) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-07T04:55:15.397082+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aderjan_1998 | not_relevant | 1 | 0 | The paper discusses dihydrocodeine metabolism and mentions CYP2D6 polymorphism qualitatively but presents data only from fatal overdose cases without a pharmacogenomic study design, genotyping, or fitted effect sizes on PK parameters. |
| PGx | Allen_2019 | not_relevant | 0 | 0 | The paper focuses on desmosterolosis and cholesterol biosynthesis in the mouse brain and does not mention dihydrocodeine. |
| PGx | Ammon_1999 | not_relevant | 2 | 1 | The study assesses dose-linearity in a homogeneous cohort of CYP2D6 extensive metabolizers and does not report comparative pharmacokinetic or pharmacodynamic differences between genetic variants. |
| popPK | Cao_2012 | relevant | 4 | 0 | The study is a methodological paper on PK modeling that includes dihydrocodeine as one of four drugs to demonstrate the model's capability, but the provided text contains no specific numeric parameter values. |
| popPK | Chevalier_2025 | irrelevant | 0 | 0 | The paper focuses on Boolean network modeling of gene regulatory networks in hematopoiesis and bone marrow stromal cells, with no mention of dihydrocodeine or pharmacokinetic parameters. |
| PD | Chevalier_2025 | not_relevant | 0 | 0 | The paper focuses on inferring Boolean networks for gene regulatory dynamics in hematopoiesis and cell differentiation; it does not contain any pharmacokinetic or pharmacodynamic data, exposure-response analysis, or numeric PD parameters for dihydrocodeine or any other drug. |
| PGx | Correa-Cerro_2006 | not_relevant | 0 | 0 | The paper investigates simvastatin therapy in a mouse model of Smith-Lemli-Opitz syndrome and does not mention dihydrocodeine or its pharmacokinetics/pharmacodynamics. |
| PGx | Cottrill_2021 | not_relevant | 0 | 0 | The paper reports pharmacogenomic phenotypes (e.g., metabolizer status) and pain scores, but does not report any specific pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic effect sizes for dihydrocodeine. |
| PGx | DePriest_2015 | not_relevant | 0 | 0 | The paper is a general review of opioid metabolism that classifies dihydrocodeine as a UGT metabolized drug but does not report specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Du_2021 | irrelevant | 0 | 0 | The paper is a study on Golgi apparatus dynamics in Drosophila and is completely unrelated to dihydrocodeine pharmacokinetics. |
| PGx | Fields_2015 | not_relevant | 0 | 0 | The paper examines the effect of benzodiazepines on opioid concentrations and does not report any pharmacogenomic effects or gene variant analyses. |
| PGx | Genaro-Mattos_2020 | not_relevant | 0 | 0 | The paper studies the drug cariprazine and its interaction with DHCR7 genotypes, not dihydrocodeine. |
| PGx | Genaro-Mattos_2021 | not_relevant | 1 | 0 | The study investigates the effect of DHCR7 genotype on the pharmacokinetics of aripiprazole and cariprazine, not dihydrocodeine. |
| popPK | Gu_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of dehydrocorydaline (DHC) in rats, not dihydrocodeine. |
| PGx | Hackl_2025 | not_relevant | 0 | 0 | The paper reports a genetic cause for intellectual disability and elevated 7-dehydrocholesterol levels, containing no data on dihydrocodeine pharmacokinetics or pharmacodynamics. |
| PGx | Hosseinnejad_2019 | not_relevant | 1 | 0 | The study focuses on the pharmacogenomics of hydrocodone metabolism, explicitly finding no influence of CYP3A4/5 on dihydrocodeine or pain outcomes, rather than characterizing the PK/PD of dihydrocodeine itself. |
| popPK | Kirkwood_1998 | irrelevant | 1 | 2 | The study is an in-vitro mechanistic investigation of metabolism (glucuronidation) using liver microsomes, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Leppert_2011 | not_relevant | 5 | 0 | The text is an introduction/abstract for a review that summarizes data on CYP2D6 and dihydrocodeine, but it does not itself report specific pharmacogenomic effect sizes or quantitative PK/PD changes. |
| PGx | Leppert_2016 | not_relevant | 4 | 2 | The text discusses the role of CYP2D6 activity and metabolite shifts qualitatively but does not report specific quantitative pharmacokinetic or pharmacodynamic parameters associated with the gene variant. |
| PGx | Leyn_2015 | not_relevant | 0 | 0 | The paper concerns transcriptional regulation in Archaea and has no connection to dihydrocodeine pharmacogenomics. |
| popPK | Minsat_2021 | irrelevant | 0 | 0 | The paper is about the synthesis and chemical testing of phloretin analogues for cosmetics and contains no pharmacokinetic data for dihydrocodeine. |
| PD | Minsat_2021 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant and anti-tyrosinase activities (IC50/EC50) for synthetic phloretin analogues, not pharmacodynamic or exposure-response data for dihydrocodeine. |
| popPK | Papadopoulou_2025 | irrelevant | 0 | 0 | The paper is a review on marine biocompounds for cosmetics and does not mention dihydrocodeine or any pharmacokinetic parameters. |
| PD | Papadopoulou_2025 | not_relevant | 0 | 0 | The paper is a review on marine bioactives for cosmetics and does not contain any pharmacodynamic or exposure-response data for dihydrocodeine. |
| PGx | Parween_2021 | not_relevant | 0 | 0 | The paper studies the effect of PON2 gene variants on the efficacy of acetylcholinesterase inhibitors (donepezil and pyridostigmine), not dihydrocodeine. |
| popPK | Pascoa_2023 | irrelevant | 0 | 0 | The paper focuses on the structural biology and inhibition of human ceramide synthase, unrelated to the pharmacokinetics of the drug dihydrocodeine. |
| PD | Pascoa_2023 | not_relevant | 0 | 0 | The paper describes the structural basis and mechanism of human ceramide synthase 6 (CerS6) and its inhibition by fumonisin B1, containing no data on dihydrocodeine or any pharmacodynamic exposure-response relationship. |
| popPK | Pascoa_2025 | irrelevant | 0 | 0 | The paper is a structural biology study of human ceramide synthase 6 (CerS6) and does not report pharmacokinetic parameters for dihydrocodeine. |
| PD | Pascoa_2025 | not_relevant | 0 | 0 | The paper describes the structural basis and enzymatic mechanism of ceramide synthase 6 (CerS6) and its inhibition by fumonisin B1, but does not report any pharmacodynamic or exposure-response data for dihydrocodeine. |
| popPK | Rezaee_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dextromethorphan and its metabolite dextrorphan, not dihydrocodeine. |
| popPK | Saux_1981 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of doxycycline, not dihydrocodeine. |
| PGx | Schmidt_2002 | not_relevant | 0 | 0 | The paper reports in vitro receptor affinities of dihydrocodeine and its metabolites, and while it mentions CYP2D6 metabolism, it does not present pharmacokinetic or pharmacodynamic data linking genotype to parameter changes. |
| popPK | Schmidt_2007 | irrelevant | 3 | 0 | The study focuses on PD modeling of miotic effects and reports effect-site transfer rates (ke0/t1/2) and EC50, but does not report standard quantitative disposition parameters like CL, V, or Q for dihydrocodeine. |
| PGx | Sikora_2006 | not_relevant | 0 | 0 | The paper discusses autism prevalence in Smith-Lemli-Opitz syndrome and does not mention dihydrocodeine or its pharmacokinetics/pharmacodynamics. |
| popPK | Silva_2018 | irrelevant | 0 | 0 | The study investigates the in vitro cytotoxic effects of the alkaloid dihydrochelerythrine on glioblastoma cells and is unrelated to the pharmacokinetics of dihydrocodeine. |
| PGx | Sobczak_2020 | not_relevant | 1 | 0 | The paper is a general review on OTC opioid misuse and only briefly mentions dihydrocodeine's pharmacology without reporting specific quantitative pharmacogenomic effects on its PK or PD parameters. |
| PGx | Stein_2022 | not_relevant | 0 | 0 | The paper focuses on Hepatitis C treatment in patients with kidney disease and does not mention dihydrocodeine or any pharmacogenomic effects. |
| PGx | Susce_2006 | not_relevant | 0 | 0 | The paper focuses on hydrocodone in a CYP2D6 poor metabolizer and only lists dihydrocodeine as a related drug without reporting its PK/PD data. |
| PGx | Takei_2023 | not_relevant | 0 | 0 | The paper is a forensic autopsy case report describing drug concentrations and a CYP1A2 interaction affecting caffeine, but it does not report any genetic variants or pharmacogenomic effects on dihydrocodeine PK or PD. |
| PGx | Thompson_2004 | not_relevant | 1 | 0 | The paper reports receptor binding data for dihydrocodeine and its metabolites, but does not report how a specific gene variant alters a pharmacokinetic or pharmacodynamic parameter of dihydrocodeine in humans. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis of antiemetic drugs for postoperative nausea and vomiting and does not report pharmacokinetic parameters for dihydrocodeine. |
| PGx | Whitt_2024 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (diphenhydramine inhibiting CYP2D6) affecting hydrocodone, not a pharmacogenomic effect of a genetic variant on dihydrocodeine. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The study is an in-vitro toxicology study on triclocarban, and dihydrocodeine (or DHC) is only listed as a comparative cytotoxicity metric, not the subject of a PK study. |
| PGx | Zhao_2026 | not_relevant | 0 | 0 | The paper studies CYP2D6 inhibition by Corydalis compounds to predict drug-drug interactions, not the pharmacogenomic effect of a genetic variant on dihydrocodeine's PK or PD parameters. |
| PGx | unknown_2016 | not_relevant | 3 | 2 | The text discusses CYP2D6 pharmacogenomics for codeine and tramadol, but explicitly states dihydrocodeine potency is not CYP2D6-dependent and only mentions renal failure (non-genetic) as a risk factor without quantitative PK/PD data. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PD | unknown_2019 | not_relevant | 0 | 0 | The text consists of meeting abstracts regarding mechanical ventilation, physiotherapy, and ICU care, with no mention of dihydrocodeine or any pharmacodynamic modeling. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 04:55 UTC</sub>
