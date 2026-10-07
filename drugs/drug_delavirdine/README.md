<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;delavirdine&quot;}]"></div>

# delavirdine

- **generic name:** delavirdine
- **ATC codes:** `J05AG02`
- **DrugBank:** [DB00705](https://go.drugbank.com/drugs/DB00705) · **PubChem:** [CID 5625](https://pubchem.ncbi.nlm.nih.gov/compound/5625)
- **molar mass:** 456.561 g/mol (C22H28N6O3S) — DrugBank
- **groups:** approved, withdrawn

## About

It is no longer available, as it has been withdrawn from the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q370244](https://www.wikidata.org/wiki/Q370244) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| delavirdine | parent | 456.561 | C22H28N6O3S | DrugBank | [5625](https://pubchem.ncbi.nlm.nih.gov/compound/5625) | Smith_2005 |
| N-delavirdine | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:38 | 11:09 | 0/1/0 | 2/0/0 | 0/0/0 | 462,852/16,828 | einfracz / qwen3.8-27b | 12 | 3/6 | 11/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Smith_2005_reference](drugs/drug_delavirdine/Delavirdine_Smith2005_reference.md) | — | parent + metabolite (no model) | 6 | Smith PF et al., Population pharmacokinetics of delavird…, Clinical pharmacokinetics (2005) | [10.2165/00003088-200544010-00004](https://doi.org/10.2165/00003088-200544010-00004) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Cheng_1997_ERMBT](drugs/drug_delavirdine/pd_Cheng_1997_ERMBT.md) | erythromycin breath test ← delavirdine · direct Emax (saturable) effect | — | Cheng CL et al., Steady-state pharmacokinetics of delavi…, Clinical pharmacology and t… (1997) | [10.1016/S0009-9236(97)90133-8](https://doi.org/10.1016/S0009-9236(97)90133-8) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Weiss_2007_pheophorbide_A_accumulation](drugs/drug_delavirdine/pd_Weiss_2007_pheophorbide_A_accumulation.md) | pheophorbide A accumulation ← delavirdine · direct sigmoid Emax (Hill) effect | — | Weiss J et al., Modulation of human BCRP (ABCG2) activi…, The Journal of antimicrobia… (2007) | [10.1093/jac/dkl474](https://doi.org/10.1093/jac/dkl474) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=delavirdine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor, `CYP3A7` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | mammary gland | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 127 matched, 103 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Smith_2005.pdf` | Smith PF et al., Population pharmacokinetics of delavird…, Clinical pharmacokinetics (2005) | popPK | 10 | [10.2165/00003088-200544010-00004](https://doi.org/10.2165/00003088-200544010-00004) | [15634033](https://pubmed.ncbi.nlm.nih.gov/15634033) | The abstract provides explicit quantitative population pharmacokinetic parameters for delavirdine (Vss, CL, Vmax, Km) in humans. |

<sub>queue written 2026-10-07T13:33:57.551056+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Baker_2006 | not_relevant | 0 | 0 | The study examines the pharmacodynamic effect of delavirdine on QT interval in combination with buprenorphine, but it does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Chen_2012 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study evaluating new compounds as NNRTIs, using delavirdine only as a standard comparator for potency (EC50/IC50) rather than as the subject of pharmacokinetic analysis. |
| popPK | Chen_2013 | irrelevant | 0 | 0 | The study focuses on the discovery and antiviral activity (EC50/CC50) of new HIV inhibitors, using delavirdine only as a reference comparator, and does not report pharmacokinetic parameters. |
| PGx | Davey_1996 | not_relevant | 0 | 0 | The paper reports general pharmacokinetics and clinical outcomes for delavirdine but does not investigate the effect of host gene variants or genotypes on these parameters. |
| PGx | Fichtenbaum_2002 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving delavirdine but does not report any pharmacogenomic effects based on gene variants or genotypes. |
| PGx | Genin_1996 | not_relevant | 0 | 0 | The paper focuses on the structural modification of BHAP analogs to improve metabolic stability and does not report pharmacogenomic effects on delavirdine. |
| PGx | Gill_2001 | not_relevant | 0 | 0 | The paper discusses saquinavir pharmacokinetics and drug interactions, not the pharmacogenomics of delavirdine. |
| popPK | Hecht_2015 | irrelevant | 0 | 0 | The paper reports in-vitro cytotoxicity EC50 values for delavirdine against cancer cells, not pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PGx | Hesse_2001 | not_relevant | 0 | 0 | The paper reports drug-drug inhibition of CYP2B6 by antiretrovirals, not the effect of a genetic variant on delavirdine PK/PD. |
| popPK | Huang_2009 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of BILR 355, not delavirdine. |
| popPK | Huang_2015 | irrelevant | 0 | 0 | The study focuses on the design and synthesis of new NNRTIs where delavirdine serves only as a comparative reference for antiviral potency (EC50), containing no pharmacokinetic or disposition data. |
| PGx | Joly_2000 | not_relevant | 0 | 0 | The text describes general pharmacology, metabolism, and resistance mechanisms for NNRTIs, but does not report any specific pharmacogenomic variant effects on PK or PD parameters for delavirdine. |
| PGx | Justesen_2003 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic drug-drug interaction between amprenavir and delavirdine, not a pharmacogenomic effect of a gene variant. |
| PGx | Justesen_2004 | not_relevant | 0 | 0 | The study investigates dose-dependent pharmacokinetics and drug-drug interactions in healthy volunteers but does not assess genetic variants or genotypes. |
| PGx | Levin_2010 | not_relevant | 0 | 0 | The paper discusses a drug-drug interaction between diltiazem and fentanyl, mentioning delavirdine only as a list item of other CYP3A4 inhibitors, with no pharmacogenomic analysis or data regarding delavirdine. |
| popPK | Li_2013 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study of novel NNRTIs, and delavirdine is only used as a comparative reference for antiviral efficacy, not for PK analysis. |
| popPK | Li_2016 | irrelevant | 0 | 0 | This is a medicinal chemistry study on novel NNRTIs where delavirdine is used only as an in-vitro comparator, containing no pharmacokinetic data. |
| PGx | Li_2021 | not_relevant | 0 | 0 | The study models drug-drug interactions between saxagliptin and delavirdine (CYP3A4 inhibitors/inducers), not pharmacogenomic effects (gene variants). |
| PGx | Liedtke_2009 | not_relevant | 0 | 0 | The paper reviews warfarin-antiretroviral interactions and mentions delavirdine only as a drug with anticipated but unreported interactions; it does not report pharmacogenomic effects on delavirdine's PK or PD. |
| popPK | Liu_2014 | irrelevant | 0 | 0 | The study is an in-vitro medicinal chemistry/antiviral efficacy evaluation where delavirdine serves only as a comparator drug, with no pharmacokinetic parameters reported. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The study focuses on the mechanism of action (cGAS-STING activation) of 5-azacytidine and cisplatin in lymphoma, where delavirdine is used only as a mechanistic inhibitor of reverse transcriptase, not as the subject of pharmacokinetic analysis. |
| PGx | Ma_2005 | not_relevant | 0 | 0 | The paper is a review of pharmacokinetic drug interactions, not pharmacogenomic effects of genetic variants. |
| PGx | Mannu_2011 | not_relevant | 0 | 0 | The paper is a computational docking study on drug-drug interactions (CYP3A4 binding) and does not report pharmacogenomic effects of gene variants on delavirdine PK/PD parameters. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper discusses a drug-drug interaction (CYP3A4 inhibition) and makes no mention of genetic variants or pharmacogenomics. |
| popPK | Ming_2023 | irrelevant | 0 | 0 | The paper describes the design, synthesis, and in-vitro biological activity (EC50/IC50) of novel drug hybrids, containing no pharmacokinetic data for delavirdine. |
| popPK | Pinna_2001 | irrelevant | 0 | 0 | This is a medicinal chemistry study reporting the synthesis and in-vitro anti-HIV activity of delavirdine analogues, containing no pharmacokinetic data for delavirdine. |
| PGx | Poppe_1997 | not_relevant | 0 | 0 | The paper describes the antiviral activity and PK of PNU-140690, mentioning delavirdine only as a comparator for resistance, and does not report any pharmacogenomic effects. |
| popPK | Ribone_2012 | irrelevant | 0 | 0 | The paper is a mechanistic and in-vitro synthesis study where delavirdine serves only as a reference compound for activity comparison, containing no pharmacokinetic data. |
| PGx | Romero_1996 | not_relevant | 0 | 0 | The paper describes the development of novel NNRTI compounds (AAP-BHAPs) and their activity against HIV-1, not the pharmacokinetics or pharmacodynamics of delavirdine itself, nor any genetic impact on delavirdine. |
| popPK | Schmith_2019 | irrelevant | 0 | 0 | The study evaluates the QT interval effects of buprenorphine, mentioning delavirdine only in the introduction as part of a reference to a past study. |
| popPK | Schotland_2018 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study predicting adverse events and does not contain pharmacokinetic data for delavirdine. |
| PGx | Sharma_2013 | not_relevant | 0 | 0 | The study reports drug-induced PXR activation and CYP3A4 induction, not a pharmacogenomic effect of a host gene variant on the PK or PD of delavirdine. |
| PGx | Sharma_2015 | not_relevant | 0 | 0 | The paper investigates CAR receptor activation by NNRTIs in vitro but does not report a pharmacogenomic effect of a gene variant on the PK or PD parameters of delavirdine. |
| popPK | Taylor_2001 | irrelevant | 0 | 0 | The paper is a review of antiretroviral drug concentrations in semen and does not report original quantitative population pharmacokinetic parameters (CL, V, etc.) for delavirdine. |
| popPK | Tian_2014 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel NNRTIs where delavirdine is used only as a reference comparator for anti-HIV potency (EC50/SI), and no pharmacokinetic parameters for delavirdine are reported. |
| PGx | Tran_2001 | not_relevant | 0 | 0 | The paper discusses general pharmacokinetics and drug-drug interactions of delavirdine but does not report any pharmacogenomic effects (gene variant impact) on its PK or PD parameters. |
| popPK | Vanangamudi_2023 | irrelevant | 1 | 0 | The paper is a review of NNRTI design strategies, and delavirdine is mentioned only as a comparator/standard, with no original PK parameter values for it provided. |
| PGx | Voorman_1998 | not_relevant | 0 | 0 | The paper describes in vitro mechanism-based inactivation of CYP3A by delavirdine in animal and human liver microsomes but does not report any pharmacogenomic study linking gene variants or genotypes to changes in delavirdine's PK or PD parameters in humans. |
| PGx | Voorman_1998_2 | not_relevant | 2 | 2 | The study characterizes delavirdine metabolism using pooled human liver microsomes and individual samples correlated with CYP3A/2D6 activity, but it does not report a pharmacogenomic effect linked to specific patient genotypes on a clinical PK or PD parameter. |
| PGx | Voorman_2001 | not_relevant | 0 | 0 | The paper investigates the interaction of delavirdine with CYP enzymes in vitro but does not report on genetic variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Wan_2015 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study reporting in vitro antiviral activity (EC50/IC50) and molecular docking for new HIV inhibitors, containing no pharmacokinetic parameters (CL, V, ka, etc.) for delavirdine. |
| popPK | Wang_2014 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study reporting in vitro antiviral potency (EC50/IC50) of novel compounds, with delavirdine used only as a comparator, and contains no pharmacokinetic parameters. |
| PGx | Weiss_2007 | not_relevant | 1 | 5 | The paper studies the effect of delavirdine on BCRP transporters (drug-drug interaction potential), not how a gene variant affects delavirdine's PK/PD parameters. |
| popPK | Witvrouw_2004 | irrelevant | 0 | 0 | The study is an in-vitro virological assessment of drug susceptibility (EC50) and does not report any pharmacokinetic disposition parameters for delavirdine. |
| popPK | Yang_2013 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in vitro antiviral activity of NNRTIs, where delavirdine serves only as a comparator for potency (EC50), with no pharmacokinetic parameters reported. |
| popPK | Yang_2016 | irrelevant | 0 | 0 | This is a medicinal chemistry study reporting in vitro antiviral activity (EC50) of novel compounds, not a pharmacokinetic study of delavirdine. |
| popPK | Zhan_2009 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study reporting in vitro biological evaluation (IC50/EC50) of new compounds, with delavirdine used only as a reference inhibitor, and contains no pharmacokinetic data. |
| popPK | Zhang_2011 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on HIV-1 RT inhibitors where delavirdine is used only as a reference compound for potency comparison, with no pharmacokinetic data reported. |
| PGx | Zhou_2004 | not_relevant | 0 | 0 | The paper discusses delavirdine as a CYP3A4 inhibitor but does not report pharmacogenomic effects on its own PK/PD parameters. |
| PGx | Zhou_2005 | not_relevant | 0 | 0 | The paper is a review on CYP3A4 inhibition mechanisms and drug-drug interactions, not pharmacogenomics (gene variants). |
| PGx | Zhou_2007 | not_relevant | 0 | 0 | The paper discusses delavirdine as a mechanism-based inhibitor of CYP3A4 but does not report any pharmacogenomic effects (gene variants) on the PK or PD parameters of delavirdine. |
| PGx | Zhou_2008 | not_relevant | 0 | 0 | The paper is a general review of CYP3A4 drug interactions and lists delavirdine as an inhibitor, but it does not report a pharmacogenomic effect (gene variant impact) on delavirdine's PK or PD parameters. |
| PGx | von_2001 | not_relevant | 0 | 0 | The paper reports in vitro inhibition of CYP450 enzymes by delavirdine, which is a mechanism of drug-drug interaction, not a pharmacogenomic effect where a specific gene variant changes the PK/PD of the drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:34 UTC</sub>
