<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;trazodone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trazodone_Cuomo2026v2_reference&quot;,&quot;label&quot;:&quot;Cuomo_2026_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_trazodone/Trazodone_Cuomo2026v2_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trazodone_Knych2017_reference&quot;,&quot;label&quot;:&quot;Knych_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_trazodone/Trazodone_Knych2017_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# trazodone

- **generic name:** trazodone
- **ATC codes:** `N06AX05`
- **DrugBank:** [DB00656](https://go.drugbank.com/drugs/DB00656)
- **groups:** approved, investigational

## About

**Description.** Trazodone is triazolopyridine derivative from the serotonin receptor antagonists and reuptake inhibitors (SARIs) class of antidepressants.[A181180] It is used in adults and has been shown to be comparable in efficacy to other drugs such as tricyclic antidepressants (TCAs), selective serotonin reuptake inhibitors (SSRIs), and serotonin-norepinephrine receptor inhibitor (SNRIs) in the treatment of depression.[T646] A unique feature of this drug is that it does not promote the anxiety symptoms, sexual symptoms, or insomnia, which are commonly associated with SSRI and SNRI therapy.[T646] Trazodone acts on various receptors, including certain histamine, serotonin, and adrenergic receptors, distinguishing it from other antidepressants that cover a narrow range of neurotransmitters.[T646] It was initially granted FDA approval in 1981.[L3484]

**Indication.** Trazodone is indicated for the treatment of major depressive disorder (MDD).[L3484] It has been used off-label for adjunct therapy in alcohol dependence, and off-label to treat anxiety and insomnia.[L3484] It may also be used off-label to treat symptoms of dementia, Alzheimer’s disease, schizophrenia, eating disorders, and fibromyalgia due to its effects on various neurotransmitter receptors.[A31634]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 17:54 | 18:14 | 2/0/0 | 0/0/0 | 0/0/0 | 72,513/9,983 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/3 | 2/2 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Cuomo_2026_2_reference](drugs/drug_trazodone/Trazodone_Cuomo2026v2_reference.md) | Cuomo (2026) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: partial</span> | [Knych_2017_reference](drugs/drug_trazodone/Trazodone_Knych2017_reference.md) | Knych HK et al., Pharmacokinetics and selected pharmacod…, American journal of veterin… (2017) | [10.2460/ajvr.78.10.1182](https://doi.org/10.2460/ajvr.78.10.1182) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trazodone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer | DrugBank actor |
| absorption | kidney | `ABCB1` inducer | DrugBank actor |
| absorption | liver | `ABCB1` inducer | DrugBank actor |
| absorption | placenta | `ABCB1` inducer | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…n 48 hours. Approximately 9-29% was found to be excreted in feces over a range of 60 to 10…”</sub> | prose |
| excretion | kidney | <sub>“…Less than 1% of an oral dose is excreted unchanged in the urine.[L7483] In a pharmacokinet…”</sub> | prose |
| target | brain | `SLC6A4` inhibitor | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), HRH1 (target), HTR1A (partial agonist), HTR1A (target), HTR2A (target), HTR2C (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 81 matched, 53 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_18 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Knych_2017.pdf` | Knych HK et al., Pharmacokinetics and selected pharmacod…, American journal of veterin… (2017) | popPK | 10 | [10.2460/ajvr.78.10.1182](https://doi.org/10.2460/ajvr.78.10.1182) | [28945130](https://pubmed.ncbi.nlm.nih.gov/28945130) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for trazodone in horses, with specific numeric values provided in the text. |
| `Zhu_2019.pdf` | Zhu JL et al., Pharmacokinetics of trazodone sustained…, International journal of cl… (2019) | popPK | 9 | [10.5414/CP203482](https://doi.org/10.5414/CP203482) | [31262398](https://pubmed.ncbi.nlm.nih.gov/31262398) | The paper is a primary PK study of trazodone, but the provided evidence contains only qualitative descriptions and no specific numeric parameter values (e.g., CL, V, t1/2). |
| `Cheng_1999.pdf` | Cheng FC et al., Pharmacokinetic and pharmacodynamic ana…, Journal of pharmaceutical a… (1999) | popPK | 8 | [10.1016/s0731-7085(98)00117-4](https://doi.org/10.1016/s0731-7085(98)00117-4) | [10704094](https://pubmed.ncbi.nlm.nih.gov/10704094) | The study reports brain pharmacokinetics for trazodone in rats using a one-compartment model, but no specific numeric parameter values (e.g., clearance, volume, half-life) are present in the provided evidence. |
| `Oggianu_2023.pdf` | Oggianu L et al., PK/PD analysis of trazodone and gabapen…, Clinical and translational… (2023) | pd | 5 | [10.1111/cts.13472](https://doi.org/10.1111/cts.13472) | [36785922](https://www.ncbi.nlm.nih.gov/pubmed/36785922) | metadata signals extractable PD data (PK/PD) |
| `Malomvölgyi_1991.pdf` | Malomvölgyi B et al., Comparison of serotonin agonistic and a…, Acta physiologica Hungarica (1991) | pd | 4 | not captured | [1814162](https://www.ncbi.nlm.nih.gov/pubmed/1814162) | metadata signals extractable PD data (EC50) |
| `Marcoli_1998.pdf` | Marcoli M et al., Trazodone is a potent agonist at 5-HT2C…, The Journal of pharmacology… (1998) | pd | 4 | not captured | [9618398](https://www.ncbi.nlm.nih.gov/pubmed/9618398) | metadata signals extractable PD data (EC50) |
| `Han_2022.pdf` | Han M et al., Effects of CYP2D6 Genetic Polymorphism…, Chemical research in toxico… (2022) | pgx | 8 | [10.1021/acs.chemrestox.1c00327](https://doi.org/10.1021/acs.chemrestox.1c00327) | [34936353](https://www.ncbi.nlm.nih.gov/pubmed/34936353) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Mihara_1997.pdf` | Mihara K et al., Relationship between the CYP2D6 genotyp…, Psychopharmacology (1997) | pgx | 8 | [10.1007/s002130050376](https://doi.org/10.1007/s002130050376) | [9335086](https://www.ncbi.nlm.nih.gov/pubmed/9335086) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Mihara_2001.pdf` | Mihara K et al., Effects of genetic polymorphism of CYP1…, Pharmacology & toxicology (2001) | pgx | 8 | [10.1034/j.1600-0773.2001.d01-115.x](https://doi.org/10.1034/j.1600-0773.2001.d01-115.x) | [11393588](https://www.ncbi.nlm.nih.gov/pubmed/11393588) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Saiz-Rodríguez_2017.pdf` | Saiz-Rodríguez M et al., Pharmacogenetics of trazodone in health…, Pharmacogenomics (2017) | pgx | 8 | [10.2217/pgs-2017-0116](https://doi.org/10.2217/pgs-2017-0116) | [29061081](https://www.ncbi.nlm.nih.gov/pubmed/29061081) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Saiz-Rodríguez_2018.pdf` | Saiz-Rodríguez M et al., Effect of ABCB1 C3435T Polymorphism on…, Basic & clinical pharmacolo… (2018) | pgx | 8 | [10.1111/bcpt.13031](https://doi.org/10.1111/bcpt.13031) | [29723928](https://www.ncbi.nlm.nih.gov/pubmed/29723928) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Costa_2025.pdf` | Costa Alegre MD et al., Metabolism of m-CPP, trazodone, nefazod…, Drug metabolism reviews (2025) | pgx | 7 | [10.1080/03602532.2025.2465482](https://doi.org/10.1080/03602532.2025.2465482) | [39945551](https://www.ncbi.nlm.nih.gov/pubmed/39945551) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kalgutkar_2003.pdf` | Kalgutkar AS et al., Assessment of the contributions of CYP3…, Drug metabolism and disposi… (2003) | pgx | 7 | [10.1124/dmd.31.3.243](https://doi.org/10.1124/dmd.31.3.243) | [12584149](https://www.ncbi.nlm.nih.gov/pubmed/12584149) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Pradeepkumar_2022.pdf` | Pradeepkumar B et al., Influence of trazodone on the pharmacod…, Indian journal of pharmacol… (2022) | pgx | 7 | [10.4103/ijp.ijp_311_20](https://doi.org/10.4103/ijp.ijp_311_20) | [35848690](https://www.ncbi.nlm.nih.gov/pubmed/35848690) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Schwasinger-Schmidt_2019.pdf` | Schwasinger-Schmidt TE et al., Other Antidepressants, Handbook of experimental ph… (2019) | pgx | 7 | [10.1007/164_2018_167](https://doi.org/10.1007/164_2018_167) | [30194544](https://www.ncbi.nlm.nih.gov/pubmed/30194544) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yasui_1995.pdf` | Yasui N et al., Inhibition of trazodone metabolism by t…, Therapeutic drug monitoring (1995) | pgx | 7 | [10.1097/00007691-199508000-00003](https://doi.org/10.1097/00007691-199508000-00003) | [7482685](https://www.ncbi.nlm.nih.gov/pubmed/7482685) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Zalma_2000.pdf` | Zalma A et al., In vitro metabolism of trazodone by CYP…, Biological psychiatry (2000) | pgx | 7 | [10.1016/s0006-3223(99)00176-6](https://doi.org/10.1016/s0006-3223(99)00176-6) | [10745059](https://www.ncbi.nlm.nih.gov/pubmed/10745059) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Wiss_2026.pdf` | Wiss FM et al., CYP2D6 Phenotype as a Predictor of Adve…, Journal of clinical psychop… (2026) | pgx | 5 | [10.1097/JCP.0000000000002123](https://doi.org/10.1097/JCP.0000000000002123) | [41496526](https://www.ncbi.nlm.nih.gov/pubmed/41496526) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-09-24T17:46:30.928729+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Baumann_1992 | not_relevant | 0 | 0 | The paper is a review of SSRIs and mentions trazodone only as a comparison, without reporting specific pharmacogenomic effects on its PK/PD parameters. |
| popPK | Cheng_1999 | relevant | 8 | 0 | The study reports brain pharmacokinetics for trazodone in rats using a one-compartment model, but no specific numeric parameter values (e.g., clearance, volume, half-life) are present in the provided evidence. |
| popPK | Clineschmidt_1985 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study characterizing serotonin receptors in rat stomach fundus, with no pharmacokinetic parameters for trazodone. |
| PD | Clineschmidt_1985 | not_relevant | 1 | 0 | The paper characterizes 5-HT receptors in rat stomach fundus and mentions trazodone only as a less potent competitive antagonist without providing specific numeric PD parameters (like Ki or IC50) for trazodone in the text. |
| PGx | Costa_2025 | not_relevant | 0 | 0 | The paper is a review of the metabolism and forensic aspects of trazodone and its metabolites, but it does not report specific pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Cua_2025 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (DDIs) involving trazodone as an interfering agent, not the effect of a gene variant on trazodone's pharmacokinetics or pharmacodynamics. |
| popPK | Cuomo_2026 | irrelevant | 0 | 0 | The paper is a correction to a narrative review regarding dose conversions and contains no original pharmacokinetic data or quantitative disposition parameters for trazodone. |
| PD | Cuomo_2026 | not_relevant | 0 | 0 | The text is a correction notice regarding dose unit conversions in a narrative review and contains no pharmacodynamic data, models, or numeric PD parameters. |
| popPK | Cuomo_2026_2 | irrelevant | 2 | 6 | The paper is a narrative review that summarizes standard PK parameters (CL, Vd, t1/2) for trazodone rather than reporting original quantitative disposition data from a new study. |
| PD | Cuomo_2026_2 | not_relevant | 2 | 1 | The paper is a narrative review that qualitatively describes dose-dependent effects (e.g., sedation at 25-75 mg vs. antidepressant at 150-300 mg) but does not report or provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response model. |
| PGx | Davis_2007 | not_relevant | 0 | 0 | The paper discusses the general pharmacology and clinical use of trazodone but does not report any specific pharmacogenomic effects of gene variants on its PK or PD parameters. |
| PGx | Ellingrod_1995 | not_relevant | 0 | 0 | The paper describes the general pharmacology and clinical profile of nefazodone and does not report any pharmacogenomic effects on trazodone PK/PD parameters. |
| PGx | Ferdinande_2024 | not_relevant | 2 | 1 | The paper reports a case of hepatotoxicity (safety/adverse event) associated with CYP2D6 polymorphism, but does not report changes in standard PK (e.g., AUC, Cmax) or PD parameters. |
| popPK | Gex-Fabry_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and clinical response of venlafaxine, with trazodone only mentioned as a permitted comedication without any reported PK parameters. |
| PGx | Han_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of dacomitinib, not trazodone; trazodone is only used as a CYP2D6 inhibitor to study drug-drug interactions. |
| PGx | Holm_1999 | not_relevant | 0 | 0 | The paper is a clinical review of mirtazapine's efficacy and safety, containing no data on pharmacogenomic effects on trazodone PK/PD. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper reports a case of interaction between Ginkgo and Trazodone, but it does not report a pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| PGx | Kalgutkar_2003 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of haloperidol and the inhibitory effects of trazodone on its metabolism, rather than the effect of genetic variants on trazodone's own PK/PD parameters. |
| popPK | Malomvölgyi_1991 | irrelevant | 0 | 0 | no_text gate: only 163 chars of text extracted (&lt; 400) |
| PD | Malomvölgyi_1991 | not_relevant | 0 | 0 | The paper studies a different drug (Trelibet/EGYT-475) and its metabolite, not trazodone. |
| popPK | Marcoli_1998 | irrelevant | 0 | 0 | no_text gate: only 148 chars of text extracted (&lt; 400) |
| PD | Marcoli_1998 | not_relevant | 3 | 2 | The paper describes a qualitative mechanism of action (agonism at 5-HT2C receptors) but does not provide numeric PD parameters (e.g., EC50, Emax) or an exposure-response curve for trazodone. |
| popPK | Marcoli_2001 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of receptor activity in rat cerebellar synaptosomes and does not report any pharmacokinetic parameters for trazodone. |
| popPK | Maura_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor pathways in brain slices, not a pharmacokinetic study, and contains no disposition parameters for trazodone. |
| PD | Maura_2000 | not_relevant | 2 | 1 | The study is an in vitro slice experiment testing receptor mechanisms; it reports a single qualitative inhibition by trazodone at 1 microM without deriving a dose-response curve or numeric PD parameters (e.g., EC50) for the drug. |
| PGx | Mihara_1997_2 | not_relevant | 2 | 5 | The study examines a drug-drug interaction (haloperidol inhibiting CYP2D6) rather than a specific genetic variant or genotype effect on trazodone PK. |
| PGx | Mihara_2001 | not_relevant | 2 | 5 | The study concludes that the CYP1A2 polymorphism does not significantly affect the steady-state plasma concentrations of trazodone or its metabolite. |
| PGx | Moog_2022 | not_relevant | 0 | 0 | The paper reports the efficacy of trazodone in a zebrafish model of STXBP1 disorder but does not investigate how a specific gene variant affects the pharmacokinetics or pharmacodynamics of the drug itself. |
| PGx | Najibi_2016 | not_relevant | 0 | 0 | The study investigates the mechanism of trazodone-induced cytotoxicity in rat hepatocytes using enzyme inhibitors, but does not report pharmacogenomic effects of specific gene variants on PK or PD parameters. |
| popPK | Oggianu_2023 | irrelevant | 0 | 0 | no_text gate: only 147 chars of text extracted (&lt; 400) |
| popPK | Pancrazio_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of sodium channel inhibition, not a pharmacokinetic study, and reports no disposition parameters for trazodone. |
| PGx | Petrucci_2025 | not_relevant | 0 | 0 | The paper characterizes metabolic pathways and interspecies differences but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| PGx | Pradeepkumar_2022 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (trazodone affecting pioglitazone PK/PD) in animal models, not a pharmacogenomic effect (gene variant) on trazodone. |
| PGx | Rotzinger_1998 | not_relevant | 0 | 0 | The paper identifies CYP3A4 as the enzyme metabolizing trazodone but does not report any pharmacogenomic effects (e.g., genotype-specific differences) on PK or PD parameters. |
| PGx | Schwasinger-Schmidt_2019 | not_relevant | 0 | 0 | The text is a general pharmacological overview of antidepressants and does not report any pharmacogenomic studies or gene-variant effects on trazodone PK/PD. |
| PGx | Wen_2008 | not_relevant | 0 | 0 | The paper describes the metabolic bioactivation pathway and CYP2D6 involvement in forming reactive metabolites, but does not report changes in standard PK/PD parameters (e.g., AUC, Cmax, Emax) based on genotype. |
| PGx | Yasui_1995 | not_relevant | 2 | 10 | The study investigates the effect of a drug-drug interaction (thioridazine inhibiting CYP2D6) on trazodone PK, not the effect of a specific genetic variant or genotype. |
| PGx | Zalma_2000 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (inhibition by ketoconazole and HIV protease inhibitors) in vitro, not the effect of a specific gene variant or genotype on trazodone pharmacokinetics. |
| PGx | Zaręba_2022 | not_relevant | 0 | 0 | The paper describes the synthesis and pharmacological activity of new trazodone analogues, not the pharmacogenomics of trazodone itself. |
| popPK | Zhu_2019 | relevant | 9 | 0 | The paper is a primary PK study of trazodone, but the provided evidence contains only qualitative descriptions and no specific numeric parameter values (e.g., CL, V, t1/2). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-24 17:46 UTC</sub>
