<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05A&quot;,&quot;href&quot;:&quot;atc/A05A.md&quot;},{&quot;label&quot;:&quot;hymecromone&quot;}]"></div>

# hymecromone

- **generic name:** hymecromone
- **ATC codes:** `A05AX02`
- **DrugBank:** [DB07118](https://go.drugbank.com/drugs/DB07118)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 13:52 | 12:58 | 0/0/0 | 2/0/0 | 0/0/0 | 285,879/7,990 | ollama / qwen3.8:27b-mtp-q8_0 | 24 | 7/17 | 23/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tsitrina_2021](drugs/drug_hymecromone/pd_Tsitrina_2021_HA.md) | Tsitrina AA et al., Inhibition of hyaluronan secretion by n…, Glycobiology (2021) | [10.1093/glycob/cwab038](https://doi.org/10.1093/glycob/cwab038) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Weiz_2024](drugs/drug_hymecromone/pd_Weiz_2024_unknown.md) | Weiz G et al., Rutinosides-derived from Sarocladium st…, Microbial cell factories (2024) | [10.1186/s12934-024-02395-0](https://doi.org/10.1186/s12934-024-02395-0) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tsitrina_2021](drugs/drug_hymecromone/pd_Tsitrina_2021_hyaluronan_deposition.md) | Tsitrina AA et al., Inhibition of hyaluronan secretion by n…, Glycobiology (2021) | [10.1093/glycob/cwab038](https://doi.org/10.1093/glycob/cwab038) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tsitrina_2021](drugs/drug_hymecromone/pd_Tsitrina_2021_hyaluronan_secretion.md) | Tsitrina AA et al., Inhibition of hyaluronan secretion by n…, Glycobiology (2021) | [10.1093/glycob/cwab038](https://doi.org/10.1093/glycob/cwab038) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tsitrina_2021](drugs/drug_hymecromone/pd_Tsitrina_2021_hyaluronic_acid_concentration.md) | Tsitrina AA et al., Inhibition of hyaluronan secretion by n…, Glycobiology (2021) | [10.1093/glycob/cwab038](https://doi.org/10.1093/glycob/cwab038) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 220 matched, 109 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_25 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gao_2019.pdf` | Gao WF et al., Comparison of the inhibition potential…, Xenobiotica; the fate of fo… (2019) | pd | 4 | [10.1080/00498254.2018.1544383](https://doi.org/10.1080/00498254.2018.1544383) | [30484368](https://www.ncbi.nlm.nih.gov/pubmed/30484368) | metadata signals extractable PD data (IC50) |
| `Lewis_2007.pdf` | Lewis BC et al., Amino terminal domains of human UDP-glu…, Biochemical pharmacology (2007) | pd | 4 | [10.1016/j.bcp.2006.12.021](https://doi.org/10.1016/j.bcp.2006.12.021) | [17223084](https://www.ncbi.nlm.nih.gov/pubmed/17223084) | metadata signals extractable PD data (sigmoid) |
| `Nakamura_2021.pdf` | Nakamura S et al., Adenine-related compounds modulate UDP-…, Xenobiotica; the fate of fo… (2021) | pd | 4 | [10.1080/00498254.2021.2001075](https://doi.org/10.1080/00498254.2021.2001075) | [34727004](https://www.ncbi.nlm.nih.gov/pubmed/34727004) | metadata signals extractable PD data (IC50) |
| `Nishimura_2007.pdf` | Nishimura Y et al., Inhibitory effects of adenine nucleotid…, Biochimica et biophysica ac… (2007) | pd | 4 | [10.1016/j.bbagen.2007.07.011](https://doi.org/10.1016/j.bbagen.2007.07.011) | [17764847](https://www.ncbi.nlm.nih.gov/pubmed/17764847) | metadata signals extractable PD data (IC50) |
| `Xie_2017.pdf` | Xie H et al., In vitro inhibition of UGT1A3, UGT1A4 b…, Xenobiotica; the fate of fo… (2017) | pd | 4 | [10.1080/00498254.2016.1234087](https://doi.org/10.1080/00498254.2016.1234087) | [27600106](https://www.ncbi.nlm.nih.gov/pubmed/27600106) | metadata signals extractable PD data (IC50) |
| `Hamamoto-Hardman_2020.pdf` | Hamamoto-Hardman BD et al., Equine uridine diphospho-glucuronosyltr…, Veterinary anaesthesia and… (2020) | pgx | 8 | [10.1016/j.vaa.2020.07.033](https://doi.org/10.1016/j.vaa.2020.07.033) | [32933848](https://www.ncbi.nlm.nih.gov/pubmed/32933848) | metadata signals extractable PGX data (UGT2B7, PK/PD-context) |
| `Sasaki_2011.pdf` | Sasaki T et al., Systematic screening of human ABCC3 pol…, Drug metabolism and pharmac… (2011) | pgx | 8 | [10.2133/dmpk.dmpk-10-rg-103](https://doi.org/10.2133/dmpk.dmpk-10-rg-103) | [21512263](https://www.ncbi.nlm.nih.gov/pubmed/21512263) | metadata signals extractable PGX data (ABCC3, PK/PD-context) |
| `Udomuksorn_2007.pdf` | Udomuksorn W et al., Influence of mutations associated with…, Pharmacogenetics and genomi… (2007) | pgx | 8 | [10.1097/FPC.0b013e328256b1b6](https://doi.org/10.1097/FPC.0b013e328256b1b6) | [18004206](https://www.ncbi.nlm.nih.gov/pubmed/18004206) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Cao_2017.pdf` | Cao YF et al., Inhibitory effects of fifteen phthalate…, Chemosphere (2017) | pgx | 7 | [10.1016/j.chemosphere.2017.07.105](https://doi.org/10.1016/j.chemosphere.2017.07.105) | [28753904](https://www.ncbi.nlm.nih.gov/pubmed/28753904) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Enokizono_2007.pdf` | Enokizono J et al., Regional expression and activity of bre…, Drug metabolism and disposi… (2007) | pgx | 7 | [10.1124/dmd.106.011239](https://doi.org/10.1124/dmd.106.011239) | [17353350](https://www.ncbi.nlm.nih.gov/pubmed/17353350) | metadata signals extractable PGX data (Abcg2, PK/PD-context) |
| `Fang_2015.pdf` | Fang ZZ et al., Enantioselective inhibition of carprofe…, Chirality (2015) | pgx | 7 | [10.1002/chir.22412](https://doi.org/10.1002/chir.22412) | [25502512](https://www.ncbi.nlm.nih.gov/pubmed/25502512) | metadata signals extractable PGX data (UGT2B7, PK/PD-context) |
| `Jia_2015.pdf` | Jia L et al., Chirality Influence of Zaltoprofen Towa…, Chirality (2015) | pgx | 7 | [10.1002/chir.22436](https://doi.org/10.1002/chir.22436) | [25903196](https://www.ncbi.nlm.nih.gov/pubmed/25903196) | metadata signals extractable PGX data (UGT1A8, PK/PD-context) |
| `Knights_2010.pdf` | Knights KM et al., Spironolactone and canrenone inhibit UG…, Drug metabolism and disposi… (2010) | pgx | 7 | [10.1124/dmd.110.032870](https://doi.org/10.1124/dmd.110.032870) | [20304966](https://www.ncbi.nlm.nih.gov/pubmed/20304966) | metadata signals extractable PGX data (UGT2B7, PK/PD-context) |
| `Liu_2017.pdf` | Liu X et al., The inhibition of UDP-glucuronosyltrans…, Xenobiotica; the fate of fo… (2017) | pgx | 7 | [10.1080/00498254.2016.1198841](https://doi.org/10.1080/00498254.2016.1198841) | [27359323](https://www.ncbi.nlm.nih.gov/pubmed/27359323) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Liu_2019.pdf` | Liu YZ et al., Per- and polyfluoroalkyl substances dis…, Environmental pollution (Ba… (2019) | pgx | 7 | [10.1016/j.envpol.2019.113093](https://doi.org/10.1016/j.envpol.2019.113093) | [31472452](https://www.ncbi.nlm.nih.gov/pubmed/31472452) | metadata signals extractable PGX data (UGT1A3, PK/PD-context) |
| `Mizuno_2004.pdf` | Mizuno N et al., Impaired renal excretion of 6-hydroxy-5…, Drug metabolism and disposi… (2004) | pgx | 7 | not captured | [15319327](https://www.ncbi.nlm.nih.gov/pubmed/15319327) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |
| `Oda_2015.pdf` | Oda S et al., Targeted screen for human UDP-glucurono…, Drug metabolism and disposi… (2015) | pgx | 7 | [10.1124/dmd.114.062141](https://doi.org/10.1124/dmd.114.062141) | [25834030](https://www.ncbi.nlm.nih.gov/pubmed/25834030) | metadata signals extractable PGX data (UGT1A8, PK/PD-context) |
| `Pattanawongsa_2015.pdf` | Pattanawongsa A et al., Inhibition of Human UDP-Glucuronosyltra…, Drug metabolism and disposi… (2015) | pgx | 7 | [10.1124/dmd.115.065870](https://doi.org/10.1124/dmd.115.065870) | [26180128](https://www.ncbi.nlm.nih.gov/pubmed/26180128) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Rowland_2008.pdf` | Rowland A et al., The "albumin effect" and drug glucuroni…, Drug metabolism and disposi… (2008) | pgx | 7 | [10.1124/dmd.108.021105](https://doi.org/10.1124/dmd.108.021105) | [18362158](https://www.ncbi.nlm.nih.gov/pubmed/18362158) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Wang_2021.pdf` | Wang X et al., Inhibition of human UDP-glucuronosyltra…, Toxicology letters (2021) | pgx | 7 | [10.1016/j.toxlet.2020.12.001](https://doi.org/10.1016/j.toxlet.2020.12.001) | [33290829](https://www.ncbi.nlm.nih.gov/pubmed/33290829) | metadata signals extractable PGX data (UGT1A3, PK/PD-context) |
| `Wang_2022.pdf` | Wang Z et al., Cabozantinib Carries the Risk of Drug-D…, Current drug metabolism (2022) | pgx | 7 | [10.2174/1389200224666221028140652](https://doi.org/10.2174/1389200224666221028140652) | [36306450](https://www.ncbi.nlm.nih.gov/pubmed/36306450) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Zamek-Gliszczynski_2006.pdf` | Zamek-Gliszczynski MJ et al., The important role of Bcrp (Abcg2) in t…, Molecular pharmacology (2006) | pgx | 7 | [10.1124/mol.106.026955](https://doi.org/10.1124/mol.106.026955) | [16959944](https://www.ncbi.nlm.nih.gov/pubmed/16959944) | metadata signals extractable PGX data (Abcg2, PK/PD-context) |
| `Zhang_2016.pdf` | Zhang Q et al., Strong Specific Inhibition of UDP-glucu…, Phytotherapy research : PTR (2016) | pgx | 7 | [10.1002/ptr.5496](https://doi.org/10.1002/ptr.5496) | [26536846](https://www.ncbi.nlm.nih.gov/pubmed/26536846) | metadata signals extractable PGX data (UGT2B7, PK/PD-context) |
| `van_2014.pdf` | van Beusekom CD et al., Comparing the glucuronidation capacity…, Journal of veterinary pharm… (2014) | pgx | 7 | [10.1111/jvp.12067](https://doi.org/10.1111/jvp.12067) | [23888985](https://www.ncbi.nlm.nih.gov/pubmed/23888985) | metadata signals extractable PGX data (UGT1A6, PK/PD-context) |
| `Hu_2024.pdf` | Hu DG et al., Activation of Cryptic Donor Splice Site…, Drug metabolism and disposi… (2024) | pgx | 5 | [10.1124/dmd.123.001565](https://doi.org/10.1124/dmd.123.001565) | [38565302](https://www.ncbi.nlm.nih.gov/pubmed/38565302) | metadata signals extractable PGX data (UGT1A8) |

<sub>queue written 2026-09-18T13:47:29.127785+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Adachi_2005 | not_relevant | 0 | 0 | The paper studies the role of Bcrp1 in the efflux of glucuronide and sulfate conjugates of 4-methylumbelliferone and E3040, not hymecromone. |
| popPK | Albinhassan_2021 | irrelevant | 0 | 0 | The paper investigates the anticancer activity of Avicennia marina extracts and does not involve hymecromone or pharmacokinetic parameters. |
| PD | Albinhassan_2021 | not_relevant | 0 | 0 | The paper investigates plant extracts (Avicennia marina), not the drug hymecromone, and reports only IC50 values for cytotoxicity without any PK/PD modeling or exposure-response analysis for the specified compound. |
| popPK | Augsten_2023 | irrelevant | 0 | 0 | The study focuses on in-vitro cytotoxicity of coumarin-triazole hybrids, with hymecromone serving only as a reference compound and no quantitative PK parameters reported. |
| PGx | Bock_1993 | not_relevant | 0 | 0 | The paper investigates paracetamol glucuronidation, not hymecromone. |
| PGx | Cao_2017 | not_relevant | 0 | 0 | The paper investigates the inhibition of UGT enzymes by phthalate esters and does not mention hymecromone or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Carlson-Stevermer_2020 | irrelevant | 0 | 0 | The paper focuses on genome editing strategies for Pompe disease (GAA gene) and does not involve the drug hymecromone or its pharmacokinetics. |
| PD | Carlson-Stevermer_2020 | not_relevant | 0 | 0 | The paper focuses on CRISPR-Cas9 genome editing strategies and in silico modeling for Pompe disease, with no mention of hymecromone or any pharmacodynamic exposure-response relationship for that drug. |
| PGx | Chen_2018 | not_relevant | 0 | 0 | The paper investigates the inhibition of UGT enzymes by thyroid hormones (T3/T4) and does not mention hymecromone or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Collier_2002 | not_relevant | 0 | 0 | The paper investigates UGT expression in the placenta and does not mention hymecromone or any pharmacokinetic/pharmacodynamic parameters for this specific drug. |
| popPK | Cunha_2013 | irrelevant | 0 | 0 | The paper describes an in-vitro carboxylesterase assay for ionic liquids and does not involve hymecromone or pharmacokinetic parameters. |
| PD | Cunha_2013 | not_relevant | 0 | 0 | The paper describes an in vitro enzyme inhibition assay for ionic liquids and does not mention hymecromone or report any pharmacodynamic parameters for it. |
| popPK | Di_2017 | irrelevant | 0 | 0 | The paper focuses on enterolactone and antibody-directed enzyme prodrug therapy, not hymecromone. |
| PD | Di_2017 | not_relevant | 0 | 0 | The paper focuses on the development of an antibody-enzyme fusion (D7-hβG) for prodrug activation and does not report any pharmacodynamic or exposure-response relationship for hymecromone. |
| PGx | Enokizono_2007 | not_relevant | 0 | 0 | The paper investigates Bcrp and sulfotransferase expression in mouse intestine using 4-methylumbelliferone and minoxidil, but does not mention or study hymecromone. |
| PGx | Fang_2015 | not_relevant | 0 | 0 | The paper investigates the inhibition of UGT2B7 by carprofen, not the pharmacokinetics or pharmacodynamics of hymecromone. |
| PGx | Flynn_2018 | not_relevant | 0 | 0 | The paper studies Rauwolfia serpentina extract and its alkaloids, not hymecromone, and does not report pharmacogenomic effects. |
| popPK | Gao_2019 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| PD | Gao_2019 | not_relevant | 0 | 0 | The paper focuses on the inhibition of UDP-glucuronosyltransferase isoforms by parthenolide and micheliolide, not on the pharmacodynamics of hymecromone. |
| PGx | Gao_2019 | not_relevant | 0 | 0 | The paper studies the inhibition of UGT isoforms by parthenolide and micheliolide, not the pharmacogenomics of hymecromone. |
| popPK | García-Vilas_2013 | irrelevant | 0 | 0 | The paper studies 4-methylumbelliferone, not hymecromone, and focuses on in vitro/in vivo angiogenesis mechanisms rather than pharmacokinetic parameters. |
| PGx | Hamamoto-Hardman_2020 | not_relevant | 0 | 0 | The paper focuses on morphine metabolism in horses and does not mention hymecromone. |
| popPK | Hanioka_2006 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on UGT enzyme induction in HepG2 cells and does not report pharmacokinetic parameters for hymecromone. |
| PD | Hanioka_2006 | not_relevant | 0 | 0 | The paper studies the induction of UGT enzymes by beta-naphthoflavone and does not mention hymecromone or report any pharmacodynamic parameters for it. |
| popPK | Haron_2014 | irrelevant | 0 | 0 | The paper is an in-vitro study on UGT inhibition by mitragynine, ketamine, and buprenorphine, and does not mention hymecromone or report any pharmacokinetic parameters for it. |
| PD | Haron_2014 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of mitragynine and other compounds on UGT enzymes, not the pharmacodynamics of hymecromone. |
| PGx | Haron_2014 | not_relevant | 0 | 0 | The paper investigates the inhibition of UGT enzymes by mitragynine and other compounds, but does not mention hymecromone or report pharmacogenomic effects on its PK/PD parameters. |
| popPK | Hasibuan_2020 | irrelevant | 0 | 0 | The paper investigates the anticancer activity of Vernonia amygdalina extracts on breast cancer cells and does not involve hymecromone or pharmacokinetic parameters. |
| PD | Hasibuan_2020 | not_relevant | 0 | 0 | The paper studies the anticancer activity of plant extracts (Vernonia amygdalina) and does not mention or analyze the drug hymecromone. |
| PGx | Hu_2024 | not_relevant | 0 | 0 | The paper investigates UGT1A splice variants and their expression in cancer tissues but does not mention hymecromone or report any pharmacokinetic/pharmacodynamic parameters for this specific drug. |
| popPK | Ismail_2010 | irrelevant | 0 | 0 | The paper is an in-vitro study on UGT inhibition by herbal extracts and does not involve hymecromone or report any pharmacokinetic parameters. |
| PD | Ismail_2010 | not_relevant | 0 | 0 | The paper investigates the in vitro inhibitory effects of herbal extracts on UGT isoforms and does not mention or study the drug hymecromone. |
| PGx | Ismail_2010 | not_relevant | 0 | 0 | The paper investigates the inhibition of UGT isoforms by herbal extracts using 4-methylumbelliferone as a substrate, and does not involve hymecromone or pharmacogenomic variants. |
| popPK | Jeong_2024 | irrelevant | 0 | 0 | The paper is a mechanistic/chemical study on tyrosinase inhibition by dihydrocoumarins and does not involve hymecromone or pharmacokinetic parameters. |
| PD | Jeong_2024 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for novel dihydrocoumarins, not pharmacodynamic modeling or exposure-response relationships for the drug hymecromone. |
| PGx | Jia_2015 | not_relevant | 0 | 0 | The paper investigates the UGT inhibition potential of zaltoprofen, not the pharmacokinetics or pharmacodynamics of hymecromone. |
| PGx | Järvinen_2017 | not_relevant | 0 | 0 | The paper studies the transport of glucuronides by MRP/BCRP transporters but does not mention hymecromone or any pharmacogenomic effect on its PK/PD parameters. |
| popPK | Kandil_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis of hybrid ProTides using hymecromone (4MU) as a structural component, and it does not report any pharmacokinetic parameters for hymecromone. |
| PD | Kandil_2026 | not_relevant | 0 | 0 | The paper describes the synthesis and characterization of novel coumarin-stavudine hybrid ProTides and does not contain any pharmacodynamic or exposure-response data for hymecromone. |
| PGx | Knights_2010 | not_relevant | 0 | 0 | The paper investigates spironolactone and canrenone, not hymecromone, and focuses on drug-drug interactions rather than pharmacogenomics. |
| popPK | Lewis_2007 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| PD | Lewis_2007 | not_relevant | 0 | 0 | The paper focuses on the structural biology and substrate selectivity of UGT enzymes, not on the pharmacodynamics or exposure-response of hymecromone. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of XueBiJing compounds and antibiotics, and does not mention or report data for hymecromone. |
| PD | Li_2019 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic compatibility and drug-drug interactions (DDI) of XueBiJing and antibiotics, reporting no pharmacodynamic (PD) or exposure-response relationships for hymecromone. |
| PGx | Liu_2010 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving erlotinib and gefitinib, not hymecromone, and does not report pharmacogenomic effects. |
| PGx | Liu_2016 | not_relevant | 0 | 0 | The paper investigates the inhibition of UGT enzymes by herbal saponins and does not mention hymecromone or any pharmacogenomic effects. |
| popPK | Liu_2016_2 | irrelevant | 0 | 0 | The study investigates the UGT inhibition potential of hesperetin and naringenin, not the pharmacokinetics of hymecromone. |
| PD | Liu_2016_2 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of hesperetin and naringenin on UGT enzymes, not hymecromone. |
| PGx | Liu_2016_2 | not_relevant | 0 | 0 | The paper investigates the inhibition of UGT enzymes by hesperetin and naringenin, not the pharmacogenomics of hymecromone. |
| PGx | Liu_2017 | not_relevant | 0 | 0 | The paper investigates the inhibition of UGTs by vitamin A and does not mention hymecromone or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Liu_2019 | not_relevant | 0 | 0 | The paper investigates the inhibition of UGT enzymes by PFASs and does not mention hymecromone or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Lokeshwar_2010 | irrelevant | 0 | 0 | The paper studies 4-methylumbelliferone, not hymecromone, and focuses on antitumor mechanisms rather than pharmacokinetic parameters. |
| PD | Lokeshwar_2010 | not_relevant | 0 | 0 | The paper studies 4-methylumbelliferone, not hymecromone, and does not report PK/PD modeling or exposure-response relationships for the target drug. |
| PGx | Lokman_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of 4-methylumbelliferone (hymecromone) on ovarian cancer cells but does not report any pharmacogenomic effects (gene variant/genotype) on its PK or PD parameters. |
| PGx | Lu_2013 | not_relevant | 0 | 0 | The paper investigates the inhibition of UGT enzymes by isoliquiritigenin, not the pharmacogenomics of hymecromone. |
| popPK | Mano_2004 | irrelevant | 0 | 0 | The study investigates in-vitro glucuronidation of 4-methylumbelliferone and does not involve hymecromone or report any pharmacokinetic parameters. |
| PD | Mano_2004 | not_relevant | 0 | 0 | The paper investigates the effects of beta-estradiol and propofol on UGT enzymes, not hymecromone. |
| PGx | Mano_2004 | not_relevant | 0 | 0 | The paper investigates UGT isozyme inhibition by beta-estradiol and propofol using 4-methylumbelliferone as a substrate, and does not mention hymecromone or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Mano_2007 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on UGT1A1 modulation by propofol and does not involve hymecromone or report any pharmacokinetic parameters. |
| PD | Mano_2007 | not_relevant | 0 | 0 | The paper investigates the effect of propofol on UGT1A1 enzyme activity, not the pharmacodynamics of hymecromone. |
| PGx | Mano_2007 | not_relevant | 0 | 0 | The paper investigates the modulation of UGT1A1 by propofol and does not mention hymecromone or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Mizuno_2004 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of E3040S and 4MUS, not hymecromone. |
| PGx | Nair_2020 | not_relevant | 0 | 0 | The paper investigates UGT2B7 cofactor selectivity using morphine, 4-methylumbelliferone, and zidovudine, and does not mention hymecromone. |
| popPK | Nakamura_2021 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| PD | Nakamura_2021 | not_relevant | 0 | 0 | The paper focuses on the in vitro modulation of UGT activity by adenine-related compounds and does not mention hymecromone or report any pharmacodynamic exposure-response relationships. |
| popPK | Nishimura_2007 | irrelevant | 0 | 0 | no_text gate: only 168 chars of text extracted (&lt; 400) |
| PD | Nishimura_2007 | not_relevant | 0 | 0 | The paper focuses on the enzymatic inhibition of UDP-glucuronosyltransferase by adenine nucleotides and does not mention hymecromone or report any pharmacodynamic exposure-response relationships for it. |
| PGx | Oda_2015 | not_relevant | 0 | 0 | The paper investigates UGT inhibition by zafirlukast and does not mention hymecromone or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Pattanawongsa_2015 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| PD | Pattanawongsa_2015 | not_relevant | 0 | 0 | The paper focuses on the inhibition of UDP-glucuronosyltransferase enzymes by canagliflozin and dapagliflozin, and does not contain any data or analysis regarding hymecromone. |
| PGx | Pattanawongsa_2015 | not_relevant | 0 | 0 | The paper discusses canagliflozin and dapagliflozin, not hymecromone. |
| PGx | Qi_2015 | not_relevant | 0 | 0 | The paper investigates the inhibition of UGT enzymes by podophyllotoxin derivatives and does not mention hymecromone or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Rong_2024 | not_relevant | 0 | 0 | The paper studies the drug icaritin and its inhibition of UGT enzymes, not hymecromone, and does not report pharmacogenomic effects. |
| popPK | Rosser_2022 | irrelevant | 2 | 0 | The study is a pharmacodynamic trial measuring hyaluronan levels, not a pharmacokinetic study, and it does not report quantitative PK parameters (CL, V, ka) for hymecromone, only citing a literature half-life. |
| PGx | Rowland_2008 | not_relevant | 0 | 0 | The paper investigates the effect of albumin and fatty acids on UGT enzyme kinetics for substrates like propofol and 4-methylumbelliferone, but does not mention hymecromone or any pharmacogenomic variants. |
| PGx | Sabolovic_2000 | not_relevant | 0 | 0 | The paper investigates glucuronidation of NSAIDs and phenols in Caco-2 cells and does not mention hymecromone. |
| popPK | Salleh_2017 | irrelevant | 0 | 0 | The paper is an in-vitro study on the inhibition of glucuronidation by lignin and does not involve the drug hymecromone. |
| PD | Salleh_2017 | not_relevant | 0 | 0 | The paper investigates the in vitro inhibition of UGT enzymes by oil palm lignin and its compounds, not the pharmacodynamics of hymecromone. |
| popPK | Sancenon_2015 | irrelevant | 0 | 0 | The paper describes the development of an in vitro enzymatic assay for alkaline phosphatase and does not involve hymecromone or report any pharmacokinetic parameters. |
| PD | Sancenon_2015 | not_relevant | 0 | 0 | The paper describes the development of an enzymatic assay for alkaline phosphatase and reports in vitro IC50 values for sodium orthovanadate, but it does not contain any data, analysis, or mention of the drug hymecromone. |
| PGx | Sasaki_2011 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of 4-methylumbelliferone glucuronide (4-MUG), not hymecromone. |
| PGx | Shan_2014 | not_relevant | 0 | 0 | The paper studies UGT inhibition by herbal compounds (bavachalcone/corylin) and does not mention hymecromone or any pharmacogenomic effects. |
| popPK | Shiratani_2008 | irrelevant | 0 | 0 | The study focuses on UDP-glucuronosyltransferase activities in mice and rats using substrates like estradiol and morphine, and does not involve hymecromone or report its pharmacokinetic parameters. |
| PD | Shiratani_2008 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (UGT activity) for various substrates in mice and rats, not a pharmacodynamic or exposure-response relationship for the drug hymecromone. |
| PGx | Strassburg_2000 | not_relevant | 0 | 0 | The paper studies UGT polymorphisms in the small intestine but does not mention hymecromone or report specific PK/PD parameters for this drug. |
| popPK | Tian_2018 | irrelevant | 0 | 0 | The paper focuses on green tea catechins and raloxifene pharmacokinetics, with no mention of hymecromone. |
| PD | Tian_2018 | not_relevant | 0 | 0 | The paper focuses on green tea catechins as UGT inhibitors and their interaction with raloxifene; it does not contain any pharmacodynamic or exposure-response data for hymecromone. |
| popPK | Tsitrina_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on hyaluronan synthesis inhibition and does not report any pharmacokinetic parameters for hymecromone. |
| popPK | Uchaipichat_2025 | irrelevant | 0 | 0 | The paper is an in-vitro study on Kratom constituents inhibiting UGT enzymes and does not report pharmacokinetic parameters for hymecromone. |
| PD | Uchaipichat_2025 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of Kratom constituents (mitragynine and 7-hydroxymitragynine) on UGT enzymes, not hymecromone. |
| PGx | Uchaipichat_2025 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of Kratom constituents on UGT enzymes and does not mention hymecromone or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Udomuksorn_2007 | not_relevant | 0 | 0 | The paper investigates UGT1A1 mutations and their effect on bilirubin and other substrates, but does not mention or test hymecromone. |
| PGx | Uno_2018 | not_relevant | 0 | 0 | The paper characterizes UGT1A enzymes in cynomolgus macaques and does not mention hymecromone or report pharmacogenomic effects on its PK/PD parameters. |
| PGx | Uno_2020 | not_relevant | 0 | 0 | The paper characterizes UGT enzymes in common marmosets and does not mention hymecromone or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Wang_2011 | irrelevant | 0 | 0 | The study investigates the renal disposition of 4-methylumbelliferone and its glucuronide, not hymecromone. |
| PGx | Wang_2014 | not_relevant | 0 | 0 | The paper characterizes zebrafish UGT enzymes and their substrate specificity but does not mention hymecromone or report pharmacogenomic effects on its PK/PD parameters. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | The paper investigates the inhibition of UGT enzymes by bromophenols and does not mention hymecromone or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving belinostat and UGT enzymes, and does not mention hymecromone or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving cabozantinib and UGT enzymes, not the pharmacogenomics of hymecromone. |
| PGx | Wang_2026 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving fedratinib and UGT enzymes, not the pharmacogenomics of hymecromone. |
| popPK | Weiz_2024 | irrelevant | 0 | 0 | The paper describes the enzymatic synthesis and anti-tumoral activity of rutinoside derivatives, not the pharmacokinetics of hymecromone. |
| popPK | Xie_2017 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Xie_2017 | not_relevant | 0 | 0 | The paper focuses on in vitro inhibition of UGT enzymes by ursolic and oleanolic acid, not on the pharmacodynamics of hymecromone. |
| PGx | Xu_2014 | not_relevant | 0 | 0 | The paper studies the inhibition of UGT2B enzymes by bakuchiol and does not mention hymecromone or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and antifungal activity of 4-methylumbelliferone derivatives, not the pharmacokinetics of hymecromone. |
| PD | Xu_2022 | not_relevant | 0 | 0 | The paper reports in vitro antifungal activity (EC50) for novel 4-methylumbelliferone derivatives, not hymecromone, and does not contain any pharmacokinetic or pharmacodynamic modeling. |
| PGx | Xu_2023 | not_relevant | 0 | 0 | The paper investigates the interaction of dietary flavonoids with UGT2B7 and does not mention hymecromone or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Yin_2021 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving Dabrafenib and UGT enzymes, not the pharmacogenomics of hymecromone. |
| PGx | Zamek-Gliszczynski_2006 | not_relevant | 0 | 0 | The paper studies the biliary excretion of 4-methylumbelliferyl glucuronide and sulfate, not hymecromone. |
| PGx | Zamek-Gliszczynski_2006_2 | not_relevant | 0 | 0 | The paper studies acetaminophen, 4-methylumbelliferone, and harmol, not hymecromone. |
| popPK | Zhang_2012 | irrelevant | 0 | 0 | The paper studies in vitro glucuronidation of diclofenac and indomethacin, not hymecromone pharmacokinetics. |
| PD | Zhang_2012 | not_relevant | 0 | 0 | The paper focuses on the in vitro glucuronidation of diclofenac and indomethacin and does not mention hymecromone or report any pharmacodynamic exposure-response relationship for it. |
| PGx | Zhang_2016 | not_relevant | 0 | 0 | The paper investigates the inhibition of UGT2B7 by atractylenolides and does not mention hymecromone or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Zhang_2017 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on tanshinones inhibiting UGTs and does not report pharmacokinetic parameters for hymecromone. |
| PD | Zhang_2017 | not_relevant | 0 | 0 | The paper studies tanshinones (from Danshen), not hymecromone, and reports in vitro enzyme inhibition (IC50/Ki) rather than a pharmacodynamic exposure-response relationship for the target drug. |
| PGx | Zhang_2021 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of quercetin and its metabolite on UGT enzymes, not the pharmacokinetics or pharmacodynamics of hymecromone. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract collection and contains no scientific content, data, or PD parameters for hymecromone. |
| PGx | van_2014 | not_relevant | 0 | 0 | The paper studies feline and canine liver glucuronidation capacity using prototypic substrates (naphthol, estradiol, morphine) and does not mention hymecromone or human pharmacogenomics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
