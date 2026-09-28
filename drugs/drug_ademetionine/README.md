<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;ademetionine&quot;}]"></div>

# ademetionine

- **generic name:** ademetionine
- **ATC codes:** `A16AA02`
- **DrugBank:** [DB00118](https://go.drugbank.com/drugs/DB00118) · **PubChem:** [CID 34755](https://pubchem.ncbi.nlm.nih.gov/compound/34755)
- **molar mass:** 398.44 g/mol (C15H22N6O5S) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

**Description.** Physiologic methyl radical donor involved in enzymatic transmethylation reactions and present in all living organisms. It possesses anti-inflammatory activity and has been used in treatment of chronic liver disease. (From Merck, 11th ed)

**Indication.** S-Adenosylmethionine (SAMe) is used as a drug in Europe for the treatment of depression, liver disorders, fibromyalgia, and osteoarthritis. It has also been introduced into the United States market as a dietary supplement for the support of bone and joint health, as well as mood and emotional well being.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-26 21:48 | 45:53 | 0/0/0 | 0/1/0 | 0/0/0 | 292,758/13,687 | ollama / qwen3.8:27b-mtp-q8_0 | 31 | 3/28 | 25/6 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Rühs_2012](drugs/drug_ademetionine/pd_R_hs_2012_HCY.md) | Rühs H et al., Population PK/PD model of homocysteine…, PloS one (2012) | [10.1371/journal.pone.0046015](https://doi.org/10.1371/journal.pone.0046015) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ademetionine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…S-Adenosylmethionine is absorbed from the small intestine following oral intake. As absorp…”</sub> | prose |
| absorption | stomach | <sub>“…orption is affected by food, it is best to take on an empty stomach. Bioavailability is lo…”</sub> | prose |
| metabolism | brain | `COMT` cofactor | DrugBank actor |
| metabolism | kidney | `COMT` cofactor | DrugBank actor |
| metabolism | liver | `COMT` cofactor, `CYP2E1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: AMD1 (cofactor), AS3MT (unknown), CBS (activator), CMTR1 (unknown), GNMT (cofactor), MAT1A (cofactor), MAT2A (cofactor), SRM (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 441 matched, 170 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_18 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Giulidori_1984.pdf` | Giulidori P et al., Pharmacokinetics of S-adenosyl-L-methio…, European journal of clinica… (1984) | popPK | 10 | not captured | [6489422](https://pubmed.ncbi.nlm.nih.gov/6489422) | The paper reports quantitative pharmacokinetic parameters (Vd, t1/2, CL) for S-adenosyl-L-methionine (ademetionine) in healthy volunteers with all numeric values explicitly present in the text. |
| `Bhutkar_2025.pdf` | Bhutkar M et al., Structure-based identification of herba…, FEBS letters (2025) | pd | 4 | [10.1002/1873-3468.70054](https://doi.org/10.1002/1873-3468.70054) | [40353321](https://www.ncbi.nlm.nih.gov/pubmed/40353321) | metadata signals extractable PD data (IC50) |
| `Buker_2020.pdf` | Buker SM et al., A Mass Spectrometric Assay of METTL3/ME…, SLAS discovery : advancing… (2020) | pd | 4 | [10.1177/2472555219878408](https://doi.org/10.1177/2472555219878408) | [31585521](https://www.ncbi.nlm.nih.gov/pubmed/31585521) | metadata signals extractable PD data (IC50) |
| `Choi_2015.pdf` | Choi HJ et al., Evaluation of anti-coccidial effects of…, Archives of pharmacal resea… (2015) | pd | 4 | [10.1007/s12272-014-0400-y](https://doi.org/10.1007/s12272-014-0400-y) | [24824336](https://www.ncbi.nlm.nih.gov/pubmed/24824336) | metadata signals extractable PD data (EC50) |
| `Hernandez_2019.pdf` | Hernandez J et al., Optimization of a fragment linking hit…, European journal of medicin… (2019) | pd | 4 | [10.1016/j.ejmech.2018.09.056](https://doi.org/10.1016/j.ejmech.2018.09.056) | [30368131](https://www.ncbi.nlm.nih.gov/pubmed/30368131) | metadata signals extractable PD data (IC50) |
| `Kenyon_1996.pdf` | Kenyon SH et al., Stimulation in vitro of vitamin B12-dep…, The Biochemical journal (1996) | pd | 4 | [10.1042/bj3160661](https://doi.org/10.1042/bj3160661) | [8687414](https://www.ncbi.nlm.nih.gov/pubmed/8687414) | metadata signals extractable PD data (EC50) |
| `Nishibori_1991.pdf` | Nishibori M et al., 9-Amino-1,2,3,4-tetrahydroacridine is a…, Japanese journal of pharmac… (1991) | pd | 4 | [10.1254/jjp.55.539](https://doi.org/10.1254/jjp.55.539) | [1886293](https://www.ncbi.nlm.nih.gov/pubmed/1886293) | metadata signals extractable PD data (IC50) |
| `Ogawa_1997.pdf` | Ogawa H et al., Recombinant expression of rat glycine N…, The Biochemical journal (1997) | pd | 4 | [10.1042/bj3270407](https://doi.org/10.1042/bj3270407) | [9359408](https://www.ncbi.nlm.nih.gov/pubmed/9359408) | metadata signals extractable PD data (sigmoid) |
| `Tong_2015.pdf` | Tong S et al., Effect of ademetionine on cytochrome P4…, International journal of cl… (2015) | pgx | 7 | not captured | [26309647](https://www.ncbi.nlm.nih.gov/pubmed/26309647) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Aksoy_1993.pdf` | Aksoy S et al., Catechol O-methyltransferase pharmacoge…, Pharmacogenetics (1993) | pgx | 5 | [10.1097/00008571-199304000-00008](https://doi.org/10.1097/00008571-199304000-00008) | [8518836](https://www.ncbi.nlm.nih.gov/pubmed/8518836) | metadata signals extractable PGX data (COMT) |
| `Breen_2005.pdf` | Breen DP et al., Pharmacogenetic association with advers…, Liver transplantation : off… (2005) | pgx | 5 | [10.1002/lt.20377](https://doi.org/10.1002/lt.20377) | [15973722](https://www.ncbi.nlm.nih.gov/pubmed/15973722) | metadata signals extractable PGX data (TPMT) |
| `Houlder_2017.pdf` | Houlder EL et al., Expression of the genes facilitating me…, Clinical and experimental r… (2017) | pgx | 5 | not captured | [28598776](https://www.ncbi.nlm.nih.gov/pubmed/28598776) | metadata signals extractable PGX data (SLC19A1) |
| `Joshi_2026.pdf` | Joshi K et al., Structural and Functional Disruption of…, ACS omega (2026) | pgx | 5 | [10.1021/acsomega.5c08089](https://doi.org/10.1021/acsomega.5c08089) | [42396091](https://www.ncbi.nlm.nih.gov/pubmed/42396091) | metadata signals extractable PGX data (TPMT) |
| `Larif_2013.pdf` | Larif S et al., Insight into TPMT(∗)23 mutation mis-fol…, Journal of biomolecular str… (2013) | pgx | 5 | [10.1080/07391102.2012.721495](https://doi.org/10.1080/07391102.2012.721495) | [23025308](https://www.ncbi.nlm.nih.gov/pubmed/23025308) | metadata signals extractable PGX data (TPMT) |
| `Li_2024.pdf` | Li L et al., Determination of Thiopurine S-Methyltra…, Methods in molecular biolog… (2024) | pgx | 5 | [10.1007/978-1-0716-3541-4_43](https://doi.org/10.1007/978-1-0716-3541-4_43) | [38036847](https://www.ncbi.nlm.nih.gov/pubmed/38036847) | metadata signals extractable PGX data (TPMT) |
| `Ma_2018.pdf` | Ma J et al., Analytical and clinical validation of a…, Clinical biochemistry (2018) | pgx | 5 | [10.1016/j.clinbiochem.2018.02.002](https://doi.org/10.1016/j.clinbiochem.2018.02.002) | [29425801](https://www.ncbi.nlm.nih.gov/pubmed/29425801) | metadata signals extractable PGX data (TPMT) |
| `Mu_2024.pdf` | Mu H et al., Detailed resume of S-methyltransferases…, Biochemical pharmacology (2024) | pgx | 5 | [10.1016/j.bcp.2024.116361](https://doi.org/10.1016/j.bcp.2024.116361) | [38876259](https://www.ncbi.nlm.nih.gov/pubmed/38876259) | metadata signals extractable PGX data (TPMT) |
| `Van_1992.pdf` | Van Loon JA et al., Human kidney thiopurine methyltransfera…, Biochemical pharmacology (1992) | pgx | 5 | [10.1016/0006-2952(92)90416-g](https://doi.org/10.1016/0006-2952(92)90416-g) | [1510725](https://www.ncbi.nlm.nih.gov/pubmed/1510725) | metadata signals extractable PGX data (TPMT) |

<sub>queue written 2026-09-26T21:32:34.015147+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abato_2022 | not_relevant | 0 | 0 | The paper investigates the impact of MTHFR genotype on ischemic stroke injury and cellular markers (MAT2A, HIF-1α, Nrf2, SOD2), but does not report pharmacokinetic or pharmacodynamic parameters of ademetionine. |
| popPK | Abirami_2023 | irrelevant | 0 | 0 | The paper is a review on chemical scaffolds for leishmaniasis and does not contain pharmacokinetic data for ademetionine. |
| PD | Abirami_2023 | not_relevant | 0 | 0 | The paper is a review of heterocyclic scaffolds for Leishmaniasis and does not mention ademetionine or report any pharmacodynamic data for it. |
| PGx | Aksoy_1993 | not_relevant | 0 | 0 | The paper investigates the molecular properties of the COMT enzyme in relation to genetic polymorphisms, but does not report pharmacokinetic or pharmacodynamic parameters for the drug ademetionine. |
| popPK | Al-Hamashi_2021 | irrelevant | 0 | 0 | The paper describes the discovery of PRMT inhibitors and does not involve ademetionine or report any pharmacokinetic parameters. |
| PD | Al-Hamashi_2021 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for a PRMT inhibitor (AH237), not pharmacodynamic or exposure-response data for ademetionine. |
| popPK | Allali-Hassani_2019 | irrelevant | 0 | 0 | The paper describes the discovery of a chemical probe for PRDM9 and contains no pharmacokinetic data for ademetionine. |
| PD | Allali-Hassani_2019 | not_relevant | 0 | 0 | The paper reports pharmacodynamics for MRK-740 (a PRDM9 inhibitor), not ademetionine. |
| popPK | Alum_2026 | irrelevant | 0 | 0 | The study focuses on the neuroprotective effects of Jimson weed extract against methotrexate-induced toxicity and does not involve ademetionine or report any pharmacokinetic parameters. |
| PD | Alum_2026 | not_relevant | 0 | 0 | The paper studies Jimson weed extract, not ademetionine, and reports no exposure-response or dose-response PD parameters for the target drug. |
| popPK | Bakker_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of biperiden, not ademetionine. |
| popPK | Balaña-Fouce_1986 | irrelevant | 0 | 0 | The paper studies the enzyme S-adenosylmethionine decarboxylase in rabbit liver and does not report pharmacokinetic parameters for ademetionine. |
| PD | Balaña-Fouce_1986 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics and inhibition of S-adenosylmethionine decarboxylase by hydrazone compounds, not the pharmacodynamics of ademetionine in a biological system. |
| popPK | Bergeron_1994 | irrelevant | 0 | 0 | The paper is a structure-activity study of polyamine analogues and does not report pharmacokinetic parameters for ademetionine. |
| PD | Bergeron_1994 | not_relevant | 0 | 0 | The paper is a structure-activity relationship (SAR) study of polyamine analogues and does not report pharmacodynamic or exposure-response data for ademetionine. |
| popPK | Bhutkar_2025 | irrelevant | 0 | 0 | no_text gate: only 149 chars of text extracted (&lt; 400) |
| PD | Bhutkar_2025 | not_relevant | 0 | 0 | The paper focuses on structure-based identification of inhibitors for a viral methyltransferase and does not report pharmacodynamic or exposure-response data for ademetionine. |
| popPK | Blusztajn_1985 | irrelevant | 0 | 0 | The paper studies enzymatic kinetics of phosphatidylethanolamine N-methyltransferase in rat brain, not the pharmacokinetics of ademetionine. |
| PD | Blusztajn_1985 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Michaelis-Menten/Hill parameters) for PeMT in rat brain homogenates, not a pharmacodynamic exposure-response relationship for the drug ademetionine in a biological system. |
| popPK | Bobiļeva_2021 | irrelevant | 0 | 0 | The paper focuses on the design of SARS-CoV-2 methyltransferase inhibitors and reports enzymatic IC50 values, not pharmacokinetic parameters for ademetionine. |
| PD | Bobiļeva_2021 | not_relevant | 0 | 0 | The paper reports in vitro enzymatic IC50 values for SARS-CoV-2 methyltransferase inhibitors, not pharmacodynamic or exposure-response data for ademetionine. |
| popPK | Bobrovs_2021 | irrelevant | 0 | 0 | The paper focuses on the discovery of SARS-CoV-2 methyltransferase inhibitors and does not involve ademetionine or pharmacokinetic studies. |
| PD | Bobrovs_2021 | not_relevant | 0 | 0 | The paper reports in vitro enzymatic IC50 values for SARS-CoV-2 methyltransferase inhibitors, not pharmacodynamic or exposure-response data for ademetionine. |
| popPK | Borcherding_1988 | irrelevant | 0 | 0 | The paper focuses on the synthesis and enzymatic inhibition of neplanocin A analogues, not the pharmacokinetics of ademetionine. |
| PD | Borcherding_1988 | not_relevant | 0 | 0 | The paper discusses neplanocin A analogues and their inhibition of AdoHcy hydrolase, not ademetionine, and reports in vitro IC50 values for antiviral activity rather than a pharmacodynamic exposure-response relationship for the target drug. |
| PGx | Breen_2005 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics of azathioprine, not ademetionine. |
| popPK | Brun_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of CGP 40 215, not ademetionine. |
| popPK | Buckner_2002 | irrelevant | 0 | 0 | The paper is a mechanistic study on Trypanosoma brucei methyltransferase and does not involve ademetionine pharmacokinetics. |
| PD | Buckner_2002 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km/Vmax) and cytotoxicity EC50 values for a parasite enzyme and its substrates, not a pharmacodynamic exposure-response relationship for the drug ademetionine. |
| popPK | Buker_2020 | irrelevant | 0 | 0 | The paper describes a mass spectrometric assay for RNA methyltransferase activity and does not involve the drug ademetionine or pharmacokinetic parameters. |
| PD | Buker_2020 | not_relevant | 0 | 0 | The paper describes a mass spectrometry assay for METTL3/METTL14 activity and reports IC50 values for enzyme inhibitors (SAH, SFG), but does not involve the drug ademetionine or any pharmacodynamic/exposure-response analysis for it. |
| popPK | Bukovska_1994 | irrelevant | 0 | 0 | The paper describes the purification and biochemical characterization of the enzyme cystathionine beta-synthase in E. coli, not the pharmacokinetics of ademetionine. |
| PD | Bukovska_1994 | not_relevant | 0 | 0 | The paper describes the purification and biochemical characterization of the enzyme cystathionine beta-synthase, not the pharmacodynamics of the drug ademetionine. |
| popPK | Cacciatore_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on MAT2A in prostate cancer and does not report pharmacokinetic parameters for ademetionine. |
| PD | Cacciatore_2024 | not_relevant | 0 | 0 | The paper investigates MAT2A inhibitors (PF-9366, AG-270) in prostate cancer models and does not report any pharmacodynamic or exposure-response data for ademetionine. |
| PGx | Cannon_2002 | not_relevant | 0 | 0 | The paper describes a stereospecific assay for quantifying S-adenosylmethionine (AdoMet) and does not report pharmacogenomic effects on the PK or PD of ademetionine. |
| PGx | Catcott_2017 | not_relevant | 0 | 0 | The paper describes a mass spectrometry method for identifying enzyme-substrate pairs and does not report pharmacogenomic effects on the PK or PD of ademetionine. |
| popPK | Chen_2014 | irrelevant | 0 | 0 | The paper focuses on the identification of DNMT1 inhibitors and does not report pharmacokinetic parameters for ademetionine. |
| PD | Chen_2014 | not_relevant | 0 | 0 | The paper reports in vitro biochemical IC50 values for a novel DNMT1 inhibitor (DC_05), not pharmacodynamic or exposure-response data for ademetionine. |
| PGx | Chiba_1988 | not_relevant | 0 | 0 | The paper investigates SAM metabolism in HL-60 cells and does not report pharmacogenomic effects on the PK or PD of ademetionine. |
| PGx | Cho_2022 | not_relevant | 0 | 0 | The paper investigates the hepatoprotective effects of S-adenosylmethionine (SAMe) against acetaminophen toxicity in cell lines, not the pharmacokinetics or pharmacodynamics of ademetionine itself. |
| popPK | Choi_2015 | irrelevant | 0 | 0 | no_text gate: only 154 chars of text extracted (&lt; 400) |
| PD | Choi_2015 | not_relevant | 0 | 0 | The paper evaluates the anti-coccidial effects of a different compound (1-[4-(4-nitrophenoxy)phenyl]propane-1-one) in Toxoplasma gondii and does not mention ademetionine. |
| PGx | Coppedè_2010 | not_relevant | 0 | 0 | The paper reviews one-carbon metabolism and epigenetics in Alzheimer's disease, focusing on folate and SAM, but does not report pharmacogenomic effects on the PK or PD of ademetionine. |
| popPK | Dreute_2025 | irrelevant | 0 | 0 | The paper investigates the synergistic effects of metabolic inhibitors (GNE-140 and BMS-986205) on cancer cells and does not involve ademetionine or report any pharmacokinetic parameters. |
| PD | Dreute_2025 | not_relevant | 0 | 0 | The paper investigates the synergistic effects of (R)-GNE-140 and BMS-986205 on cancer cells and does not mention or analyze ademetionine. |
| PGx | Dumitrescu_2018 | not_relevant | 0 | 0 | The paper discusses alcohol-induced epigenetic changes and one-carbon metabolism, but does not report pharmacogenomic effects on the PK or PD of ademetionine. |
| PGx | Duthie_2002 | not_relevant | 0 | 0 | The paper discusses folate deficiency and DNA stability mechanisms, not the pharmacokinetics or pharmacodynamics of ademetionine. |
| popPK | Fillingame_1975 | irrelevant | 0 | 0 | The paper studies the mechanism of action of MGBG on polyamine synthesis in lymphocytes and does not involve ademetionine or pharmacokinetic parameters. |
| PD | Fillingame_1975 | not_relevant | 0 | 0 | The paper discusses the mechanism of action of MGBG (methylglyoxal bis(guanylhydrazone)) on polyamine synthesis and DNA replication, not ademetionine. |
| popPK | Fuller_1987 | irrelevant | 0 | 0 | The paper studies the mechanism of heat shock sensitization by alpha-difluoromethylornithine in cell lines and does not involve ademetionine or pharmacokinetic parameters. |
| PD | Fuller_1987 | not_relevant | 0 | 0 | The paper studies alpha-difluoromethylornithine (DFMO), not ademetionine. |
| popPK | Gajić_2026 | irrelevant | 0 | 0 | The study investigates the effects of diazepam on human umbilical arteries in an in-vitro model and does not involve ademetionine or pharmacokinetic parameters. |
| PD | Gajić_2026 | not_relevant | 0 | 0 | The paper investigates the effects of diazepam, not ademetionine, and does not report any exposure-response or dose-response relationship for ademetionine. |
| popPK | Gao_2025 | irrelevant | 0 | 0 | The paper investigates the mechanistic effects of S-adenosylmethionine (SAM) on uveal melanoma cells and does not report any pharmacokinetic parameters for ademetionine. |
| popPK | Girgin_2023 | irrelevant | 0 | 0 | The paper is an in silico and in vitro study on acetylcholinesterase inhibition for Alzheimer's disease, containing no pharmacokinetic parameters for ademetionine. |
| PD | Girgin_2023 | not_relevant | 4 | 4 | The paper reports IC50 values for ademetionine (and other compounds) in an in vitro cell viability assay, which constitutes a dose-response analysis, but it lacks a formal pharmacodynamic model (e.g., Emax, EC50 with slope) or PK/PD fit, and the IC50 is a single point estimate rather than a derived PD parameter from a fitted curve in the context of drug exposure. |
| popPK | Gounder_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of AG-270/S095033 (a MAT2A inhibitor), not ademetionine. |
| PGx | Guha_2025 | not_relevant | 0 | 0 | The paper studies the enzymatic kinetics of the MTR P1173L variant and its interaction with AdoMet as a cofactor, not the pharmacokinetics or pharmacodynamics of ademetionine as a therapeutic drug. |
| popPK | Guo_1995 | irrelevant | 0 | 0 | The paper studies an S-adenosylmethionine analogue (AdoMao) as an enzyme inhibitor in vitro, not the pharmacokinetics of ademetionine. |
| PD | Guo_1995 | not_relevant | 0 | 0 | The paper studies AdoMao, not ademetionine, and reports in vitro enzyme inhibition (Ki) and cytotoxicity (IC50) data, which does not constitute a pharmacodynamic exposure-response relationship for the specified drug. |
| popPK | Haughan_1993 | irrelevant | 0 | 0 | The paper studies the in vitro effects of sinefungin on Leishmania, not the pharmacokinetics of ademetionine. |
| PD | Haughan_1993 | not_relevant | 0 | 0 | The paper studies sinefungin, not ademetionine, and reports IC50 values for a different drug. |
| popPK | Heide_2025 | irrelevant | 0 | 0 | The paper investigates NNMT inhibition in cancer-associated fibroblasts and does not involve ademetionine or report any pharmacokinetic parameters for it. |
| PD | Heide_2025 | not_relevant | 0 | 0 | The paper investigates NNMT inhibition in cancer and does not mention ademetionine or report any pharmacodynamic or exposure-response data for it. |
| popPK | Hernandez_2019 | irrelevant | 0 | 0 | The paper describes the development of antiviral inhibitors for Dengue and Zika viruses and does not involve ademetionine pharmacokinetics. |
| PD | Hernandez_2019 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for antiviral compounds against viral enzymes, not pharmacodynamic or exposure-response relationships for the drug ademetionine. |
| popPK | Hing_2023 | irrelevant | 0 | 0 | The paper focuses on PRMT5 inhibitors and leukemia mechanisms, and does not study ademetionine pharmacokinetics. |
| PGx | Hogarth_2008 | not_relevant | 0 | 0 | The paper investigates the effect of thiopurine drugs on DNA methylation and SAM/SAH levels, not the pharmacokinetics or pharmacodynamics of ademetionine. |
| PGx | Houlder_2017 | not_relevant | 0 | 0 | The paper investigates gene expression related to methotrexate pharmacology in rheumatoid nodules and does not report pharmacogenomic effects on the PK or PD of ademetionine. |
| popPK | Hsueh_2020 | irrelevant | 0 | 0 | The study investigates genetic polymorphisms and developmental delay, not the pharmacokinetics of ademetionine. |
| PD | Hsueh_2020 | not_relevant | 0 | 0 | The paper investigates genetic polymorphisms and arsenic methylation capacity in relation to developmental delay; it does not report a pharmacodynamic or exposure-response relationship for the drug ademetionine. |
| popPK | Huber_1995 | irrelevant | 0 | 0 | The paper studies the antiproliferative effects of a spermine synthase inhibitor in breast cancer cells and does not involve ademetionine or pharmacokinetic parameters. |
| PD | Huber_1995 | not_relevant | 0 | 0 | The paper studies the antiproliferative effect of C-DAP (a spermine synthase inhibitor), not ademetionine. |
| PGx | Ifergan_2008 | not_relevant | 0 | 0 | The paper is a review of molecular mechanisms of folate deficiency and does not report pharmacogenomic effects on the PK or PD of ademetionine. |
| PGx | Ineichen_2014 | not_relevant | 0 | 0 | The study investigates genetic associations with multiple sclerosis onset and does not report pharmacokinetic or pharmacodynamic parameters for ademetionine. |
| popPK | Jeong_2026 | irrelevant | 0 | 0 | The paper focuses on NSD2 inhibitors for cancer treatment and does not study ademetionine or report any pharmacokinetic parameters for it. |
| PD | Jeong_2026 | not_relevant | 0 | 0 | The paper focuses on NSD2 inhibitors (IACS-17596, IACS-17817) and does not mention or study ademetionine. |
| PGx | Joshi_2026 | not_relevant | 0 | 0 | The paper investigates the effect of a TPMT variant on thiopurine metabolism and SAM binding, not on the pharmacokinetics or pharmacodynamics of ademetionine. |
| popPK | Joun_2025 | irrelevant | 0 | 0 | The paper focuses on the epigenetic mechanism of PRDM9 in glioblastoma and does not involve ademetionine or report any pharmacokinetic parameters for it. |
| PD | Joun_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of drug tolerance in glioblastoma (PRDM9) and does not report any pharmacodynamic or exposure-response analysis for ademetionine. |
| PGx | Kammel_2022 | not_relevant | 0 | 0 | The paper describes bacterial enzyme mechanisms (GrcA/PflB) and is unrelated to human pharmacogenomics or ademetionine. |
| popPK | Kenyon_1996 | irrelevant | 0 | 0 | no_text gate: only 79 chars of text extracted (&lt; 400) |
| PD | Kenyon_1996 | not_relevant | 0 | 0 | The paper investigates the in vitro stimulation of methionine synthase by polyamines, not the pharmacodynamics or exposure-response relationship of ademetionine. |
| PGx | Kramer_1983 | not_relevant | 0 | 0 | The paper studies resistance to methylglyoxal bis(guanylhydrazone) (MGBG), not ademetionine. |
| PGx | Kramer_1995 | not_relevant | 0 | 0 | The paper studies gene amplification in Chinese hamster ovary cells regarding S-adenosylmethionine decarboxylase, not the pharmacogenomics of ademetionine in humans. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The paper focuses on androgen receptor-driven polyamine synthesis in prostate cancer and does not report pharmacokinetic parameters for ademetionine. |
| PD | Kumar_2026 | not_relevant | 0 | 0 | The paper focuses on androgen receptor-driven polyamine synthesis in prostate cancer and does not report any pharmacodynamic or exposure-response data for ademetionine. |
| PGx | Kunjapur_2016 | not_relevant | 0 | 0 | The paper focuses on metabolic engineering of E. coli for vanillin production and does not involve human pharmacogenomics or the drug ademetionine. |
| popPK | Landersdorfer_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetic interaction between piperacillin and flucloxacillin, and ademetionine is not the subject drug. |
| PD | Landersdorfer_2008 | not_relevant | 0 | 0 | The paper studies a PK interaction between piperacillin and flucloxacillin, not ademetionine, and reports no PD parameters. |
| PGx | Larif_2013 | not_relevant | 0 | 0 | The paper focuses on the structural basis of a TPMT mutation affecting thiopurine metabolism, not ademetionine pharmacokinetics or pharmacodynamics. |
| PGx | Lee_1999 | not_relevant | 0 | 0 | The paper studies the metabolism of 2-mercaptopyrazine in rat liver, not the pharmacokinetics or pharmacodynamics of ademetionine in humans. |
| PGx | Lee_2018 | not_relevant | 0 | 0 | The paper investigates the effect of AHCY overexpression on endogenous metabolite levels (SAM, SAH, homocysteine) in a disease model, not the pharmacokinetics or pharmacodynamics of the drug ademetionine. |
| popPK | Li_2016 | irrelevant | 0 | 0 | The paper describes an immunoassay for S-adenosylhomocysteine and DNA methyltransferase activity, not a pharmacokinetic study of ademetionine. |
| PD | Li_2016 | not_relevant | 0 | 0 | The paper describes an assay for DNA methyltransferase activity and reports IC50 values for specific inhibitors (Lomeguatrib, 5-Azacytidine, etc.), but does not report any pharmacodynamic or exposure-response relationship for ademetionine. |
| PGx | Li_2017 | not_relevant | 0 | 0 | The paper investigates the role of MTHFR phosphorylation and variants in cell cycle regulation and histone methylation, not the pharmacokinetics or pharmacodynamics of the drug ademetionine. |
| PGx | Li_2021 | not_relevant | 0 | 0 | The paper is a review of SAM-dependent methyltransferases and their genetic polymorphisms, not a study on the pharmacokinetics or pharmacodynamics of ademetionine. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of trilaciclib and its drug-drug interactions, and does not mention or report parameters for ademetionine. |
| PD | Li_2022 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic drug-drug interactions and PK modeling for topotecan clearance, but does not report any pharmacodynamic (PD) or exposure-response relationship for ademetionine (which is not even the subject of the study). |
| PGx | Li_2024 | not_relevant | 0 | 0 | The paper describes a method for measuring TPMT activity using thiopurines, not ademetionine. |
| popPK | Li_2024_2 | irrelevant | 0 | 0 | The paper focuses on the development of NNMT inhibitors and does not report pharmacokinetic parameters for ademetionine. |
| PD | Li_2024_2 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for NNMT inhibitors, not pharmacodynamic or exposure-response data for ademetionine. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper focuses on rice grain weight genetics and S-adenosylmethionine metabolism in plants, not the pharmacogenomics of ademetionine in humans. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper focuses on dengue virus NS5 methyltransferase inhibitors and does not involve ademetionine or pharmacokinetic parameters. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper reports IC50/EC50 values for dengue virus NS5 methyltransferase inhibitors (e.g., SGC0946), not for ademetionine. |
| popPK | Libby_1995 | irrelevant | 0 | 0 | The paper studies cationic porphyrins as enzyme inhibitors and does not involve ademetionine or pharmacokinetic parameters. |
| PD | Libby_1995 | not_relevant | 0 | 0 | The paper studies cationic porphyrin derivatives as enzyme inhibitors, not ademetionine, and reports no exposure-response or dose-response relationship for the target drug. |
| PGx | Lin_2022 | not_relevant | 0 | 0 | The paper studies cadmium accumulation in maize plants and does not involve the drug ademetionine or human pharmacogenomics. |
| PGx | Linnebank_2010 | not_relevant | 0 | 0 | The paper studies S-adenosylmethionine (SAM) as a metabolic biomarker in Alzheimer's disease, not the pharmacokinetics or pharmacodynamics of the drug ademetionine. |
| PGx | Lipari_2024 | not_relevant | 0 | 0 | The paper describes a genetic deficiency (AHCY) and its metabolic consequences, but does not report pharmacokinetic or pharmacodynamic effects of the drug ademetionine. |
| PGx | Liteplo_1989 | not_relevant | 0 | 0 | The paper studies methionine auxotrophy in tumor cell lines and does not involve the drug ademetionine or pharmacogenomic effects on its PK/PD. |
| PGx | Liteplo_1989_2 | not_relevant | 0 | 0 | The paper studies methionine metabolism in melanoma cell lines and does not involve the drug ademetionine or pharmacogenomic effects on its PK/PD. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper investigates the role of m6A RNA modification in Parkinson's disease and mentions S-adenosylmethionine (SAMe) as a therapeutic agent, but it does not report any pharmacokinetic parameters for ademetionine. |
| PD | Liu_2026 | not_relevant | 0 | 0 | The paper investigates the role of m6A methylation and SAMe supplementation in a mouse model of Parkinson's disease, but does not report any pharmacodynamic or exposure-response analysis for ademetionine. |
| popPK | Lochman_2026 | irrelevant | 0 | 0 | The study investigates the biotransformation of obefazimod, not ademetionine. |
| PD | Lochman_2026 | not_relevant | 0 | 0 | The paper focuses on the biotransformation and metabolic pathways of obefazimod, not ademetionine, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Loesberg_1991 | irrelevant | 0 | 0 | The paper studies the mitochondrial effects of MIBG and methylGAG in cell lines and does not involve ademetionine or pharmacokinetic parameters. |
| PD | Loesberg_1991 | not_relevant | 0 | 0 | The paper studies m-iodobenzylguanidine and methylglyoxal bis (guanylhydrazone), not ademetionine. |
| popPK | Luka_2008 | irrelevant | 0 | 0 | The paper is a mechanistic enzymology study on glycine N-methyltransferase and does not report pharmacokinetic parameters for ademetionine. |
| PD | Luka_2008 | not_relevant | 0 | 0 | The paper describes the enzymatic kinetics of GNMT inhibition by folate, not the pharmacodynamics of the drug ademetionine. |
| popPK | Luo_2025 | irrelevant | 0 | 0 | The paper studies a SARS-CoV-2 NSP14 inhibitor (C10), not ademetionine, and reports PK parameters for C10 in mice. |
| PD | Luo_2025 | not_relevant | 0 | 0 | The paper studies the antiviral compound C10 (an NSP14 inhibitor), not ademetionine. |
| popPK | Ma_2016 | irrelevant | 0 | 0 | The study investigates folic acid supplementation and cognitive outcomes, not the pharmacokinetics of ademetionine. |
| PGx | Ma_2018 | not_relevant | 0 | 0 | The paper describes an analytical method for measuring TPMT activity using thiopurines, not the pharmacokinetics or pharmacodynamics of ademetionine. |
| popPK | Malarkey_1989 | irrelevant | 0 | 0 | The study focuses on the toxicity of anguidine and the protective effects of atropine and S-adenosylmethionine, not the pharmacokinetics of ademetionine. |
| PD | Malarkey_1989 | not_relevant | 0 | 0 | The paper studies the protective effects of atropine and S-adenosylmethionine (SAMe) against anguidine toxicity, not the pharmacodynamics of ademetionine itself, and reports no numeric PD parameters for ademetionine. |
| popPK | Manni_1995 | irrelevant | 0 | 0 | The paper studies the biochemical effects of a SAMDC inhibitor (CGP 48664) in cell culture and does not report pharmacokinetic parameters for ademetionine. |
| popPK | Mathur_2017 | irrelevant | 0 | 0 | The paper is a review of bacteriocin-antimicrobial synergy and does not contain any pharmacokinetic data or parameters for ademetionine. |
| PD | Mathur_2017 | not_relevant | 0 | 0 | The paper is a review of bacteriocin-antimicrobial synergy and does not contain any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for ademetionine. |
| popPK | Mezcord_2026 | irrelevant | 0 | 0 | The paper investigates the interaction between vitamin B12 and cefiderocol in bacteria, which is unrelated to the pharmacokinetics of ademetionine. |
| PD | Mezcord_2026 | not_relevant | 0 | 0 | The paper investigates the interaction between Vitamin B12 and the antibiotic cefiderocol in bacteria, not the pharmacodynamics of ademetionine. |
| PGx | Milek_2009 | not_relevant | 0 | 0 | The paper investigates the effect of S-adenosylmethionine (SAM) on 6-mercaptopurine pharmacodynamics, not the pharmacokinetics or pharmacodynamics of ademetionine itself. |
| PGx | Mizunuma_2004 | not_relevant | 0 | 0 | The paper studies S-adenosylmethionine (AdoMet) in yeast cell cycle regulation, not the pharmacokinetics or pharmacodynamics of the drug ademetionine in humans. |
| PGx | Mokmak_2009 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenetics of 6-mercaptopurine (6MP) and TPMT, not ademetionine. |
| popPK | Montgomery_2014 | irrelevant | 0 | 0 | The paper is a meta-analysis of cognitive performance in mice using S-adenosylmethionine (SAM), not a pharmacokinetic study of ademetionine, and contains no PK parameters. |
| PGx | Morris_2016 | not_relevant | 0 | 0 | The paper focuses on the biosynthetic gene discovery of benzylisoquinoline alkaloids in yeast and does not discuss ademetionine pharmacokinetics or pharmacodynamics. |
| PGx | Mu_2024 | not_relevant | 0 | 0 | The paper is a general review of S-methyltransferases and does not report specific pharmacogenomic effects on the PK or PD of ademetionine. |
| PGx | Muriello_2017 | not_relevant | 0 | 0 | The paper discusses a genetic mutation causing a metabolic disorder (hypermethioninemia) and does not report pharmacokinetic or pharmacodynamic effects of the drug ademetionine. |
| popPK | Myers_2026 | irrelevant | 0 | 0 | The paper studies BMX-001 (a manganese porphyrin) and does not involve ademetionine or report any pharmacokinetic parameters. |
| PD | Myers_2026 | not_relevant | 0 | 0 | The paper studies BMX-001, not ademetionine, and reports qualitative mechanistic findings without numeric PD parameters. |
| PGx | Nazki_2014 | not_relevant | 0 | 0 | The paper is a review of folate metabolism and genetics, with no mention of ademetionine or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Nishibori_1991 | irrelevant | 0 | 0 | The paper studies the enzyme inhibition of histamine N-methyltransferase by 9-amino-1,2,3,4-tetrahydroacridine and does not involve ademetionine or its pharmacokinetics. |
| PD | Nishibori_1991 | not_relevant | 0 | 0 | The paper studies 9-amino-1,2,3,4-tetrahydroacridine (THA), not ademetionine. |
| popPK | Nureye_2025 | irrelevant | 0 | 0 | The paper is a review of medicinal plants for hypertension and does not mention ademetionine or report any pharmacokinetic parameters for it. |
| PD | Nureye_2025 | not_relevant | 0 | 0 | The paper is a review of medicinal plants for hypertension in Ethiopia and does not contain any pharmacodynamic or exposure-response data for ademetionine. |
| popPK | Ogawa_1997 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| PD | Ogawa_1997 | not_relevant | 0 | 0 | The paper focuses on the recombinant expression of rat glycine N-methyltransferase and the structural effects of N-terminal acetylation on S-adenosylmethionine binding, not on the pharmacodynamics of ademetionine. |
| popPK | Orleni_2024 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of tazemetostat, not ademetionine. |
| PD | Orleni_2024 | not_relevant | 0 | 0 | The paper is a review of tazemetostat, not ademetionine, and contains no numeric PD parameters or exposure-response analysis. |
| PGx | Pan_2019 | not_relevant | 0 | 0 | The paper studies wheat genotypes and waterlogging stress, not human pharmacogenomics or ademetionine. |
| PGx | Papakostas_2012 | not_relevant | 0 | 0 | The paper is a review of folates and SAMe for depression and does not report pharmacogenomic effects on the PK/PD of ademetionine. |
| PGx | Papakostas_2014 | not_relevant | 0 | 0 | The paper studies L-methylfolate, not ademetionine, and reports clinical efficacy (HDRS-28) rather than PK/PD parameters. |
| popPK | Pardali_2020 | irrelevant | 0 | 0 | The paper is a review of antitrypanosomal drug design and does not report pharmacokinetic parameters for ademetionine. |
| PD | Pardali_2020 | not_relevant | 0 | 0 | The paper is a structure-activity relationship (SAR) study of guanylhydrazone analogues against trypanosomes and does not involve the drug ademetionine or report any pharmacodynamic exposure-response models. |
| PGx | Popp_2009 | not_relevant | 0 | 0 | The paper investigates the association between homocysteine metabolism markers and Alzheimer's disease pathology, not the pharmacokinetics or pharmacodynamics of ademetionine. |
| PGx | Poulin_1989 | not_relevant | 0 | 0 | The paper studies the effect of AOAP on polyamine metabolism in L1210 cells, not the pharmacokinetics or pharmacodynamics of ademetionine. |
| popPK | Pujari_2022 | irrelevant | 0 | 0 | The paper describes the enzymatic characterization of a mycobacterial methyltransferase (MenG) and is unrelated to the pharmacokinetics of ademetionine. |
| PD | Pujari_2022 | not_relevant | 0 | 0 | The paper reports enzyme kinetics (Km, IC50) for mycobacterial MenG inhibition by unrelated compounds (Ro 48-8071, DG70), not a pharmacodynamic or exposure-response relationship for the drug ademetionine. |
| PGx | Reid_2019 | not_relevant | 0 | 0 | The paper investigates the metabolism and CYP inhibition of verbascoside, not the pharmacogenomics of ademetionine. |
| PGx | Rensvold_2022 | not_relevant | 0 | 0 | The paper focuses on mitochondrial protein functions and disease mechanisms, not pharmacogenomics of ademetionine. |
| popPK | Robeyns_2024 | irrelevant | 0 | 0 | The study focuses on the metabolic effects of Torin1 in cell lines and does not involve ademetionine or pharmacokinetic parameter estimation. |
| PD | Robeyns_2024 | not_relevant | 0 | 0 | The paper studies Torin1, not ademetionine, and focuses on untargeted metabolomics rather than pharmacodynamic modeling. |
| PGx | Rome_2022 | not_relevant | 0 | 0 | The paper studies the metabolic effects of GNMT deficiency and dietary methionine restriction on SAM levels, not the pharmacokinetics or pharmacodynamics of the drug ademetionine. |
| popPK | Ruiz_1998 | irrelevant | 0 | 0 | The paper studies S-adenosylmethionine (SAM) as a substrate for an enzyme, not ademetionine as a drug, and contains no pharmacokinetic parameters. |
| PD | Ruiz_1998 | not_relevant | 0 | 0 | The paper describes enzyme kinetics (Km, Hill coefficient) and photolabeling of a bacterial methyltransferase, not pharmacodynamic exposure-response relationships for the drug ademetionine in a biological system. |
| popPK | Rühs_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methotrexate and homocysteine, not ademetionine. |
| popPK | Saletu_2002 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation using EEG and psychometry, reporting no quantitative pharmacokinetic parameters for ademetionine. |
| PD | Saletu_2002 | not_relevant | 2 | 1 | The study reports qualitative EEG and psychometric changes over time after fixed-dose infusions but does not provide plasma concentration data or numeric PD parameters (e.g., EC50, Emax) to establish an exposure-response relationship. |
| popPK | Sarris_2018 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for depression and does not report any pharmacokinetic parameters for ademetionine. |
| PGx | Scheuermann_2003 | not_relevant | 0 | 0 | The paper discusses the structure of thiopurine methyltransferase (TPMT) and its role in thiopurine metabolism, not ademetionine. |
| PGx | Scheuermann_2004 | not_relevant | 0 | 0 | The paper investigates the structural dynamics of thiopurine methyltransferase (TPMT) using a SAM analogue, not the pharmacokinetics or pharmacodynamics of ademetionine. |
| PGx | Seneff_2026 | not_relevant | 0 | 0 | The paper discusses melatonin metabolism and deuterium homeostasis, not the pharmacogenomics of ademetionine. |
| popPK | Sharma_2025 | irrelevant | 0 | 0 | The paper describes a genetically encoded fluorescent reporter for polyamines (spermidine/spermine) and does not involve the drug ademetionine or report any pharmacokinetic parameters. |
| PD | Sharma_2025 | not_relevant | 0 | 0 | The paper describes a genetically encoded fluorescent reporter for polyamines and does not investigate the pharmacodynamics of ademetionine. |
| popPK | Sharma_2026 | irrelevant | 0 | 0 | The paper investigates the role of polyamines in iron buffering and ferroptosis, and does not involve ademetionine or pharmacokinetic parameters. |
| PD | Sharma_2026 | not_relevant | 0 | 0 | The paper discusses polyamines and ferroptosis mechanisms, not ademetionine pharmacodynamics or exposure-response relationships. |
| PGx | Shi_2009 | not_relevant | 0 | 0 | The paper discusses the metabolism of neonicotinoid insecticides, not ademetionine. |
| popPK | Sikorski_2019 | irrelevant | 0 | 0 | The paper studies the toxicological effects of glyphosate on duckweed (Lemna minor) and does not involve ademetionine or pharmacokinetic parameters. |
| PD | Sikorski_2019 | not_relevant | 0 | 0 | The paper studies the toxicological effects of glyphosate on duckweed, not the pharmacodynamics of ademetionine. |
| popPK | Silva_2023 | irrelevant | 0 | 0 | The paper focuses on the structure-activity relationship of acridine derivatives for leishmaniasis and does not involve ademetionine or pharmacokinetic parameters. |
| PD | Silva_2023 | not_relevant | 0 | 0 | The paper reports in vitro SAR and IC50/EC50 values for acridine derivatives against Leishmania, not a pharmacodynamic or exposure-response relationship for ademetionine. |
| PGx | Singh_2021 | not_relevant | 0 | 0 | The paper studies arsenic toxicity in castor plants, not the pharmacogenomics of ademetionine in humans. |
| popPK | Stanek_1993 | irrelevant | 0 | 0 | The paper describes the synthesis and enzymatic inhibition of S-adenosylmethionine decarboxylase inhibitors, not the pharmacokinetics of ademetionine. |
| PD | Stanek_1993 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for a new compound (4-amidinoindan-1-one 2'-amidinohydrazone) inhibiting SAMDC, not pharmacodynamic or exposure-response data for ademetionine. |
| popPK | Sullivan_1983 | irrelevant | 0 | 0 | The paper describes in-vitro enzyme kinetics of methionine adenosyltransferase isozymes, not the pharmacokinetic disposition of ademetionine. |
| PD | Sullivan_1983 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Km, Hill coefficients) for methionine adenosyltransferase isozymes, not a pharmacodynamic exposure-response or dose-response relationship for the drug ademetionine in a biological system. |
| popPK | Sutto-Ortiz_2023 | irrelevant | 0 | 0 | The paper is a review of the biochemistry of the Respiratory Syncytial Virus (RSV) L protein and does not mention ademetionine or report any pharmacokinetic parameters. |
| PD | Sutto-Ortiz_2023 | not_relevant | 0 | 0 | The paper is a structural biology review of the RSV L protein and does not contain any pharmacodynamic or exposure-response data for ademetionine. |
| popPK | Tchantchou_2008 | irrelevant | 0 | 0 | The study investigates the mechanistic effect of S-adenosylmethionine (SAM) on glutathione S-transferase activity in vitro and in mice, but does not report any pharmacokinetic parameters for ademetionine. |
| popPK | Tekwani_1992 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of enzyme inhibitors for Trypanosoma brucei and does not involve ademetionine pharmacokinetics. |
| PD | Tekwani_1992 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (IC50, Ki) for S-adenosylmethionine analogues against Trypanosoma brucei, not pharmacodynamic or exposure-response data for the drug ademetionine. |
| PGx | Thapa_2023 | not_relevant | 0 | 0 | The paper studies the effect of an AHCY gene variant on aging and metabolite levels in C. elegans, not the pharmacokinetics or pharmacodynamics of the drug ademetionine. |
| PGx | Tong_2015 | not_relevant | 0 | 0 | The study investigates the effect of ademetionine on CYP450 activity in rats, not the effect of a gene variant on ademetionine's PK/PD. |
| PGx | Torres_2026 | not_relevant | 0 | 0 | The paper investigates the role of the SEL1L-HRD1 ERAD pathway in neuronal function and one-carbon metabolism in mice, and does not report on the pharmacokinetics or pharmacodynamics of ademetionine. |
| popPK | Ujihira_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of GCDCA-S, not ademetionine. |
| PD | Ujihira_2025 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetic (PK) modeling of an endogenous biomarker (GCDCA-S) and transporter inhibition, not on the pharmacodynamic (PD) or exposure-response relationship of ademetionine. |
| PGx | Urbančič_2019 | not_relevant | 0 | 0 | The paper investigates the methylation of selenocysteine by TPMT, not the pharmacokinetics or pharmacodynamics of ademetionine. |
| PGx | Van_1992 | not_relevant | 0 | 0 | The paper studies the photoaffinity labeling of TPMT with S-adenosyl-L-methionine (Ado-Met) as a ligand, not the pharmacokinetics or pharmacodynamics of ademetionine as a therapeutic drug. |
| PGx | Varela-Rey_2013 | not_relevant | 0 | 0 | The paper discusses alcohol-induced cancer and DNA methylation mechanisms involving SAMe, but does not report pharmacogenomic effects on the PK or PD of ademetionine as a therapeutic drug. |
| popPK | Walton_2024 | irrelevant | 0 | 0 | The paper investigates PRMT1 inhibition in renal cell carcinoma and does not mention ademetionine or report any pharmacokinetic parameters. |
| PGx | Wan_2004 | not_relevant | 0 | 0 | The paper describes a mass spectrometry method for detecting methylation products and does not report pharmacogenomic effects on the PK or PD of ademetionine. |
| popPK | Wang_2003 | irrelevant | 0 | 0 | The paper describes an in-vitro enzymatic assay for methionine adenosyltransferase activity and does not report pharmacokinetic parameters for ademetionine. |
| PD | Wang_2003 | not_relevant | 0 | 0 | The paper describes an analytical method for measuring enzyme activity (MAT) and reports enzyme kinetics (Km, Vmax, Hill coefficient), not a pharmacodynamic exposure-response or dose-response relationship for the drug ademetionine. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The paper is a review on anti-SARS-CoV-2 drug discovery and does not contain any pharmacokinetic data for ademetionine. |
| PD | Wang_2021 | not_relevant | 0 | 0 | The paper is a review of structural biology and computational methods for anti-SARS-CoV-2 drug discovery and does not report any pharmacodynamic or exposure-response data for ademetionine. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a structural and mechanistic study of the enzyme OkaE and its substrate okaramine, not a pharmacokinetic study of the drug ademetionine. |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper describes the structural and mechanistic basis of the enzyme OkaE (a natural product biosynthetic enzyme) and does not involve the drug ademetionine or any pharmacodynamic/exposure-response analysis. |
| PGx | Weile_2021 | not_relevant | 0 | 0 | The paper focuses on MTHFR enzyme function and variant classification, not the pharmacokinetics or pharmacodynamics of ademetionine. |
| popPK | Wolos_1993 | irrelevant | 0 | 0 | The paper studies the immunosuppressive effects of MDL 28,842 on T cells and does not report pharmacokinetic parameters for ademetionine. |
| popPK | Wright_1991 | irrelevant | 0 | 0 | The paper studies the antimalarial compound MDL 73811 in Plasmodium falciparum and does not involve ademetionine or pharmacokinetic parameters. |
| popPK | Yang_1988 | irrelevant | 0 | 0 | The paper is a mechanistic enzymology study on choline synthesis in mammary tissue and does not report pharmacokinetic parameters for ademetionine. |
| PD | Yang_1988 | not_relevant | 0 | 0 | The paper describes the enzymatic kinetics of phosphatidylethanolamine N-methyltransferase (PeMT) using S-adenosylmethionine (AdoMet) as a substrate, not the pharmacodynamic response to the drug ademetionine. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper focuses on a PBPK-PD model for oxytocin, not ademetionine. |
| PD | Yang_2026 | not_relevant | 0 | 0 | The paper focuses on oxytocin, not ademetionine. |
| popPK | Yao_2026 | irrelevant | 0 | 0 | The paper describes a METTL9 inhibitor and does not involve ademetionine or report any pharmacokinetic parameters. |
| PD | Yao_2026 | not_relevant | 0 | 0 | The paper reports an IC50 for a novel METTL9 inhibitor (METTL9i), not ademetionine, and does not contain any pharmacodynamic or exposure-response data for the target drug. |
| PGx | Yin_2017 | not_relevant | 0 | 0 | The paper describes the industrial biosynthesis of S-Adenosylmethionine (SAM) using engineered bacteria, not the pharmacogenomics of ademetionine in humans. |
| PGx | Yusuf_2017 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of fenofibrate, not ademetionine. |
| popPK | Zhao_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of S-adenosylmethionine (SAM) on gastric cancer cell lines, not a pharmacokinetic study of ademetionine. |
| popPK | Zhaxi_2026 | irrelevant | 0 | 0 | The paper is a multi-omics study on chicken gut microbiota and muscle fatty acid composition, unrelated to ademetionine pharmacokinetics. |
| popPK | Zhou_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of SAM486A (an S-adenosylmethionine decarboxylase inhibitor), not ademetionine. |
| PGx | Šmid_2024 | not_relevant | 0 | 0 | The paper investigates the endogenous role of TPMT and its regulation, not the pharmacokinetics or pharmacodynamics of ademetionine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
