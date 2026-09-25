<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;nefazodone&quot;}]"></div>

# nefazodone

- **generic name:** nefazodone
- **ATC codes:** `N06AX06`
- **DrugBank:** [DB01149](https://go.drugbank.com/drugs/DB01149)
- **groups:** approved, withdrawn

## About

**Description.** Nefazodone hydrochloride (trade name Serzone) is an antidepressant drug marketed by Bristol-Myers Squibb. Its sale was discontinued in 2003 in some countries, due to the small possibility of hepatic (liver) injury. Drug-induced hepatic injuries were associated with an risk of elevated need for a liver transplant, or even death, with the incidence of severe liver damage was shown to be approximately 1 in 250,000 to 300,000 patient-years. On May 20, 2004, Bristol-Myers Squibb discontinued the sale of Serzone in the United States.

**Indication.** For the treatment of depression.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 01:26 | 29:51 | 0/0/0 | 0/0/0 | 0/0/0 | 96,854/6,248 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 5/1 | 3/3 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nefazodone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | kidney | <sub>“…than 1% of administered nefazodone is excreted unchanged in urine.…”</sub> | prose |
| excretion | liver | `ABCB11` substrate | DrugBank actor |
| target | brain | `SLC6A4` inhibitor | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (other/unknown), ADRA2A (target), CYP2B (inhibitor), HTR1A (target), HTR2A (target), HTR2C (target), KCNH2 (target), SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 142 matched, 96 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_24 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Störmer_2001.pdf` | Störmer E et al., P-glycoprotein interactions of nefazodo…, Journal of clinical pharmac… (2001) | pd | 5 | [10.1177/00912700122010609](https://doi.org/10.1177/00912700122010609) | [11452702](https://www.ncbi.nlm.nih.gov/pubmed/11452702) | metadata signals extractable PD data (IC50) |
| `Caccia_1998.pdf` | Caccia S, Metabolism of the newer antidepressants…, Clinical pharmacokinetics (1998) | pgx | 8 | [10.2165/00003088-199834040-00002](https://doi.org/10.2165/00003088-199834040-00002) | [9571301](https://www.ncbi.nlm.nih.gov/pubmed/9571301) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Findling_2000.pdf` | Findling RL et al., Nefazodone pharmacokinetics in depresse…, Journal of the American Aca… (2000) | pgx | 8 | [10.1097/00004583-200008000-00016](https://doi.org/10.1097/00004583-200008000-00016) | [10939229](https://www.ncbi.nlm.nih.gov/pubmed/10939229) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kudo_1999.pdf` | Kudo S et al., Pharmacokinetics of haloperidol: an upd…, Clinical pharmacokinetics (1999) | pgx | 8 | [10.2165/00003088-199937060-00001](https://doi.org/10.2165/00003088-199937060-00001) | [10628896](https://www.ncbi.nlm.nih.gov/pubmed/10628896) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Alderman_2001.pdf` | Alderman CP et al., Possible interaction of zopiclone and n…, The Annals of pharmacothera… (2001) | pgx | 7 | [10.1345/aph.1A074](https://doi.org/10.1345/aph.1A074) | [11724087](https://www.ncbi.nlm.nih.gov/pubmed/11724087) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Costa_2025.pdf` | Costa Alegre MD et al., Metabolism of m-CPP, trazodone, nefazod…, Drug metabolism reviews (2025) | pgx | 7 | [10.1080/03602532.2025.2465482](https://doi.org/10.1080/03602532.2025.2465482) | [39945551](https://www.ncbi.nlm.nih.gov/pubmed/39945551) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Daniel_2006.pdf` | Daniel WA et al., Direct and indirect interactions betwee…, European neuropsychopharmac… (2006) | pgx | 7 | [10.1016/j.euroneuro.2006.01.004](https://doi.org/10.1016/j.euroneuro.2006.01.004) | [16503401](https://www.ncbi.nlm.nih.gov/pubmed/16503401) | metadata signals extractable PGX data (CYP2C6, PK/PD-context) |
| `DeVane_2004.pdf` | DeVane CL et al., Comparative CYP3A4 inhibitory effects o…, Journal of clinical psychop… (2004) | pgx | 7 | [10.1097/01.jcp.0000104908.75206.26](https://doi.org/10.1097/01.jcp.0000104908.75206.26) | [14709940](https://www.ncbi.nlm.nih.gov/pubmed/14709940) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Dresser_2000.pdf` | Dresser GK et al., Pharmacokinetic-pharmacodynamic consequ…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200038010-00003](https://doi.org/10.2165/00003088-200038010-00003) | [10668858](https://www.ncbi.nlm.nih.gov/pubmed/10668858) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Gallelli_2017.pdf` | Gallelli L et al., Drug-Drug Interactions in Cocaine-users…, Current drug abuse reviews (2017) | pgx | 7 | [10.2174/1874473710666170920143344](https://doi.org/10.2174/1874473710666170920143344) | [29185916](https://www.ncbi.nlm.nih.gov/pubmed/29185916) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Greene_1997.pdf` | Greene DS et al., Clinical pharmacokinetics of nefazodone, Clinical pharmacokinetics (1997) | pgx | 7 | [10.2165/00003088-199733040-00002](https://doi.org/10.2165/00003088-199733040-00002) | [9342502](https://www.ncbi.nlm.nih.gov/pubmed/9342502) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Hasselstrøm_2006.pdf` | Hasselstrøm J et al., In vitro studies on quetiapine metaboli…, Drug metabolism and drug in… (2006) | pgx | 7 | [10.1515/dmdi.2006.21.3-4.187](https://doi.org/10.1515/dmdi.2006.21.3-4.187) | [16841513](https://www.ncbi.nlm.nih.gov/pubmed/16841513) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kalgutkar_2003.pdf` | Kalgutkar AS et al., Assessment of the contributions of CYP3…, Drug metabolism and disposi… (2003) | pgx | 7 | [10.1124/dmd.31.3.243](https://doi.org/10.1124/dmd.31.3.243) | [12584149](https://www.ncbi.nlm.nih.gov/pubmed/12584149) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kotlyar_2003.pdf` | Kotlyar M et al., Nefazodone inhibits methylprednisolone…, Journal of clinical psychop… (2003) | pgx | 7 | [10.1097/01.jcp.0000095343.32154.1d](https://doi.org/10.1097/01.jcp.0000095343.32154.1d) | [14624194](https://www.ncbi.nlm.nih.gov/pubmed/14624194) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Lam_2003.pdf` | Lam YW et al., Pharmacokinetic and pharmacodynamic int…, Journal of clinical pharmac… (2003) | pgx | 7 | [10.1177/0091270003259216](https://doi.org/10.1177/0091270003259216) | [14551182](https://www.ncbi.nlm.nih.gov/pubmed/14551182) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Michalets_2000.pdf` | Michalets EL et al., Drug interactions with cisapride: clini…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039010-00004](https://doi.org/10.2165/00003088-200039010-00004) | [10926350](https://www.ncbi.nlm.nih.gov/pubmed/10926350) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ohno_2007.pdf` | Ohno Y et al., General framework for the quantitative…, Clinical pharmacokinetics (2007) | pgx | 7 | [10.2165/00003088-200746080-00005](https://doi.org/10.2165/00003088-200746080-00005) | [17655375](https://www.ncbi.nlm.nih.gov/pubmed/17655375) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Richelson_1997.pdf` | Richelson E, Pharmacokinetic drug interactions of ne…, Mayo Clinic proceedings (1997) | pgx | 7 | [10.4065/72.9.835](https://doi.org/10.4065/72.9.835) | [9294531](https://www.ncbi.nlm.nih.gov/pubmed/9294531) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Richelson_1998.pdf` | Richelson E, Pharmacokinetic interactions of antidep…, The Journal of clinical psy… (1998) | pgx | 7 | not captured | [9720479](https://www.ncbi.nlm.nih.gov/pubmed/9720479) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Taylor_1999.pdf` | Taylor D et al., The effect of nefazodone on clozapine p…, International clinical psyc… (1999) | pgx | 7 | not captured | [10435773](https://www.ncbi.nlm.nih.gov/pubmed/10435773) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ucar_2000.pdf` | Ucar M et al., HMG-CoA reductase inhibitors and myotox…, Drug safety (2000) | pgx | 7 | [10.2165/00002018-200022060-00003](https://doi.org/10.2165/00002018-200022060-00003) | [10877038](https://www.ncbi.nlm.nih.gov/pubmed/10877038) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Wójcikowski_2013.pdf` | Wójcikowski J et al., Effect of antidepressant drugs on cytoc…, Pharmacological reports : PR (2013) | pgx | 7 | [10.1016/s1734-1140(13)71482-8](https://doi.org/10.1016/s1734-1140(13)71482-8) | [24399720](https://www.ncbi.nlm.nih.gov/pubmed/24399720) | metadata signals extractable PGX data (CYP2C11, PK/PD-context) |
| `Mazzarino_2018.pdf` | Mazzarino M et al., A further insight into the metabolic pr…, Drug testing and analysis (2018) | pgx | 5 | [10.1002/dta.2538](https://doi.org/10.1002/dta.2538) | [30395700](https://www.ncbi.nlm.nih.gov/pubmed/30395700) | metadata signals extractable PGX data (CYP3A4) |
| `Pollock_1996.pdf` | Pollock BG et al., Bupropion plasma levels and CYP2D6 phen…, Therapeutic drug monitoring (1996) | pgx | 5 | [10.1097/00007691-199610000-00010](https://doi.org/10.1097/00007691-199610000-00010) | [8885123](https://www.ncbi.nlm.nih.gov/pubmed/8885123) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-09-24T01:20:20.146720+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abernethy_2001 | irrelevant | 2 | 0 | Nefazodone is a co-administered inhibitor used to study the PK/PD of terfenadine and loratadine, not the subject drug for PK parameter extraction. |
| PGx | Alderman_2001 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (nefazodone inhibiting zopiclone metabolism) rather than a pharmacogenomic effect (gene variant) on nefazodone's PK/PD. |
| popPK | Barbhaiya_1996 | irrelevant | 2 | 0 | The study focuses on the interaction with haloperidol and reports that nefazodone's pharmacokinetics were unaffected, but it does not provide specific quantitative disposition parameters (CL, V, ka) for nefazodone. |
| PD | Barbhaiya_1996 | not_relevant | 2 | 1 | The study reports qualitative changes in psychomotor performance and PK parameters (AUC, Cmax) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model for nefazodone. |
| PGx | Caccia_1998 | not_relevant | 0 | 0 | The paper is a general review of antidepressant metabolism that mentions nefazodone's saturable metabolism but does not report specific pharmacogenomic effects (gene variant impact) on its PK or PD parameters. |
| PGx | Choi_2015 | not_relevant | 0 | 0 | The paper describes an in vitro model for drug-induced liver injury and does not report any pharmacogenomic effects (gene variants) on the PK or PD of nefazodone. |
| popPK | Conca_1999 | irrelevant | 0 | 0 | The paper is a case report focusing on pharmacodynamic interactions (EEG/seizure duration) during ECT and does not report any quantitative pharmacokinetic parameters for nefazodone. |
| PD | Conca_1999 | not_relevant | 1 | 0 | The paper is a single case report describing a qualitative pharmacodynamic interaction (change in anesthetic dosage) without providing any numeric concentration-effect data, dose-response curves, or PD parameters for nefazodone. |
| popPK | Corsini_1999 | irrelevant | 0 | 0 | The paper is a review of statins where nefazodone is mentioned only as a drug interaction agent, with no PK parameters reported for nefazodone. |
| PD | Corsini_1999 | not_relevant | 0 | 0 | The text is a review of statins that mentions nefazodone only in the context of a drug-drug interaction (CYP3A4 inhibition) causing increased statin bioavailability, without reporting any pharmacodynamic or exposure-response data for nefazodone itself. |
| popPK | Costa_2025 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PD | Costa_2025 | not_relevant | 0 | 0 | The paper focuses on the metabolism and forensic aspects of nefazodone and related compounds, with no pharmacodynamic or exposure-response analysis. |
| PGx | Costa_2025 | not_relevant | 0 | 0 | The paper discusses the general metabolism and forensic aspects of nefazodone and related compounds but does not report specific pharmacogenomic effects of gene variants on PK/PD parameters. |
| PGx | Daniel_2003 | not_relevant | 0 | 0 | The study investigates in vitro drug-drug interactions (inhibition of caffeine metabolism by nefazodone) and does not report any pharmacogenomic effects (gene variants) on nefazodone's PK or PD. |
| PGx | Daniel_2006 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (inhibition/induction of CYP2C6) in rats, not the effect of a genetic variant on the pharmacokinetics or pharmacodynamics of nefazodone. |
| PGx | Daval_2020 | not_relevant | 0 | 0 | The paper is a clinical trial protocol for budesonide in COVID-19 hyposmia and does not report pharmacogenomic effects on nefazodone PK/PD. |
| popPK | DeVane_1998 | irrelevant | 1 | 0 | The paper is a review summarizing pharmacology without providing original quantitative PK parameter values for nefazodone. |
| PD | DeVane_1998 | not_relevant | 1 | 0 | The text is a qualitative review summarizing pharmacological characteristics and does not provide specific numeric PD parameters or exposure-response data for nefazodone. |
| popPK | DeVane_2002 | irrelevant | 1 | 0 | The paper is a review of the pharmacology and pharmacodynamics of nefazodone and does not report original quantitative pharmacokinetic parameters. |
| PD | DeVane_2002 | not_relevant | 2 | 0 | The text is a review article summarizing the pharmacology and mechanism of action of nefazodone without presenting specific numeric PD parameters, concentration-effect curves, or PK/PD modeling results. |
| PGx | DeVane_2004 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP3A4 inhibition) in a general population, not the effect of a specific gene variant or genotype on pharmacokinetics. |
| PGx | Desmarais_2010 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions involving tamoxifen and does not report pharmacogenomic effects on nefazodone's PK or PD parameters. |
| popPK | Dockens_1995 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of theophylline, and while nefazodone is co-administered, no quantitative PK parameters (CL, V, etc.) for nefazodone are reported in the evidence. |
| PD | Dockens_1995 | not_relevant | 0 | 0 | The study reports a lack of interaction and provides only mean PK parameters and qualitative PD comparisons (FEV1) without any concentration-effect modeling or numeric PD parameters for nefazodone. |
| popPK | Dockens_1996 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of digoxin as the subject drug, and while it states that nefazodone's PK was unaffected, it does not report any quantitative disposition parameters (CL, V, etc.) for nefazodone. |
| PD | Dockens_1996 | not_relevant | 1 | 0 | The study reports PK changes in digoxin and qualitative lack of ECG changes, but provides no numeric PD parameters or concentration-effect relationship for nefazodone. |
| popPK | Dresser_2000 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Dresser_2000 | not_relevant | 0 | 0 | The provided text is only the title of a review article and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| PGx | Dresser_2000 | not_relevant | 0 | 0 | The paper discusses CYP3A4 inhibition generally and does not report pharmacogenomic effects on nefazodone PK/PD parameters. |
| PGx | Ellingrod_1995 | not_relevant | 0 | 0 | The paper is a general review of nefazodone's pharmacology and clinical efficacy, containing no data on gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Gallelli_2017 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | Gallelli_2017 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions in cocaine users and does not report any pharmacodynamic or exposure-response analysis for nefazodone. |
| PGx | Gallelli_2017 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions in cocaine users and does not report pharmacogenomic effects on nefazodone PK/PD parameters. |
| popPK | Goldberg_1997 | irrelevant | 1 | 0 | The paper is a review discussing efficacy and general pharmacokinetic trends (e.g., reduced clearance in hepatic impairment) without reporting specific quantitative PK parameter values for nefazodone. |
| PD | Goldberg_1997 | not_relevant | 1 | 0 | The text is a qualitative review of antidepressants in the elderly and mentions PK changes (clearance, plasma concentrations) but provides no numeric PD parameters, dose-response curves, or exposure-response analysis for nefazodone. |
| PGx | Greene_1997 | not_relevant | 0 | 0 | The paper describes general clinical pharmacokinetics and drug-drug interactions but does not report any pharmacogenomic effects (gene variants) on nefazodone PK/PD. |
| PGx | Hasselstrøm_2006 | not_relevant | 0 | 0 | The paper investigates the metabolism of quetiapine and mentions nefazodone only as a CYP3A4 inhibitor in a drug-drug interaction context, not as the subject of a pharmacogenomic study. |
| popPK | Hayasaka_2015 | irrelevant | 0 | 0 | The paper is a meta-analysis of dose equivalence in clinical trials and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for nefazodone. |
| PD | Hayasaka_2015 | not_relevant | 1 | 0 | The paper reports dose equivalence ratios derived from clinical trial data but does not provide a pharmacodynamic model, concentration-effect curve, or numeric PD parameters (e.g., Emax, EC50) for nefazodone. |
| popPK | Hesse_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2B6-mediated bupropion hydroxylation, and nefazodone is only mentioned as an inhibitor with an IC50 value, not as the subject of a pharmacokinetic study. |
| PD | Hesse_2000 | not_relevant | 1 | 2 | The paper reports an in vitro IC50 for nefazodone inhibiting bupropion metabolism, which is a pharmacokinetic interaction parameter, not a pharmacodynamic exposure-response relationship for nefazodone's therapeutic effect. |
| PGx | Hesse_2000 | not_relevant | 0 | 0 | The paper studies bupropion metabolism and drug interactions, not the pharmacogenomics of nefazodone. |
| popPK | Hong_2021 | irrelevant | 0 | 0 | The study is an in-vitro hepatotoxicity assay using 3D cell printing and does not report pharmacokinetic parameters for nefazodone. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper reports a drug-herb interaction (St John's wort and nefazodone) causing clinical symptoms, not a pharmacogenomic effect based on a gene variant. |
| popPK | Kalgutkar_2003 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of haloperidol, with nefazodone serving only as a CYP3A inhibitor/comparator rather than the subject drug for PK parameter estimation. |
| PD | Kalgutkar_2003 | not_relevant | 0 | 0 | The paper focuses on in vitro CYP3A4/5 metabolism of haloperidol and reports IC50 values for enzyme inhibition by nefazodone, which is a pharmacokinetic/drug-interaction parameter, not a pharmacodynamic exposure-response relationship for nefazodone itself. |
| PGx | Kalgutkar_2003 | not_relevant | 0 | 0 | The paper focuses on the metabolism of haloperidol and the inhibitory effects of nefazodone on that pathway, rather than reporting a pharmacogenomic effect on nefazodone's own PK or PD parameters. |
| popPK | Khouzam_2000 | irrelevant | 2 | 0 | The paper is a review article summarizing pharmacology and clinical efficacy, and the provided evidence contains no original quantitative pharmacokinetic parameter values for nefazodone. |
| PD | Khouzam_2000 | not_relevant | 1 | 0 | The text is a general review summary that mentions pharmacodynamics but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Kilts_2006 | irrelevant | 0 | 0 | The paper is a neuroimaging (PET) study of social anxiety disorder and does not report any pharmacokinetic parameters for nefazodone. |
| popPK | Kostrubsky_2006 | irrelevant | 0 | 0 | The study focuses on in-vitro and in-vivo hepatotoxicity mechanisms (BSEP inhibition, cell toxicity) rather than quantitative pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PGx | Kot_2007 | not_relevant | 0 | 0 | The study investigates the effect of nefazodone on caffeine metabolism in rats, not the effect of a gene variant on nefazodone's PK/PD. |
| PGx | Kotlyar_2003 | not_relevant | 0 | 0 | The study reports a drug-drug interaction (nefazodone inhibiting methylprednisolone metabolism) in healthy volunteers, not a pharmacogenomic effect based on gene variants or genotypes. |
| popPK | Kroboth_1995 | irrelevant | 2 | 0 | The study is a pharmacodynamic assessment of coadministration, and while it mentions that full pharmacokinetic analyses were done for separate studies, no quantitative PK parameters for nefazodone are reported in the provided evidence. |
| PGx | Kudo_1999 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of haloperidol, not nefazodone. |
| PGx | Laizure_2000 | not_relevant | 0 | 0 | The text is a general clinical update on nefazodone's mechanism, side effects, and drug interactions, with no mention of genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Lam_2003 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PGx | Lam_2003 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (DDIs) with nefazodone, not pharmacogenomic effects (gene variants) on nefazodone's PK/PD. |
| PGx | Levin_2010 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (diltiazem-fentanyl) and mentions nefazodone only as a list of other CYP3A4 inhibitors, without reporting any pharmacogenomic effect on nefazodone's PK/PD. |
| PGx | Mazzarino_2018 | not_relevant | 0 | 0 | The paper investigates the metabolism of SR9009, not nefazodone; nefazodone is only mentioned as a drug-drug interaction inhibitor. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (CYP3A4 inhibition) involving nefazodone and cisapride, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Ohno_2007 | not_relevant | 0 | 0 | The paper describes a general framework for predicting CYP3A4 drug-drug interactions and does not report any pharmacogenomic effects (gene variants) on the PK or PD of nefazodone. |
| PGx | Olyaei_1998 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (nefazodone inhibiting tacrolimus metabolism) in a single patient, not a pharmacogenomic effect of a gene variant on nefazodone's PK/PD. |
| popPK | Owens_1997 | irrelevant | 0 | 0 | The paper reports in-vitro receptor binding affinities (Ki) rather than pharmacokinetic disposition parameters. |
| PD | Owens_1997 | not_relevant | 0 | 0 | The paper reports in vitro radioligand binding affinities (Ki) for receptors and transporters, which is a pharmacological characterization, but it does not report an in vivo or ex vivo exposure-response or dose-response relationship with numeric PD parameters (e.g., Emax, EC50) for the drug's effect. |
| popPK | Palleria_2020 | irrelevant | 0 | 0 | The paper is a review of drug-drug interactions between statins and antidepressants and does not report original quantitative pharmacokinetic parameters for nefazodone. |
| PD | Palleria_2020 | not_relevant | 1 | 0 | The paper is a narrative review discussing potential pharmacokinetic interactions and qualitative pharmacodynamic profiles, but it does not report any specific numeric PD parameters or exposure-response data for nefazodone. |
| PGx | Pollock_1996 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of bupropion, not nefazodone. |
| PGx | Pozo_2026 | not_relevant | 0 | 0 | The paper evaluates the metabolic capacity of 3D iPSC-derived hepatocytes using nefazodone as a DILI probe, but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Pullar_2000 | irrelevant | 0 | 0 | The paper is a pharmacological study comparing receptor binding and uptake inhibition of LY367265 and nefazodone, containing no pharmacokinetic disposition parameters. |
| PD | Pullar_2000 | not_relevant | 0 | 0 | The paper reports in vitro pharmacological binding and functional assay parameters (Ki, IC50, EC50) for a new compound (LY367265) compared to nefazodone, but does not report an in vivo pharmacodynamic or exposure-response relationship for nefazodone. |
| PGx | Richelson_1997 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (CYP inhibition) of antidepressants, not pharmacogenomic effects of gene variants on nefazodone PK/PD. |
| PGx | Richelson_1998 | not_relevant | 0 | 0 | The text discusses drug-drug interactions via CYP enzymes but does not report pharmacogenomic effects (gene variants) on nefazodone PK/PD. |
| PGx | Rotzinger_2002 | not_relevant | 0 | 0 | The study investigates the role of CYP3A4 in nefazodone metabolism using heterologous enzymes and pooled liver microsomes, but does not report pharmacogenomic effects of specific gene variants or genotypes on PK/PD parameters. |
| popPK | Salazar_1995 | irrelevant | 2 | 0 | The study focuses on warfarin pharmacokinetics with nefazodone as a co-administered agent, and no quantitative PK parameters (CL, V, etc.) for nefazodone are provided in the evidence. |
| PD | Salazar_1995 | not_relevant | 0 | 0 | The study reports PK parameters and qualitative safety outcomes (prothrombin ratio) but does not provide numeric PD parameters or an exposure-response relationship for nefazodone. |
| popPK | Salazar_1995_2 | irrelevant | 2 | 0 | The study focuses on the interaction with propranolol and reports only relative changes in propranolol's PK, stating nefazodone's PK was "largely unaffected" without providing specific quantitative disposition parameters (CL, V, etc.) for nefazodone. |
| PD | Salazar_1995_2 | not_relevant | 2 | 1 | The paper reports qualitative changes in pharmacodynamic endpoints (tachycardia, double product) and PK parameters, but does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve for nefazodone. |
| PGx | Schmider_1996 | not_relevant | 0 | 0 | The paper investigates in vitro CYP450 inhibition by nefazodone and its metabolites, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Shin_2014 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of hERG channel inhibition and does not report any pharmacokinetic parameters for nefazodone. |
| PGx | Shubbar_2020 | not_relevant | 0 | 0 | The paper investigates the effect of nefazodone on ABC transporter-mediated amyloid-beta transport in vitro, not the effect of a gene variant on nefazodone's PK or PD parameters. |
| popPK | Silva_2016 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on mitochondrial toxicity in HepG2 cells and does not report pharmacokinetic parameters for nefazodone. |
| PD | Silva_2016 | not_relevant | 3 | 2 | The paper describes in vitro cellular toxicity mechanisms and mentions dose-response curves for viability to select concentrations, but it does not report a pharmacodynamic model or numeric PD parameters (e.g., EC50, Emax) for the drug's therapeutic or toxic effect in a PK/PD context. |
| popPK | Störmer_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P-glycoprotein interactions in cell culture and does not report quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for nefazodone. |
| PGx | Taylor_1999 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (nefazodone inhibiting clozapine metabolism) but does not report a pharmacogenomic effect (gene variant/genotype) on a PK/PD parameter. |
| PGx | Ucar_2000 | not_relevant | 0 | 0 | The paper discusses nefazodone only as a drug-drug interaction inhibitor of statins, not as the primary drug of interest for pharmacogenomic analysis. |
| PGx | Wen_2008 | not_relevant | 0 | 0 | The paper investigates the metabolic bioactivation of trazodone and its metabolite m-CPP, mentioning nefazodone only as a context for m-CPP, but does not report pharmacogenomic effects on nefazodone PK/PD parameters. |
| PGx | Wójcikowski_2013 | not_relevant | 0 | 0 | The study investigates the effect of nefazodone on CYP2C11 activity in rats, not the effect of a gene variant on nefazodone's PK/PD. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis of antidepressant efficacy and dose-response relationships, not a pharmacokinetic study, and it reports no quantitative PK parameters for nefazodone. |
| PD | Zhou_2025 | not_relevant | 2 | 1 | The paper is a network meta-analysis that qualitatively describes nefazodone's dose-response curve as "fairly flat" but does not provide specific numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model for nefazodone. |
| popPK | von_1996 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of triazolam, with nefazodone serving only as an in-vitro inhibitor probe rather than the subject drug for PK parameter estimation. |
| PD | von_1996 | not_relevant | 0 | 0 | The paper focuses on the in vitro inhibition of triazolam metabolism by nefazodone (reporting Ki values) and the in vivo PK/PD interaction between triazolam and ketoconazole; it does not report a pharmacodynamic or exposure-response relationship for nefazodone itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
