<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;telithromycin&quot;}]"></div>

# telithromycin

- **generic name:** telithromycin
- **ATC codes:** `J01FA15`
- **DrugBank:** [DB00976](https://go.drugbank.com/drugs/DB00976) · **PubChem:** [CID 3002190](https://pubchem.ncbi.nlm.nih.gov/compound/3002190)
- **molar mass:** 812.018 g/mol (C43H65N5O10) — DrugBank
- **groups:** approved

## About

Telithromycin is a ketolide antibiotic used to treat bacterial respiratory infections such as pneumonia, sinusitis, pharyngitis, tonsillitis and chronic bronchitis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2736135](https://www.wikidata.org/wiki/Q2736135) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:35 | 9:35 | 0/0/0 | 0/1/0 | 0/0/0 | 343,152/4,797 | einfracz / qwen3.8-27b | 18 | 3/14 | 18/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Nicolau_2004_Bactericidal_activity](drugs/drug_telithromycin/pd_Nicolau_2004_Bactericidal_activity.md) | Bactericidal activity · inhibition effect | — | Nicolau DP, Clinical use of antimicrobial pharmacod…, Expert opinion on pharmacot… (2004) | [10.1517/14656566.5.2.229](https://doi.org/10.1517/14656566.5.2.229) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=telithromycin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` inhibitor/substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 168 matched, 114 returned
- **screened:** 0  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_20 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ikawa_2014.pdf` | Ikawa K et al., Pharmacokinetic modelling of serum and…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1111/jcpt.12157](https://doi.org/10.1111/jcpt.12157) | [24661290](https://pubmed.ncbi.nlm.nih.gov/24661290) | The paper reports quantitative population PK parameters (V1/F, V2/F, V3/F, CL/F, Ka, K12, K21, K13, K31) for telithromycin in humans. |
| `Barbour_2010.pdf` | Barbour A et al., Class-dependent relevance of tissue dis…, International journal of an… (2010) | pd | 5 | [10.1016/j.ijantimicag.2010.01.023](https://doi.org/10.1016/j.ijantimicag.2010.01.023) | [20219329](https://www.ncbi.nlm.nih.gov/pubmed/20219329) | metadata signals extractable PD data (PK/PD) |
| `Lemaire_2009.pdf` | Lemaire S et al., Cellular accumulation and pharmacodynam…, Antimicrobial agents and ch… (2009) | pd | 5 | [10.1128/AAC.00203-09](https://doi.org/10.1128/AAC.00203-09) | [19564365](https://www.ncbi.nlm.nih.gov/pubmed/19564365) | metadata signals extractable PD data (Emax) |
| `Munckhof_2000.pdf` | Munckhof WJ et al., Postantibiotic suppression of growth of…, Antimicrobial agents and ch… (2000) | pd | 4 | [10.1128/AAC.44.6.1749-1753.2000](https://doi.org/10.1128/AAC.44.6.1749-1753.2000) | [10817748](https://www.ncbi.nlm.nih.gov/pubmed/10817748) | metadata signals extractable PD data (sigmoid) |
| `Ferri_2013.pdf` | Ferri N et al., Pharmacology of the new P2Y12 receptor…, Drugs (2013) | pgx | 8 | [10.1007/s40265-013-0126-z](https://doi.org/10.1007/s40265-013-0126-z) | [24114622](https://www.ncbi.nlm.nih.gov/pubmed/24114622) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Bearden_2001.pdf` | Bearden DT et al., Telithromycin: an oral ketolide for res…, Pharmacotherapy (2001) | pgx | 7 | [10.1592/phco.21.15.1204.33902](https://doi.org/10.1592/phco.21.15.1204.33902) | [11601667](https://www.ncbi.nlm.nih.gov/pubmed/11601667) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ciervo_2005.pdf` | Ciervo CA et al., Pharmacokinetics of telithromycin: appl…, Current medical research an… (2005) | pgx | 7 | [10.1185/030079905X65466](https://doi.org/10.1185/030079905X65466) | [16238904](https://www.ncbi.nlm.nih.gov/pubmed/16238904) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Davis_2013.pdf` | Davis MW et al., Colchicine-antimicrobial drug interacti…, The Consultant pharmacist :… (2013) | pgx | 7 | [10.4140/TCP.n.2013.176](https://doi.org/10.4140/TCP.n.2013.176) | [23462027](https://www.ncbi.nlm.nih.gov/pubmed/23462027) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Elsby_2019.pdf` | Elsby R et al., Mechanistic In Vitro Studies Indicate t…, Drug metabolism and disposi… (2019) | pgx | 7 | [10.1124/dmd.118.083832](https://doi.org/10.1124/dmd.118.083832) | [30348903](https://www.ncbi.nlm.nih.gov/pubmed/30348903) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Grönlund_2010.pdf` | Grönlund J et al., Effect of telithromycin on the pharmaco…, Journal of clinical pharmac… (2010) | pgx | 7 | [10.1177/0091270009336444](https://doi.org/10.1177/0091270009336444) | [19755414](https://www.ncbi.nlm.nih.gov/pubmed/19755414) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Hisaka_2009.pdf` | Hisaka A et al., A proposal for a pharmacokinetic intera…, Clinical pharmacokinetics (2009) | pgx | 7 | [10.2165/11317220-000000000-00000](https://doi.org/10.2165/11317220-000000000-00000) | [19743887](https://www.ncbi.nlm.nih.gov/pubmed/19743887) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kajosaari_2006.pdf` | Kajosaari LI et al., Telithromycin, but not montelukast, inc…, Clinical pharmacology and t… (2006) | pgx | 7 | [10.1016/j.clpt.2005.11.002](https://doi.org/10.1016/j.clpt.2005.11.002) | [16513447](https://www.ncbi.nlm.nih.gov/pubmed/16513447) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Lee_2008.pdf` | Lee JH et al., Time-dependent effects of Klebsiella pn…, Pulmonary pharmacology & th… (2008) | pgx | 7 | [10.1016/j.pupt.2008.09.002](https://doi.org/10.1016/j.pupt.2008.09.002) | [18976719](https://www.ncbi.nlm.nih.gov/pubmed/18976719) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Nosaka_2006.pdf` | Nosaka H et al., Effect of a newly developed ketolide an…, Life sciences (2006) | pgx | 7 | [10.1016/j.lfs.2005.12.022](https://doi.org/10.1016/j.lfs.2005.12.022) | [16423372](https://www.ncbi.nlm.nih.gov/pubmed/16423372) | metadata signals extractable PGX data (CYP3A2, PK/PD-context) |
| `Ohno_2007.pdf` | Ohno Y et al., General framework for the quantitative…, Clinical pharmacokinetics (2007) | pgx | 7 | [10.2165/00003088-200746080-00005](https://doi.org/10.2165/00003088-200746080-00005) | [17655375](https://www.ncbi.nlm.nih.gov/pubmed/17655375) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Reed_2005.pdf` | Reed M et al., Verapamil toxicity resulting from a pro…, The Annals of pharmacothera… (2005) | pgx | 7 | [10.1345/aph.1E496](https://doi.org/10.1345/aph.1E496) | [15598962](https://www.ncbi.nlm.nih.gov/pubmed/15598962) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Shakeri-Nejad_2006.pdf` | Shakeri-Nejad K et al., Drug interactions during therapy with t…, Expert opinion on pharmacot… (2006) | pgx | 7 | [10.1517/14656566.7.6.639](https://doi.org/10.1517/14656566.7.6.639) | [16556082](https://www.ncbi.nlm.nih.gov/pubmed/16556082) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Shi_2005.pdf` | Shi J et al., Clinical pharmacokinetics of telithromy…, Clinical pharmacokinetics (2005) | pgx | 7 | [10.2165/00003088-200544090-00003](https://doi.org/10.2165/00003088-200544090-00003) | [16122280](https://www.ncbi.nlm.nih.gov/pubmed/16122280) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Vieira_2012.pdf` | Vieira ML et al., Predicting drug interaction potential w…, Clinical pharmacology and t… (2012) | pgx | 7 | [10.1038/clpt.2011.305](https://doi.org/10.1038/clpt.2011.305) | [22398966](https://www.ncbi.nlm.nih.gov/pubmed/22398966) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Zhanel_2016.pdf` | Zhanel GG et al., Solithromycin: A Novel Fluoroketolide f…, Drugs (2016) | pgx | 7 | [10.1007/s40265-016-0667-z](https://doi.org/10.1007/s40265-016-0667-z) | [27909995](https://www.ncbi.nlm.nih.gov/pubmed/27909995) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T11:32:07.071950+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alotaiq_2024 | irrelevant | 0 | 0 | The paper is a systematic review of virtual bioequivalence methods and does not contain pharmacokinetic data or parameters for telithromycin. |
| popPK | Barbour_2010 | irrelevant | 1 | 0 | The paper is a review discussing PK/PD concepts and mentions telithromycin as an example of a drug with high tissue distribution, but it does not report specific quantitative PK parameters or values. |
| popPK | Barsam_2017 | irrelevant | 0 | 0 | The study is a population pharmacokinetic analysis of rivaroxaban, not telithromycin. |
| PGx | Bearden_2001 | not_relevant | 2 | 0 | The text mentions CYP3A4 involvement in metabolism but does not report specific gene variant/genotype effects on PK or PD parameters. |
| popPK | Beechinor_2019 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of solithromycin (a fourth-generation macrolide) in pediatric subjects, not telithromycin. |
| popPK | Beuschlein_2024 | irrelevant | 0 | 0 | The paper is a clinical guideline regarding glucocorticoid-induced adrenal insufficiency and does not contain any pharmacokinetic data for telithromycin. |
| popPK | Biagini_2006 | irrelevant | 0 | 0 | The study is an in vitro hepatotoxicity assessment measuring EC50 values for toxicity, not a pharmacokinetic study reporting disposition parameters for telithromycin. |
| PGx | Brown_2008 | not_relevant | 0 | 0 | The paper is a general benefit-risk assessment of telithromycin in CAP and does not report any pharmacogenomic studies or gene-variant specific effects on PK/PD parameters. |
| PGx | Chaira_2020 | not_relevant | 0 | 0 | The paper reports standard preclinical pharmacokinetics and pharmacodynamics in animal models but does not investigate any gene variant, genotype, or phenotype effects on the drug's PK or PD parameters. |
| PGx | Chavan_2021 | not_relevant | 0 | 0 | The paper evaluates CYP inhibition potential (drug-drug interaction risk) of nafithromycin vs telithromycin, but does not report pharmacogenomic effects on the PK or PD parameters of telithromycin. |
| PGx | Ciervo_2005 | not_relevant | 0 | 0 | The paper is a general pharmacokinetic review that discusses drug-drug interactions and organ impairment but does not report effects of specific gene variants or genotypes on telithromycin PK/PD. |
| PGx | Cobos-Trigueros_2009 | not_relevant | 0 | 0 | The text is a general overview of macrolides and ketolides pharmacology and does not report specific genetic variants or pharmacogenomic effects on telithromycin's PK or PD parameters. |
| PGx | Daval_2020 | not_relevant | 0 | 0 | The paper is a trial protocol for budesonide in hyposmia; telithromycin is only mentioned as a CYP3A4 inhibitor in the exclusion criteria. |
| PGx | Davis_2013 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving CYP3A4 inhibition, not pharmacogenomic effects of specific gene variants. |
| PGx | Elsby_2019 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (DDI) between telithromycin and simvastatin, not a pharmacogenomic effect involving gene variants or genotypes. |
| popPK | Eugene_2021 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study of antipsychotics regarding sedation and does not provide pharmacokinetic data for telithromycin, which is only mentioned as a CYP3A4 inhibitor in a general drug interaction list. |
| PGx | Ferri_2013 | not_relevant | 0 | 0 | The text is a review of P2Y12 receptor inhibitors (e.g., ticagrelor, prasugrel) and only mentions telithromycin as an example of a CYP3A4 inhibitor for a drug-drug interaction warning, without reporting any pharmacogenomic effect on telithromycin. |
| popPK | Fu_2024 | irrelevant | 2 | 1 | This is a review article that only mentions telithromycin in the context of general macrolide pharmacokinetics and cites another study for specific data, without providing original quantitative PK parameter values (CL, V, etc.) for telithromycin itself. |
| popPK | Gonzalez_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of solithromycin, not telithromycin. |
| PGx | Grönlund_2010 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (telithromycin effect on oxycodone PK/PD) and does not report on any genetic variants or pharmacogenomic effects. |
| PGx | Hisaka_2009 | not_relevant | 1 | 0 | The paper proposes a general classification system for CYP3A4 drug-drug interactions and lists telithromycin only as a strong inhibitor example; it does not report any pharmacogenomic effects on telithromycin's PK or PD. |
| PGx | Huber_2012 | not_relevant | 0 | 0 | The text discusses adverse ocular effects of telithromycin and mentions pharmacogenetics only as a general factor influencing dose dependence, without reporting any specific genotype-PK/PD relationship for telithromycin. |
| PGx | Huber_2012_2 | not_relevant | 0 | 0 | The paper mentions pharmacogenetic variants only in the context of voriconazole metabolism, not telithromycin, and telithromycin is discussed only regarding its anticholinergic PD side effects without genetic modulation. |
| popPK | Jauréguiberry_2005 | irrelevant | 0 | 0 | The study is a clinical retrospective analysis of leptospirosis and does not report any pharmacokinetic parameters for telithromycin. |
| PGx | Kajosaari_2006 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (telithromycin inhibiting the metabolism of repaglinide) rather than a pharmacogenomic effect of a genetic variant on telithromycin. |
| popPK | Katsube_2014 | irrelevant | 0 | 0 | The study focuses on in-vitro pharmacodynamic (time-kill) modeling of modithromycin, with telithromycin serving only as a comparator in in-vitro experiments; no in-vivo population PK parameters (CL, V, etc.) for telithromycin are reported. |
| PGx | Kolilekas_2004 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between telithromycin and warfarin without describing any specific gene variant or pharmacogenomic effect. |
| PGx | Lee_2008 | not_relevant | 0 | 0 | The study investigates physiological changes in enzyme expression due to endotoxin exposure, not genetic polymorphisms or pharmacogenomic variants. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for everolimus, not telithromycin. |
| popPK | Lemaire_2009 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic/cellular accumulation study of CEM-101 where telithromycin is only a comparator, and no PK parameters for telithromycin are reported. |
| PGx | Liang_2015 | not_relevant | 0 | 0 | The paper describes structural modifications to a drug molecule to reduce CYP3A4 inhibition (chemical property) and does not report human pharmacogenomic studies linking genetic variants to PK/PD parameters. |
| popPK | Medina-Aymerich_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for alfentanil, not telithromycin. |
| PGx | Mendes_2003 | not_relevant | 0 | 0 | The paper reports bacterial resistance to telithromycin (antimicrobial susceptibility) and does not study human pharmacogenomics. |
| PGx | Munić_2010 | not_relevant | 0 | 0 | The study compares macrolide interaction with MDR1 in cell lines using standard functional assays, but does not report a specific gene variant or genotype changing the PK or PD of telithromycin in humans or a disease model. |
| popPK | Noori_2024 | irrelevant | 0 | 0 | The study is an in-silico drug discovery paper targeting Helicobacter pylori and does not report pharmacokinetic parameters for telithromycin. |
| PGx | Nosaka_2006 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic interaction involving drug-drug metabolism (telithromycin inhibiting CYP enzymes affecting theophylline), but does not report a pharmacogenomic effect (gene variant) on the pharmacokinetics or pharmacodynamics of telithromycin itself. |
| PGx | Ohno_2007 | not_relevant | 0 | 0 | The paper is a general framework for predicting CYP3A4 drug-drug interactions and does not report any pharmacogenomic effects (gene variants) on the PK or PD of telithromycin. |
| PGx | Reed_2005 | not_relevant | 1 | 0 | The paper reports a drug-drug interaction between verapamil and telithromycin, not a pharmacogenomic effect of a gene variant. |
| popPK | Rey_2015 | irrelevant | 0 | 0 | The paper is a review of regorafenib, a different drug, and does not report pharmacokinetic parameters for telithromycin. |
| PGx | Shain_2002 | not_relevant | 0 | 0 | The paper is a general review of telithromycin's chemistry, pharmacology, and safety, and does not report specific pharmacogenomic effects of gene variants on PK or PD parameters. |
| PGx | Shakeri-Nejad_2006 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions (CYP inhibition) and does not discuss pharmacogenomic effects of gene variants on telithromycin. |
| PGx | Shi_2005_2 | not_relevant | 0 | 0 | The paper describes general clinical pharmacokinetics of telithromycin but does not report any effects of gene variants, genotypes, or pharmacogenomic phenotypes on PK or PD parameters. |
| PGx | Shi_2005_3 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP3A4 inhibition by itraconazole/grapefruit juice), not pharmacogenomic effects of specific genetic variants on telithromycin PK/PD. |
| PGx | Shi_2005_4 | not_relevant | 0 | 0 | The study investigates the effects of renal impairment, age, and drug-drug interaction (ketoconazole), but does not analyze gene variants or genotypes. |
| popPK | Shivarov_2026 | irrelevant | 0 | 0 | The study is a pharmacovigilance analysis of ibrutinib safety signals in FAERS and does not contain pharmacokinetic data for telithromycin. |
| popPK | Tanigawara_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of garenoxacin, not telithromycin. |
| popPK | Tumusiime_2025 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for cabotegravir and rilpivirine in HIV treatment, and telithromycin is only mentioned as a prohibited concomitant medication due to CYP3A inhibition, not as the subject of the study. |
| PGx | Vieira_2012 | not_relevant | 0 | 0 | The paper reports on a PBPK model for telithromycin's drug-drug interaction potential via time-dependent CYP3A4 inhibition, but does not mention any gene variants or pharmacogenomic factors. |
| popPK | Yaeger_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tulathromycin, not telithromycin. |
| popPK | Yamashita_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rifampicin and CYP3A4 substrates to model drug-drug interactions; telithromycin is not the subject drug nor are its parameters reported. |
| PGx | Zhanel_2016 | not_relevant | 0 | 0 | The paper describes the pharmacology and clinical trials of solithromycin, not the pharmacogenomics of telithromycin. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | The paper is a review on the effects of macrolides on CYP450 enzymes and drug-drug interactions, and does not report pharmacogenomic effects (gene variant/genotype) on telithromycin PK or PD. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
