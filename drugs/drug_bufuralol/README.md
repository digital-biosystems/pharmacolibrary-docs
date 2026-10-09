<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Bufuralol&quot;}]"></div>

# Bufuralol

- **generic name:** Bufuralol
- **ATC codes:** not captured
- **DrugBank:** [DB06726](https://go.drugbank.com/drugs/DB06726) · **PubChem:** [CID 71733](https://pubchem.ncbi.nlm.nih.gov/compound/71733)
- **molar mass:** 261.3593 g/mol (C16H23NO2) — DrugBank
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 09:37 | 18:09 | 0/0/0 | 0/1/0 | 0/0/0 | 378,726/11,066 | einfracz / qwen3.8-27b | 16 | 4/12 | 16/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [He_2002_bufuralol_1_hydroxylation](drugs/drug_bufuralol/pd_He_2002_bufuralol_1_hydroxylation.md) | bufuralol 1'-hydroxylation ← H1-antihistamines · inhibition effect | — | He N et al., Inhibitory effects of H1-antihistamines…, European journal of clinica… (2002) | [10.1007/s00228-001-0399-0](https://doi.org/10.1007/s00228-001-0399-0) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bufuralol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 500 matched, 162 returned
- **screened:** 12  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_36 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dayer_1982.pdf` | Dayer P et al., The genetic control of bufuralol metabo…, European journal of drug me… (1982) | popPK | 8 | [10.1007/BF03189547](https://doi.org/10.1007/BF03189547) | [6121708](https://pubmed.ncbi.nlm.nih.gov/6121708) | The study reports quantitative PK parameters (half-lives for parent and metabolite, bioavailability) for bufuralol in humans, with specific numeric values present in the abstract/evidence. |
| `Francis_1982.pdf` | Francis RJ et al., Kinetics and metabolism of (+)-, (-)- a…, European journal of clinica… (1982) | popPK | 5 | [10.1007/BF00637501](https://doi.org/10.1007/BF00637501) | [6130953](https://pubmed.ncbi.nlm.nih.gov/6130953) | The abstract describes pharmacokinetic parameters (clearance, half-life, AUC) for bufuralol but does not provide any specific numeric values in the text. |
| `Uehara_2022.pdf` | Uehara S et al., Cytochrome P450s in chimeric mice with…, Advances in pharmacology (S… (2022) | popPK | 5 | [10.1016/bs.apha.2022.05.004](https://doi.org/10.1016/bs.apha.2022.05.004) | [35953159](https://pubmed.ncbi.nlm.nih.gov/35953159) | The paper is a mechanistic/modeling review of humanized liver mice that qualitatively describes bufuralol 1'-hydroxylation activity differences but does not report quantitative population PK parameters (CL, V, etc.) or provide the specific numeric plasma concentration values in the text. |
| `Chatterjee_2003.pdf` | Chatterjee P et al., Human cytochrome p450 inhibition and me…, Drug metabolism and disposi… (2003) | pd | 5 | [10.1124/dmd.31.11.1391](https://doi.org/10.1124/dmd.31.11.1391) | [14570772](https://www.ncbi.nlm.nih.gov/pubmed/14570772) | metadata signals extractable PD data (IC50) |
| `Hu_2016.pdf` | Hu SX et al., Assessment of inhibition of porcine hep…, Veterinary journal (London,… (2016) | pd | 5 | [10.1016/j.tvjl.2016.03.011](https://doi.org/10.1016/j.tvjl.2016.03.011) | [27053015](https://www.ncbi.nlm.nih.gov/pubmed/27053015) | metadata signals extractable PD data (IC50) |
| `Lu_2003.pdf` | Lu P et al., Mechanism-based inhibition of human liv…, Drug metabolism and disposi… (2003) | pd | 5 | [10.1124/dmd.31.11.1352](https://doi.org/10.1124/dmd.31.11.1352) | [14570767](https://www.ncbi.nlm.nih.gov/pubmed/14570767) | metadata signals extractable PD data (IC50) |
| `Emoto_2005.pdf` | Emoto C et al., In vitro inhibitory effect of 1-aminobe…, Drug metabolism and pharmac… (2005) | pd | 4 | [10.2133/dmpk.20.351](https://doi.org/10.2133/dmpk.20.351) | [16272753](https://www.ncbi.nlm.nih.gov/pubmed/16272753) | metadata signals extractable PD data (IC50) |
| `Fasinu_2013.pdf` | Fasinu PS et al., The potential of Hypoxis hemerocallidea…, Pharmaceutical biology (2013) | pd | 4 | [10.3109/13880209.2013.796393](https://doi.org/10.3109/13880209.2013.796393) | [23844611](https://www.ncbi.nlm.nih.gov/pubmed/23844611) | metadata signals extractable PD data (IC50) |
| `Jönsson_1995.pdf` | Jönsson G et al., Budesonide is metabolized by cytochrome…, Drug metabolism and disposi… (1995) | pd | 4 | not captured | [7720517](https://www.ncbi.nlm.nih.gov/pubmed/7720517) | metadata signals extractable PD data (IC50) |
| `Peng_2015.pdf` | Peng Y et al., A comprehensive assay for nine major cy…, Xenobiotica; the fate of fo… (2015) | pd | 4 | [10.3109/00498254.2015.1036954](https://doi.org/10.3109/00498254.2015.1036954) | [26007223](https://www.ncbi.nlm.nih.gov/pubmed/26007223) | metadata signals extractable PD data (IC50) |
| `Speirs_1986.pdf` | Speirs CJ et al., Quinidine and the identification of dru…, British journal of clinical… (1986) | pd | 4 | [10.1111/j.1365-2125.1986.tb02969.x](https://doi.org/10.1111/j.1365-2125.1986.tb02969.x) | [3567021](https://www.ncbi.nlm.nih.gov/pubmed/3567021) | metadata signals extractable PD data (IC50) |
| `Takanohashi_2010.pdf` | Takanohashi T et al., Inhibition of human liver microsomal CY…, The Journal of pharmacy and… (2010) | pd | 4 | [10.1211/jpp.62.05.0005](https://doi.org/10.1211/jpp.62.05.0005) | [20609060](https://www.ncbi.nlm.nih.gov/pubmed/20609060) | metadata signals extractable PD data (IC50) |
| `Tu_1996.pdf` | Tu ZG et al., Inhibitory effects of quinidine and qui…, Zhongguo yao li xue bao = A… (1996) | pd | 4 | not captured | [9863152](https://www.ncbi.nlm.nih.gov/pubmed/9863152) | metadata signals extractable PD data (IC50) |
| `Weaver_2003.pdf` | Weaver R et al., Cytochrome P450 inhibition using recomb…, Drug metabolism and disposi… (2003) | pd | 4 | [10.1124/dmd.31.7.955](https://doi.org/10.1124/dmd.31.7.955) | [12814974](https://www.ncbi.nlm.nih.gov/pubmed/12814974) | metadata signals extractable PD data (IC50) |
| `Yamamoto_2003.pdf` | Yamamoto T et al., High-throughput screening to estimate s…, Xenobiotica; the fate of fo… (2003) | pd | 4 | [10.1080/0049825031000140887](https://doi.org/10.1080/0049825031000140887) | [12936703](https://www.ncbi.nlm.nih.gov/pubmed/12936703) | metadata signals extractable PD data (IC50) |
| `He_2002.pdf` | He N et al., Inhibitory effects of H1-antihistamines…, European journal of clinica… (2002) | pgx | 8 | [10.1007/s00228-001-0399-0](https://doi.org/10.1007/s00228-001-0399-0) | [11936702](https://www.ncbi.nlm.nih.gov/pubmed/11936702) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Obach_1998.pdf` | Obach RS et al., Cytochrome P4502D6 catalyzes the O-deme…, Drug metabolism and disposi… (1998) | pgx | 8 | not captured | [9698290](https://www.ncbi.nlm.nih.gov/pubmed/9698290) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `van_2021.pdf` | van der Lee M et al., Substrate specificity of CYP2D6 genetic…, Pharmacogenomics (2021) | pgx | 8 | [10.2217/pgs-2021-0093](https://doi.org/10.2217/pgs-2021-0093) | [34569808](https://www.ncbi.nlm.nih.gov/pubmed/34569808) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Basińska-Ziobroń_2015.pdf` | Basińska-Ziobroń A et al., Inhibition of human cytochrome P450 iso…, Pharmacological reports : PR (2015) | pgx | 7 | [10.1016/j.pharep.2015.04.005](https://doi.org/10.1016/j.pharep.2015.04.005) | [26481538](https://www.ncbi.nlm.nih.gov/pubmed/26481538) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Cho_2014.pdf` | Cho DY et al., Selective inhibition of cytochrome P450…, Drug metabolism and disposi… (2014) | pgx | 7 | [10.1124/dmd.113.054296](https://doi.org/10.1124/dmd.113.054296) | [24167220](https://www.ncbi.nlm.nih.gov/pubmed/24167220) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Dalmadi_2003.pdf` | Dalmadi B et al., Identification of metabolic pathways in…, Drug metabolism and disposi… (2003) | pgx | 7 | [10.1124/dmd.31.5.631](https://doi.org/10.1124/dmd.31.5.631) | [12695352](https://www.ncbi.nlm.nih.gov/pubmed/12695352) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Foti_2004.pdf` | Foti RS et al., Impact of incubation conditions on bufu…, Drug metabolism and disposi… (2004) | pgx | 7 | [10.1124/dmd.32.3.295](https://doi.org/10.1124/dmd.32.3.295) | [14977863](https://www.ncbi.nlm.nih.gov/pubmed/14977863) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Hanioka_1998.pdf` | Hanioka N et al., In vitro biotransformation of atrazine…, Chemico-biological interact… (1998) | pgx | 7 | [10.1016/s0009-2797(98)00086-6](https://doi.org/10.1016/s0009-2797(98)00086-6) | [9920461](https://www.ncbi.nlm.nih.gov/pubmed/9920461) | metadata signals extractable PGX data (CYP2B1, PK/PD-context) |
| `Li_2004.pdf` | Li XQ et al., Comparison of inhibitory effects of the…, Drug metabolism and disposi… (2004) | pgx | 7 | [10.1124/dmd.32.8.821](https://doi.org/10.1124/dmd.32.8.821) | [15258107](https://www.ncbi.nlm.nih.gov/pubmed/15258107) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Ma_2000.pdf` | Ma B et al., Drug interactions with calcium channel…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [10640508](https://www.ncbi.nlm.nih.gov/pubmed/10640508) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Mills_2010.pdf` | Mills BM et al., Current cytochrome P450 phenotyping met…, Drug metabolism and disposi… (2010) | pgx | 7 | [10.1124/dmd.109.030429](https://doi.org/10.1124/dmd.109.030429) | [20007294](https://www.ncbi.nlm.nih.gov/pubmed/20007294) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Selvakumar_2014.pdf` | Selvakumar S et al., Expression and characterization of cyno…, Drug metabolism and disposi… (2014) | pgx | 7 | [10.1124/dmd.113.055491](https://doi.org/10.1124/dmd.113.055491) | [24335510](https://www.ncbi.nlm.nih.gov/pubmed/24335510) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Stringer_2009.pdf` | Stringer RA et al., Evaluation of recombinant cytochrome P4…, Drug metabolism and disposi… (2009) | pgx | 7 | [10.1124/dmd.108.024810](https://doi.org/10.1124/dmd.108.024810) | [19196847](https://www.ncbi.nlm.nih.gov/pubmed/19196847) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Sun_2015.pdf` | Sun J et al., Guanfu base A, an antiarrhythmic alkalo…, Drug metabolism and disposi… (2015) | pgx | 7 | [10.1124/dmd.114.060905](https://doi.org/10.1124/dmd.114.060905) | [25681130](https://www.ncbi.nlm.nih.gov/pubmed/25681130) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Don_2020.pdf` | Don CG et al., Deciphering Reaction Determinants of Al…, Journal of chemical informa… (2020) | pgx | 5 | [10.1021/acs.jcim.0c01091](https://doi.org/10.1021/acs.jcim.0c01091) | [33269921](https://www.ncbi.nlm.nih.gov/pubmed/33269921) | metadata signals extractable PGX data (CYP2D6) |
| `Granvil_2002.pdf` | Granvil CP et al., 4-Hydroxylation of debrisoquine by huma…, The Journal of pharmacology… (2002) | pgx | 5 | [10.1124/jpet.301.3.1025](https://doi.org/10.1124/jpet.301.3.1025) | [12023534](https://www.ncbi.nlm.nih.gov/pubmed/12023534) | metadata signals extractable PGX data (CYP1A1) |
| `Jukic_2018.pdf` | Jukic MM et al., Functional characterization of CYP2D7 g…, Pharmacogenomics (2018) | pgx | 5 | [10.2217/pgs-2018-0065](https://doi.org/10.2217/pgs-2018-0065) | [30040020](https://www.ncbi.nlm.nih.gov/pubmed/30040020) | metadata signals extractable PGX data (CYP2D7) |
| `McCarty_2021.pdf` | McCarty KD et al., Tryptophan-75 Is a Low-Energy Channel-G…, Drug metabolism and disposi… (2021) | pgx | 5 | [10.1124/dmd.120.000274](https://doi.org/10.1124/dmd.120.000274) | [33376147](https://www.ncbi.nlm.nih.gov/pubmed/33376147) | metadata signals extractable PGX data (CYP2D6) |
| `Oscarson_1997.pdf` | Oscarson M et al., A combination of mutations in the CYP2D…, Molecular pharmacology (1997) | pgx | 5 | [10.1124/mol.52.6.1034](https://doi.org/10.1124/mol.52.6.1034) | [9415713](https://www.ncbi.nlm.nih.gov/pubmed/9415713) | metadata signals extractable PGX data (CYP2D6*17) |
| `Roussel_1998.pdf` | Roussel F et al., Expression and characterization of cani…, Archives of biochemistry an… (1998) | pgx | 5 | [10.1006/abbi.1998.0801](https://doi.org/10.1006/abbi.1998.0801) | [9721180](https://www.ncbi.nlm.nih.gov/pubmed/9721180) | metadata signals extractable PGX data (CYP2D15) |
| `Uno_2015.pdf` | Uno Y et al., CYP2D44 polymorphisms in cynomolgus and…, Molecular biology reports (2015) | pgx | 5 | [10.1007/s11033-015-3863-0](https://doi.org/10.1007/s11033-015-3863-0) | [25682269](https://www.ncbi.nlm.nih.gov/pubmed/25682269) | metadata signals extractable PGX data (CYP2D44) |

<sub>queue written 2026-10-09T09:33:39.531665+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Atkinson_2005 | irrelevant | 0 | 0 | This is an in-vitro study using bufuralol only as a probe substrate to assess CYP450 enzyme inhibition, not a pharmacokinetic study of bufuralol's disposition. |
| popPK | Balant_1983 | relevant | 4 | 0 | The study investigates the pharmacokinetics of bufuralol (specifically clearance/hepatic elimination) in humans with renal insufficiency, but the evidence provided is a text summary lacking specific numeric parameter values. |
| PGx | Basińska-Ziobroń_2015 | not_relevant | 0 | 0 | The paper investigates the in vitro inhibition of CYP enzymes by levomepromazine and does not report any effect of genetic variants on the PK/PD of bufuralol. |
| popPK | Bogni_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2D6 substrate specificity in cell lines and does not report population pharmacokinetic parameters or disposition values for bufuralol. |
| popPK | Boobis_1984 | irrelevant | 0 | 0 | The paper is a review of human cytochrome P-450 isozymes and mentions bufuralol only as a substrate in cross-inhibition studies, without reporting quantitative PK parameters. |
| PGx | Boobis_1984 | not_relevant | 5 | 0 | The paper is a review mentioning bufuralol as a substrate in cross-inhibition studies to characterize CYP2D6, but it does not report specific quantitative pharmacokinetic or pharmacodynamic data linking genetic variants to changes in bufuralol PK/PD. |
| PGx | Boobis_1985 | not_relevant | 0 | 0 | The study investigates in vitro enzymatic kinetics and competitive inhibition, not in vivo pharmacogenomic effects on clinical PK or PD parameters. |
| popPK | Cannady_2015 | irrelevant | 0 | 0 | The study evaluates CYP-mediated drug-drug interactions for evacetrapib and does not mention or provide pharmacokinetic data for bufuralol. |
| popPK | Capponi_1977 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of renin release from rat kidney slices, not a pharmacokinetic study of bufuralol. |
| PGx | Cho_2014 | not_relevant | 2 | 10 | The paper reports in vitro CYP2D6 inhibition by sarpogrelate on bufuralol metabolism, which is a drug-drug interaction mechanism, not a pharmacogenomic effect (genotype-based variation) on PK/PD. |
| PGx | Coleman_2000 | not_relevant | 2 | 5 | The study compares in vitro metabolic rates in wild-type vs. CYP2D6 deficient (Dark Agouti) rats, but it is not a human pharmacogenomic study of clinical PK/PD parameters for bufuralol. |
| PGx | Crespi_1991 | not_relevant | 2 | 1 | The paper uses bufuralol as a probe substrate to characterize CYP2D6 enzyme activity in a cell line model, but does not report clinical pharmacokinetic or pharmacodynamic parameter changes resulting from gene variants in humans. |
| PGx | Crespi_2006 | not_relevant | 0 | 0 | The paper describes an analytical method for quantifying bufuralol metabolism in vitro and does not report pharmacogenomic effects on in vivo PK/PD parameters in human subjects. |
| popPK | Dalmadi_2003 | irrelevant | 0 | 0 | The paper studies the metabolism of tolperisone in vitro, and bufuralol is only used as a substrate for enzyme inhibition screening, providing no pharmacokinetic parameters for bufuralol. |
| PGx | Dalmadi_2003 | not_relevant | 0 | 0 | The paper discusses the metabolism of tolperisone and its inhibition of bufuralol hydroxylation, but it does not report pharmacogenomic effects on the PK/PD of bufuralol itself. |
| PGx | Danek_2022 | not_relevant | 0 | 0 | The paper studies drug-drug interactions (lurasidone affecting CYP2D activity measured via bufuralol) in animals, not the effect of a patient's gene variant on the PK/PD of bufuralol. |
| PGx | Dierks_2001 | not_relevant | 0 | 0 | The paper describes an in vitro method for measuring CYP enzyme activity using bufuralol as a probe substrate, but it does not report any pharmacogenomic associations or genetic variants affecting bufuralol's PK/PD parameters in humans. |
| PGx | Distlerath_1985 | not_relevant | 0 | 0 | The paper focuses on the biochemical purification and characterization of CYP enzymes (P-450DB and P-450PA) rather than reporting pharmacogenomic effects on specific PK/PD parameters of bufuralol in a clinical context. |
| PGx | Don_2020 | not_relevant | 0 | 0 | The paper focuses on computational modeling of CYP2D6 reaction mechanisms and does not report clinical or in-vitro pharmacokinetic/pharmacodynamic data for bufuralol. |
| popPK | Floby_2009 | irrelevant | 1 | 5 | The study reports intrinsic clearance ($CL_{int}$) in hepatocytes, which is an in vitro metabolic parameter, not a population pharmacokinetic disposition model or systemic PK parameters (CL, V, ka) in a living organism. |
| PGx | Fonne-Pfister_1987 | not_relevant | 0 | 0 | The paper discusses MPTP inhibiting the CYP2D6 enzyme (P450bufI) in vitro and mentions the debrisoquine polymorphism context, but it does not report a study linking specific genotypes to PK/PD parameters of bufuralol in humans. |
| PGx | Fonne-Pfister_1988 | not_relevant | 2 | 0 | The paper investigates in vitro competitive inhibition of the enzyme by various drugs, not the impact of genotypes on pharmacokinetic or pharmacodynamic parameters in patients. |
| popPK | Foster_2011 | irrelevant | 1 | 0 | The paper reports in-vitro intrinsic clearance (CLint) comparisons in liver preparations where bufuralol is used as a low-clearance probe substrate, not population or systemic PK parameters. |
| PGx | Foti_2004 | not_relevant | 0 | 0 | The paper investigates the stability of enzymes and incubation conditions for clearance prediction in vitro, not the impact of genetic variants on pharmacokinetics. |
| popPK | Francis_1982 | irrelevant | 5 | 1 | The abstract describes pharmacokinetic parameters (clearance, half-life, AUC) for bufuralol but does not provide any specific numeric values in the text. |
| popPK | Frybortova_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ozanimod in mice, where bufuralol is used only as an in-vitro substrate to measure CYP2D activity. |
| PGx | Glass_2019 | not_relevant | 0 | 0 | The paper investigates rolapitant as a CYP2D6 inhibitor and mentions bufuralol only as a reporter substrate for enzyme kinetics, without reporting any pharmacogenomic effects on PK/PD parameters. |
| popPK | Gonzalez_2021 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study on CYP450 QSAR models and does not report PK parameters for bufuralol. |
| PGx | Grace_1999 | not_relevant | 1 | 5 | The paper focuses on the metabolism of artelinic acid and mentions bufuralol only as a substrate for an observed CYP2D6 activation by artelinic acid, not as the primary subject of pharmacogenomic analysis. |
| PGx | Granvil_2002 | not_relevant | 1 | 2 | The study examines in vitro CYP enzyme kinetics and inhibition, not the effect of gene variants on PK/PD parameters in humans. |
| popPK | Grzegorzewski_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dextromethorphan, not bufuralol, which is only mentioned as a less popular in vitro probe. |
| PGx | Haefeli_1990 | not_relevant | 1 | 0 | The paper investigates flecainide as a CYP2D6 inhibitor; bufuralol is only used as an in vitro probe to demonstrate inhibition, with no pharmacokinetic data or pharmacogenomic effect reported for the drug itself. |
| PGx | Hanioka_1998 | not_relevant | 0 | 0 | The paper studies atrazine metabolism and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of bufuralol. |
| PGx | Hanioka_2000 | not_relevant | 0 | 0 | This paper investigates the in vitro interaction of bisphenol A with P450 enzymes, not the effect of a gene variant/genotype on the pharmacokinetics or pharmacodynamics of bufuralol. |
| PGx | He_2002 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (H1-antihistamines inhibiting CYP2D6 activity) in vitro and does not report how a patient's genetic variant or genotype affects bufuralol PK/PD. |
| PGx | He_2006 | not_relevant | 0 | 0 | The paper examines the effects of various compounds on CYP enzyme activity but does not report the impact of genetic variants or genotypes on pharmacokinetic parameters of bufuralol. |
| PGx | He_2016 | not_relevant | 1 | 0 | The paper is a review of CYP2D genes in non-human primates and notes their substrate specificity for bufuralol but does not report a pharmacogenomic association between a specific genotype and a quantified PK/PD parameter in humans or a specific model. |
| PGx | Hiroi_1998 | not_relevant | 0 | 0 | The paper reports the enzymatic conversion of tyramine to dopamine by CYP2D6; bufuralol is only used as a mechanism-based inhibitor to confirm enzyme identity, not as the study drug for which PK/PD parameters are being modulated by a genotype. |
| PGx | Hultman_2016 | not_relevant | 0 | 0 | The paper evaluates an in vitro cell culture system for clearance prediction and only mentions bufuralol as a CYP2D6 marker substrate, without reporting any pharmacogenomic gene variant effects on its PK/PD. |
| PGx | Islam_1991 | not_relevant | 0 | 0 | The paper focuses on a molecular modeling template to predict CYP2D6 substrates, and does not report quantitative pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of bufuralol. |
| PGx | Jeong_2013 | not_relevant | 0 | 0 | The paper investigates the inhibition of CYP enzymes by honokiol in vitro, not the pharmacogenomic effect of gene variants on bufuralol PK/PD. |
| popPK | Johansson_1994 | irrelevant | 0 | 0 | The paper is a genetic analysis of CYP2D6 variants and uses in vitro cell lines to measure enzyme activity; it does not report population pharmacokinetic parameters (CL, V, ka, t1/2) for bufuralol in humans or animals. |
| PGx | Jones_1998 | not_relevant | 0 | 0 | The paper investigates the drug-drug interaction between terfenadine and CYP2D6 using bufuralol as a probe substrate, but it does not report any pharmacogenomic effects (gene variants) on the PK/PD of bufuralol. |
| PGx | Jukic_2018 | not_relevant | 0 | 0 | The paper reports that CYP2D7 variants have no catalytic activity towards bufuralol and do not cause the UM phenotype, meaning no pharmacogenomic effect is reported. |
| PGx | Jönsson_1995 | not_relevant | 0 | 0 | The paper focuses on the metabolism of budesonide and only uses bufuralol as a probe substrate to demonstrate the lack of CYP2D6 involvement. |
| PGx | Keizers_2004 | not_relevant | 2 | 5 | The study is an *in vitro* biochemical investigation of a specific amino acid mutation (Phe120Ala) on enzyme kinetics, not a clinical pharmacogenomic study reporting the effect of human genetic variation on a systemic PK or PD parameter. |
| popPK | Khalil_2001 | irrelevant | 0 | 0 | The study reports in vitro metabolic clearance parameters for bufuralol in chicken and dog liver, which does not constitute a pharmacokinetic study of the drug's disposition. |
| popPK | Kim_2020 | irrelevant | 0 | 0 | The study is an in-vitro investigation of enzyme and transporter inhibition by AB-FUBINACA, where bufuralol is used only as a probe substrate for CYP2D6 rather than as the subject of pharmacokinetic analysis. |
| PGx | Kim_2020 | not_relevant | 0 | 0 | The paper investigates in vitro drug-drug interactions of AB-FUBINACA on CYP enzymes and transporters, not the effect of genetic variants on bufuralol's PK/PD. |
| PGx | Kroemer_1989 | not_relevant | 0 | 0 | The paper uses bufuralol as a phenotypic marker to identify the CYP enzyme responsible for propafenone metabolism; it does not report pharmacokinetic parameters (e.g., AUC, clearance) of bufuralol itself. |
| PGx | Kwon_2016 | not_relevant | 0 | 0 | The study investigates enzyme inhibition by a drug candidate (aschantin) and does not assess genetic variants or their impact on bufuralol pharmacokinetics. |
| PGx | Leemann_1994 | not_relevant | 0 | 0 | The study investigates the inhibition of CYP enzymes by carbon monoxide in liver microsomes and does not report any genetic variants or phenotypes affecting the PK or PD of bufuralol. |
| popPK | Lennard_1985 | irrelevant | 0 | 0 | The paper is a review summarizing qualitative findings (increased bioavailability, prolonged half-life) without reporting specific quantitative PK parameter values for bufuralol. |
| popPK | Lennard_1986 | irrelevant | 2 | 0 | The paper is a review describing the qualitative impact of genetic polymorphism on bufuralol pharmacokinetics (e.g., prolonged half-life) without providing original quantitative parameter values. |
| PGx | Li_2004 | not_relevant | 0 | 0 | The paper reports that PPIs are poor inhibitors of bufuralol metabolism (IC50 &gt; 200 microM) but does not investigate or report pharmacogenomic (genetic) effects on bufuralol's PK or PD parameters. |
| popPK | Lu_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic inhibition assay where bufuralol serves only as a substrate to characterize CYP2D6 activity, not as the subject drug for PK parameter estimation. |
| PGx | Ma_2000 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions with CYP enzymes in vitro, using bufuralol only as a substrate to assess CYP2D6 activity, and contains no pharmacogenomic analysis or human PK/PD data for bufuralol. |
| popPK | Mankowski_1999 | irrelevant | 1 | 0 | The study focuses on in-vitro enzymatic kinetics (Km, Ki) and metabolic pathways of bufuralol, not pharmacokinetic disposition parameters (CL, V, ka). |
| PGx | Masuda_2005 | not_relevant | 2 | 10 | The study reports in vitro enzyme kinetics (Vmax/Km) for a mutated CYP2D6 construct, not a clinical pharmacokinetic or pharmacodynamic parameter in humans. |
| PGx | Matsunaga_1990 | not_relevant | 4 | 10 | The study reports in vitro changes in enzyme kinetic parameters (Vmax/Km) for a rat CYP isoform, not in vivo clinical PK/PD parameters for bufuralol. |
| PGx | McCarty_2021 | not_relevant | 0 | 0 | The paper focuses on the mechanistic role of a specific residue in CYP2D6 and does not report pharmacokinetic or pharmacodynamic parameters for bufuralol. |
| PGx | Mills_2010 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions and P450 phenotyping in dogs, mentioning no observed in vivo interaction with bufuralol, but it does not report any genetic variant or genotype affecting its PK/PD. |
| popPK | Nakajima_2001 | irrelevant | 0 | 0 | The study is an in-vitro enzyme inhibition study using bufuralol as a probe substrate for CYP2D6, not a pharmacokinetic study of bufuralol's disposition parameters. |
| PGx | Niwa_2004 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP inhibition) using pooled liver samples, not pharmacogenomic gene variants. |
| PGx | Niwa_2004_2 | not_relevant | 0 | 0 | The paper reports on the inhibitory effects of a drug (nilvadipine) on CYP enzymes in vitro and does not investigate the impact of genetic variants on the PK or PD of bufuralol. |
| popPK | Obach_1998 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of ibogaine by CYP2D6, using bufuralol only as a marker for enzyme activity correlation rather than as the subject drug for PK parameter estimation. |
| PGx | Obach_1998 | not_relevant | 2 | 2 | The paper investigates the metabolism of ibogaine, not bufuralol; bufuralol is only used as a CYP2D6 activity marker in the methods. |
| popPK | Obara_2025 | irrelevant | 0 | 0 | This is an in-vitro cell culture study using bufuralol solely as a probe substrate to measure CYP2D6 enzymatic activity, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Orishiki_1994 | not_relevant | 0 | 0 | The paper reports the effects of H2 blockers on CYP2D activity using bufuralol as a substrate, but it does not report a pharmacogenomic effect (gene variant/genotype) on bufuralol pharmacokinetics or pharmacodynamics. |
| popPK | Panicco_2011 | irrelevant | 0 | 0 | The study is an in-vitro enzymatic kinetics characterization of CYP2D6 using bufuralol as a marker substrate, not a pharmacokinetic study reporting in-vivo disposition parameters (CL, V, etc.) for the drug. |
| PGx | Peng_2015 | not_relevant | 0 | 0 | The paper describes an in vitro assay method for CYP inhibition using bufuralol as a probe substrate, but does not report pharmacogenomic effects on PK/PD parameters in humans. |
| PGx | Prueksaritanont_1995 | not_relevant | 1 | 0 | The paper investigates the enzymatic kinetics of CYP2D6 in tissues but does not report a pharmacogenomic effect (genotype-based change) on a PK or PD parameter in humans. |
| popPK | Reese_2008 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study using bufuralol only as a CYP2D6 probe substrate to assess bupropion's interaction with desipramine; it does not report disposition parameters for bufuralol itself. |
| PGx | Sakuma_2004 | not_relevant | 0 | 0 | The paper reports in vitro enzyme activity of a cloned pig CYP2D21 isoform and sequence identity, but does not report human pharmacogenomic variation (genotypes) affecting PK/PD parameters in vivo. |
| popPK | Selvakumar_2014 | irrelevant | 0 | 0 | The study is an in-vitro CYP enzyme characterization where bufuralol is used solely as a non-substrate probe to demonstrate lack of CYP2D6 activity, not for PK parameter determination. |
| PGx | Selvakumar_2014 | not_relevant | 2 | 0 | The paper describes the expression of cynomolgus monkey CYP3A4 and mentions bufuralol as a probe substrate to check specificity, but it does not investigate the effect of genetic variants (pharmacogenomics) on the PK or PD parameters of bufuralol. |
| PGx | Shah_2007 | not_relevant | 0 | 0 | The study is in cats and focuses on enzyme characterization; it does not report pharmacogenomic effects on human PK/PD parameters for bufuralol. |
| PGx | Silas_1984 | not_relevant | 6 | 0 | The text describes a pharmacogenomic effect on PK parameters (AUC, half-life) for bufuralol but provides no quantitative effect sizes or fitted parameters, only qualitative statements that values are "much higher" in poor metabolizers. |
| popPK | Smith_1985 | irrelevant | 1 | 0 | The text discusses polymorphic metabolism of bufuralol in the context of CYP2D6 but does not provide any specific quantitative pharmacokinetic parameter values (such as CL, V, or half-life) for bufuralol. |
| PGx | Stringer_2009 | not_relevant | 0 | 0 | The study uses bufuralol only as a probe substrate to evaluate the performance of recombinant P450 enzymes for metabolic clearance prediction; it does not report how a specific human gene variant or genotype alters the PK/PD of bufuralol. |
| PGx | Sun_2015 | not_relevant | 0 | 0 | The paper discusses CYP2D6 inhibition by Guanfu base A and does not investigate pharmacogenomic effects on the PK/PD of bufuralol. |
| popPK | Tavares_2023 | irrelevant | 0 | 0 | The paper investigates antimalarial HDAC inhibitors, not the drug bufuralol. |
| popPK | Uehara_2022 | relevant | 5 | 2 | The paper is a mechanistic/modeling review of humanized liver mice that qualitatively describes bufuralol 1'-hydroxylation activity differences but does not report quantitative population PK parameters (CL, V, etc.) or provide the specific numeric plasma concentration values in the text. |
| PGx | Uehara_2022 | not_relevant | 2 | 1 | The paper discusses a comparison of metabolic activities between human and humanized mouse livers, not the effect of specific human genetic variants on a PK/PD parameter in a human population. |
| PGx | Vanduchova_2016 | not_relevant | 1 | 2 | The paper investigates chemical inhibition of CYP2D6 by sulforaphane metabolites in vitro, not the effect of a genetic variant on bufuralol PK/PD. |
| PGx | Yu_2003 | not_relevant | 0 | 0 | The study is about tryptamine metabolism by MAO-A and does not measure bufuralol PK/PD parameters or link gene variants to bufuralol pharmacokinetics. |
| PGx | Zhou_2010 | not_relevant | 0 | 0 | The study characterizes canine CYP2A enzymes and reports that bufuralol is not a substrate, but it does not report a pharmacogenomic effect on a PK/PD parameter of bufuralol. |
| popPK | van_2021 | irrelevant | 0 | 0 | no_text gate: only 48 chars of text extracted (&lt; 400) |
| PGx | van_2021 | not_relevant | 0 | 0 | The paper discusses CYP2D6 substrate specificity generally but does not report specific pharmacokinetic or pharmacodynamic parameter changes for bufuralol linked to genetic variants. |
| PGx | van_2021_2 | not_relevant | 3 | 5 | The paper primarily models CYP2D6 activity using tamoxifen and venlafaxine; bufuralol is only used as a substrate for limited in vitro validation of specific variant effects, not as the main subject for reporting quantitative pharmacogenomic parameters in a population. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
