<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;primidone&quot;}]"></div>

# primidone

- **generic name:** primidone
- **ATC codes:** `N03AA03`
- **DrugBank:** [DB00794](https://go.drugbank.com/drugs/DB00794) · **PubChem:** [CID 4909](https://pubchem.ncbi.nlm.nih.gov/compound/4909)
- **molar mass:** 218.2518 g/mol (C12H14N2O2) — DrugBank
- **groups:** approved, vet_approved

## About

Primidone is an anticonvulsant drug used to treat epilepsy and tremor. It is an approved medicine, also approved for veterinary use, and remains in use, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420383](https://www.wikidata.org/wiki/Q420383) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:31 | 16:44 | 0/0/0 | 0/3/0 | 0/0/0 | 518,787/6,107 | einfracz / qwen3.8-27b | 23 | 1/20 | 23/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Perucca_1982_serum_drug_concentrations](drugs/drug_primidone/pd_Perucca_1982_serum_drug_concentrations.md) | serum drug concentrations ← primidone · model not identified | — | Perucca E, Pharmacokinetic interactions with antie…, Clinical pharmacokinetics (1982) | [10.2165/00003088-198207010-00004](https://doi.org/10.2165/00003088-198207010-00004) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Schmidt_1986_seizures](drugs/drug_primidone/pd_Schmidt_1986_seizures.md) | seizure frequency ← primidone · model not identified | — | Schmidt D et al., Alternative single anticonvulsant drug…, Annals of neurology (1986) | [10.1002/ana.410190118](https://doi.org/10.1002/ana.410190118) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tomson_2007_12_month_remission_from_seizures](drugs/drug_primidone/pd_Tomson_2007_12_month_remission_from_seizures.md) | 12-month remission from seizures ← primidone · model not identified | — | Tomson T et al., Therapeutic monitoring of antiepileptic…, The Cochrane database of sy… (2007) | [10.1002/14651858.CD002216.pub2](https://doi.org/10.1002/14651858.CD002216.pub2) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tomson_2007_adverse_effects](drugs/drug_primidone/pd_Tomson_2007_adverse_effects.md) | adverse effects ← primidone · model not identified | — | Tomson T et al., Therapeutic monitoring of antiepileptic…, The Cochrane database of sy… (2007) | [10.1002/14651858.CD002216.pub2](https://doi.org/10.1002/14651858.CD002216.pub2) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tomson_2007_seizure_free_during_the_last_12_months_of_follow_up](drugs/drug_primidone/pd_Tomson_2007_seizure_free_during_the_last_12_months_of_follow.md) | seizure free during the last 12 months of follow up ← primidone · model not identified | — | Tomson T et al., Therapeutic monitoring of antiepileptic…, The Cochrane database of sy… (2007) | [10.1002/14651858.CD002216.pub2](https://doi.org/10.1002/14651858.CD002216.pub2) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tomson_2007_withdrawn_from_treatment](drugs/drug_primidone/pd_Tomson_2007_withdrawn_from_treatment.md) | withdrawn from treatment ← primidone · model not identified | — | Tomson T et al., Therapeutic monitoring of antiepileptic…, The Cochrane database of sy… (2007) | [10.1002/14651858.CD002216.pub2](https://doi.org/10.1002/14651858.CD002216.pub2) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=primidone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inducer, `CYP2C19` inducer/substrate, `CYP2C9` inducer/substrate, `CYP2E1` inducer/substrate, `CYP3A4` inducer, `UGT1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer, `UGT1A1` inducer | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRNA4 (target), CHRNA7 (target), GABRA1 (positive allosteric modulator), GABRA1 (potentiator), GABRA2 (potentiator), GABRA3 (potentiator), GABRA4 (potentiator), GABRA5 (potentiator), GABRA6 (potentiator), GRIA2 (target), GRIK2 (target), TRPM3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 212 matched, 131 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Beydemir_2017.pdf` | Beydemir Ş et al., Antiepileptic drugs: Impacts on human s…, Journal of biochemical and… (2017) | pd | 4 | [10.1002/jbt.21889](https://doi.org/10.1002/jbt.21889) | [28032682](https://www.ncbi.nlm.nih.gov/pubmed/28032682) | metadata signals extractable PD data (IC50) |
| `Lahtinen_1990.pdf` | Lahtinen H et al., Effect of antiepileptic drugs on somato…, Neuropeptides (1990) | pd | 4 | [10.1016/0143-4179(90)90138-o](https://doi.org/10.1016/0143-4179(90)90138-o) | [1980351](https://www.ncbi.nlm.nih.gov/pubmed/1980351) | metadata signals extractable PD data (IC50) |
| `Weir_1984.pdf` | Weir RL et al., Interaction of anticonvulsant drugs wit…, Epilepsia (1984) | pd | 4 | [10.1111/j.1528-1157.1984.tb03449.x](https://doi.org/10.1111/j.1528-1157.1984.tb03449.x) | [6086302](https://www.ncbi.nlm.nih.gov/pubmed/6086302) | metadata signals extractable PD data (IC50) |
| `Bentué-Ferrer_2012.pdf` | Bentué-Ferrer D et al., [Therapeutic drug monitoring of primido…, Therapie (2012) | pgx | 7 | [10.2515/therapie/2012036](https://doi.org/10.2515/therapie/2012036) | [23110839](https://www.ncbi.nlm.nih.gov/pubmed/23110839) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Devanathan_2026.pdf` | Devanathan AS et al., Lenacapavir initiation with concomitant…, British journal of clinical… (2026) | pgx | 7 | [10.1002/bcp.70873](https://doi.org/10.1002/bcp.70873) | [42836661](https://www.ncbi.nlm.nih.gov/pubmed/42836661) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Italiano_2014.pdf` | Italiano D et al., Pharmacokinetic and pharmacodynamic int…, Expert opinion on drug meta… (2014) | pgx | 7 | [10.1517/17425255.2014.956081](https://doi.org/10.1517/17425255.2014.956081) | [25196459](https://www.ncbi.nlm.nih.gov/pubmed/25196459) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Manis_2023.pdf` | Manis MM et al., Managing the Drug-Drug Interaction With…, Hospital pharmacy (2023) | pgx | 7 | [10.1177/00185787221150928](https://doi.org/10.1177/00185787221150928) | [37360203](https://www.ncbi.nlm.nih.gov/pubmed/37360203) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Spina_1996.pdf` | Spina E et al., Clinically significant pharmacokinetic…, Clinical pharmacokinetics (1996) | pgx | 7 | [10.2165/00003088-199631030-00004](https://doi.org/10.2165/00003088-199631030-00004) | [8877250](https://www.ncbi.nlm.nih.gov/pubmed/8877250) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Tanaka_1999.pdf` | Tanaka E, Clinically significant pharmacokinetic…, Journal of clinical pharmac… (1999) | pgx | 7 | [10.1046/j.1365-2710.1999.00201.x](https://doi.org/10.1046/j.1365-2710.1999.00201.x) | [10380060](https://www.ncbi.nlm.nih.gov/pubmed/10380060) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Turnheim_2004.pdf` | Turnheim K, [Drug interactions with antiepileptic a…, Wiener klinische Wochenschr… (2004) | pgx | 7 | [10.1007/BF03040747](https://doi.org/10.1007/BF03040747) | [15038401](https://www.ncbi.nlm.nih.gov/pubmed/15038401) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Alonso-Navarro_2006.pdf` | Alonso-Navarro H et al., CYP2C19 polymorphism and risk for essen…, European neurology (2006) | pgx | 5 | [10.1159/000095702](https://doi.org/10.1159/000095702) | [16960452](https://www.ncbi.nlm.nih.gov/pubmed/16960452) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-07T07:28:36.484458+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of carbamazepine, not primidone. |
| popPK | Ahn_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of carbamazepine, not primidone, although both are antiepileptics. |
| PGx | Alonso-Navarro_2006 | not_relevant | 2 | 0 | The study reports an association between CYP2C19 genotype and disease risk or side effect prevalence, but does not report quantitative changes in pharmacokinetic or pharmacodynamic parameters. |
| popPK | Atmowihardjo_2022 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for imatinib in ARDS and does not mention primidone. |
| PGx | Bentué-Ferrer_2012 | not_relevant | 0 | 0 | The paper discusses therapeutic drug monitoring and general metabolic variability for primidone but does not report any specific pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| popPK | Beuschlein_2024 | irrelevant | 0 | 0 | The paper is a clinical guideline on glucocorticoid-induced adrenal insufficiency and contains no pharmacokinetic data for primidone. |
| popPK | Bourgoin_2005 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of cyclosporin A in renal transplant patients, not primidone. |
| PGx | Błaszczyk_2015 | not_relevant | 0 | 0 | The paper reviews adverse skin reactions to antiepileptic drugs generally, mentioning primidone only as an example, without reporting specific pharmacogenomic effects on its PK or PD parameters. |
| PGx | Castonguay_2022 | not_relevant | 0 | 0 | The paper studies transcriptomic (RNA-seq) effects of primidone on cell lines to identify molecular pathways, rather than measuring the effect of gene variants on pharmacokinetic or pharmacodynamic parameters of the drug. |
| PGx | Cerveny_2006 | not_relevant | 0 | 0 | The paper investigates BCRP transporter interactions but contains no genetic variants, genotypes, or pharmacogenomic data. |
| popPK | Chen_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lamotrigine, not primidone. |
| PGx | Cokley_2022 | not_relevant | 0 | 0 | The paper is a clinical guidance statement on drug-drug interactions between Paxlovid and antiseizure medications; it does not report any pharmacogenomic effects or gene-variant specific PK/PD changes. |
| PGx | Desta_2001 | not_relevant | 0 | 0 | The paper describes in vitro inhibition of CYP enzymes by isoniazid and discusses primidone only as an example of a co-administered drug susceptible to interaction, without reporting any pharmacogenomic effects on primidone's PK parameters. |
| PGx | Devanathan_2026 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between lenacapavir and primidone, not a pharmacogenomic effect. |
| popPK | Eugene_2021 | irrelevant | 0 | 0 | The study is a pharmacovigilance analysis of antipsychotics and mentions primidone only as a CYP3A4 inducer in the discussion, containing no pharmacokinetic parameters. |
| popPK | Geci_2026 | irrelevant | 0 | 0 | The paper is a general methodological study on drug-induced liver injury (DILI) prediction using a dataset of 241 drugs, with no specific focus or reported pharmacokinetic parameters for primidone. |
| PGx | Gedde-Dahl_2012 | not_relevant | 0 | 0 | The study investigates drug-drug interactions between statins and antiepileptic drugs (including primidone) and does not report pharmacogenomic effects of genetic variants on primidone pharmacokinetics or pharmacodynamics. |
| popPK | Grasela_1999 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lamotrigine, not primidone, and does not report any parameters for primidone. |
| PGx | Hachad_2002 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions for new antiepileptic drugs and only mentions primidone as an enzyme inducer; it does not report a gene variant affecting primidone's PK or PD. |
| PGx | Hall_1987 | not_relevant | 0 | 0 | The paper investigates the metabolism and inhibition of mephenytoin, mentioning primidone only as a non-inhibitor, and does not report pharmacogenomic effects on primidone PK or PD. |
| PGx | Italiano_2014 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between antiepileptics and antidepressants, not pharmacogenomic effects on primidone. |
| popPK | Jordan_2023 | irrelevant | 0 | 0 | The paper is a scoping review of databases regarding infant outcomes and breastfeeding, and mentions primidone only as a specific antiepileptic drug with a data deficit, without reporting any pharmacokinetic parameters. |
| popPK | Karanam_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lamotrigine in pregnant women with epilepsy, and primidone is only mentioned as a covariate for enzyme-inducing antiseizure medications. |
| popPK | Karaźniewicz-Łada_2021 | irrelevant | 0 | 0 | The paper is a review of drug-drug interactions among antiepileptic drugs, mentioning primidone only as an enzyme inducer in passing without reporting specific quantitative pharmacokinetic parameters for primidone itself. |
| popPK | Klein_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of alprazolam (a benzodiazepine), not primidone, which is only mentioned as a co-administered enzyme inducer. |
| popPK | Ku_2016 | irrelevant | 0 | 0 | The study focuses on pharmacokinetic modeling of phenytoin and lamotrigine, not primidone. |
| popPK | Maglalang_2024 | irrelevant | 0 | 0 | The paper is a review of antiseizure medications in pediatrics that does not report any quantitative pharmacokinetic parameters or data for primidone. |
| PGx | Manis_2023 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction between primidone and apixaban, not a pharmacogenomic effect on primidone's PK or PD parameters. |
| PGx | McNary_2025 | not_relevant | 0 | 0 | The study investigates the clinical efficacy and safety of concomitant drug use (primidone and DOACs) in a general population, but it does not report on pharmacogenomic variants or their specific effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Mesdjian_1999 | not_relevant | 0 | 0 | The study investigates carbamazepine metabolism and drug-drug interactions using a rabbit model, with no analysis of genetic variants or human pharmacogenomics for primidone. |
| popPK | Methaneethorn_2018 | irrelevant | 0 | 0 | The paper is a systematic review of valproic acid pharmacokinetics and does not contain any data for primidone. |
| popPK | Perucca_2008 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rufinamide, with primidone mentioned only as a concomitant drug that affects rufinamide clearance, not as the subject drug. |
| PGx | Perucca_2008 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of rufinamide and its interactions with primidone, but does not report a pharmacogenomic effect (gene variant) on primidone's PK/PD parameters. |
| popPK | Punyawudho_2012 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for carbamazepine, not primidone. |
| PGx | Riva_2023 | not_relevant | 3 | 1 | The paper only lists primidone as a potential drug affected by CYP2C9 variants based on general literature, but provides no specific quantitative PK/PD data or fitted effect sizes for primidone in the study cohort. |
| popPK | Rivas_2008 | irrelevant | 0 | 0 | The study models the pharmacokinetics of lamotrigine, with primidone serving only as a covariate (enzyme inducer) and no primidone-specific disposition parameters are reported. |
| PGx | Rivers_2008 | not_relevant | 0 | 0 | The paper investigates in vitro drug transporter interactions, not the effect of genetic variants on primidone PK/PD. |
| popPK | Romano-Moreno_2005 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for carbamazepine, with primidone included only as a covariate/comedication affecting carbamazepine clearance, not as the subject drug for PK modeling. |
| popPK | Schoemaker_2017 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for brivaracetam, with primidone mentioned only as a co-administered antiepileptic drug covariate affecting clearance. |
| popPK | Schoemaker_2018 | irrelevant | 0 | 0 | The study models brivaracetam and levetiracetam pharmacokinetics, with primidone mentioned only as a co-administered enzyme inducer covariate affecting levetiracetam exposure, not as the subject drug. |
| popPK | Shivarov_2026 | irrelevant | 0 | 0 | The study analyzes pharmacovigilance signals for ibrutinib in FAERS and does not report any pharmacokinetic parameters for primidone. |
| popPK | Somogyi-Végh_2019 | irrelevant | 0 | 0 | This is a retrospective analysis of drug dispensing data to identify prevalence of drug-drug interactions, not a pharmacokinetic study, and contains no PK parameters for primidone. |
| PGx | Spina_1996 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic drug-drug interactions involving carbamazepine and primidone, but does not report any pharmacogenomic (gene-based) effects on primidone's PK or PD parameters. |
| PGx | Stefan_2006 | not_relevant | 0 | 0 | The paper discusses general epilepsy management in the elderly and mentions primidone only as a first-generation drug to be avoided; it does not report any genetic or pharmacogenomic effects on its PK/PD. |
| popPK | Sunkaraneni_2018 | irrelevant | 0 | 0 | The study reports population PK parameters for eslicarbazepine, with primidone mentioned only as a covariate for drug-drug interactions. |
| PGx | Tanaka_1999 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic drug-drug interactions, not pharmacogenomic effects of gene variants on primidone. |
| PGx | Turnheim_2004 | not_relevant | 0 | 0 | The paper is a general review of pharmacokinetic and pharmacodynamic drug-drug interactions involving antiepileptics and does not report pharmacogenomic effects (gene variant associations) on primidone PK/PD parameters. |
| PGx | Wanounou_2022 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving primidone as an enzyme inducer but does not report any pharmacogenomic effects (gene variants) on primidone's PK/PD. |
| popPK | Wei_2024 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for rivaroxaban and enoxaparin, and does not study primidone or report any primidone pharmacokinetic parameters. |
| PGx | Yap_2008 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions between chemotherapeutics and antiepileptics, not pharmacogenomic effects of gene variants on primidone PK/PD. |
| popPK | Yau_2019 | irrelevant | 0 | 0 | The study investigates the association between levetiracetam use and acute kidney injury, and does not contain pharmacokinetic data for primidone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
