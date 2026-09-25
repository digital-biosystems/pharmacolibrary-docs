<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;tranylcypromine&quot;}]"></div>

# tranylcypromine

- **generic name:** tranylcypromine
- **ATC codes:** `N06AF04`
- **DrugBank:** [DB00752](https://go.drugbank.com/drugs/DB00752)
- **groups:** approved, investigational

## About

**Description.** A propylamine formed from the cyclization of the side chain of amphetamine. This monoamine oxidase inhibitor is effective in the treatment of major depression, dysthymic disorder, and atypical depression. It also is useful in panic and phobic disorders (From AMA Drug Evaluations Annual, 1994, p311). 

Tranylcypromine is a racemate comprising equal amounts of (1R,2S)- and (1S,2R)-2-phenylcyclopropan-1-amine with the chiral centers both located on the cylopropane ring. An irreversible monoamine oxidase inhibitor that is used as an antidepressant (INN tranylcypromine).

**Indication.** For the treatment of major depressive episode without melancholia.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 17:35 | 37:32 | 0/0/0 | 0/0/0 | 0/0/0 | 171,347/9,836 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 6/7 | 10/3 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tranylcypromine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor, `MAOA` inhibitor, `MAOB` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2A6` inhibitor, `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inhibitor, `MAOA` inhibitor | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `MAOA` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 224 matched, 152 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_20 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Weber-Grandke_1993.pdf` | Weber-Grandke H et al., The pharmacokinetics of tranylcypromine…, British journal of clinical… (1993) | popPK | 9 | [10.1111/j.1365-2125.1993.tb00377.x](https://doi.org/10.1111/j.1365-2125.1993.tb00377.x) | [12959316](https://pubmed.ncbi.nlm.nih.gov/12959316) | The study reports quantitative PK parameters (AUC, CLR) for tranylcypromine enantiomers, but specific values for clearance (CL) and volume (V) are not explicitly listed in the provided text, only AUC and qualitative CLR differences. |
| `Lang_1979.pdf` | Lang A et al., [Determination and comparison of the pl…, Arzneimittel-Forschung (1979) | popPK | 8 | not captured | [582109](https://pubmed.ncbi.nlm.nih.gov/582109) | The study reports pharmacokinetic comparisons of tranylcypromine isomers in humans, but the provided evidence contains only qualitative descriptions without specific numeric parameter values. |
| `Mallinger_1986.pdf` | Mallinger AG et al., Pharmacokinetics of tranylcypromine in…, Clinical pharmacology and t… (1986) | popPK | 8 | [10.1038/clpt.1986.205](https://doi.org/10.1038/clpt.1986.205) | [3757407](https://pubmed.ncbi.nlm.nih.gov/3757407) | The study reports quantitative PK parameters (t1/2, Tmax) for tranylcypromine, but lacks specific values for clearance, volume, or absorption rate constants. |
| `Mallinger_1990.pdf` | Mallinger AG et al., Plasma tranylcypromine: relationship to…, Journal of clinical psychop… (1990) | popPK | 8 | not captured | [2376618](https://pubmed.ncbi.nlm.nih.gov/2376618) | The study reports pharmacokinetic parameters (t1/2, Vd, Tpeak) for tranylcypromine, but specific numeric values for these parameters are not provided in the abstract, only a single plasma concentration comparison. |
| `Reynolds_1981.pdf` | Reynolds GP et al., Tranylcypromine isomers in the treatmen…, International pharmacopsych… (1981) | popPK | 8 | [10.1159/000468471](https://doi.org/10.1159/000468471) | [7298269](https://pubmed.ncbi.nlm.nih.gov/7298269) | The study reports on the pharmacokinetics of tranylcypromine isomers, but the provided evidence contains only qualitative descriptions without specific numeric parameter values. |
| `Dinger_2014.pdf` | Dinger J et al., Development of an in vitro cytochrome P…, Toxicology letters (2014) | pd | 4 | [10.1016/j.toxlet.2014.08.004](https://doi.org/10.1016/j.toxlet.2014.08.004) | [25111188](https://www.ncbi.nlm.nih.gov/pubmed/25111188) | metadata signals extractable PD data (IC50) |
| `Finberg_1985.pdf` | Finberg JP et al., Reduced peripheral presynaptic adrenoce…, British journal of pharmaco… (1985) | pd | 4 | [10.1111/j.1476-5381.1985.tb16140.x](https://doi.org/10.1111/j.1476-5381.1985.tb16140.x) | [2985158](https://www.ncbi.nlm.nih.gov/pubmed/2985158) | metadata signals extractable PD data (EC50) |
| `Glinka_1995.pdf` | Glinka YY et al., Inhibition of mitochondrial complexes I…, European journal of pharmac… (1995) | pd | 4 | [10.1016/0926-6917(95)90040-3](https://doi.org/10.1016/0926-6917(95)90040-3) | [7796873](https://www.ncbi.nlm.nih.gov/pubmed/7796873) | metadata signals extractable PD data (IC50) |
| `Gryglewski_1976.pdf` | Gryglewski RJ et al., Arterial walls are protected against de…, Prostaglandins (1976) | pd | 4 | [10.1016/0090-6980(76)90047-2](https://doi.org/10.1016/0090-6980(76)90047-2) | [824685](https://www.ncbi.nlm.nih.gov/pubmed/824685) | metadata signals extractable PD data (IC50) |
| `Muramatsu_1988.pdf` | Muramatsu I et al., Distinctive actions of epidermal growth…, The Journal of pharmacology… (1988) | pd | 4 | not captured | [3259262](https://www.ncbi.nlm.nih.gov/pubmed/3259262) | metadata signals extractable PD data (EC50) |
| `Murray_2016.pdf` | Murray J et al., Significant inhibitory impact of dibenz…, Fitoterapia (2016) | pd | 4 | [10.1016/j.fitote.2016.04.011](https://doi.org/10.1016/j.fitote.2016.04.011) | [27105957](https://www.ncbi.nlm.nih.gov/pubmed/27105957) | metadata signals extractable PD data (IC50) |
| `Weaver_2003.pdf` | Weaver R et al., Cytochrome P450 inhibition using recomb…, Drug metabolism and disposi… (2003) | pd | 4 | [10.1124/dmd.31.7.955](https://doi.org/10.1124/dmd.31.7.955) | [12814974](https://www.ncbi.nlm.nih.gov/pubmed/12814974) | metadata signals extractable PD data (IC50) |
| `Liu_2000.pdf` | Liu XQ et al., Enzyme kinetics and inhibition of nimod…, Acta pharmacologica Sinica (2000) | pgx | 8 | not captured | [11501176](https://www.ncbi.nlm.nih.gov/pubmed/11501176) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Zi_2010.pdf` | Zi J et al., Effects of CYP2C9*3 and CYP2C9*13 on Di…, Drug metabolism and pharmac… (2010) | pgx | 8 | [10.2133/dmpk.dmpk-10-rg-009](https://doi.org/10.2133/dmpk.dmpk-10-rg-009) | [20814155](https://www.ncbi.nlm.nih.gov/pubmed/20814155) | metadata signals extractable PGX data (CYP2C9*3, PK/PD-context) |
| `Polasek_2006.pdf` | Polasek TM et al., An evaluation of potential mechanism-ba…, British journal of clinical… (2006) | pgx | 7 | [10.1111/j.1365-2125.2006.02627.x](https://doi.org/10.1111/j.1365-2125.2006.02627.x) | [16669850](https://www.ncbi.nlm.nih.gov/pubmed/16669850) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Castrignanò_2014.pdf` | Castrignanò S et al., Electrochemical detection of human cyto…, Analytical chemistry (2014) | pgx | 5 | [10.1021/ac4041839](https://doi.org/10.1021/ac4041839) | [24527722](https://www.ncbi.nlm.nih.gov/pubmed/24527722) | metadata signals extractable PGX data (CYP2A6) |
| `Kimura_2005.pdf` | Kimura M et al., Cyp2a6 is a principal enzyme involved i…, Drug metabolism and disposi… (2005) | pgx | 5 | [10.1124/dmd.105.004796](https://doi.org/10.1124/dmd.105.004796) | [15980104](https://www.ncbi.nlm.nih.gov/pubmed/15980104) | metadata signals extractable PGX data (Cyp2a6) |
| `Salsali_2004.pdf` | Salsali M et al., Inhibitory effects of the monoamine oxi…, Cellular and molecular neur… (2004) | pgx | 5 | [10.1023/b:cemn.0000012725.31108.4a](https://doi.org/10.1023/b:cemn.0000012725.31108.4a) | [15049511](https://www.ncbi.nlm.nih.gov/pubmed/15049511) | metadata signals extractable PGX data (CYP2C19) |
| `Sellers_2000.pdf` | Sellers EM et al., Mimicking gene defects to treat drug de…, Annals of the New York Acad… (2000) | pgx | 5 | [10.1111/j.1749-6632.2000.tb06685.x](https://doi.org/10.1111/j.1749-6632.2000.tb06685.x) | [10911933](https://www.ncbi.nlm.nih.gov/pubmed/10911933) | metadata signals extractable PGX data (CYP2D6*10) |
| `Ueng_2011.pdf` | Ueng YF et al., Mechanism-based inhibition of cytochrom…, British journal of pharmaco… (2011) | pgx | 5 | [10.1111/j.1476-5381.2011.01341.x](https://doi.org/10.1111/j.1476-5381.2011.01341.x) | [21418183](https://www.ncbi.nlm.nih.gov/pubmed/21418183) | metadata signals extractable PGX data (CYP2A6) |

<sub>queue written 2026-09-24T17:24:09.385913+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Araya_1999 | not_relevant | 0 | 0 | The paper studies bile acid hydroxylation by CYP3A4 and only mentions tranylcypromine as an ineffective inhibitor, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Atkinson_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of phenylephrine, and tranylcypromine is only mentioned as a co-administered MAOI in case reports of adverse interactions, with no PK parameters reported for it. |
| PD | Atkinson_2015 | not_relevant | 0 | 0 | The paper reports pharmacodynamic parameters for phenylephrine, not tranylcypromine. |
| PGx | Benetton_2003 | not_relevant | 0 | 0 | The paper describes an analytical method for P450 metabolism and uses tranylcypromine as a chemical inhibitor, but does not report pharmacogenomic effects on its PK/PD parameters. |
| popPK | Bergeron_1993 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of sigma receptor affinity and NMDA response modulation, not a pharmacokinetic study, and tranylcypromine is used only as a negative control. |
| PD | Bergeron_1993 | not_relevant | 1 | 0 | The paper states that tranylcypromine had no effects on the NMDA response and does not provide numeric PD parameters or dose-response curves for it. |
| popPK | Bicknell_1989 | irrelevant | 0 | 0 | The paper is a mechanistic study on angiogenin and prostacyclin secretion where tranylcypromine is used only as a non-specific inhibitor, with no pharmacokinetic parameters reported. |
| PD | Bornfeldt_1987 | not_relevant | 0 | 0 | The study investigates the effect of arachidonic acid metabolism inhibitors (including tranylcypromine) on the concentration-response curve of glyceryltrinitrate (GTN), not the pharmacodynamic relationship of tranylcypromine itself. |
| PGx | Bu_2001 | not_relevant | 0 | 0 | The paper validates an analytical method for CYP2C19 inhibition and uses tranylcypromine only as a positive control inhibitor, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Castrignanò_2014 | not_relevant | 0 | 0 | The paper reports in vitro electrochemical characterization of CYP2A6 inhibition by tranylcypromine, not a pharmacogenomic effect on PK/PD parameters in humans. |
| PD | Chen_2016 | not_relevant | 0 | 0 | The paper describes an in vitro CYP inhibition assay method validation; tranylcypromine is used only as a positive control inhibitor, and no pharmacodynamic (exposure-response) relationship for the drug itself is reported. |
| popPK | Cho_2009 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on 5-HT2C receptor agonists derived from tranylcypromine, reporting pharmacological potency (EC50) and behavioral effects, but containing no pharmacokinetic disposition parameters (CL, V, t1/2) for tranylcypromine. |
| PGx | Chung_2000 | not_relevant | 0 | 0 | The paper investigates the metabolism of ranitidine, not tranylcypromine, which is only mentioned as a CYP inhibitor. |
| PD | Coper_1979 | not_relevant | 3 | 2 | The paper reports an IC50 value for tranylcypromine as a substrate for platelet MAO inhibition (enzyme kinetics), but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug's clinical effect in patients. |
| popPK | Costall_1980 | irrelevant | 0 | 0 | The study is a behavioral neuroscience experiment in mice where tranylcypromine is used only as a protective agent during 6-OHDA lesioning, with no pharmacokinetic parameters reported. |
| PD | Costall_1980 | not_relevant | 0 | 0 | The paper uses tranylcypromine only as a neuroprotective agent during 6-OHDA lesioning and does not report any pharmacodynamic or exposure-response relationship for tranylcypromine itself. |
| popPK | Di_2009 | irrelevant | 0 | 0 | The paper is a review of CYP2A6 structure and function where tranylcypromine is mentioned only as a probe inhibitor, with no pharmacokinetic parameters reported. |
| PGx | Di_2009 | not_relevant | 0 | 0 | The paper is a general review of CYP2A6 and mentions tranylcypromine only as an enzyme inhibitor, not as a drug whose PK/PD is being studied for pharmacogenomic effects. |
| PGx | Dierks_2001 | not_relevant | 0 | 0 | The paper describes an in vitro method for CYP inhibition profiling where tranylcypromine is used as a reference inhibitor, not as the drug of interest for pharmacogenomic PK/PD analysis. |
| PD | Dinger_2014 | not_relevant | 0 | 0 | The paper focuses on the development of an in vitro CYP450 inhibition assay for drugs of abuse and does not report pharmacodynamic or exposure-response data for tranylcypromine. |
| PGx | Dinger_2014 | not_relevant | 0 | 0 | The paper uses tranylcypromine as a selective inhibitor for CYP2A6 in an in vitro assay to test other drugs, rather than reporting a pharmacogenomic effect on tranylcypromine's own PK/PD parameters. |
| PD | Dinger_2016 | not_relevant | 0 | 0 | The paper reports in vitro CYP inhibition (IC50) for tryptamines and in vivo CYP1A2 inhibition for 5-MeO-DALT, but does not report any pharmacodynamic or exposure-response relationship for tranylcypromine. |
| PGx | Dinger_2016 | not_relevant | 0 | 0 | The paper investigates the CYP inhibition potential of tryptamine-class new psychoactive substances, not the pharmacogenomics of tranylcypromine. |
| PGx | Doshi_2011 | not_relevant | 0 | 0 | The paper describes a CYP3A4 screening assay and mentions tranylcypromine only as a negative control for inhibition, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PD | Elbarbry_2018 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of quercetin and thymoquinone on CYP enzymes, not the pharmacodynamics of tranylcypromine. |
| PGx | Elbarbry_2018 | not_relevant | 0 | 0 | The study investigates the inhibitory effects of herbal compounds (quercetin and thymoquinone) on CYP enzymes, not the effect of genetic variants on tranylcypromine pharmacokinetics or pharmacodynamics. |
| popPK | Enokibori_1994 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of substance P-induced relaxation in dog arteries where tranylcypromine is used only as a pharmacological tool (MAO inhibitor), not as the subject of a pharmacokinetic analysis. |
| PD | Enokibori_1994 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for substance P, not tranylcypromine; tranylcypromine is only used as a qualitative inhibitor in the experimental setup. |
| popPK | Finberg_1985 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | Finberg_1985 | not_relevant | 0 | 0 | The paper studies the effects of chronic antidepressant treatment (likely including tranylcypromine) on adrenoceptor sensitivity in rats, but it does not report a pharmacokinetic-pharmacodynamic (PK/PD) model or an exposure-response relationship with numeric PD parameters (e.g., EC50, Emax) for tranylcypromine itself. |
| popPK | Fioravanti_2020 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on tranylcypromine analogs as LSD1 inhibitors, reporting in-vitro IC50 and intrinsic clearance data, but no human or animal pharmacokinetic disposition parameters (CL, V, t1/2) for tranylcypromine itself. |
| PD | Fioravanti_2022 | not_relevant | 2 | 2 | The paper reports IC50 values for LSD1 inhibition and qualitative cell growth arrest, but lacks a formal PK/PD model, exposure-response analysis, or derivable dose-effect curve parameters (like Emax or slope) for tranylcypromine itself. |
| PGx | Ghosal_2011 | not_relevant | 0 | 0 | The paper focuses on the metabolism of Vorapaxar (SCH 530348), not tranylcypromine, and does not report pharmacogenomic effects on tranylcypromine's PK or PD. |
| popPK | Gimeno_1981 | irrelevant | 0 | 0 | The study is a mechanistic investigation of prostaglandin synthesis in rat uterus where tranylcypromine is used only as a non-pharmacokinetic control agent, with no PK parameters reported. |
| popPK | Ginovart_2003 | irrelevant | 0 | 0 | The study focuses on PET radioligand characterization for serotonin transporters, and tranylcypromine is used only as a pharmacological challenge agent without reporting its quantitative pharmacokinetic parameters. |
| PD | Glinka_1995 | not_relevant | 0 | 0 | The paper reports IC50 values for 6-hydroxydopamine, not tranylcypromine; tranylcypromine is only used as a qualitative inhibitor to modulate the effect of 6-hydroxydopamine. |
| PD | Green_1990 | not_relevant | 2 | 1 | The paper reports qualitative behavioral effects and isolated IC50/ED50 values for calcium antagonists on 5-HT2 receptors, but does not provide a concentration-effect or dose-response analysis for tranylcypromine itself. |
| PD | Gryglewski_1976 | not_relevant | 1 | 1 | The paper reports an IC50 for tranylcypromine as an inhibitor of enzymatic PGX formation, which is a biochemical enzyme inhibition assay, not a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect in a subject. |
| PD | Higashi_2018 | not_relevant | 0 | 0 | The paper studies fluoxetine exposure effects on aortic reactivity; tranylcypromine is used only as a pharmacological tool (MAO inhibitor) to test mechanism, with no exposure-response or dose-response analysis for tranylcypromine itself. |
| PD | Huang_2026 | not_relevant | 3 | 2 | The paper reports IC50 values for a novel LSD1 inhibitor (compound 7a) with a tranylcypromine scaffold, but does not report a pharmacodynamic (exposure-response) relationship or PK/PD model for tranylcypromine itself. |
| PGx | Härtter_2002 | not_relevant | 0 | 0 | The paper investigates the metabolism of doxepin, not tranylcypromine; tranylcypromine is only used as a chemical inhibitor. |
| popPK | Inan_2020 | irrelevant | 0 | 0 | The paper is a systematic review of novel phenethylamines (4-FA and 2C-B) and their interactions, where tranylcypromine is only mentioned as a comparator antidepressant without any original PK parameter values. |
| popPK | Ketter_1995 | irrelevant | 0 | 0 | The study is a clinical trial assessing safety and efficacy of MAOI augmentation, reporting no quantitative pharmacokinetic parameters for tranylcypromine. |
| PGx | Khojasteh_2011 | not_relevant | 0 | 0 | The paper is a review of chemical CYP inhibitors and mentions tranylcypromine only as an inhibitor of CYP2A6, not as a drug whose PK/PD is affected by a genetic variant. |
| PGx | Kimura_2005 | not_relevant | 0 | 0 | The paper investigates the metabolism of caffeine (1,7-dimethylxanthine) by CYP2A6, using tranylcypromine only as an enzyme inhibitor, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Kohli_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dexmedetomidine, not tranylcypromine. |
| PD | Kohli_2012 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (clearance) of dexmedetomidine and CYP2A6 genetics, with no mention of tranylcypromine or any pharmacodynamic/exposure-response analysis. |
| popPK | Kruszewski_2025 | irrelevant | 2 | 0 | The paper is a Phase I clinical trial focused on toxicity and efficacy, and while it mentions accompanying pharmacokinetic studies, no quantitative PK parameters (CL, V, etc.) for tranylcypromine are provided in the evidence. |
| popPK | Lang_1979 | relevant | 8 | 0 | The study reports pharmacokinetic comparisons of tranylcypromine isomers in humans, but the provided evidence contains only qualitative descriptions without specific numeric parameter values. |
| popPK | Larhammar_2015 | irrelevant | 0 | 0 | The paper is a mechanistic study on the SLC10A4 transporter where tranylcypromine is used only as a pharmacological probe to test behavioral hypersensitivity, with no pharmacokinetic parameters reported. |
| PGx | Li_1999 | not_relevant | 0 | 0 | The paper characterizes cryopreserved hepatocytes and mentions tranylcypromine only as a hepatotoxic agent and CYP inhibitor, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Li_2006 | not_relevant | 0 | 0 | The paper uses tranylcypromine as a chemical inhibitor to probe CYP2C9 activity in pig liver microsomes, rather than studying the pharmacokinetics or pharmacodynamics of tranylcypromine itself in relation to genetic variants. |
| PD | Li_2019 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for LSD1 inhibition and antiproliferative activity, but does not report any pharmacokinetic data, exposure-response relationship, or pharmacodynamic modeling for tranylcypromine. |
| PGx | Lin_2007 | not_relevant | 0 | 0 | The paper describes an in vitro assay methodology for CYP inhibition and uses tranylcypromine only as a positive control inhibitor, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Liu_2000 | irrelevant | 0 | 0 | The study is an in-vitro enzyme kinetics investigation of nimodipine metabolism where tranylcypromine is used only as a CYP-450 inhibitor, not as the subject drug for PK parameter estimation. |
| PGx | Liu_2000 | not_relevant | 0 | 0 | The paper studies the metabolism of nimodipine, not tranylcypromine, and only mentions tranylcypromine as a non-inhibitor in an in vitro assay. |
| popPK | Ludwig_2021 | irrelevant | 0 | 0 | The study evaluates cardiovascular safety (blood pressure and heart rate) of concomitant esketamine and tranylcypromine use, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Ma_2020 | not_relevant | 0 | 0 | The paper reports an IC50 for a novel LSD1 inhibitor (compound 14q), not tranylcypromine, and does not contain any pharmacodynamic or exposure-response analysis for the target drug. |
| PD | Malcomson_2015 | not_relevant | 1 | 0 | The paper reports in vitro enzyme kinetics (IC50) for new compounds and compares them to tranylcypromine, but does not provide a pharmacodynamic exposure-response or dose-response model for tranylcypromine itself. |
| popPK | Mallinger_1986 | relevant | 8 | 4 | The study reports quantitative PK parameters (t1/2, Tmax) for tranylcypromine, but lacks specific values for clearance, volume, or absorption rate constants. |
| popPK | Mallinger_1990 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (t1/2, Vd, Tpeak) for tranylcypromine, but specific numeric values for these parameters are not provided in the abstract, only a single plasma concentration comparison. |
| popPK | Mallinger_1991 | irrelevant | 2 | 0 | The paper is a review summarizing existing literature and does not report original quantitative pharmacokinetic parameter values for tranylcypromine. |
| popPK | Marwood_1985 | irrelevant | 0 | 0 | The study investigates cardiovascular effects and MAO inhibition in rats, reporting no pharmacokinetic parameters for tranylcypromine. |
| PD | Milelli_2018 | not_relevant | 2 | 2 | The paper reports in vitro enzyme inhibition (Ki/IC50) and cytotoxicity data for a novel dual inhibitor containing tranylcypromine, but does not report a pharmacokinetic/pharmacodynamic (PK/PD) model or exposure-response relationship for tranylcypromine itself. |
| PD | Mills_2022 | not_relevant | 0 | 0 | The paper reports an IC50 for a novel LSD1 inhibitor (compound 48), not for tranylcypromine, and does not provide a concentration-effect curve or PD model for tranylcypromine. |
| popPK | Moerlein_1986 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of MPTP, with tranylcypromine serving only as a co-administered inhibitor to block metabolism, and no PK parameters for tranylcypromine are reported. |
| popPK | Mould_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on LSD1 inhibitors where tranylcypromine is only mentioned as a historical reference for irreversible inhibitors, with no pharmacokinetic data reported. |
| PD | Mould_2017 | not_relevant | 0 | 0 | The paper focuses on the development of reversible LSD1 inhibitors and only mentions tranylcypromine as the source of irreversible inhibitors without providing any pharmacodynamic or exposure-response data for it. |
| popPK | Muramatsu_1988 | irrelevant | 0 | 0 | no_text gate: only 162 chars of text extracted (&lt; 400) |
| PD | Muramatsu_1988 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of epidermal growth factor-urogastrone in guinea pig stomach and does not mention tranylcypromine or report any PD parameters for it. |
| PD | Murray_2016 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) of CYPs by a plant compound, using tranylcypromine only as a standard reference inhibitor, and does not report any pharmacodynamic or exposure-response relationship for tranylcypromine itself. |
| PGx | Murray_2016 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of a plant compound on CYP enzymes, using tranylcypromine only as a standard reference inhibitor, and does not report any pharmacogenomic effects on tranylcypromine's PK or PD. |
| PGx | Muta_2015 | not_relevant | 0 | 0 | The paper focuses on the metabolism of acebutolol; tranylcypromine is only mentioned as a CYP2C19 inhibitor used in an in vitro experiment, not as the subject of a pharmacogenomic study. |
| popPK | Nardi_2010 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting symptom scores, not a pharmacokinetic study with disposition parameters. |
| PD | Naritomi_2004 | not_relevant | 0 | 0 | The paper describes an in vitro enzyme inhibition assay method and classifies tranylcypromine as a reversible inhibitor based on constant IC50, but does not report pharmacodynamic exposure-response or dose-response relationships for the drug in a biological system. |
| PGx | Naritomi_2004 | not_relevant | 0 | 0 | The paper uses tranylcypromine as a reference reversible inhibitor in an in vitro CYP assay method validation and does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Ochiai_2006 | irrelevant | 0 | 0 | The study focuses on nicotine metabolism in rat lung cells, using tranylcypromine only as a CYP2C11 inhibitor, and does not report pharmacokinetic parameters for tranylcypromine. |
| popPK | Olawale_2026 | irrelevant | 0 | 0 | The paper is a review discussing tranylcypromine as a CYP2A6 inhibitor for smoking cessation, not a pharmacokinetic study reporting quantitative disposition parameters for tranylcypromine. |
| popPK | Oualha_2025 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on antileishmanial activity and does not report any pharmacokinetic parameters for tranylcypromine. |
| PGx | Pandit_2017 | not_relevant | 0 | 0 | The paper uses tranylcypromine as a positive control for CYP2D6 inhibition to test herb-drug interactions, not to report a pharmacogenomic effect of a gene variant on tranylcypromine's PK/PD. |
| PGx | Pham_2011 | not_relevant | 0 | 0 | The paper studies the metabolism of flavone-8-acetic acid in mice and uses tranylcypromine only as a CYP2b9 inhibitor, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Piechota_2015 | not_relevant | 0 | 0 | The paper investigates drug-induced changes in gene transcription (transcriptomics) in mice, not how genetic variants affect the pharmacokinetics or pharmacodynamics of tranylcypromine. |
| popPK | Polasek_2006 | irrelevant | 0 | 0 | The study focuses on in-vitro mechanism-based inactivation of CYP enzymes by MAO inhibitors and does not report pharmacokinetic disposition parameters for tranylcypromine. |
| PGx | Polasek_2006 | not_relevant | 0 | 0 | The paper investigates mechanism-based inactivation of CYP enzymes by MAO inhibitors in vitro, not the effect of genetic variants on the PK/PD of tranylcypromine. |
| popPK | Popp_2022 | irrelevant | 0 | 0 | The paper is a review of ivermectin for COVID-19 and does not contain any pharmacokinetic data for tranylcypromine. |
| PD | Popp_2022 | not_relevant | 0 | 0 | The paper is a systematic review of ivermectin for COVID-19 and does not contain any pharmacodynamic or exposure-response data for tranylcypromine. |
| PGx | Postlind_1998 | not_relevant | 0 | 0 | The paper investigates the metabolism of tolterodine, not tranylcypromine; tranylcypromine is only mentioned as a non-inhibitor in the context of tolterodine metabolism. |
| popPK | Preskorn_1993 | irrelevant | 0 | 0 | The paper is a clinical review discussing antidepressant classes and does not report quantitative pharmacokinetic parameters for tranylcypromine. |
| popPK | Reynolds_1981 | relevant | 8 | 0 | The study reports on the pharmacokinetics of tranylcypromine isomers, but the provided evidence contains only qualitative descriptions without specific numeric parameter values. |
| popPK | Ricken_2017 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy and meta-analysis, not a primary pharmacokinetic study reporting quantitative disposition parameters. |
| PGx | Rodríguez-Morató_2017 | not_relevant | 0 | 0 | The paper investigates the metabolism of tyrosol to hydroxytyrosol, not the pharmacokinetics or pharmacodynamics of tranylcypromine. |
| popPK | Saletu_1982 | irrelevant | 0 | 0 | The paper is a pharmaco-EEG study focusing on pharmacodynamic profiles and does not report quantitative pharmacokinetic parameters for tranylcypromine. |
| PGx | Salminen_2011 | not_relevant | 0 | 0 | The paper describes an in vitro method for assessing CYP2C19 inactivation kinetics and characterizes tranylcypromine as a competitive inhibitor, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Salsali_2004 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (Ki values) of tranylcypromine on CYP enzymes, not the effect of a gene variant on the PK/PD of tranylcypromine itself. |
| popPK | Schiwy_1989 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for brofaromine where tranylcypromine is used only as a comparator, and no pharmacokinetic parameters are reported. |
| PD | Schiwy_1989 | not_relevant | 3 | 2 | The paper reports a dose-response relationship for brofaromine, but tranylcypromine is only used as a fixed-dose comparator without any exposure-response or dose-response analysis or numeric PD parameters provided for it. |
| PGx | Sellers_2000 | not_relevant | 2 | 0 | The paper mentions tranylcypromine only as an example of a CYP2A6 inhibitor used to mimic gene defects, but does not report a pharmacogenomic effect of a gene variant on the PK or PD parameters of tranylcypromine itself. |
| PGx | Sha_2017 | not_relevant | 0 | 0 | The paper uses tranylcypromine as a chemical inducer to generate cancer stem-like cells in vitro and does not investigate pharmacogenomic effects on its PK or PD parameters. |
| PD | Sheikh_2025 | not_relevant | 2 | 1 | The paper is a review of synthetic strategies and structure-activity relationships, reporting static IC50 values rather than a dynamic exposure-response or dose-response model with derivable PD parameters like Emax or EC50 curves. |
| popPK | Slamon_2000 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity/antioxidant defense experiment, not a pharmacokinetic study, and reports no disposition parameters for tranylcypromine. |
| popPK | Smith_2016 | irrelevant | 0 | 0 | The study investigates the behavioral effects of tranylcypromine as an MAO inhibitor on nicotine self-administration and does not report any pharmacokinetic parameters for tranylcypromine. |
| PD | Sun_2017 | not_relevant | 0 | 0 | The paper reports in vitro IC50 for a novel tranylcypromine analog (compound 4q) but does not report pharmacodynamic or exposure-response data for tranylcypromine itself. |
| PGx | Tabata_2022 | not_relevant | 0 | 0 | The paper investigates the metabolism of geranylgeranoic acid by CYP3A4 in MAOB-knockout cells, using tranylcypromine only as a tool to inhibit MAOB, and does not report pharmacogenomic effects on the PK or PD of tranylcypromine itself. |
| popPK | Teresa_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on tranylcypromine analogues as LSD1 inhibitors and does not report any pharmacokinetic parameters for tranylcypromine. |
| PGx | Teyssier_1999 | not_relevant | 0 | 0 | The paper investigates the metabolism of diallyl disulfide (garlic compound) and uses tranylcypromine only as a chemical inhibitor to identify CYP2E1, rather than studying the pharmacokinetics or pharmacodynamics of tranylcypromine itself. |
| popPK | Truong_2025 | irrelevant | 0 | 0 | The paper is a review of caffeine interactions with antidepressants, and tranylcypromine is mentioned only as a comparator MAOI regarding hypertension risk, with no quantitative PK parameters reported for it. |
| popPK | Turchaninova_2026 | irrelevant | 0 | 0 | The paper is a study on fibroblast-to-cardiomyocyte transdifferentiation where tranylcypromine is used as a reagent, not as the subject of a pharmacokinetic analysis. |
| PD | Turchaninova_2026 | not_relevant | 0 | 0 | The paper focuses on fibroblast-to-cardiomyocyte transdifferentiation using a cocktail of small molecules (CHIR99021, BMP4, etc.) and does not involve tranylcypromine or report any pharmacodynamic exposure-response relationships for it. |
| PD | Ueng_2011 | not_relevant | 0 | 0 | The paper focuses on the mechanism-based inhibition of CYP2A6 by chalepensin, not on the pharmacodynamics or exposure-response relationship of tranylcypromine. |
| PGx | Ueng_2011 | not_relevant | 0 | 0 | The paper investigates the inhibition of CYP2A6 by chalepensin and mentions tranylcypromine only as a reference inhibitor, without reporting any pharmacokinetic or pharmacodynamic parameters of tranylcypromine itself. |
| popPK | Ulrich_2017 | irrelevant | 2 | 1 | The paper is a review that mentions a half-life of 2h but lacks other quantitative disposition parameters (CL, V, Q, ka) or compartmental models required for population PK extraction. |
| popPK | Ulrich_2025 | irrelevant | 1 | 0 | The paper is a review of clinical practice and theory without original quantitative pharmacokinetic parameter values. |
| PD | Volz_1994 | not_relevant | 2 | 1 | The paper is a clinical trial comparing efficacy and safety, explicitly stating that a clear dose-response relationship could not be shown, and it does not report PK data or numeric PD parameters. |
| PD | Weaver_2003 | not_relevant | 0 | 0 | The paper describes in vitro CYP450 inhibition assays using recombinant proteins and does not report any pharmacodynamic or exposure-response data for tranylcypromine. |
| PGx | Weaver_2003 | not_relevant | 0 | 0 | The paper describes a method for P450 inhibition profiling and lists tranylcypromine only as a standard inhibitor to validate the assay, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Weber-Grandke_1993 | relevant | 9 | 4 | The study reports quantitative PK parameters (AUC, CLR) for tranylcypromine enantiomers, but specific values for clearance (CL) and volume (V) are not explicitly listed in the provided text, only AUC and qualitative CLR differences. |
| popPK | Weinstock_2002 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of blood pressure response to tyramine, not a pharmacokinetic study, and tranylcypromine is used only as a comparator agent. |
| PGx | Yang_2005 | not_relevant | 0 | 0 | The paper studies the metabolism of MN9202, not tranylcypromine, and does not report pharmacogenomic effects on tranylcypromine PK/PD. |
| popPK | Yin_2018 | irrelevant | 0 | 0 | The paper focuses on the interaction between noradrenaline and vasopressin in vasoconstriction and does not involve tranylcypromine or report its pharmacokinetic parameters. |
| PD | Yin_2018 | not_relevant | 0 | 0 | The paper analyzes the interaction between noradrenaline and vasopressin, not tranylcypromine. |
| PGx | Yu_2003 | not_relevant | 0 | 0 | The paper uses tranylcypromine as a standard inhibitor for method validation and does not report pharmacogenomic effects on its PK/PD parameters. |
| popPK | Zee_2021 | irrelevant | 0 | 0 | The paper focuses on epigenetic and metabolic treatments for acute myeloid leukemia and does not involve tranylcypromine or pharmacokinetic parameters. |
| PD | Zee_2021 | not_relevant | 0 | 0 | The paper focuses on epigenetic and metabolic targets in AML and does not mention tranylcypromine or report any pharmacodynamic parameters. |
| PGx | Zhang_2001 | not_relevant | 0 | 0 | The paper evaluates tranylcypromine as a CYP2A6 inhibitor in vitro and does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| PGx | Zhang_2021 | not_relevant | 0 | 0 | The paper investigates the metabolism of pirfenidone, not tranylcypromine, and does not report pharmacogenomic effects on tranylcypromine PK/PD. |
| PGx | Zhao_2007 | not_relevant | 0 | 0 | The paper studies the metabolism of vinflunine, not tranylcypromine, and uses tranylcypromine only as a CYP2D6 inhibitor probe. |
| popPK | Zhao_2016 | irrelevant | 0 | 0 | The paper is a computational study on drug-drug interaction extraction using neural networks and contains no pharmacokinetic data for tranylcypromine. |
| PD | Zhao_2016 | not_relevant | 0 | 0 | The paper describes a machine learning method for extracting drug-drug interactions from text and does not report any pharmacodynamic or exposure-response data for tranylcypromine. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of Δ8-THC, using tranylcypromine only as a CYP2C19 probe inhibitor rather than as the subject drug for PK parameter estimation. |
| PGx | Zhao_2026 | not_relevant | 0 | 0 | The paper investigates the pharmacogenetics of Δ8-THC metabolism, using tranylcypromine only as a chemical inhibitor for CYP2C19, not as the drug of interest. |
| popPK | Zi_2010 | irrelevant | 0 | 0 | The study focuses on diclofenac metabolism and CYP2C9 polymorphisms, with tranylcypromine serving only as a CYP inhibitor in an in-vitro mechanistic assay, not as the subject drug for PK parameter estimation. |
| PGx | Zi_2010 | not_relevant | 0 | 0 | The paper focuses on diclofenac and CYP2C9 variants, not tranylcypromine. |
| PD | Zimmer_1990 | not_relevant | 3 | 2 | The paper provides qualitative comparisons and relative potency factors (e.g., 1/7th to 1/10th) for tranylcypromine but does not report specific numeric PD parameters (EC50, Emax) or a quantitative concentration-effect curve for the drug itself. |
| PGx | Zou_2002 | not_relevant | 0 | 0 | The paper uses tranylcypromine as a positive control inhibitor to test herbal components, rather than studying the pharmacokinetics or pharmacodynamics of tranylcypromine itself in relation to genetic variants. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
