<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;ketoconazole&quot;}]"></div>

# ketoconazole

- **generic name:** ketoconazole
- **ATC codes:** `D01AC08`, `G01AF11`, `H02CA03`, `J02AB02`
- **DrugBank:** [DB01026](https://go.drugbank.com/drugs/DB01026) · **PubChem:** [CID 3823](https://pubchem.ncbi.nlm.nih.gov/compound/3823)
- **molar mass:** 531.431 g/mol (C26H28Cl2N4O4) — DrugBank
- **groups:** approved, investigational

## About

Ketoconazole is an antifungal used to treat fungal infections such as candidiasis, dermatomycoses, tinea, pityriasis versicolor, and seborrhoeic dermatitis, and it is also used as an antiadrenal agent in Cushing syndrome. It remains an approved medicine, used mainly topically for skin and vaginal fungal infections, while oral use is limited by a boxed warning and one EU application was withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407883](https://www.wikidata.org/wiki/Q407883) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:57 | 34:25 | 0/0/0 | 2/0/1 | 0/0/0 | 943,341/15,675 | ollama / qwen3.8:27b-mtp-q8_0 | 48 | 5/38 | 46/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Jang_2025_V0](drugs/drug_ketoconazole/pd_Jang_2025_V0.md) | initial velocity of product formation ← ketoconazole · inhibition effect | — | Jang HJ et al., Optimizing enzyme inhibition analysis:…, Nature communications (2025) | [10.1038/s41467-025-60468-z](https://doi.org/10.1038/s41467-025-60468-z) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Winther_2013_corticosterone](drugs/drug_ketoconazole/pd_Winther_2013_corticosterone.md) | corticosterone ← ketoconazole · direct sigmoid Emax (Hill) effect | — | Winther CS et al., Corticosteroid production in H295R cell…, International journal of to… (2013) | [10.1177/1091581813484366](https://doi.org/10.1177/1091581813484366) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Winther_2013_cortisol](drugs/drug_ketoconazole/pd_Winther_2013_cortisol.md) | cortisol ← ketoconazole · direct sigmoid Emax (Hill) effect | — | Winther CS et al., Corticosteroid production in H295R cell…, International journal of to… (2013) | [10.1177/1091581813484366](https://doi.org/10.1177/1091581813484366) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [van_2012_11_deoxycortisol](drugs/drug_ketoconazole/pd_van_2012_11_deoxycortisol.md) | 11-deoxycortisol production ← ketoconazole · direct sigmoid Emax (Hill) effect | — | van der Pas R et al., Fluconazole inhibits human adrenocortic…, The Journal of endocrinology (2012) | [10.1530/JOE-12-0310](https://doi.org/10.1530/JOE-12-0310) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [van_2012_cortisol](drugs/drug_ketoconazole/pd_van_2012_cortisol.md) | cortisol production ← ketoconazole · direct sigmoid Emax (Hill) effect | — | van der Pas R et al., Fluconazole inhibits human adrenocortic…, The Journal of endocrinology (2012) | [10.1530/JOE-12-0310](https://doi.org/10.1530/JOE-12-0310) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ketoconazole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` target | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor, `CYP4F2` inhibitor, `UGT2B7` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2A6` inhibitor, `CYP2B6` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor, `CYP4F2` inhibitor, `SLCO1B1` inhibitor, `UGT1A1` inhibitor, `UGT2B7` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer/inhibitor, `CYP1B1` inhibitor | DrugBank actor |
| metabolism | skin | `CYP1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer/inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor, `UGT1A1` inhibitor, `UGT2B7` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | `ABCB11` inhibitor | DrugBank actor |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | adrenal gland | `CYP11B1` inhibitor, `CYP17A1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | prostate gland | `AR` binder | DrugBank actor |
| — | testis | `CYP17A1` inhibitor, `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CYP21A2 (inhibitor), CYP4F12 (inhibitor), ERG11 (inhibitor), KCNH2 (inhibitor), NR1I2 (target), NR1I3 (target), SHBG (target), UGT1A7 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3022 matched, 216 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ma_2003.pdf` | Ma YM et al., Hepatotoxicity and toxicokinetics of ke…, Acta pharmacologica Sinica (2003) | popPK | 9 | not captured | [12904277](https://pubmed.ncbi.nlm.nih.gov/12904277) | The study reports toxicokinetic parameters (CL, AUC, Cmax) for ketoconazole in rabbits using a two-compartment model, but specific numeric values are not present in the provided text. |

<sub>queue written 2026-10-07T13:43:54.588802+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abbas_2011 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (ketoconazole effect on bosutinib PK) in healthy subjects and does not report any pharmacogenomic effects or genetic variants. |
| popPK | Agnihotri_2019 | irrelevant | 0 | 0 | The study focuses on the anti-tumor efficacy and mechanism of action (HK2 inhibition) of ketoconazole in glioblastoma models, not on its pharmacokinetic disposition parameters. |
| PGx | Ball_1992 | not_relevant | 0 | 0 | The paper characterizes the metabolism of the ergot alkaloid CQA 206-291 and identifies CYP3A4/3A5 as the responsible enzymes, but it does not report a pharmacogenomic effect on the PK or PD parameters of ketoconazole itself. |
| popPK | Bernardino_2006 | irrelevant | 0 | 0 | The study is an in-vitro leishmanicidal activity and cytotoxicity assay, not a pharmacokinetic study, and ketoconazole is only used as a comparator drug. |
| popPK | Bhat_2025 | irrelevant | 0 | 0 | The paper is a scoping review of Model-Informed Drug Development (MIDD) and does not report specific pharmacokinetic parameters for ketoconazole. |
| popPK | Biagini_2006 | irrelevant | 0 | 0 | The study is an in-vitro hepatotoxicity assessment using cell models, not a pharmacokinetic study reporting disposition parameters for ketoconazole. |
| PGx | Bloomer_1994 | not_relevant | 0 | 0 | The paper investigates the metabolism of granisetron, not ketoconazole, and does not report pharmacogenomic effects on ketoconazole PK/PD. |
| popPK | Bukuroshi_2018 | irrelevant | 0 | 0 | Ketoconazole is used only as an in vitro CYP inhibitor to characterize vitamin D receptor activators, not as the subject of a pharmacokinetic study. |
| PGx | Böttiger_1997 | not_relevant | 0 | 0 | The study investigates the effect of ketoconazole on omeprazole pharmacokinetics, not the effect of a gene variant on ketoconazole pharmacokinetics or pharmacodynamics. |
| popPK | Chen_2013 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of axitinib, and ketoconazole is only mentioned as a co-administered CYP3A4 inhibitor in a drug interaction study. |
| PGx | Chen_2013 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of axitinib and mentions ketoconazole only as a CYP3A4 inhibitor affecting axitinib levels, not as the subject of a pharmacogenomic study. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for isavuconazole, not ketoconazole; ketoconazole is only mentioned as a CYP3A4 inhibitor affecting isavuconazole levels. |
| popPK | Cheng_2026 | irrelevant | 0 | 0 | The paper is a review of pharmacometrics for antibody-drug conjugates (ADCs) and mentions ketoconazole only as a CYP3A4/P-gp inhibitor in DDI simulations, not as the subject drug for PK parameter estimation. |
| PGx | Chiu_2014 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (ketoconazole affecting lurasidone PK), not pharmacogenomic effects (gene variants affecting PK/PD). |
| PGx | Choules_2024 | not_relevant | 0 | 0 | The paper reports a PBPK model for drug-drug interactions (ketoconazole/rifampin) with enfortumab vedotin, not a pharmacogenomic effect of a gene variant on ketoconazole PK/PD. |
| popPK | Chu_2025 | irrelevant | 0 | 0 | The study reports population PK parameters for ravuconazole and itraconazole, not ketoconazole. |
| popPK | Clarke_1999 | irrelevant | 0 | 0 | The paper is a review of docetaxel pharmacokinetics, and ketoconazole is only mentioned as a CYP3A4 inhibitor for potential drug interactions, not as the subject drug. |
| PGx | Clarke_1999 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of docetaxel and mentions ketoconazole only as a CYP3A4 inhibitor, without reporting any pharmacogenomic effects on ketoconazole's PK or PD parameters. |
| PGx | Cruz-Hurtado_2019 | not_relevant | 0 | 0 | The paper studies the metabolism of the fungicide vinclozolin, not the drug ketoconazole, and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Cullberg_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of AZD5069, with ketoconazole used only as a CYP3A4 inhibitor in a drug-drug interaction study, not as the subject drug. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | The paper is a review of lopinavir/ritonavir pharmacokinetics and only mentions ketoconazole in the context of drug interactions requiring dosage adjustment, without reporting any quantitative PK parameters for ketoconazole. |
| popPK | Dahan_2026 | irrelevant | 0 | 0 | The paper is a narrative review of Model-Informed Drug Development for analgesics and does not report any pharmacokinetic parameters for ketoconazole. |
| popPK | Daneshmend_1988 | irrelevant | 2 | 0 | The text is a review summarizing qualitative pharmacokinetic properties (e.g., 2-compartment model, protein binding) but does not report specific quantitative parameter values (CL, V, t1/2) for ketoconazole. |
| popPK | David_2012 | irrelevant | 0 | 0 | The paper is a review of fingolimod pharmacokinetics, and ketoconazole is only mentioned as a co-administered CYP4F2 inhibitor, not as the subject drug. |
| PGx | DeVane_2001 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of quetiapine and does not report any pharmacogenomic effects on ketoconazole. |
| popPK | Del_2022 | irrelevant | 0 | 0 | The study investigates the ocular pharmacokinetics of acetaminophen, brimonidine, cefuroxime axetil, and sunitinib in rabbits; ketoconazole is only mentioned in the introduction as a CYP substrate example and is not dosed or analyzed. |
| PGx | Dorian_2010 | not_relevant | 0 | 0 | The paper discusses dronedarone pharmacokinetics and mentions ketoconazole only as a CYP3A4 inhibitor causing drug-drug interactions, not as a drug whose PK/PD is altered by a gene variant. |
| popPK | Dresser_2000 | irrelevant | 0 | 0 | The paper is a review of CYP3A4 inhibition where ketoconazole is mentioned only as an inhibitor/comparator, not as the subject drug for PK parameter estimation. |
| popPK | Duan_2011 | irrelevant | 0 | 0 | The study simulates the pharmacokinetics of midazolam (the substrate) to evaluate DDI methodology, and does not report quantitative PK parameters for ketoconazole (the inhibitor). |
| popPK | Dutreix_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of imatinib (the subject drug) with ketoconazole acting as a CYP3A4 inhibitor/comparator, and no PK parameters for ketoconazole itself are reported. |
| popPK | Eisenmann_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ibrutinib, with ketoconazole used only as a CYP3A inhibitor/comparator agent. |
| PGx | El_2004 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (ketoconazole affecting azimilide) in healthy subjects and does not report any pharmacogenomic effects or genetic variants. |
| popPK | Eneroth_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay for P-glycoprotein interactions using ketoconazole as a modulator, not a pharmacokinetic study of ketoconazole disposition. |
| PGx | Engels_2004 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (ketoconazole inhibiting docetaxel metabolism) rather than a pharmacogenomic effect of a gene variant on ketoconazole's PK/PD. |
| popPK | Engels_2006 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of docetaxel, with ketoconazole serving only as a CYP3A inhibitor/comparator, and no quantitative PK parameters for ketoconazole itself are reported in the evidence. |
| PGx | Englund_2014 | not_relevant | 0 | 0 | The paper investigates the in vitro CYP450 inhibitory properties of transporter inhibitors (including ketoconazole) but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Fleishaker_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of reboxetine, with ketoconazole mentioned only as a co-administered inhibitor affecting reboxetine clearance. |
| PGx | Fleishaker_2000 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of reboxetine, not ketoconazole, and does not report pharmacogenomic effects on ketoconazole parameters. |
| PGx | Fuhr_2005 | not_relevant | 0 | 0 | The paper investigates the metabolism of triamterene by CYP1A2 and does not report pharmacogenomic effects on the PK or PD of ketoconazole. |
| popPK | Fujimaki_2001 | irrelevant | 0 | 0 | The study is an in-vitro investigation of nefiracetam metabolism where ketoconazole is used only as a CYP3A4 inhibitor, not as the subject drug for PK parameter estimation. |
| popPK | Gaspar_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fexofenadine as a P-glycoprotein probe substrate, not ketoconazole. |
| PGx | Gibbs_2000 | not_relevant | 0 | 0 | The study investigates the mechanism of CYP3A4 inhibition in Caco-2 cells and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Gill_1995 | not_relevant | 0 | 0 | The paper investigates the metabolism of dapsone and the inhibitory effect of ketoconazole on that metabolism, rather than the pharmacokinetics or pharmacodynamics of ketoconazole itself. |
| popPK | Giraud_2004 | irrelevant | 0 | 0 | The study focuses on the in vitro metabolism of clobazam, and ketoconazole is used only as a CYP3A4 inhibitor, not as the subject drug for PK parameter estimation. |
| PGx | Grace_1999 | not_relevant | 0 | 0 | The paper studies the metabolism of artelinic acid and reports ketoconazole as an inhibitor of that process, but does not report a pharmacogenomic effect on the PK/PD of ketoconazole itself. |
| PGx | Greenblatt_1993 | not_relevant | 0 | 0 | The paper focuses on alprazolam pharmacokinetics and mentions ketoconazole only as an inhibitor of alprazolam metabolism, without reporting any pharmacogenomic effects on ketoconazole itself. |
| popPK | Grycová_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ketoconazole impurities' effects on the aryl hydrocarbon receptor, reporting no pharmacokinetic parameters. |
| popPK | Guerard_2004 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of pulmonary artery relaxation where ketoconazole is used only as a CYP inhibitor, not as the subject drug for PK analysis. |
| PGx | Guo_2020 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on midazolam PK, not ketoconazole PK/PD. |
| popPK | Haeba_2008 | irrelevant | 0 | 0 | The study is an ecotoxicology investigation of endocrine disruption in Daphnia magna, not a pharmacokinetic study, and reports no disposition parameters for ketoconazole. |
| PGx | Hall_1987 | not_relevant | 0 | 0 | The paper focuses on mephenytoin metabolism and only mentions ketoconazole as a non-inhibitor in an in vitro assay, without reporting any pharmacogenomic effects on ketoconazole PK/PD. |
| PGx | Halliday_1995 | not_relevant | 0 | 0 | The paper investigates the metabolism of halofantrine and its interaction with CYP enzymes, not the pharmacokinetics or pharmacodynamics of ketoconazole. |
| PGx | Hayes_1991 | not_relevant | 0 | 0 | The paper studies the effect of ketoconazole on a vitamin D enzyme in a cell line, not the pharmacokinetics or pharmacodynamics of ketoconazole itself. |
| popPK | Huntjens_2026 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of mocravimod, not ketoconazole. |
| PGx | Iwata_2004 | not_relevant | 0 | 0 | The paper characterizes CYP3A4 inhibition by Schisandra components and compares potency to ketoconazole, but does not report any pharmacogenomic effect (gene variant/genotype) on the PK or PD of ketoconazole. |
| popPK | Jang_2025 | irrelevant | 0 | 0 | The study is an in-vitro enzyme kinetics analysis focusing on inhibition constants (Ki) for CYP3A4, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for ketoconazole. |
| PGx | Jerling_2006 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of ranolazine and mentions ketoconazole only as a CYP3A inhibitor that increases ranolazine exposure, not as the subject of a pharmacogenomic study. |
| popPK | Jerzsele_2014 | irrelevant | 0 | 0 | The study reports in vitro antimicrobial susceptibility (MIC, MFC, EC50) of Malassezia pachydermatis to ketoconazole, not pharmacokinetic parameters. |
| PGx | Johnson_2009 | not_relevant | 0 | 0 | The paper focuses on the statistical power and design of population pharmacokinetic studies for drug-drug interactions, not on pharmacogenomic effects of gene variants on ketoconazole. |
| popPK | Jończyk_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tapentadol, not ketoconazole. |
| PGx | Jurima-Romet_1994 | not_relevant | 0 | 0 | The paper studies drug-drug interactions (inhibition of terfenadine metabolism by ketoconazole) and does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Jönsson_1995 | not_relevant | 0 | 0 | The paper investigates the metabolism of budesonide and identifies CYP3A as the enzyme, using ketoconazole only as an inhibitor probe, rather than reporting a pharmacogenomic effect on ketoconazole's PK/PD. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for ticagrelor and its metabolite, not ketoconazole (which is only listed as an exclusion criterion). |
| popPK | Kasichayanula_2014 | irrelevant | 0 | 0 | Ketoconazole is used as a CYP3A inhibitor probe/co-administered agent, not the subject drug for PK parameter estimation. |
| PGx | Kehrer_2002 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (ketoconazole inhibiting irinotecan metabolism) rather than a pharmacogenomic effect (gene variant/genotype) on a PK/PD parameter. |
| popPK | Kerbusch_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ifosfamide and its metabolites, using ketoconazole only as a CYP3A4 inhibitor/co-administered agent, not as the subject drug. |
| PGx | Kerbusch_2001 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (ketoconazole/rifampin) on ifosfamide pharmacokinetics, not the pharmacogenomics of ketoconazole itself. |
| PGx | Kerbusch_2003 | not_relevant | 0 | 0 | The paper reports the pharmacokinetics of darifenacin, not ketoconazole; ketoconazole is only mentioned as a CYP3A4 inhibitor used to probe metabolism. |
| popPK | Kim_1995 | irrelevant | 0 | 0 | The study focuses on the gene expression and induction of microsomal epoxide hydrolase by ketoconazole, not on the pharmacokinetic disposition parameters (CL, V, ka) of the drug itself. |
| popPK | Kotegawa_2002 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of midazolam (the subject drug) and ketoconazole acts as a perpetrator/inhibitor, with no quantitative PK parameters reported for ketoconazole itself. |
| popPK | Kourentas_2016 | irrelevant | 1 | 0 | The study is an in vitro methodology development for gastrointestinal transfer using ketoconazole as a model drug, not a pharmacokinetic study reporting systemic disposition parameters (CL, V, ka) for the drug. |
| popPK | Lacy_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cabozantinib, with ketoconazole serving only as a CYP3A4 inhibitor probe to assess drug-drug interactions, not as the subject drug. |
| PGx | Lang_2020 | not_relevant | 0 | 0 | The paper focuses on PBPK/PD modeling of ivabradine and its interaction with ketoconazole, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Le_2020 | not_relevant | 0 | 0 | The paper investigates quetiapine metabolism using molecular networking and does not report pharmacogenomic effects on ketoconazole PK/PD parameters. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for everolimus, not ketoconazole. |
| popPK | Li_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dictamnine (DTN) in mice, using ketoconazole only as a CYP3A4 inhibitor to modulate DTN metabolism, not as the subject drug. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and toxicity of retrorsine, with ketoconazole used only as a co-administered inhibitor/comparator. |
| PGx | Lindh_2003 | not_relevant | 0 | 0 | The paper studies the effect of ketoconazole on venlafaxine pharmacokinetics, not the effect of a gene variant on ketoconazole pharmacokinetics or pharmacodynamics. |
| PGx | Ling_1995 | not_relevant | 0 | 0 | The paper investigates the metabolism of terfenadine, not ketoconazole, and does not report pharmacogenomic effects on ketoconazole PK/PD parameters. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic review of escitalopram, not ketoconazole. |
| popPK | Ma_2003 | relevant | 9 | 2 | The study reports toxicokinetic parameters (CL, AUC, Cmax) for ketoconazole in rabbits using a two-compartment model, but specific numeric values are not present in the provided text. |
| PGx | Ma_2003_2 | not_relevant | 0 | 0 | The paper is a review of irinotecan pharmacology and only mentions ketoconazole as a potential drug-drug interaction partner, without reporting any pharmacogenomic effects on ketoconazole PK/PD. |
| popPK | Maccecchini_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Posiphen, and ketoconazole is only mentioned as an in-vitro CYP3A4 inhibitor to demonstrate metabolic pathways, not as the subject drug. |
| PGx | Malhotra_2009 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (ketoconazole as an inhibitor) and CYP2D6 phenotype differences for fesoterodine, but does not report a pharmacogenomic effect on the PK/PD parameters of ketoconazole itself. |
| PGx | Malhotra_2014 | not_relevant | 0 | 0 | The paper is a review of pharmacogenomic considerations in Barth syndrome and mentions ketoconazole only as a potential therapeutic agent to augment cardiolipin levels, without reporting any gene-variant effects on its PK or PD parameters. |
| popPK | Marques_2024 | irrelevant | 0 | 0 | The paper is a general review of in silico approaches in precision medicine and does not report any quantitative pharmacokinetic parameters for ketoconazole. |
| PGx | Marsousi_2018 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDIs) and PBPK model validation, not on pharmacogenomic effects of gene variants on ketoconazole PK/PD. |
| popPK | McEneny-King_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of donepezil binding, where ketoconazole is used only as a reference inhibitor, and no pharmacokinetic parameters for ketoconazole are reported. |
| PGx | McKillop_2005 | not_relevant | 0 | 0 | The paper investigates the metabolism of gefitinib, not ketoconazole, and does not report pharmacogenomic effects on ketoconazole PK/PD parameters. |
| popPK | McLachlan_1998 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cyclosporine, with ketoconazole serving only as a metabolic inhibitor/comparator. |
| popPK | Mendes_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of paclitaxel, with ketoconazole serving only as a co-administered inhibitor in a drug-drug interaction simulation. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (CYP3A4 inhibition) involving ketoconazole, not pharmacogenomic effects of gene variants on ketoconazole PK/PD. |
| popPK | Mudra_2010 | irrelevant | 0 | 0 | Ketoconazole is used only as a co-administered inhibitor to characterize the pharmacokinetics of atenolol and verapamil, not as the subject drug. |
| popPK | Ngo_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rivaroxaban, and ketoconazole is only mentioned as a literature comparator for drug-drug interactions, not as the subject drug. |
| popPK | Nielsen_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay (H295R cell line) investigating endocrine disruption and steroidogenesis, not a pharmacokinetic study reporting disposition parameters for ketoconazole. |
| PGx | Niemi_2003 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving rifampicin and ketoconazole, not pharmacogenomic effects of gene variants on ketoconazole PK/PD. |
| PGx | Niwa_2014 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (CYP inhibition) of antifungals, not pharmacogenomic effects of gene variants on ketoconazole PK/PD. |
| PGx | Ogasawara_2020 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (ketoconazole inhibiting fedratinib metabolism) rather than a pharmacogenomic effect of a gene variant on ketoconazole's PK or PD. |
| PGx | Parasrampuria_2016 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (ketoconazole inhibiting edoxaban metabolism/transport) in a general population, not a pharmacogenomic effect based on specific gene variants or genotypes. |
| popPK | Park_2014 | irrelevant | 0 | 0 | The study evaluates the antiparasitic efficacy of ketoconazole in ascidians, not its pharmacokinetic parameters. |
| popPK | Peron_2017 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of antiparasitic activity and drug combinations, containing no pharmacokinetic parameters for ketoconazole. |
| popPK | Petropoulos_2017 | irrelevant | 0 | 0 | The study evaluates the antimicrobial properties of okra seeds, using ketoconazole only as a comparative reference for fungicidal activity, and contains no pharmacokinetic data. |
| PGx | Pichard_1995 | not_relevant | 0 | 0 | The paper investigates the metabolism of zolpidem, not ketoconazole, and does not report pharmacogenomic effects on ketoconazole PK/PD. |
| PGx | Pirmohamed_1995 | not_relevant | 0 | 0 | The paper investigates the metabolism of clozapine, not ketoconazole, and only mentions ketoconazole as a non-specific P450 inhibitor. |
| PGx | Posada_2020 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (CYP3A4 inhibition by ketoconazole) affecting abemaciclib PK, not a pharmacogenomic effect (gene variant/genotype) on ketoconazole PK/PD. |
| popPK | Psachoulias_2012 | irrelevant | 1 | 0 | The study is an in vitro methodology development using ketoconazole as a model compound to predict precipitation, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for the drug. |
| popPK | Radeva-Llieva_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sildenafil, with ketoconazole used only as a positive control/comparator agent. |
| PGx | Radeva-Llieva_2022 | not_relevant | 0 | 0 | The study investigates drug-herb interactions (methylxanthines) on sildenafil PK in rats, not the effect of a gene variant on ketoconazole PK/PD. |
| popPK | Ramanathan_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of idelalisib, with ketoconazole serving only as a CYP3A inhibitor probe in a drug-drug interaction study. |
| PGx | Ren_2021 | not_relevant | 0 | 0 | The paper focuses on a PBPK model for drug-drug interactions (CYP3A4 inhibition) and does not report pharmacogenomic effects (gene variants) on ketoconazole PK/PD. |
| popPK | Ridtitid_2007 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for praziquantel, with ketoconazole serving only as a co-administered CYP3A4 inhibitor. |
| PGx | Ridtitid_2007 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (ketoconazole inhibiting praziquantel metabolism) in a general population, not a pharmacogenomic effect based on genetic variants. |
| PGx | Rytkönen_2020 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDI) involving ketoconazole as a perpetrator, not on pharmacogenomic effects (gene variants) on ketoconazole's PK/PD. |
| PGx | Santos_2000 | not_relevant | 0 | 0 | The paper focuses on the metabolism of irinotecan (CPT-11) by CYP3A4/3A5, and ketoconazole is only mentioned as a non-specific inhibitor used to confirm enzyme involvement, not as the subject of a pharmacogenomic study. |
| PGx | Schmider_1995 | not_relevant | 0 | 0 | The paper studies the metabolism of amitriptyline and the inhibitory effect of ketoconazole on CYP3A, but does not report a pharmacogenomic effect on the PK/PD of ketoconazole itself. |
| popPK | Schmider_1996 | irrelevant | 0 | 0 | The study is an in-vitro enzyme kinetic analysis of amitriptyline metabolism where ketoconazole is used only as a CYP3A inhibitor, not as the subject drug for PK parameter estimation. |
| PGx | Scripture_2001 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of fluvastatin and does not report pharmacogenomic effects on ketoconazole. |
| popPK | Seow_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of PXR activation by rosemary compounds and does not report pharmacokinetic parameters for ketoconazole. |
| PGx | Shakeri-Nejad_2006 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and does not report pharmacogenomic effects (gene variants) on ketoconazole PK/PD. |
| PGx | Sil_2014 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (ketoconazole inhibiting lobeglitazone metabolism) in a general population, not a pharmacogenomic effect based on genetic variants. |
| PGx | Song_2022 | not_relevant | 0 | 0 | The paper investigates the genotoxicity of a pollutant (BDE-47) and uses ketoconazole only as a CYP3A inhibitor to block enzyme activity, not to study the pharmacokinetics or pharmacodynamics of ketoconazole itself. |
| popPK | Song_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of drug PB-201 (a T2DM treatment), with ketoconazole serving only as a co-administered covariate for clearance estimation. |
| popPK | Song_2024_2 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for maribavir, not ketoconazole (which is only mentioned as a co-administered CYP3A4 inhibitor). |
| PGx | Srinivas_2016 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving rifampicin and ketoconazole as probe substrates, but does not report pharmacogenomic effects (gene variants) on the PK/PD of ketoconazole. |
| popPK | Sun_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for maribavir, not ketoconazole. |
| popPK | Tai_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of triptolide in rats, using ketoconazole only as a CYP3A inhibitor to verify the mechanism of glycyrrhizin's effect, not as the subject drug. |
| popPK | Tessaro_2015 | irrelevant | 0 | 0 | The study is an in vitro toxicology assay using ketoconazole as a positive control chemical, not a pharmacokinetic study. |
| PGx | Tian_2018 | not_relevant | 0 | 0 | The paper discusses nilotinib pharmacokinetics and mentions ketoconazole only as a CYP3A4 inhibitor affecting nilotinib exposure, not as the primary drug of interest for a pharmacogenomic study. |
| popPK | Tingle_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dapsone metabolism where ketoconazole is used only as a CYP inhibitor/comparator, with no PK parameters reported for ketoconazole. |
| PGx | Tjia_1996 | not_relevant | 0 | 0 | The paper studies theophylline metabolism and does not report pharmacogenomic effects on ketoconazole PK/PD parameters. |
| PGx | Towles_2016 | not_relevant | 0 | 0 | The paper investigates the metabolic bioactivation of lapatinib by CYP3A4/3A5, not the pharmacokinetics or pharmacodynamics of ketoconazole. |
| PGx | Treuheit_2016 | not_relevant | 0 | 0 | The paper investigates the structural dynamics and stability of CYP3A4 in lipid nanodiscs using biophysical methods, not the effect of genetic variants on ketoconazole pharmacokinetics or pharmacodynamics. |
| popPK | Tsume_2017 | irrelevant | 2 | 0 | The study focuses on in vitro dissolution and supersaturation mechanisms using a GIS system and mouse intestinal infusion, rather than reporting quantitative population pharmacokinetic parameters (CL, V, ka) for ketoconazole. |
| popPK | Ueshima_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for edoxaban, not ketoconazole (which is only mentioned as a concomitant inhibitor). |
| popPK | Vaddady_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for quizartinib and its metabolite AC886, not ketoconazole. |
| popPK | Walzer_2012 | irrelevant | 0 | 0 | Ketoconazole is used only as a CYP3A4 inhibitor probe to study clobazam pharmacokinetics, not as the subject drug. |
| PGx | Walzer_2012 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (clobazam with ketoconazole/omeprazole) and does not report pharmacogenomic effects (gene variants) on ketoconazole PK/PD. |
| PGx | Wang_2019 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (ketoconazole as a CYP3A inhibitor) affecting rolapitant PK, not a pharmacogenomic effect (gene variant/genotype) on ketoconazole PK/PD. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The study is an in vitro assay measuring the fungicidal activity (EC50) of ketoconazole on nematophagous fungi, not a pharmacokinetic study of ketoconazole disposition. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of aripiprazole, with ketoconazole mentioned only as a concomitant CYP3A4 inhibitor covariate. |
| PGx | Ward_1993 | not_relevant | 0 | 0 | The paper studies the metabolism of gestodene, not ketoconazole, and does not report pharmacogenomic effects on ketoconazole PK/PD. |
| popPK | Watt_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for methadone, not ketoconazole. |
| popPK | Weigand_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ferroptosis in adrenal cancer cells where ketoconazole is used solely as a steroidogenesis inhibitor to modulate cell death, not as a subject of pharmacokinetic analysis. |
| popPK | Wen_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dexamethasone, not ketoconazole. |
| popPK | Wendling_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of mavoglurant, with ketoconazole serving only as a co-administered drug for drug-drug interaction assessment. |
| popPK | Westra_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of osimertinib and its metabolite AZ5104, with ketoconazole mentioned only as a hypothetical comparator for CYP3A4 inhibition. |
| popPK | Westra_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of venetoclax, with ketoconazole mentioned only as a background comparator for CYP3A4 inhibition. |
| popPK | Wiebe_2020 | irrelevant | 0 | 0 | The study models the pharmacokinetics of midazolam (a CYP3A probe substrate) and its metabolite, not ketoconazole, which is only mentioned as a co-administered inhibitor. |
| popPK | Williams_2002 | irrelevant | 0 | 0 | The paper is a review of drug interactions involving statins, where ketoconazole is mentioned only as a CYP3A4 inhibitor/comparator, with no PK parameters reported for ketoconazole itself. |
| popPK | Winther_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay measuring steroid production inhibition (EC50) in H295R cells, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Wyska_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pentoxifylline and lisofylline in mice, with ketoconazole used only as a co-administered CYP3A4 inhibitor. |
| popPK | Xu_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of crizotinib, with ketoconazole serving only as a CYP3A inhibitor probe/co-administered agent. |
| popPK | Yang_2008 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dexamethasone, with ketoconazole mentioned only as a covariate influencing dexamethasone clearance. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is a review of PBPK modeling trends in China and does not report specific quantitative pharmacokinetic parameters for ketoconazole. |
| popPK | Yata_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for sildenafil in dogs, not ketoconazole. |
| PGx | Zhuang_2016 | not_relevant | 0 | 0 | The paper investigates the allosteric activation of CYP3A5 by icotinib and the enhancement of this activation by ketoconazole, but it does not report any pharmacogenomic effects (gene variants/genotypes) on the PK or PD parameters of ketoconazole. |
| popPK | Zimmerman_2004 | irrelevant | 0 | 0 | The study focuses on sirolimus pharmacokinetics and drug interactions, with ketoconazole serving only as a co-administered inhibitor to assess its effect on sirolimus exposure, not as the subject drug. |
| popPK | Zou_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for edoxaban, not ketoconazole. |
| popPK | van_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of steroidogenesis inhibition, not a pharmacokinetic study reporting disposition parameters for ketoconazole. |
| PGx | von_1995 | not_relevant | 0 | 0 | The paper is a review of CYP3A metabolism and drug interactions, explicitly stating there is no evidence of genetic polymorphism for CYP3A, and does not report pharmacogenomic effects on ketoconazole PK/PD. |
| popPK | Štěpánek_2022 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological evaluation of chemical derivatives of ketoconazole, reporting no pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
