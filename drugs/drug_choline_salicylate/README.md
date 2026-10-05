<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;choline salicylate&quot;}]"></div>

# choline salicylate

- **generic name:** choline salicylate
- **ATC codes:** `N02BA03`
- **DrugBank:** [DB14006](https://go.drugbank.com/drugs/DB14006) · **PubChem:** not captured
- **molar mass:** 241.287 g/mol (C12H19NO4) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

Choline salicylate is a salicylic acid derivative used as an analgesic and antipyretic, typically for pain relief in the mouth and throat. It is an approved medicine, available in some countries mainly in topical oral preparations such as gels for teething and mouth ulcers.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4499058](https://www.wikidata.org/wiki/Q4499058) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-01 20:59 | 49:31 | 0/0/0 | 3/0/0 | 0/0/0 | 576,788/17,208 | ollama / qwen3.8:27b-mtp-q8_0 | 90 | 13/83 | 85/5 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">pig</span> | [Kakehata_1996_Cm_pk](drugs/drug_choline_salicylate/pd_Kakehata_1996_Cm_pk.md) | nonlinear peak capacitance ← salicylate · direct sigmoid Emax (Hill) effect | — | Kakehata S et al., Effects of salicylate and lanthanides o…, The Journal of neuroscience… (1996) | [10.1523/JNEUROSCI.16-16-04881.1996](https://doi.org/10.1523/JNEUROSCI.16-16-04881.1996) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> | [Koh_2025_TXB2](drugs/drug_choline_salicylate/pd_Koh_2025_TXB2.md) | thromboxane B2 ← acetylsalicylic acid · indirect response — drug inhibits the production of thromboxane B2 | model (no simulator) | Koh J et al., Population Pharmacokinetic and Pharmaco…, Drug design, development an… (2025) | [10.2147/DDDT.S533428](https://doi.org/10.2147/DDDT.S533428) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">pig</span> | [Tunstall_1995_membrane_capacitance](drugs/drug_choline_salicylate/pd_Tunstall_1995_membrane_capacitance.md) | membrane capacitance ← salicylate · direct sigmoid Emax (Hill) effect | — | Tunstall MJ et al., Action of salicylate on membrane capaci…, The Journal of physiology 4… (1995) | [10.1113/jphysiol.1995.sp020765](https://doi.org/10.1113/jphysiol.1995.sp020765) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=choline_salicylate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC22A4` inhibitor, `SLC22A5` inhibitor | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | blood | `BCHE` product | DrugBank actor |
| metabolism | liver | `BCHE` product, `SLC22A1` inhibitor/substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor/substrate | DrugBank actor |
| — | blood | `ACHE` product | DrugBank actor |
| — | neuromuscular junction | `ACHE` product | DrugBank actor |

<sub>Actors without a tissue in the table: CEPT1 (substrate), CHAT (substrate), CHDH (substrate), CHKA (substrate), CHKB (substrate), CHRNA7 (unknown), PCYT1A (product), PCYT1B (product), PLD1 (product), PLD2 (product), SLC44A1 (substrate), SLC44A3 (substrate), SLC44A4 (substrate), SLC5A7 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1047 matched, 302 returned
- **screened:** 50  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_38 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mukherjee_2025.pdf` | Mukherjee A et al., Pharmacokinetic-Pharmacodynamic (PK-PD)…, Indian journal of pediatrics (2025) | pd | 5 | [10.1007/s12098-024-05135-9](https://doi.org/10.1007/s12098-024-05135-9) | [38802673](https://www.ncbi.nlm.nih.gov/pubmed/38802673) | metadata signals extractable PD data (PK-PD) |
| `Pinder_2019.pdf` | Pinder N et al., Continuous infusion of physostigmine in…, Biomedicine & pharmacothera… (2019) | pd | 5 | [10.1016/j.biopha.2019.109318](https://doi.org/10.1016/j.biopha.2019.109318) | [31398669](https://www.ncbi.nlm.nih.gov/pubmed/31398669) | metadata signals extractable PD data (sigmoid) |
| `Shen_2016.pdf` | Shen C et al., Pharmacokinetic and pharmacodynamic int…, Xenobiotica; the fate of fo… (2016) | pd | 5 | [10.3109/00498254.2015.1096979](https://doi.org/10.3109/00498254.2015.1096979) | [26548565](https://www.ncbi.nlm.nih.gov/pubmed/26548565) | metadata signals extractable PD data (Emax) |
| `Thiessen_1983.pdf` | Thiessen JJ, Relevance to redesigning aspirin therap…, Thrombosis research. Supple… (1983) | pd | 5 | [10.1016/0049-3848(83)90372-9](https://doi.org/10.1016/0049-3848(83)90372-9) | [6579709](https://www.ncbi.nlm.nih.gov/pubmed/6579709) | metadata signals extractable PD data (Emax) |
| `Vidhya_2020.pdf` | Vidhya R et al., Anti-inflammatory effects of troxerutin…, Immunopharmacology and immu… (2020) | pd | 5 | [10.1080/08923973.2020.1806870](https://doi.org/10.1080/08923973.2020.1806870) | [32762381](https://www.ncbi.nlm.nih.gov/pubmed/32762381) | metadata signals extractable PD data (IC50) |
| `Aslan_2017.pdf` | Aslan HE et al., Phenolic compounds: The inhibition effe…, Chemico-biological interact… (2017) | pd | 4 | [10.1016/j.cbi.2017.01.021](https://doi.org/10.1016/j.cbi.2017.01.021) | [28153595](https://www.ncbi.nlm.nih.gov/pubmed/28153595) | metadata signals extractable PD data (IC50) |
| `Blanch_2020.pdf` | Blanch GP et al., Exogenous Salicylic Acid Improves Pheno…, Plant foods for human nutri… (2020) | pd | 4 | [10.1007/s11130-019-00793-z](https://doi.org/10.1007/s11130-019-00793-z) | [32086677](https://www.ncbi.nlm.nih.gov/pubmed/32086677) | metadata signals extractable PD data (IC50) |
| `Caboni_2013.pdf` | Caboni P et al., Nematicidal activity of mint aqueous ex…, Journal of agricultural and… (2013) | pd | 4 | [10.1021/jf403684h](https://doi.org/10.1021/jf403684h) | [24050256](https://www.ncbi.nlm.nih.gov/pubmed/24050256) | metadata signals extractable PD data (EC50) |
| `Chakraborty_2020.pdf` | Chakraborty K et al., An unreported bis-abeo cembrane-type di…, Natural product research (2020) | pd | 4 | [10.1080/14786419.2018.1527833](https://doi.org/10.1080/14786419.2018.1527833) | [30580610](https://www.ncbi.nlm.nih.gov/pubmed/30580610) | metadata signals extractable PD data (IC50) |
| `Costa_2014.pdf` | Costa SP et al., Automated evaluation of pharmaceuticall…, Journal of hazardous materi… (2014) | pd | 4 | [10.1016/j.jhazmat.2013.11.052](https://doi.org/10.1016/j.jhazmat.2013.11.052) | [24355776](https://www.ncbi.nlm.nih.gov/pubmed/24355776) | metadata signals extractable PD data (EC50) |
| `Dunstan_1998.pdf` | Dunstan C et al., Alphitol, a phenolic substance from Alp…, Phytochemistry (1998) | pd | 4 | [10.1016/s0031-9422(97)00827-3](https://doi.org/10.1016/s0031-9422(97)00827-3) | [9654777](https://www.ncbi.nlm.nih.gov/pubmed/9654777) | metadata signals extractable PD data (IC50) |
| `Gu_2018.pdf` | Gu CB et al., Characterization, culture medium optimi…, Journal of applied microbio… (2018) | pd | 4 | [10.1111/jam.13928](https://doi.org/10.1111/jam.13928) | [29791772](https://www.ncbi.nlm.nih.gov/pubmed/29791772) | metadata signals extractable PD data (EC50) |
| `Hurni_1993.pdf` | Hurni MA et al., Permeability enhancement in Caco-2 cell…, The Journal of pharmacology… (1993) | pd | 4 | not captured | [7504101](https://www.ncbi.nlm.nih.gov/pubmed/7504101) | metadata signals extractable PD data (EC50) |
| `Iguchi_2022.pdf` | Iguchi T et al., Chemical constituents and aldose reduct…, Natural product research (2022) | pd | 4 | [10.1080/14786419.2020.1839455](https://doi.org/10.1080/14786419.2020.1839455) | [33121272](https://www.ncbi.nlm.nih.gov/pubmed/33121272) | metadata signals extractable PD data (IC50) |
| `Laneuville_1994.pdf` | Laneuville O et al., Differential inhibition of human prosta…, The Journal of pharmacology… (1994) | pd | 4 | not captured | [7965814](https://www.ncbi.nlm.nih.gov/pubmed/7965814) | metadata signals extractable PD data (IC50) |
| `Li_2024.pdf` | Li W et al., Endocrine-Disrupting Effects of Salicyl…, Journal of agricultural and… (2024) | pd | 4 | [10.1021/acs.jafc.4c04265](https://doi.org/10.1021/acs.jafc.4c04265) | [39454092](https://www.ncbi.nlm.nih.gov/pubmed/39454092) | metadata signals extractable PD data (IC50) |
| `Mitchell_1993.pdf` | Mitchell JA et al., Selectivity of nonsteroidal antiinflamm…, Proceedings of the National… (1993) | pd | 4 | [10.1073/pnas.90.24.11693](https://doi.org/10.1073/pnas.90.24.11693) | [8265610](https://www.ncbi.nlm.nih.gov/pubmed/8265610) | metadata signals extractable PD data (IC50) |
| `Pacifici_1991.pdf` | Pacifici GM et al., Conjugation of benzoic acid with glycin…, Developmental pharmacology… (1991) | pd | 4 | [10.1159/000457499](https://doi.org/10.1159/000457499) | [1811921](https://www.ncbi.nlm.nih.gov/pubmed/1811921) | metadata signals extractable PD data (IC50) |
| `Picone_2021.pdf` | Picone M et al., Fragrance materials (FMs) affect the la…, Ecotoxicology and environme… (2021) | pd | 4 | [10.1016/j.ecoenv.2021.112146](https://doi.org/10.1016/j.ecoenv.2021.112146) | [33744517](https://www.ncbi.nlm.nih.gov/pubmed/33744517) | metadata signals extractable PD data (EC50) |
| `Roch-Ramel_1997.pdf` | Roch-Ramel F et al., Effects of uricosuric and antiuricosuri…, The Journal of pharmacology… (1997) | pd | 4 | not captured | [9023298](https://www.ncbi.nlm.nih.gov/pubmed/9023298) | metadata signals extractable PD data (IC50) |
| `Rolli_2016.pdf` | Rolli E et al., Phytotoxic Effects and Phytochemical Fi…, Chemistry & biodiversity (2016) | pd | 4 | [10.1002/cbdv.201500010](https://doi.org/10.1002/cbdv.201500010) | [26765353](https://www.ncbi.nlm.nih.gov/pubmed/26765353) | metadata signals extractable PD data (EC50) |
| `Saeed_2019.pdf` | Saeed KM et al., Comparative assessment of phytochemical…, Journal of food biochemistry (2019) | pd | 4 | [10.1111/jfbc.13025](https://doi.org/10.1111/jfbc.13025) | [31456236](https://www.ncbi.nlm.nih.gov/pubmed/31456236) | metadata signals extractable PD data (EC50) |
| `Tzima_2023.pdf` | Tzima CS et al., Possible implementation of salicylate a…, Journal of inorganic bioche… (2023) | pd | 4 | [10.1016/j.jinorgbio.2023.112225](https://doi.org/10.1016/j.jinorgbio.2023.112225) | [37075542](https://www.ncbi.nlm.nih.gov/pubmed/37075542) | metadata signals extractable PD data (IC50) |
| `Xie_2020.pdf` | Xie F et al., Generation of Fluorinated Amychelin Sid…, Cell chemical biology (2020) | pd | 4 | [10.1016/j.chembiol.2020.10.009](https://doi.org/10.1016/j.chembiol.2020.10.009) | [33186541](https://www.ncbi.nlm.nih.gov/pubmed/33186541) | metadata signals extractable PD data (EC50) |
| `Zhang_2024.pdf` | Zhang T et al., Quinolizidine Alkaloids and Isoflavones…, Journal of agricultural and… (2024) | pd | 4 | [10.1021/acs.jafc.3c09529](https://doi.org/10.1021/acs.jafc.3c09529) | [38394631](https://www.ncbi.nlm.nih.gov/pubmed/38394631) | metadata signals extractable PD data (EC50) |
| `Allegaert_2008.pdf` | Allegaert K et al., Neonatal clinical pharmacology: recent…, Acta anaesthesiologica Belg… (2008) | pgx | 8 | not captured | [19235528](https://www.ncbi.nlm.nih.gov/pubmed/19235528) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Chen_2007.pdf` | Chen Y et al., UGT1A6 polymorphism and salicylic acid…, Pharmacogenetics and genomi… (2007) | pgx | 8 | [10.1097/01.fpc.0000236339.79916.07](https://doi.org/10.1097/01.fpc.0000236339.79916.07) | [17622933](https://www.ncbi.nlm.nih.gov/pubmed/17622933) | metadata signals extractable PGX data (UGT1A6, PK/PD-context) |
| `Colizza_2007.pdf` | Colizza K et al., Metabolism, pharmacokinetics, and excre…, Drug metabolism and disposi… (2007) | pgx | 8 | [10.1124/dmd.106.014266](https://doi.org/10.1124/dmd.106.014266) | [17360832](https://www.ncbi.nlm.nih.gov/pubmed/17360832) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Lennard_1998.pdf` | Lennard L, Clinical implications of thiopurine met…, Therapeutic drug monitoring (1998) | pgx | 8 | [10.1097/00007691-199810000-00014](https://doi.org/10.1097/00007691-199810000-00014) | [9780130](https://www.ncbi.nlm.nih.gov/pubmed/9780130) | metadata signals extractable PGX data (TPMT, PK/PD-context) |
| `Li_2017.pdf` | Li X et al., Association of ABCB1 promoter methylati…, European journal of clinica… (2017) | pgx | 8 | [10.1007/s00228-017-2298-z](https://doi.org/10.1007/s00228-017-2298-z) | [28707077](https://www.ncbi.nlm.nih.gov/pubmed/28707077) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Luchessi_2017.pdf` | Luchessi AD et al., ABCC3 Polymorphisms and mRNA Expression…, Basic & clinical pharmacolo… (2017) | pgx | 8 | [10.1111/bcpt.12703](https://doi.org/10.1111/bcpt.12703) | [27862978](https://www.ncbi.nlm.nih.gov/pubmed/27862978) | metadata signals extractable PGX data (ABCC3, PK/PD-context) |
| `Navarro_2011.pdf` | Navarro SL et al., Determinants of aspirin metabolism in h…, Journal of nutrigenetics an… (2011) | pgx | 8 | [10.1159/000327782](https://doi.org/10.1159/000327782) | [21625173](https://www.ncbi.nlm.nih.gov/pubmed/21625173) | metadata signals extractable PGX data (UGT1A6, PK/PD-context) |
| `Zhang_2022.pdf` | Zhang Y et al., A Systematic Review of Population Pharm…, European journal of drug me… (2022) | pgx | 8 | [10.1007/s13318-021-00737-6](https://doi.org/10.1007/s13318-021-00737-6) | [34985725](https://www.ncbi.nlm.nih.gov/pubmed/34985725) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `van_2009.pdf` | van Oijen MG et al., Effect of genetic polymorphisms in UDP-…, Pharmacology (2009) | pgx | 8 | [10.1159/000205824](https://doi.org/10.1159/000205824) | [19262071](https://www.ncbi.nlm.nih.gov/pubmed/19262071) | metadata signals extractable PGX data (UGT1A6, PK/PD-context) |
| `Nozaki_2007.pdf` | Nozaki Y et al., Species difference in the inhibitory ef…, The Journal of pharmacology… (2007) | pgx | 7 | [10.1124/jpet.107.121491](https://doi.org/10.1124/jpet.107.121491) | [17578901](https://www.ncbi.nlm.nih.gov/pubmed/17578901) | metadata signals extractable PGX data (SLC22A8, PK/PD-context) |
| `Kuehl_2006.pdf` | Kuehl GE et al., Glucuronidation of the aspirin metaboli…, Drug metabolism and disposi… (2006) | pgx | 5 | [10.1124/dmd.105.005652](https://doi.org/10.1124/dmd.105.005652) | [16258079](https://www.ncbi.nlm.nih.gov/pubmed/16258079) | metadata signals extractable PGX data (UGT1A6) |
| `Sundaravadivel_2025.pdf` | Sundaravadivel P et al., Association of platelet ADP receptor va…, Personalized medicine (2025) | pgx | 5 | [10.1080/17410541.2025.2530381](https://doi.org/10.1080/17410541.2025.2530381) | [40644802](https://www.ncbi.nlm.nih.gov/pubmed/40644802) | metadata signals extractable PGX data (UGT1A6) |
| `Wang_2016.pdf` | Wang SH et al., Comparison of the antiplatelet effect o…, Genetics and molecular rese… (2016) | pgx | 5 | [10.4238/gmr.15027136](https://doi.org/10.4238/gmr.15027136) | [27173230](https://www.ncbi.nlm.nih.gov/pubmed/27173230) | metadata signals extractable PGX data (CYP2C19*2) |

<sub>queue written 2026-10-01T20:55:53.263020+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aaron_2018 | irrelevant | 0 | 0 | The paper is a clinical review of ear wax removal efficacy and does not report any pharmacokinetic parameters for choline salicylate. |
| PGx | Abe_2007 | not_relevant | 0 | 0 | The paper studies ameloblast differentiation in rats using sodium salicylate as a signaling modulator, not the pharmacogenomics of choline salicylate. |
| PD | Alam_2020 | not_relevant | 0 | 0 | The paper studies the pharmacological properties of a plant extract (Millettia peguensis) and does not report any pharmacodynamic or exposure-response data for choline salicylate. |
| PGx | Alarfaj_2023 | not_relevant | 0 | 0 | The paper investigates mucosal gene expression in IBD patients treated with 5-ASA or anti-TNF drugs, not the pharmacokinetics or pharmacodynamics of choline salicylate. |
| popPK | Ali_2003 | irrelevant | 0 | 0 | The study investigates DL-lysine-acetyl salicylate, not choline salicylate, which is the required subject drug. |
| popPK | Aljanabi_2026 | irrelevant | 0 | 0 | The paper describes a computational web server for retrosynthesis and ADMET prediction and does not report any experimental pharmacokinetic parameters for choline salicylate. |
| PGx | Allegaert_2008 | not_relevant | 0 | 0 | The paper discusses pharmacogenetics (CYP2D6) for tramadol, not choline salicylate. |
| PGx | Asakawa_2017 | not_relevant | 0 | 0 | The paper investigates the metabolic conversion of the odorant acetophenone to methyl salicylate by CYP1a2 in the context of olfaction, not the pharmacokinetics or pharmacodynamics of the drug choline salicylate. |
| PD | Aslan_2017 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for phenolic compounds, not a pharmacodynamic or exposure-response relationship for choline salicylate in a biological system. |
| PD | Banerjee_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for metformin-phenolic acid conjugates, not choline salicylate, and does not contain any pharmacokinetic or exposure-response data. |
| PD | Barroso-Neto_2012 | not_relevant | 1 | 0 | The paper is a quantum chemistry study of COX-1 binding and only qualitatively mentions IC50 values without providing a pharmacodynamic model or extractable exposure-response data for choline salicylate. |
| PGx | Basu_2004 | not_relevant | 0 | 0 | The paper discusses UGT1A10 activity and phosphorylation but does not report pharmacogenomic effects on the PK/PD of choline salicylate. |
| PGx | Bermejo_2010 | not_relevant | 0 | 0 | The paper discusses the clinical management of ulcerative colitis and the interaction between 5-ASA and thiopurines, but does not report pharmacogenomic effects on the PK or PD of choline salicylate. |
| PGx | Bharti_2019 | not_relevant | 0 | 0 | The paper studies the effect of salicylic acid on plant physiology (chickpea) under salt stress, not the pharmacogenomics of choline salicylate in humans. |
| PGx | Bitarishvili_2023 | not_relevant | 0 | 0 | The paper studies cadmium tolerance in barley plants, not the pharmacogenomics of choline salicylate in humans. |
| PD | Blanch_2020 | not_relevant | 0 | 0 | The paper investigates the agronomic effect of salicylic acid on grape phenolic content, not the pharmacodynamics of choline salicylate in a biological system. |
| popPK | Bloch_1980 | irrelevant | 0 | 0 | The paper describes a computer simulation model ("MacDope") and uses aspirin/salicylate as an illustrative example, but does not report original experimental pharmacokinetic parameters for choline salicylate. |
| popPK | Brouwers_1994 | irrelevant | 0 | 0 | The paper is a general review of NSAID drug interactions and does not report specific quantitative pharmacokinetic parameters for choline salicylate. |
| PD | Brouwers_1994 | not_relevant | 0 | 0 | The text is a general review of pharmacokinetic and pharmacodynamic drug interactions involving NSAIDs and does not report any specific concentration-effect or dose-response data for choline salicylate. |
| popPK | Caboni_2013 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Caboni_2013 | not_relevant | 0 | 0 | The paper discusses the nematicidal activity of mint extracts against nematodes and does not mention choline salicylate or report any pharmacodynamic parameters. |
| popPK | Cai_2025 | irrelevant | 0 | 0 | The paper describes a deep learning method for detecting spiral ganglion neurons in cochleae and contains no pharmacokinetic data for choline salicylate. |
| popPK | Caminada_2006 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay in fish cell lines, not a pharmacokinetic study, and does not report disposition parameters for choline salicylate. |
| popPK | Cao_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of KJ103 (an IgG-degrading enzyme), not choline salicylate. |
| popPK | Carpenter_2016 | irrelevant | 0 | 0 | The study focuses on milk yield and metabolic markers in dairy cows treated with sodium salicylate, not pharmacokinetic parameters for choline salicylate. |
| PD | Cazzaniga_2025 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) and MIC values for novel MtbI inhibitors, but does not contain any pharmacokinetic data, exposure-response analysis, or pharmacodynamic modeling for choline salicylate or any other drug. |
| popPK | Cha_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for zolpidem, not choline salicylate. |
| popPK | Chen_1978 | irrelevant | 0 | 0 | The study focuses on salicylate (the metabolite) in dogs, not choline salicylate, and no quantitative PK parameters for the subject drug are provided. |
| popPK | Chen_1994 | irrelevant | 0 | 0 | The study investigates benorilate (a prodrug of salicylic acid and paracetamol), not choline salicylate, and reports bioavailability parameters for the hydrolyzates rather than the subject drug. |
| PGx | Chen_2007 | not_relevant | 0 | 0 | The paper studies aspirin (acetylsalicylic acid), not choline salicylate. |
| popPK | Cheng_2026 | irrelevant | 0 | 0 | The paper is a review of paclitaxel nanomedicines and does not contain any data or parameters for choline salicylate. |
| popPK | Chung_2007 | irrelevant | 0 | 0 | The study is a mechanistic investigation of vasomotor function in Marfan syndrome using salicylate derivatives as pharmacological tools, not a pharmacokinetic study of choline salicylate. |
| PD | Chung_2007 | not_relevant | 0 | 0 | The paper studies the effect of indomethacin and valeryl salicylate (not choline salicylate) on aortic vasomotor function in a Marfan mouse model, reporting no PD parameters for choline salicylate. |
| PGx | Clappers_2008 | not_relevant | 0 | 0 | The paper studies acetyl salicylic acid (aspirin), not choline salicylate, and reports on clinical thrombotic events rather than specific PK/PD parameters of the target drug. |
| popPK | Cleveland_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of phenytoin, with salicylate acting only as a co-administered agent affecting phenytoin disposition, not as the subject drug. |
| PGx | Colizza_2007 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of CP-122,721, not choline salicylate. |
| PGx | Confort_2025 | not_relevant | 0 | 0 | The paper studies sugarcane resistance to nematodes and does not involve choline salicylate or human pharmacogenomics. |
| PD | Conrath_1995 | not_relevant | 0 | 0 | The paper studies plant defense responses and catalase inhibition by salicylic acid and INA, not the pharmacodynamics of choline salicylate in a clinical or pharmacological context. |
| PGx | Cosme_2021 | not_relevant | 0 | 0 | The paper studies plant-microbe interactions (arbuscular mycorrhizal colonization) and does not involve the drug choline_salicylate or human pharmacogenomics. |
| popPK | Costa_2014 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| PD | Costa_2014 | not_relevant | 0 | 0 | The paper focuses on the toxicity of ionic liquids and does not mention choline salicylate or report any pharmacodynamic parameters for it. |
| PGx | Coutinho_2019 | not_relevant | 0 | 0 | The paper discusses drought tolerance in transgenic soybeans and salicylic acid levels in plants, which is unrelated to human pharmacogenomics or choline salicylate PK/PD. |
| popPK | Cronstein_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on neutrophil adhesion and does not report pharmacokinetic parameters for choline salicylate. |
| popPK | Cuesta-Gragera_2015 | irrelevant | 0 | 0 | The study focuses on acetylsalicylic acid (ASA), not choline salicylate, and does not report PK parameters for the target drug. |
| popPK | Dang_2025 | irrelevant | 0 | 0 | The paper investigates gut microbiome signatures for predicting 5-ASA efficacy in ulcerative colitis and does not report pharmacokinetic parameters for choline salicylate. |
| PGx | Deng_2017 | not_relevant | 0 | 0 | The paper studies a rice mutant and salicylic acid signaling in plants, not human pharmacogenomics of choline salicylate. |
| popPK | Deshpande_2001 | irrelevant | 0 | 0 | The paper describes the synthesis and antiviral activity of influenza fusion inhibitors, not the pharmacokinetics of choline salicylate. |
| popPK | Ding_2026 | irrelevant | 0 | 0 | The paper is a multi-omics study on sheep temperament and gut microbiome, containing no pharmacokinetic data for choline salicylate. |
| popPK | Dittert_1977 | irrelevant | 0 | 0 | The paper is a review discussing pharmacokinetic modeling for various drugs (sulfamethazine, dicloxacillin, salicylate) but does not report quantitative PK parameters for choline salicylate. |
| PGx | Divya_2016 | not_relevant | 0 | 0 | The paper discusses plant genetics and resistance to insect pests, not human pharmacogenomics or choline salicylate. |
| PGx | Dong_2017 | not_relevant | 0 | 0 | The paper studies plant proteomics and insect resistance, not human pharmacogenomics or choline salicylate PK/PD. |
| popPK | Dubovská_1995 | irrelevant | 0 | 0 | The study focuses on acetylsalicylic acid (ASA) and salicylic acid, not choline salicylate. |
| PGx | Fabro_2008 | not_relevant | 0 | 0 | The paper studies plant gene expression in response to fungal infection and is unrelated to human pharmacogenomics or choline salicylate. |
| PGx | Ferreira_2025 | not_relevant | 0 | 0 | The paper studies wheat plant pathology and resistance to a fungal pathogen, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of choline salicylate. |
| PGx | Fuller_2018 | not_relevant | 0 | 0 | The paper evaluates the safety pharmacology of 2-hydroxybenzylamine (2-HOBA), not choline salicylate, and does not report pharmacogenomic effects. |
| popPK | Galbiati_2017 | irrelevant | 0 | 0 | The study is an in vitro toxicology assay for skin sensitization and does not report pharmacokinetic parameters for choline salicylate. |
| PGx | Galindo-González_2020 | not_relevant | 0 | 0 | The paper studies plant-pathogen interactions in Brassica napus, not human pharmacogenomics or choline salicylate. |
| PGx | Gautier_2018 | not_relevant | 0 | 0 | The paper studies somatic embryogenesis in Douglas-fir plants and does not involve human pharmacogenomics or the drug choline salicylate. |
| popPK | Gawarammana_2011 | irrelevant | 0 | 0 | The paper is a review of paraquat poisoning and does not report pharmacokinetic parameters for choline salicylate. |
| PGx | Gebauer_2017 | not_relevant | 0 | 0 | The paper studies plant genetics (Arabidopsis) and plant defense mechanisms, not human pharmacogenomics or the drug choline salicylate. |
| popPK | Gousiadou_2023 | irrelevant | 0 | 0 | The paper is an in silico QSAR study on PAMPA permeability for SARS-CoV-2 drugs and does not report pharmacokinetic parameters for choline salicylate. |
| popPK | Gu_2018 | irrelevant | 0 | 0 | no_text gate: only 184 chars of text extracted (&lt; 400) |
| popPK | Guinea_2008 | irrelevant | 0 | 0 | The paper describes the electrochemical degradation of salicylic acid in an aqueous medium, which is a chemical engineering/environmental study, not a pharmacokinetic study of choline salicylate. |
| PD | Gupta_1982 | not_relevant | 0 | 0 | The paper reports PK parameters (AUC, t1/2) for aspirin and phenylbutazone, not PD parameters or exposure-response relationships for choline salicylate. |
| PGx | Gómez-Tabales_2020 | not_relevant | 0 | 0 | The paper studies the modulation of CYP2C9 activity by cytochrome b5 using salicylic acid as a substrate, but it does not report pharmacogenomic effects (gene variants) on the PK/PD of choline salicylate. |
| popPK | Hadi_2025 | irrelevant | 0 | 0 | The study investigates the neuroprotective effects of rosiglitazone in tramadol-induced Parkinsonian rats and does not report pharmacokinetic parameters for choline salicylate. |
| PGx | Haigler_1992 | not_relevant | 0 | 0 | The paper describes microbial biodegradation of aromatic compounds and does not involve human pharmacogenomics or choline salicylate PK/PD. |
| popPK | Han_2023 | irrelevant | 0 | 0 | The paper studies plant physiology and signal transmission in Salvia miltiorrhiza, not the pharmacokinetics of choline salicylate. |
| PD | Hartwig-Otto_1983 | not_relevant | 1 | 0 | The text is a general review of pharmacokinetics and pharmacodynamics principles for analgesics, mentioning salicylate elimination kinetics but providing no specific exposure-response or dose-response data or numeric PD parameters for choline salicylate. |
| popPK | Henschel_1997 | irrelevant | 0 | 0 | The paper is an ecotoxicological study of salicylic acid and other drugs, not a pharmacokinetic study of choline salicylate. |
| PD | Henschel_1997 | not_relevant | 0 | 0 | The paper reports ecotoxicological EC50 values for salicylic acid (a metabolite), not choline salicylate, and does not provide a pharmacodynamic exposure-response model or numeric PD parameters for the specified drug. |
| PGx | Hill_2016 | not_relevant | 0 | 0 | The paper studies plant transcriptomics in kiwifruit, not human pharmacogenomics or choline salicylate. |
| popPK | Hiromoto_2006 | irrelevant | 0 | 0 | The paper describes the molecular mechanism of a bacterial transcriptional regulator (MobR) and does not contain any pharmacokinetic data for choline salicylate. |
| popPK | Ho_2020 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Ho_2020 | not_relevant | 0 | 0 | The paper investigates the allelopathic potential of rice extracts and identifies specific allelochemicals (e.g., salicylic acid, cinnamic acid) via metabolomics, but it does not report a pharmacodynamic or exposure-response relationship for choline salicylate. |
| popPK | Hou_2026 | irrelevant | 0 | 0 | The paper investigates selenium peptides for Parkinson's disease and does not study choline salicylate pharmacokinetics. |
| PGx | Huang_2016 | not_relevant | 0 | 0 | The paper studies plant biocontrol and gene expression in tomatoes, not human pharmacogenomics or choline salicylate PK/PD. |
| PGx | Huang_2018 | not_relevant | 0 | 0 | The paper studies sugarcane plant genetics and fungal disease resistance, not human pharmacogenomics or choline salicylate. |
| popPK | Hung_1998 | irrelevant | 0 | 0 | The study investigates O-acyl esters of salicylic acid (aspirin analogues) in rat liver, not choline salicylate. |
| popPK | Hurni_1993 | irrelevant | 0 | 0 | no_text gate: only 225 chars of text extracted (&lt; 400) |
| PD | Hurni_1993 | not_relevant | 0 | 0 | The paper studies sodium salicylate, not choline salicylate, and focuses on permeability enhancement mechanisms rather than pharmacodynamic exposure-response modeling. |
| popPK | Hussein_1994 | irrelevant | 0 | 0 | The study investigates salicylic acid (not choline salicylate) in an isolated perfused rat liver model, which does not report population PK parameters for the target drug. |
| PD | Ibrahim_2024 | not_relevant | 0 | 0 | The text consists solely of supplementary figure captions for chemical characterization (NMR, Mass Spec) and molecular docking interactions, containing no pharmacodynamic, exposure-response, or dose-response data. |
| PD | Iguchi_2022 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for natural compounds from Betula alba, not a pharmacodynamic or exposure-response relationship for the drug choline salicylate. |
| popPK | Isla_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for fosfomycin calcium, not choline salicylate. |
| PGx | Jiang_2023 | not_relevant | 0 | 0 | The paper analyzes genetic diversity in tea plants and their aroma metabolites, not the pharmacogenomics of choline salicylate in humans. |
| PGx | Jisha_2015 | not_relevant | 0 | 0 | The paper studies plant stress tolerance in rice and does not involve human pharmacogenomics or the drug choline salicylate. |
| PGx | Joo_2015 | not_relevant | 0 | 0 | The paper evaluates UGT inhibition by NSAIDs in vitro and does not report pharmacogenomic effects on the PK/PD of choline salicylate. |
| popPK | Jordan_2009 | irrelevant | 0 | 0 | The paper is a study on insect odorant receptors and their response to volatile compounds, not a pharmacokinetic study of choline salicylate. |
| PD | Jordan_2009 | not_relevant | 0 | 0 | The paper reports odorant receptor sensitivity (EC50) for methyl salicylate and citral in insects, which is unrelated to the pharmacodynamics of the drug choline salicylate. |
| popPK | Jordan_2021 | irrelevant | 0 | 0 | The paper is a medical education study comparing teaching methods for salicylate toxicity and contains no pharmacokinetic data for choline salicylate. |
| PGx | Joshi_2026 | not_relevant | 0 | 0 | The paper studies plant gene regulation in Ocimum sanctum and Arabidopsis, not human pharmacogenomics or choline salicylate PK/PD. |
| popPK | Jovanović_2024 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic study of vedolizumab, not choline salicylate. |
| popPK | Julien_1988 | irrelevant | 0 | 0 | The paper is a mechanistic study on red blood cell anion transport inhibition and does not report pharmacokinetic parameters for choline salicylate. |
| PD | Julien_1988 | not_relevant | 0 | 0 | The paper studies the inactivation of anion transport by arginine-specific reagents (HNPG, phenylglyoxal) and mentions salicylate only as a protective agent, without reporting any pharmacodynamic or exposure-response parameters for choline salicylate. |
| popPK | Kakehata_1996 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study on guinea-pig outer hair cells investigating the mechanism of salicylate action, not a pharmacokinetic study reporting disposition parameters for choline salicylate. |
| popPK | Kaldestad_1975 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of indomethacin, with salicylate (from acetylsalicylic acid) serving only as a co-administered agent for interaction assessment, and no PK parameters for choline salicylate are reported. |
| PGx | Kanupriya_2025 | not_relevant | 0 | 0 | The paper studies sunburn mitigation in dragon fruit plants and does not involve human pharmacogenomics or choline salicylate. |
| PGx | Karimi_2025 | not_relevant | 0 | 0 | The paper studies the effect of salicylic acid on plant stress tolerance, not the pharmacogenomics of choline salicylate in humans. |
| popPK | Kaur_2025 | irrelevant | 0 | 0 | The study is an in vitro mechanistic and molecular modeling investigation of novel NSAID analogues, not a pharmacokinetic study of choline salicylate. |
| PGx | Kaya_2020 | not_relevant | 0 | 0 | The paper studies salicylic acid in maize plants, not choline salicylate in humans, and does not involve pharmacogenomics. |
| PGx | Khan_2025 | not_relevant | 0 | 0 | The paper studies arsenic and submergence stress in rice genotypes, not the pharmacogenomics of choline salicylate in humans. |
| popPK | Khan_2026 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse drug withdrawal events in databases and does not report any pharmacokinetic parameters for choline salicylate. |
| popPK | Khatua_2015 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | Khatua_2015 | not_relevant | 0 | 0 | The paper studies the taxonomy and antioxidant/antimicrobial properties of a mushroom extract (Russula senecis) and does not report any pharmacodynamic or exposure-response data for choline salicylate. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The paper is a horticultural study on the vase life of cut lisianthus flowers using salicylic acid, not a pharmacokinetic study of choline salicylate. |
| popPK | Kimitsuki_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ototoxic drugs on hair cell channels and does not report pharmacokinetic parameters for choline salicylate. |
| PD | Kimitsuki_1994 | not_relevant | 0 | 0 | The paper investigates dihydrostreptomycin, cisplatin, and acetyl salicylate, but does not report any pharmacodynamic data or parameters for choline salicylate. |
| popPK | Koh_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for aspirin (ASA) and its metabolite salicylic acid (SA), not for the specific drug choline salicylate. |
| popPK | Kotschwar_2009 | irrelevant | 2 | 2 | The study reports pharmacokinetic parameters for sodium salicylate, not the target drug choline salicylate. |
| PGx | Kováčik_2012 | not_relevant | 0 | 0 | The paper studies aluminum uptake in plants using salicylic acid, not the pharmacogenomics of choline salicylate in humans. |
| PGx | Kuehl_2006 | not_relevant | 0 | 0 | The paper investigates the enzymatic glucuronidation of salicylic acid (an aspirin metabolite) by UGTs but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters for choline salicylate. |
| PGx | Kuzmina_2025 | not_relevant | 0 | 0 | The paper analyzes transcriptomic responses in pea plants to symbiotic inoculation and does not involve human pharmacogenomics or the drug choline salicylate. |
| PD | Laneuville_1994 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (IC50) for various NSAIDs, but does not mention choline salicylate or provide in vivo pharmacodynamic/exposure-response data. |
| popPK | Ledwidge_2012 | irrelevant | 0 | 0 | The study focuses on the prodrug ST0702 (niacin-aspirin) in non-human primates, not choline salicylate. |
| PGx | Lennard_1998 | not_relevant | 0 | 0 | The paper discusses thiopurine methyltransferase and thiopurines, not choline salicylate. |
| PGx | Li_2017_2 | not_relevant | 0 | 0 | The paper studies plant genetics and insect pest resistance in rice, not human pharmacogenomics or the pharmacokinetics of choline salicylate. |
| PD | Li_2019 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for PTP1B inhibition, which is a pharmacological potency metric, not a pharmacodynamic (exposure-response or dose-response) relationship in a biological system with numeric PD parameters like Emax or EC50. |
| PD | Li_2024 | not_relevant | 0 | 0 | The paper focuses on the endocrine-disrupting mechanism of salicylates on neurosteroidogenesis (5α-reductase inhibition) and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for choline salicylate. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study focuses on the preparation and efficacy of chitosan nanocarriers for plant disease control, not the pharmacokinetics of choline salicylate. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper studies chitosan nanocarriers loaded with salicylic acid and berberine for plant disease control, not the pharmacodynamics of choline salicylate in humans or animals. |
| PGx | Liao_2026 | not_relevant | 0 | 0 | The paper investigates plant salt tolerance and microbiome interactions, not human pharmacogenomics or the pharmacokinetics of choline salicylate. |
| PGx | Liao_2026_2 | not_relevant | 0 | 0 | The paper studies endophytic microbiomes and metabolomics in cucumber plants, not human pharmacogenomics or choline salicylate pharmacokinetics. |
| PGx | Lihavainen_2023 | not_relevant | 0 | 0 | The paper studies plant physiology and salicylic acid metabolism in aspen trees, not human pharmacogenomics or the pharmacokinetics of choline salicylate. |
| PGx | Liu_2015 | not_relevant | 0 | 0 | The paper studies plant physiology and nitric oxide in Trifolium repens, not human pharmacogenomics or choline salicylate. |
| PD | Liu_2016 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) and cellular activity for PTP1B inhibitors, not a pharmacodynamic exposure-response or dose-response relationship for choline salicylate. |
| popPK | Liu_2020_2 | irrelevant | 0 | 0 | The study focuses on methyl, ethyl, and glycol salicylates, not choline salicylate, and primarily deals with in vitro skin permeation and diffusion modeling. |
| PGx | Liu_2023 | not_relevant | 0 | 0 | The paper investigates phenolic extracts from rapeseed meal and their effect on alpha-glucosidase, not the pharmacogenomics of choline salicylate. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper is a plant biology study on Isatis indigotica cultivars and does not involve the drug choline salicylate or any pharmacokinetic analysis. |
| PGx | Lornac_2020 | not_relevant | 0 | 0 | The paper studies sulfur metabolism in Arabidopsis plants and does not involve the drug choline salicylate or human pharmacogenomics. |
| popPK | Lourenço-Silva_2026 | irrelevant | 0 | 0 | The paper is a clinical effectiveness study on allergic rhinitis medications (antihistamines and corticosteroids) and does not involve choline salicylate or pharmacokinetic parameters. |
| popPK | Lu_2026 | irrelevant | 0 | 0 | The study focuses on tigecycline-associated acute pancreatitis and does not report pharmacokinetic parameters for choline salicylate. |
| PGx | Luchessi_2017 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of salicylic acid metabolites in the context of aspirin and clopidogrel therapy, not choline salicylate. |
| PGx | Luis_2025 | not_relevant | 0 | 0 | The paper investigates plant genetics and induced systemic resistance in tomatoes, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of choline salicylate. |
| popPK | Luo_2026 | irrelevant | 0 | 0 | The paper studies cinnamic acid derivatives for plant viral disease control and does not involve choline salicylate pharmacokinetics. |
| PD | Luo_2026 | not_relevant | 0 | 0 | The paper studies cinnamic acid derivatives (specifically Compound B7) for plant viral disease control, not choline salicylate. |
| PGx | Löwhagen_2000 | not_relevant | 0 | 0 | The paper discusses azathioprine and mentions salicylic acid derivatives as inhibitors of TPMT, but it does not report pharmacogenomic effects on the PK/PD of choline salicylate itself. |
| PGx | Ma_2021 | not_relevant | 0 | 0 | The paper studies flowering time in alfalfa plants and is unrelated to human pharmacogenomics or choline salicylate. |
| PGx | Maestro-Gaitán_2025 | not_relevant | 0 | 0 | The paper investigates drought tolerance in quinoa plants and does not involve the drug choline_salicylate or human pharmacogenomics. |
| popPK | Magavern_2025 | irrelevant | 0 | 0 | The study focuses on pharmacogenomics and family history of amitriptyline discontinuation, and does not involve choline salicylate or report any pharmacokinetic parameters. |
| PD | Makhaeva_2023 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50, Ki) for tacrine-salicylic acid conjugates, not pharmacodynamic exposure-response data for choline salicylate. |
| PGx | Mangwanda_2016 | not_relevant | 0 | 0 | The paper studies plant-pathogen interactions and phytohormone signaling, not human pharmacogenomics or choline salicylate. |
| PGx | Mano_2007 | not_relevant | 0 | 0 | The study investigates in vitro enzyme inhibition of UGT2B7 by NSAIDs and does not report pharmacogenomic effects on the PK/PD of choline salicylate. |
| popPK | Marcin_2023 | irrelevant | 0 | 0 | The paper is an ecotoxicological study on UV filters (including 2-ethylhexyl salicylate) and does not report pharmacokinetic parameters for choline salicylate. |
| PD | Marcin_2023 | not_relevant | 0 | 0 | The paper reports ecotoxicological LC50/EC50 values for UV filters, not pharmacodynamic exposure-response relationships for the drug choline salicylate. |
| popPK | Matared_2026 | irrelevant | 0 | 0 | The paper is a plant pathology study on biocontrol bacteria and does not involve the drug choline salicylate or any pharmacokinetic analysis. |
| popPK | Mathurkar_2018 | irrelevant | 0 | 0 | The study investigates sodium salicylate (salicylic acid) in sheep, not choline salicylate. |
| PD | Mathurkar_2018 | not_relevant | 1 | 0 | The paper reports only pharmacokinetic parameters and explicitly states that PK/PD modelling is required to determine the effective concentration range, providing no numeric PD parameters or dose-response analysis. |
| PGx | Mei_2015 | not_relevant | 0 | 0 | The paper studies the effect of salicylic acid on copper toxicity in cotton plants, not the pharmacogenomics of choline salicylate in humans. |
| PD | Mitchell_1993 | not_relevant | 0 | 0 | The paper does not mention choline salicylate; it evaluates other NSAIDs (including sodium salicylate) and does not report PK/PD or exposure-response relationships. |
| popPK | Moore_2024 | irrelevant | 0 | 0 | The study focuses on salicylic acid and nicotine, not choline salicylate, and does not report systemic PK parameters for the target drug. |
| PGx | Mostofa_2019 | not_relevant | 0 | 0 | The paper studies the effect of salicylic acid on cadmium toxicity in rice plants, not the pharmacogenomics of choline salicylate in humans. |
| popPK | Mota_2021 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Mota_2021 | not_relevant | 0 | 0 | The paper studies ionic liquids and IL-APIs (including benzethonium salicylate and sodium salicylate) but does not report data for choline salicylate. |
| popPK | Mukherjee_2025 | irrelevant | 0 | 0 | The study focuses on anti-tubercular drugs (kanamycin, fluoroquinolones, ethionamide, PASA, cycloserine) and does not involve choline salicylate. |
| PD | Mukherjee_2025 | not_relevant | 2 | 1 | The paper does not study choline salicylate (it studies PASA and other anti-TB drugs) and reports no numeric PD parameters, only qualitative comparisons of PK indices (Cmax/MIC) between responders and non-responders. |
| PGx | Mukherjee_2025 | not_relevant | 0 | 0 | The paper focuses on second-line anti-tubercular drugs in children and does not mention choline salicylate or pharmacogenomic effects. |
| PGx | Murakoshi_2022 | not_relevant | 0 | 0 | The paper investigates the effect of salicylate derivatives on the protein localization of a specific SLC26A4 variant in cell culture, not the pharmacokinetic or pharmacodynamic parameters of choline salicylate in humans. |
| popPK | Muramatsu_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cyclooxygenase inhibition and does not report pharmacokinetic parameters for choline salicylate. |
| popPK | Nakijoba_2025 | irrelevant | 0 | 0 | The paper is a cross-sectional survey on medication use and safety during breastfeeding in Uganda and does not report any pharmacokinetic parameters for choline salicylate. |
| PGx | Namdjoyan_2017 | not_relevant | 0 | 0 | The study investigates the physiological effects of salicylic acid on safflower plants under zinc stress, not the pharmacogenomics of choline salicylate in humans. |
| PGx | Navarro_2011 | not_relevant | 0 | 0 | The paper focuses on aspirin metabolism and UGT induction, not choline salicylate pharmacogenomics. |
| popPK | Ndovi_2006 | irrelevant | 1 | 0 | The study measures salicylate (the metabolite of aspirin, not choline salicylate) and reports tissue-to-blood ratios rather than standard PK parameters like clearance or volume. |
| PGx | Nozaki_2007 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions between NSAIDs (including salicylate) and methotrexate, not the pharmacogenomics of choline salicylate. |
| popPK | Obata_1999 | irrelevant | 0 | 0 | The study investigates dopamine oxidation and hydroxyl radical formation in rat striatum, using salicylic acid derivatives as a trapping agent, and does not report pharmacokinetic parameters for choline salicylate. |
| PGx | Orf_2022 | not_relevant | 0 | 0 | The paper studies plant-pathogen interactions in Arabidopsis, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of choline salicylate. |
| PD | Othman_2023 | not_relevant | 0 | 0 | The paper reports IC50 values for novel 5-aminosalicylamide-4-thiazolinone hybrids, not choline salicylate, and does not provide a pharmacodynamic model or exposure-response relationship for the target drug. |
| PD | Pacifici_1991 | not_relevant | 0 | 0 | The paper studies the metabolism of benzoic acid and the inhibition of hippuric acid formation by salicylic acid (a metabolite/related compound), not the pharmacodynamics of choline salicylate. |
| popPK | Paclíková_2025 | irrelevant | 0 | 0 | The study investigates platelet aggregation and antiplatelet drug efficacy in diabetic patients, not the pharmacokinetics of choline salicylate. |
| popPK | Page_2011 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro activity of a Stat3 inhibitor, not the pharmacokinetics of choline salicylate. |
| PGx | Palikhe_2011 | not_relevant | 0 | 0 | The study investigates the association between gene polymorphisms and the clinical phenotype of aspirin-intolerant urticaria, but does not report changes in pharmacokinetic or pharmacodynamic parameters of choline salicylate. |
| PGx | Palmer_1992 | not_relevant | 0 | 0 | The paper investigates plant tissue culture and shoot regeneration in Brassica campestris, not human pharmacogenomics or choline salicylate. |
| PD | Pan_2018 | not_relevant | 1 | 0 | The paper is a review discussing the potential synergy of aspirin and dietary components, mentioning dose-response concepts qualitatively but providing no numeric PD parameters or specific exposure-response data for choline salicylate. |
| PD | Park_1988 | not_relevant | 0 | 0 | The text is a qualitative review of warfarin's mechanism of action and metabolism, mentioning salicylate only as a structural analog without providing any numeric PD parameters or exposure-response data for choline salicylate. |
| popPK | Parton_2000 | irrelevant | 0 | 0 | The study investigates carprofen and DL-lysine acetyl salicylate (aspirin), not choline salicylate. |
| PD | Paulus_1973 | not_relevant | 0 | 0 | The provided text is only a title and contains no data, analysis, or numeric parameters regarding choline salicylate or any other drug. |
| popPK | Picone_2021 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | Picone_2021 | not_relevant | 0 | 0 | The paper studies the effect of fragrance materials on copepods and does not mention choline salicylate or report any pharmacodynamic parameters. |
| popPK | Pinder_2019 | irrelevant | 0 | 0 | no_text gate: only 162 chars of text extracted (&lt; 400) |
| PD | Pinder_2019 | not_relevant | 0 | 0 | The paper focuses on physostigmine, not choline salicylate. |
| popPK | Poźniak_2013 | irrelevant | 0 | 0 | The study investigates acetylsalicylic acid and sodium salicylate, not choline salicylate. |
| popPK | Poźniak_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sodium salicylate (salicylate), not choline salicylate, which is a different chemical entity. |
| PGx | Prerostova_2020 | not_relevant | 0 | 0 | The paper studies plant physiology (Arabidopsis thaliana) and does not involve human pharmacogenomics or the drug choline salicylate. |
| PGx | Prescott_1983 | not_relevant | 0 | 0 | The paper discusses drug interactions involving aspirin and acetaminophen but does not report any pharmacogenomic effects on choline salicylate. |
| PGx | Pál_2019 | not_relevant | 0 | 0 | The paper studies polyamine signaling in wheat plants, not human pharmacogenomics or choline salicylate. |
| popPK | Rajakulendran_2025 | irrelevant | 0 | 0 | The paper is a natural product isolation and structural characterization study of N-salicyl-amino acids, not a pharmacokinetic study of choline salicylate. |
| PD | Rajakulendran_2025 | not_relevant | 0 | 0 | The paper reports the isolation and structural elucidation of N-salicyl-amino acids and their in-vitro antiparasitic activity (EC50), but does not study choline salicylate or report any pharmacokinetic/pharmacodynamic modeling or exposure-response relationships. |
| PD | Ranade_2001 | not_relevant | 0 | 0 | The paper is a review of magnesium salts and does not contain any data, analysis, or numeric parameters for choline salicylate. |
| popPK | Raschka_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lysine acetylsalicylate and acetylsalicylic acid, not choline salicylate. |
| PGx | Redzic_2020 | not_relevant | 0 | 0 | The paper describes a clinical trial for treating warts with salicylic acid and an antiviral, focusing on HPV genotyping for treatment response, not pharmacogenomics of choline salicylate PK/PD. |
| PD | Reingardiene_2006 | not_relevant | 1 | 0 | The text is a review article discussing general aspects of salicylate poisoning and treatment without providing specific numeric PD parameters or concentration-effect data for choline salicylate. |
| PGx | Ren_2026 | not_relevant | 0 | 0 | The paper investigates plant microbiome and resistance to bacterial wilt in peanuts, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of choline salicylate. |
| popPK | Roch-Ramel_1997 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PGx | Rodríguez-Azorín_2025 | not_relevant | 0 | 0 | The paper studies plant stress responses in citrus and does not involve human pharmacogenomics or the drug choline salicylate. |
| popPK | Rolli_2016 | irrelevant | 0 | 0 | no_text gate: only 171 chars of text extracted (&lt; 400) |
| PD | Rolli_2016 | not_relevant | 0 | 0 | The paper focuses on the phytotoxic effects of plant extracts and does not involve choline salicylate or any pharmacodynamic modeling. |
| PGx | Rosado_2021 | not_relevant | 0 | 0 | The paper studies bacterial succession during vermicomposting of a plant and does not involve human pharmacogenomics or choline salicylate pharmacokinetics. |
| popPK | Saeed_2019 | irrelevant | 0 | 0 | no_text gate: only 142 chars of text extracted (&lt; 400) |
| PD | Saeed_2019 | not_relevant | 0 | 0 | The paper focuses on phytochemical profiles and antioxidant/antiproliferative activities of kiwifruit cultivars and does not mention choline salicylate or report any pharmacodynamic parameters. |
| PGx | Salhab_2022 | not_relevant | 0 | 0 | The paper describes an analytical method for quantifying diclofenac metabolites and does not report pharmacogenomic effects on choline salicylate PK/PD. |
| popPK | Santamaria_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for rupatadine, not choline salicylate. |
| PGx | Savani_2023 | not_relevant | 0 | 0 | The paper studies the agricultural application of salicylic acid nanoparticles in cotton plants, not the pharmacogenomics of choline salicylate in humans. |
| popPK | Sharma_2011 | irrelevant | 0 | 0 | The paper describes the synthesis and biological evaluation of HIV-1 integrase inhibitors, not the pharmacokinetics of choline salicylate. |
| popPK | Shen_2016 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Shen_2016 | not_relevant | 0 | 0 | The paper focuses on aspirin and warfarin interactions, not choline salicylate, and does not report PD parameters for the specified drug. |
| popPK | Shen_2025 | irrelevant | 0 | 0 | The paper studies 3-hydroxydecanoic acid as a biopesticide and does not report pharmacokinetic parameters for choline salicylate. |
| PD | Shen_2025 | not_relevant | 0 | 0 | The paper studies 3-hydroxydecanoic acid (3-HDA) as a biopesticide, not choline salicylate, and reports no pharmacodynamic parameters for the target drug. |
| popPK | Shintaku_2007 | irrelevant | 0 | 0 | The study investigates salicylic acid (the metabolite) in an ex-vivo placental perfusion model, not the pharmacokinetics of the subject drug choline salicylate in vivo. |
| popPK | Smith_1980 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on leucocyte chemokinesis and does not report pharmacokinetic parameters for choline salicylate. |
| PD | Smith_1980 | not_relevant | 0 | 0 | The paper reports dose-response data for salicylic acid, not choline salicylate, and does not provide specific numeric PD parameters (e.g., IC50) for the tested compounds. |
| popPK | Song_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of p-aminobenzoic acid (PABA) and its metabolites, not choline salicylate. |
| PGx | Stare_2015 | not_relevant | 0 | 0 | The paper studies plant-virus interactions and salicylic acid in potatoes, not human pharmacogenomics of choline salicylate. |
| popPK | Steppan_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular signaling pathways using salicylate as an inhibitor, not a pharmacokinetic study of choline salicylate. |
| popPK | Sturkenboom_2021 | irrelevant | 0 | 0 | The paper is a review of anti-tuberculosis drugs and does not contain any data or parameters for choline salicylate. |
| PGx | Sundaravadivel_2025 | not_relevant | 0 | 0 | The study investigates aspirin, not choline salicylate. |
| PGx | Suo_2012 | not_relevant | 0 | 0 | The paper reports the isolation of phenolic lipids from cashew nuts and their biological activities, not the pharmacogenomics of choline salicylate. |
| popPK | Takechi_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for nemolizumab, not choline salicylate. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The paper investigates plant alkaloids for antiviral activity in plants and does not involve choline salicylate or pharmacokinetic studies. |
| popPK | Tang_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and antifungal bioactivity of arecoline derivatives, not the pharmacokinetics of choline salicylate. |
| popPK | Thiessen_1983 | irrelevant | 0 | 0 | no_text gate: only 53 chars of text extracted (&lt; 400) |
| PD | Thiessen_1983 | not_relevant | 0 | 0 | The provided text is only a title and contains no data, analysis, or numeric parameters regarding choline salicylate or any other drug. |
| popPK | Thiessen_1984 | irrelevant | 0 | 0 | The study investigates acetylsalicylic acid and salicylic acid, not choline salicylate. |
| PGx | Thomas_2015 | not_relevant | 0 | 0 | The study investigates gene expression and PGE2 levels in colon tissue, not pharmacokinetic or pharmacodynamic parameters of choline salicylate. |
| popPK | Tian_2017 | irrelevant | 0 | 0 | The study investigates aspirin (ASA) and its metabolite salicylic acid, not choline salicylate, and reports non-compartmental parameters for the wrong drug. |
| popPK | Tian_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Panax notoginseng saponins with aspirin as a co-administered agent, not choline salicylate. |
| PGx | Tlaye_2025 | not_relevant | 2 | 5 | The study explicitly states that genetic variants (SNPs) were not associated with aspirin nonresponsiveness or PK parameters; the reported effect is due to placental enzyme expression (GLYAT), not a germline gene variant. |
| PD | Toraman_2024 | not_relevant | 0 | 0 | The paper reports IC50 values for a crude algae extract, not for the specific drug choline salicylate, and does not provide a concentration-effect relationship or PD parameters for choline salicylate. |
| popPK | Trdá_2019 | irrelevant | 0 | 0 | The paper studies the antifungal and plant defense elicitor properties of the saponin aescin in plants and fungi, and does not involve the drug choline salicylate or any pharmacokinetic parameters. |
| popPK | Tunstall_1995 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of salicylate's effect on outer hair cell membrane capacitance, not a pharmacokinetic study of choline salicylate. |
| PD | Tzima_2023 | not_relevant | 0 | 0 | The paper discusses the theoretical implementation of salicylate anions in lead detoxification but does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for choline salicylate. |
| popPK | Udebuani_2021 | irrelevant | 0 | 0 | The study assesses acute toxicity of effluent and pharmaceuticals (including salicylic acid, not choline salicylate) on freshwater organisms and does not report pharmacokinetic parameters. |
| PD | Udebuani_2021 | not_relevant | 0 | 0 | The paper reports acute toxicity (EC50/LC50) for a mixture of veterinary pharmaceuticals (including salicylic acid, not choline salicylate) on freshwater organisms, which is an environmental toxicology study, not a pharmacodynamic exposure-response analysis for a drug in a clinical or physiological context. |
| popPK | Udebuani_2023 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Udebuani_2023 | not_relevant | 0 | 0 | The paper investigates the ecological risk of veterinary pharmaceuticals (including salicylic acid, not choline salicylate) in aquatic organisms and does not report pharmacodynamic or exposure-response relationships for choline salicylate. |
| popPK | Ullah_2026 | irrelevant | 0 | 0 | The paper investigates the phytochemical and pharmacological properties of the plant Fingerhuthia africana, not the pharmacokinetics of choline salicylate. |
| PGx | Veszelka_2018 | not_relevant | 0 | 0 | The paper compares in vitro cell culture models for BBB permeability and does not report pharmacogenomic effects on the PK/PD of choline salicylate. |
| PD | Vidhya_2020 | not_relevant | 0 | 0 | The paper focuses on troxerutin and elastase inhibition, not choline salicylate. |
| PGx | Visagie_2024 | not_relevant | 2 | 0 | The paper is a review discussing aspirin pharmacokinetics and mentions genetic variants as a factor in interindividual variation, but it does not report specific pharmacogenomic effects on PK/PD parameters for choline salicylate. |
| popPK | Vitali_2006 | irrelevant | 0 | 0 | The paper describes the purification and characterization of a plant protein and does not contain any pharmacokinetic data for choline salicylate. |
| PGx | Voora_2016 | not_relevant | 0 | 0 | The paper investigates the mechanism of aspirin's effect on gene expression (RUNX1) and disease outcomes, but does not report pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of choline salicylate. |
| PGx | Wang_2016 | not_relevant | 0 | 0 | The paper studies clopidogrel, not choline salicylate. |
| PGx | Wang_2017 | not_relevant | 0 | 0 | The paper investigates the mechanism of salicylate-induced bacterial persistence in E. coli, not the pharmacokinetics or pharmacodynamics of choline salicylate in humans or the influence of human gene variants on its efficacy. |
| PGx | Wang_2018 | not_relevant | 0 | 0 | The paper studies plant defense mechanisms in tea plants against insects and does not involve human pharmacogenomics or the drug choline salicylate. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper is a study on plant agrochemicals and bacterial infection, not a pharmacokinetic study of choline salicylate. |
| PD | Wang_2022 | not_relevant | 0 | 0 | The paper studies androst-4-ene derivatives as plant activators, not choline salicylate, and reports no exposure-response or PD relationship for the target drug. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | The paper focuses on microbial metabolic engineering for salicylic acid production, not human pharmacogenomics or pharmacokinetics of choline salicylate. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a phytochemical study on plant diterpenoids and viral activity, unrelated to choline salicylate pharmacokinetics. |
| PGx | Wassermann_2013 | not_relevant | 0 | 0 | The paper studies ABCG2 transport in dairy animals and mentions sodium salicylate, but does not report pharmacogenomic effects on PK/PD parameters for choline salicylate in humans. |
| PD | Watanabe_1994 | not_relevant | 0 | 0 | The paper studies MCI-186, not choline salicylate; salicylate is used only as a substrate in an in vitro assay. |
| PGx | Wei_2018 | not_relevant | 0 | 0 | The paper studies the effect of salicylic acid on tomato plants under cadmium stress, not the pharmacogenomics of choline salicylate in humans. |
| popPK | Wilkinson_2005 | irrelevant | 0 | 0 | The paper is a structural biology study on a bacterial transcriptional regulator (HucR) and does not involve choline salicylate pharmacokinetics. |
| PD | Wilson_1982 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| popPK | Winne_1987 | irrelevant | 0 | 0 | The study focuses on salicylic acid (not choline salicylate) in an in-situ rat model and does not report systemic pharmacokinetic parameters like clearance or volume for the subject drug. |
| PGx | Wu_2001 | not_relevant | 0 | 0 | The paper studies sodium salicylate (not choline salicylate) and reports on CYP2E1 modulation and toxicity in cell lines, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The study investigates the toxicological mechanisms of 2-ethylhexyl salicylate (a different chemical) in yeast, not the pharmacokinetics of choline salicylate. |
| PGx | Xie_2012 | not_relevant | 0 | 0 | The paper studies the metabolism of phospho-aspirin (MDC-22), not choline salicylate, and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Xie_2020 | irrelevant | 0 | 0 | no_text gate: only 142 chars of text extracted (&lt; 400) |
| PD | Xie_2020 | not_relevant | 0 | 0 | The paper focuses on the synthesis and antibacterial activity of fluorinated amychelin siderophores against Pseudomonas aeruginosa and does not mention choline salicylate or report any pharmacodynamic parameters for it. |
| popPK | Xue_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of salicylic acid (a metabolite of aspirin), not choline salicylate, which is a distinct chemical entity. |
| PGx | Yadu_2017 | not_relevant | 0 | 0 | The paper studies the effect of salicylic acid on plant stress tolerance in Pisum sativum, not human pharmacogenomics or PK/PD of choline salicylate. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of DEHA and MEHA in rats, not choline salicylate. |
| popPK | Yao_2025 | irrelevant | 0 | 0 | The paper studies the insecticidal and antifungal bioactivity of methyl salicylate (MeSA) from essential oils, not the pharmacokinetics of choline salicylate. |
| PD | Yao_2025 | not_relevant | 0 | 0 | The paper studies methyl salicylate (a different compound) in an in vitro/insect bioassay context, not choline salicylate pharmacodynamics in a biological system. |
| popPK | Yoon_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for bepotastine, not choline salicylate. |
| popPK | Yoshida_2007 | irrelevant | 0 | 0 | The study investigates salicylate (SA) or sodium salicylate, not choline salicylate, which is a different chemical entity. |
| popPK | Yoshida_2008 | irrelevant | 2 | 1 | The study uses salicylate as a model compound to investigate the effects of vasoactive agents on dermatopharmacokinetics, rather than reporting standard population PK parameters for choline salicylate. |
| PGx | Yu_2007 | not_relevant | 0 | 0 | The paper discusses a salicylic acid-based inhibitor of Lyp (PTPN22) in the context of autoimmune diseases, not the pharmacogenomics of choline salicylate. |
| popPK | Yu_2023 | irrelevant | 0 | 0 | The paper is a plant physiology study on salicylic acid elicitation in plant roots, not a pharmacokinetic study of choline salicylate. |
| PD | Yu_2023 | not_relevant | 0 | 0 | The paper studies salicylic acid as a plant elicitor in Oplopanax elatus roots, not choline salicylate in a pharmacological context, and reports no drug PD parameters. |
| PGx | Zhang_2021 | not_relevant | 0 | 0 | The paper reviews pesticide metabolism in plants and does not discuss human pharmacogenomics or choline salicylate. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper is a systematic review of methotrexate pharmacokinetics, not choline salicylate, and contains no quantitative PK parameters for the subject drug. |
| PGx | Zhang_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of methotrexate, not choline salicylate. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper focuses on the isolation and biological activities of compounds from Thermopsis lupinoides and does not mention choline salicylate or report any pharmacodynamic parameters for it. |
| PGx | Zhang_2026 | not_relevant | 0 | 0 | The paper investigates plant defense mechanisms against nematodes and does not involve human pharmacogenomics or the drug choline salicylate. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The paper describes a mass spectrometry database resource for drug exposure detection and does not report pharmacokinetic parameters for choline salicylate. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The study investigates the therapeutic efficacy of a sialidase inhibitor (oseltamivir) in ulcerative colitis and does not report pharmacokinetic parameters for choline salicylate. |
| popPK | Zhu_2018 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and fungicidal activity of phenazine-salicylic acid conjugates, containing no pharmacokinetic data for choline salicylate. |
| PGx | Zhu_2020 | not_relevant | 0 | 0 | The paper studies plant genetics (rice blast resistance) and salicylic acid biosynthesis, not human pharmacogenomics of choline salicylate. |
| PGx | van_2009 | not_relevant | 0 | 0 | The paper studies acetylsalicylic acid (ASA), not choline salicylate. |
| PGx | van_2015 | not_relevant | 0 | 0 | The paper investigates genetic variation in the GLYAT gene and glycine conjugation pathway conservation, but does not report pharmacokinetic or pharmacodynamic effects of choline salicylate. |
| PGx | van_2016 | not_relevant | 0 | 0 | The paper is a review that explicitly states there is no data on the influence of SNPs on enzyme activity or aspirin metabolism. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
