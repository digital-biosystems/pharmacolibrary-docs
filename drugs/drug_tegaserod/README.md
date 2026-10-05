<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;tegaserod&quot;}]"></div>

# tegaserod

- **generic name:** tegaserod
- **ATC codes:** `A03AE02`, `A06AX06`
- **DrugBank:** [DB01079](https://go.drugbank.com/drugs/DB01079) · **PubChem:** [CID 5362436](https://pubchem.ncbi.nlm.nih.gov/compound/5362436)
- **molar mass:** 301.394 g/mol (C16H23N5O) — DrugBank
- **groups:** approved, withdrawn

## About

Tegaserod, a serotonin receptor agonist, was used to treat constipation and functional gastrointestinal disorders such as irritable bowel syndrome. It has been withdrawn from the market, and a marketing application for the drug was refused in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q44944](https://www.wikidata.org/wiki/Q44944) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:13 | 1:10 | 0/0/0 | 1/1/0 | 0/0/0 | 36,969/1,659 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/6 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [An_2021_Kv](drugs/drug_tegaserod/pd_An_2021_Kv.md) | Kv current ← tegaserod · direct sigmoid Emax (Hill) effect | — | An JR et al., The effects of tegaserod, a gastrokinet…, Clinical and experimental p… (2021) | [10.1111/1440-1681.13477](https://doi.org/10.1111/1440-1681.13477) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Fang_2008_short_circuit_current](drugs/drug_tegaserod/pd_Fang_2008_short_circuit_current.md) | mucosal secretion ← tegaserod · direct Emax (saturable) effect | — | Fang X et al., Neurogastroenterology of tegaserod (HTF…, Neurogastroenterology and m… (2008) | [10.1111/j.1365-2982.2007.00983.x](https://doi.org/10.1111/j.1365-2982.2007.00983.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tegaserod) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2C8` inhibitor, `CYP2D6` inhibitor/substrate, `CYP2E1` inhibitor | DrugBank actor |
| metabolism | stomach | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor/substrate | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HTR2A (target), HTR2B (target), HTR2C (target), HTR4 (partial agonist), HTR4 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 48 matched, 48 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhou_1999.pdf` | Zhou H et al., Effect of meal timing not critical for…, Journal of clinical pharmac… (1999) | popPK | 8 | [10.1177/00912709922008524](https://doi.org/10.1177/00912709922008524) | [10471981](https://pubmed.ncbi.nlm.nih.gov/10471981) | The study reports qualitative PK findings (AUC reduction) and describes a NONMEM absorption model, but specific numeric parameter values (ka, CL, V) are not present in the provided text. |
| `Ismair_2007.pdf` | Ismair MG et al., Tegaserod inhibits the serotonin transp…, Digestion (2007) | pd | 4 | [10.1159/000102962](https://doi.org/10.1159/000102962) | [17510552](https://www.ncbi.nlm.nih.gov/pubmed/17510552) | metadata signals extractable PD data (IC50) |
| `Jarvie_2007.pdf` | Jarvie EM et al., Differences between the abilities of te…, British journal of pharmaco… (2007) | pd | 4 | [10.1038/sj.bjp.0707118](https://doi.org/10.1038/sj.bjp.0707118) | [17211452](https://www.ncbi.nlm.nih.gov/pubmed/17211452) | metadata signals extractable PD data (Emax) |
| `Tsubouchi_2018.pdf` | Tsubouchi T et al., The in vitro pharmacology and non-clini…, European journal of pharmac… (2018) | pd | 4 | [10.1016/j.ejphar.2018.02.037](https://doi.org/10.1016/j.ejphar.2018.02.037) | [29501863](https://www.ncbi.nlm.nih.gov/pubmed/29501863) | metadata signals extractable PD data (EC50) |
| `Zhao_2022.pdf` | Zhao G et al., Hydrogen bonding penalty used for virtu…, Chemical biology & drug des… (2022) | pd | 4 | [10.1111/cbdd.14115](https://doi.org/10.1111/cbdd.14115) | [35792890](https://www.ncbi.nlm.nih.gov/pubmed/35792890) | metadata signals extractable PD data (IC50) |
| `Vickers_2001.pdf` | Vickers AE et al., In vitro metabolism of tegaserod in hum…, Drug metabolism and disposi… (2001) | pgx | 7 | not captured | [11560869](https://www.ncbi.nlm.nih.gov/pubmed/11560869) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Zhou_2001.pdf` | Zhou H et al., Tegaserod coadministration does not alt…, Journal of clinical pharmac… (2001) | pgx | 7 | [10.1177/00912700122010979](https://doi.org/10.1177/00912700122010979) | [11549104](https://www.ncbi.nlm.nih.gov/pubmed/11549104) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-10-04T13:12:10.695593+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | An_2021 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of tegaserod's effect on ion channels, not a pharmacokinetic study. |
| popPK | Appel-Dingemanse_2001 | relevant | 8 | 2 | The study reports non-compartmental PK parameters (AUC, Cmax) for tegaserod, but specific numeric values for clearance, volume, or half-life are not present in the provided text, only ratios and qualitative comparisons. |
| PD | Appel-Dingemanse_2001 | not_relevant | 1 | 0 | The paper is a PK study assessing age and gender effects on exposure; it mentions a shallow dose-response relationship qualitatively but provides no numeric PD parameters or concentration-effect data. |
| PD | Appel-Dingemanse_2002 | not_relevant | 1 | 0 | The text is a pharmacokinetic review that qualitatively mentions dose-dependent pharmacodynamic actions (transit acceleration) but provides no numeric PD parameters, concentration-effect curves, or formal PK/PD modeling results. |
| PGx | Appel-Dingemanse_2002 | not_relevant | 0 | 0 | The paper describes general clinical pharmacokinetics and pharmacodynamics of tegaserod but does not report any effects of gene variants, genotypes, or phenotypes on these parameters. |
| popPK | Beattie_2008 | irrelevant | 0 | 0 | The study is a preclinical pharmacodynamic comparison of gastrointestinal activity, not a pharmacokinetic study, and tegaserod is used only as a comparator agent. |
| PD | Beattie_2008 | not_relevant | 3 | 2 | The paper reports qualitative potency rankings and relative fold-differences for tegaserod in preclinical models but does not provide specific numeric PD parameters (e.g., ED50, Emax) or concentration-effect curves for tegaserod. |
| popPK | Camilleri_2001 | irrelevant | 1 | 0 | The paper is a review article that provides only qualitative descriptions of pharmacokinetics (e.g., linear, rapid absorption) without reporting any quantitative disposition parameters such as clearance, volume, or half-life. |
| PD | Camilleri_2001 | not_relevant | 2 | 0 | The text is a review article that qualitatively describes pharmacodynamic effects (e.g., increased motility, reduced visceral afferent firing) but does not provide any numeric PD parameters, concentration-effect curves, or dose-response data. |
| PGx | Camilleri_2009 | not_relevant | 2 | 0 | The paper is a review that mentions a potential pharmacogenetic association between SLC6A4 and tegaserod response but provides no specific data, effect sizes, or detailed PK/PD parameters. |
| popPK | Camilleri_2019 | irrelevant | 0 | 0 | The paper is a review of pharmacogenomics in IBS and does not report quantitative pharmacokinetic parameters for tegaserod. |
| PD | Camilleri_2019 | not_relevant | 1 | 0 | The text is a general review of pharmacogenomics in IBS and does not report specific numeric PD parameters or exposure-response relationships for tegaserod. |
| PGx | Camilleri_2019 | not_relevant | 0 | 0 | The paper is a general review of pharmacogenomics in IBS and does not report specific data or effects for tegaserod. |
| popPK | Corsetti_2002 | irrelevant | 0 | 0 | The text is a general overview of tegaserod's mechanism and clinical efficacy without reporting any quantitative pharmacokinetic parameters. |
| PD | Corsetti_2002 | not_relevant | 1 | 0 | The text is a qualitative review summary that mentions pharmacodynamic effects (prokinetic activity) but provides no numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | De_2006 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic investigation of 5-HT4 receptor agonism in pig tissues, not a pharmacokinetic study of tegaserod. |
| popPK | Degen_2001 | irrelevant | 1 | 0 | The study focuses exclusively on pharmacodynamic effects (gastric emptying and transit times) and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Degen_2001 | not_relevant | 2 | 1 | The study reports qualitative pharmacodynamic effects (accelerated transit) and statistical significance for fixed doses, but does not provide a concentration-effect model, dose-response curve, or numeric PD parameters (e.g., Emax, EC50) in the provided text. |
| PGx | Duke_2012 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (promethazine and tegaserod) affecting myopathy risk, not a pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter. |
| popPK | Fang_2008 | irrelevant | 0 | 0 | The study is a mechanistic investigation of tegaserod's pharmacological actions on the enteric nervous system and mucosal secretion, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Fisher_2004 | irrelevant | 0 | 0 | The study evaluates pharmacodynamic effects on biliary tract motility and does not report any pharmacokinetic parameters for tegaserod. |
| PD | Fisher_2004 | not_relevant | 0 | 0 | The study reports a null result (no significant effect) on biliary motility using ANOVA, without providing numeric concentration-effect curves, Emax, EC50, or other derivable PD parameters. |
| popPK | Gurbel_2021 | irrelevant | 1 | 0 | The study is a pharmacodynamic assessment of platelet function and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for tegaserod. |
| PD | Gurbel_2021 | not_relevant | 2 | 0 | The study reports a null result (no significant difference) for platelet function markers and does not provide numeric PD parameters or an exposure-response curve. |
| popPK | Hamatani_2020 | irrelevant | 0 | 0 | The study evaluates the efficacy of minesapride for IBS-C, and tegaserod is only mentioned as background context without any pharmacokinetic data or quantitative disposition parameters. |
| PD | Hamatani_2020 | not_relevant | 0 | 0 | The paper is a clinical trial for minesapride (not tegaserod) and reports no pharmacokinetic data or exposure-response modeling, only dose-response efficacy outcomes. |
| popPK | Ismair_2007 | irrelevant | 0 | 0 | no_text gate: only 49 chars of text extracted (&lt; 400) |
| PD | Ismair_2007 | not_relevant | 0 | 0 | The provided text is a title stating a mechanism of action (SERT inhibition) but contains no data, numeric parameters, or analysis of exposure-response or dose-response relationships. |
| popPK | Jarvie_2007 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| popPK | Jones_2002 | irrelevant | 0 | 0 | The paper is a systematic review of clinical efficacy for IBS and does not report quantitative pharmacokinetic parameters for tegaserod. |
| PD | Jones_2002 | not_relevant | 2 | 1 | The paper is a systematic review that qualitatively mentions a small pharmacodynamic study regarding transit times but does not provide numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Kale-Pradhan_2007 | irrelevant | 0 | 0 | The text is a clinical review summary that mentions pharmacokinetic parameters qualitatively but provides no quantitative disposition values or model parameters. |
| PD | Kale-Pradhan_2007 | not_relevant | 1 | 0 | The text is a qualitative review summary that mentions pharmacodynamic parameters exist but does not provide any numeric values, curves, or specific exposure-response relationships. |
| PGx | Larsson_2024 | not_relevant | 0 | 0 | The paper investigates the off-target proteasome inhibitor properties of tegaserod in cell lines, not the effect of gene variants on its pharmacokinetics or pharmacodynamics. |
| popPK | Liu_2020 | irrelevant | 0 | 0 | The paper is an in-vitro and in-vivo mechanistic study of tegaserod's anti-cancer effects in melanoma, reporting IC50 values and signaling pathway data, but it does not contain any pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Madia_2020 | irrelevant | 2 | 1 | The paper is a narrative review that discusses tegaserod's mechanism and general properties but does not report original quantitative population pharmacokinetic parameters (CL, V, Q, ka) or compartmental models. |
| PD | Madia_2020 | not_relevant | 2 | 0 | The paper is a narrative review summarizing mechanism of action and PK properties but does not report specific numeric PD parameters (e.g., Emax, EC50) or an exposure-response curve for tegaserod. |
| popPK | Rivkin_2003 | irrelevant | 1 | 0 | The paper is a clinical review of efficacy and safety that mentions pharmacokinetic properties but does not report any quantitative disposition parameters (CL, V, ka, etc.) for tegaserod. |
| PD | Rivkin_2003 | not_relevant | 1 | 0 | The text is a clinical review summarizing efficacy and safety without reporting specific numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Sanger_2008 | irrelevant | 0 | 0 | The paper is a review discussing drug development strategies for GI disorders and mentions tegaserod only as a withdrawn drug, containing no pharmacokinetic data. |
| PD | Sanger_2008 | not_relevant | 1 | 0 | The text is a review discussing the development of GI drugs and mentions tegaserod's withdrawal, but it does not report any specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Tack_2012 | irrelevant | 0 | 0 | The paper is a systematic review of cardiovascular safety and pharmacology, not a primary pharmacokinetic study, and it does not report quantitative disposition parameters for tegaserod. |
| PD | Tack_2012 | not_relevant | 2 | 1 | The paper is a systematic review focusing on cardiovascular safety and provides only qualitative summaries or tables of PK/PD data without reporting specific numeric PD parameters (e.g., Emax, EC50) or exposure-response curves for tegaserod. |
| popPK | Tsubouchi_2018 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PD | Tsubouchi_2018 | not_relevant | 0 | 0 | The paper focuses on a different compound (DSP-6952) and does not report pharmacodynamic or exposure-response data for tegaserod. |
| popPK | Vazquez_2011 | irrelevant | 0 | 0 | The paper is a review of linaclotide, and tegaserod is only mentioned as a withdrawn comparator drug with no pharmacokinetic parameters reported. |
| PD | Vazquez_2011 | not_relevant | 0 | 0 | The text is a review of linaclotide and only mentions tegaserod in the context of market withdrawal due to side effects, without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for tegaserod. |
| popPK | Vickers_2001 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | Vickers_2001 | not_relevant | 0 | 0 | The paper focuses on in vitro metabolism and drug interaction assessment, not pharmacodynamic or exposure-response relationships. |
| PGx | Vickers_2001 | not_relevant | 0 | 0 | The paper focuses on in vitro metabolism and drug interactions, not pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Vijayvargiya_2019 | irrelevant | 0 | 0 | The paper is a review of prucalopride, and tegaserod is only mentioned as a comparator agent without any pharmacokinetic data provided. |
| PD | Vijayvargiya_2019 | not_relevant | 0 | 0 | The paper is a review of prucalopride and only mentions tegaserod qualitatively as a comparator without providing any numeric PD parameters or exposure-response data for it. |
| popPK | Yin_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of YKP10811 on gastric motility in dogs, using tegaserod only as a comparator agent, and does not report any pharmacokinetic parameters for tegaserod. |
| PD | Yin_2017 | not_relevant | 2 | 1 | The paper focuses on a new compound (YKP10811) and only provides a qualitative comparison to tegaserod without reporting numeric PD parameters or a quantitative dose-response curve for tegaserod. |
| popPK | Zhao_2022 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| PD | Zhao_2022 | not_relevant | 0 | 0 | The paper focuses on virtual screening for SARS-CoV-2 inhibitors and does not mention tegaserod or report any pharmacodynamic data. |
| popPK | Zhou_1999 | relevant | 8 | 2 | The study reports qualitative PK findings (AUC reduction) and describes a NONMEM absorption model, but specific numeric parameter values (ka, CL, V) are not present in the provided text. |
| popPK | Zhou_2001 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of digoxin (the subject drug) to assess drug-drug interactions, and while tegaserod is co-administered, no quantitative PK parameters (CL, V, etc.) for tegaserod are reported. |
| PD | Zhou_2001 | not_relevant | 1 | 0 | The study reports a drug-drug interaction effect on digoxin PK (AUC/Cmax reduction) and states there were no pharmacodynamic changes in heart rate or QT interval, but it does not provide numeric PD parameters or an exposure-response relationship for tegaserod itself. |
| PGx | Zhou_2001_2 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (tegaserod and theophylline) in healthy subjects, not a pharmacogenomic effect on tegaserod's PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
