<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;trientine&quot;}]"></div>

# trientine

- **generic name:** trientine
- **ATC codes:** `A16AX12`
- **DrugBank:** [DB06824](https://go.drugbank.com/drugs/DB06824) · **PubChem:** not captured
- **groups:** approved

## About

**Description.** Triethylenetatramine (TETA), also known as trientine, is a potent and selective copper (II)-selective chelator. It is a structural analog of linear polyamine compounds, [spermidine] and [spermine]. TETA was first developed in Germany in 1861 and its chelating properties were first recognized in 1925.[A19333] Initially approved by the FDA in 1985 as a second-line treatment for Wilson's disease,[A19334] TETA is currently indicated to treat adults with stable Wilson’s disease who are de-coppered and tolerant to [penicillamine].[L41730]

TETA has been investigated in clinical trials for the treatment of heart failure in patients with diabetes.[A18804,A19332,A19333,A19334,A19335]

**Indication.** Triethylenetetramine is a copper chelator indicated for the treatment of adult patients with stable Wilson’s disease who are de-coppered and tolerant to [penicillamine].[L41730]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 03:11 | 6:25 | 0/0/0 | 0/0/0 | 0/0/0 | 24,030/1,218 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 3/13 | 4/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trientine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…TETA is poorly absorbed from the gastrointestinal tract…”</sub> | prose |
| excretion | kidney | <sub>“…mainly excreted in the urine…”</sub> | prose |

<sub>Actors without a tissue in the table: CA14 (inhibitor), SAT1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 550 matched, 123 returned
- **screened:** 5  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cho_2009.pdf` | Cho HY et al., Pharmacokinetic and pharmacodynamic mod…, Journal of clinical pharmac… (2009) | popPK | 9 | [10.1177/0091270009337939](https://doi.org/10.1177/0091270009337939) | [19602718](https://pubmed.ncbi.nlm.nih.gov/19602718) | A two-compartment population-PK model is reported, but no numeric trientine PK parameter estimates are provided in the supplied evidence. |
| `Babich_1994.pdf` | Babich M et al., A novel phospholipase C inhibitor and p…, The Journal of pharmacology… (1994) | pd | 5 | not captured | [8169821](https://www.ncbi.nlm.nih.gov/pubmed/8169821) | metadata signals extractable PD data (IC50) |
| `Tatrai_1994.pdf` | Tatrai A et al., U-73122, a phospholipase C antagonist,…, Biochimica et biophysica ac… (1994) | pd | 5 | [10.1016/0167-4889(94)90296-8](https://doi.org/10.1016/0167-4889(94)90296-8) | [7803518](https://www.ncbi.nlm.nih.gov/pubmed/7803518) | metadata signals extractable PD data (IC50) |
| `Biancani_1994.pdf` | Biancani P et al., Differential signal transduction pathwa…, The American journal of phy… (1994) | pd | 4 | [10.1152/ajpgi.1994.266.5.G767](https://doi.org/10.1152/ajpgi.1994.266.5.G767) | [8203523](https://www.ncbi.nlm.nih.gov/pubmed/8203523) | metadata signals extractable PD data (Emax) |
| `Borda_1999.pdf` | Borda TG et al., Haloperidol-mediated phosphoinositide h…, Canadian journal of physiol… (1999) | pd | 4 | [10.1139/cjpp-77-1-22](https://doi.org/10.1139/cjpp-77-1-22) | [10535662](https://www.ncbi.nlm.nih.gov/pubmed/10535662) | metadata signals extractable PD data (Emax) |
| `Chawengrum_2021.pdf` | Chawengrum P et al., Diterpenoids with Aromatase Inhibitory…, Journal of natural products (2021) | pd | 4 | [10.1021/acs.jnatprod.0c01292](https://doi.org/10.1021/acs.jnatprod.0c01292) | [34110821](https://www.ncbi.nlm.nih.gov/pubmed/34110821) | metadata signals extractable PD data (IC50) |
| `Dorn_1993.pdf` | Dorn GW et al., Thromboxane A2 stimulated signal transd…, The Journal of pharmacology… (1993) | pd | 4 | not captured | [8474027](https://www.ncbi.nlm.nih.gov/pubmed/8474027) | metadata signals extractable PD data (IC50) |
| `Gu_2025.pdf` | Gu WJ et al., Two undescribed steroids from Munronia…, Natural product research (2025) | pd | 4 | [10.1080/14786419.2023.2272286](https://doi.org/10.1080/14786419.2023.2272286) | [37874658](https://www.ncbi.nlm.nih.gov/pubmed/37874658) | metadata signals extractable PD data (IC50) |
| `Klein_2011.pdf` | Klein RR et al., Direct activation of human phospholipas…, The Journal of biological c… (2011) | pd | 4 | [10.1074/jbc.M110.191783](https://doi.org/10.1074/jbc.M110.191783) | [21266572](https://www.ncbi.nlm.nih.gov/pubmed/21266572) | metadata signals extractable PD data (EC50) |
| `Kong_2023.pdf` | Kong X et al., Two lanostane triterpenoids with α-gluc…, Natural product research (2023) | pd | 4 | [10.1080/14786419.2022.2050911](https://doi.org/10.1080/14786419.2022.2050911) | [35289692](https://www.ncbi.nlm.nih.gov/pubmed/35289692) | metadata signals extractable PD data (IC50) |
| `Pitt_2005.pdf` | Pitt SJ et al., Potentiation of P2Y receptors by physio…, Molecular pharmacology (2005) | pd | 4 | [10.1124/mol.104.009902](https://doi.org/10.1124/mol.104.009902) | [15710744](https://www.ncbi.nlm.nih.gov/pubmed/15710744) | metadata signals extractable PD data (EC50) |
| `Soria-Jasso_1996.pdf` | Soria-Jasso LE et al., Histamine H1 receptor activation stimul…, European journal of pharmac… (1996) | pd | 4 | [10.1016/s0014-2999(96)00782-0](https://doi.org/10.1016/s0014-2999(96)00782-0) | [9007531](https://www.ncbi.nlm.nih.gov/pubmed/9007531) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-30T03:11:39.725395+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Acharya_2020 | not_relevant | 0 | 0 | The paper reports an ATP7B genotype and clinical response to trientine but does not evaluate a trientine pharmacokinetic or pharmacodynamic parameter. |
| popPK | Afzal_2026 | irrelevant | 0 | 0 | This is an antimicrobial phytochemical study, not a trientine pharmacokinetic study, and contains no trientine disposition parameters. |
| PD | Afzal_2026 | not_relevant | 0 | 0 | The paper concerns Anagallis foemina terpenoids against Acinetobacter baumannii and reports no trientine exposure-response, dose-response, or numeric pharmacodynamic parameters. |
| popPK | Ba_2023 | irrelevant | 0 | 0 | This study concerns amoxicillin/clavulanic acid resistance in bacteria and reports no trientine pharmacokinetic parameters. |
| PD | Ba_2023 | not_relevant | 0 | 0 | The paper does not study trientine or report trientine exposure-/dose-response parameters; its limited dose-response results concern amoxicillin/clavulanate only. |
| PD | Babich_1994 | not_relevant | 0 | 0 | The paper does not study trientine; its reported IC50 applies to the unrelated phospholipase C inhibitor U73,122. |
| popPK | Balbontín_2021 | irrelevant | 0 | 0 | This paper concerns antibiotic resistance and RNase HI, with no trientine pharmacokinetic parameters. |
| PD | Balbontín_2021 | not_relevant | 0 | 0 | The text provides no trientine exposure- or dose-response analysis and no numeric pharmacodynamic parameters or effect-versus-concentration relationship. |
| popPK | Biancani_1994 | irrelevant | 0 | 0 | This is an in-vitro cat esophageal physiology study of acetylcholine signaling and reports no trientine pharmacokinetic parameters. |
| PD | Biancani_1994 | not_relevant | 0 | 0 | The paper studies acetylcholine and intracellular signaling in cat lower esophageal sphincter, not trientine, and reports no trientine exposure- or dose-response relationship or numeric PD parameters. |
| popPK | Billesbølle_2023 | irrelevant | 0 | 0 | This is a structural odorant-receptor study of propionate and reports no trientine pharmacokinetic parameters. |
| PD | Billesbølle_2023 | not_relevant | 0 | 0 | The paper concerns propionate activation of the odorant receptor OR51E2 and reports no pharmacodynamic or exposure-response relationship for trientine. |
| PD | Bleasdale_1990 | not_relevant | 0 | 0 | The paper studies the pharmacology of U-73122 (a phospholipase C inhibitor) and does not mention trientine or report any exposure-response relationship for it. |
| popPK | Borda_1999 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | Borda_1999 | not_relevant | 0 | 0 | The paper investigates haloperidol-mediated phosphoinositide hydrolysis, not trientine, and reports no trientine PD or exposure-response relationship. |
| PD | Chawengrum_2021 | not_relevant | 0 | 0 | The paper concerns diterpenoids from Kaempferia elegans and reports no pharmacodynamic or exposure-response relationship for trientine. |
| popPK | Chen_2001 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of clomiphene, not a pharmacokinetic study of trientine. |
| PD | Chen_2001 | not_relevant | 0 | 0 | The paper reports a concentration-response relationship for clomiphene in osteoblast-like cells (EC50 50 microM), not for trientine. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | This computational drug-design paper does not study trientine or report trientine pharmacokinetic parameters. |
| PD | Chen_2023 | not_relevant | 0 | 0 | The paper does not study trientine or report any trientine dose/exposure-response relationship or numeric pharmacodynamic parameters. |
| popPK | Cheng_2000 | irrelevant | 0 | 0 | This is a cellular calcium-signaling study with no trientine pharmacokinetic parameters. |
| PD | Cheng_2000 | not_relevant | 0 | 0 | The study reports a histamine concentration-[Ca2+]i response (EC50 about 1 microM), but does not evaluate trientine or provide trientine-specific pharmacodynamic parameters. |
| popPK | Cheng_2001 | irrelevant | 0 | 0 | This is an in-vitro calcium-signaling study of fendiline, not a pharmacokinetic study of trientine. |
| PD | Cheng_2001 | not_relevant | 0 | 0 | The paper reports a concentration-response relationship with an EC50 of 25 micromol/L for fendiline, not trientine. |
| popPK | Cheng_2002 | irrelevant | 0 | 0 | The paper studies the mechanism of gossypol on calcium levels in liver cells and does not involve trientine or pharmacokinetic parameters. |
| PD | Cheng_2002 | not_relevant | 0 | 0 | The paper studies gossypol, not trientine. |
| popPK | Cho_2009 | relevant | 9 | 1 | A two-compartment population-PK model is reported, but no numeric trientine PK parameter estimates are provided in the supplied evidence. |
| popPK | Choi_2003 | irrelevant | 0 | 0 | This is an in-vitro ginsenoside ion-channel study with no trientine pharmacokinetic parameters. |
| PD | Choi_2003 | not_relevant | 0 | 0 | The paper reports an EC50 for ginsenoside in Xenopus oocytes, not a pharmacodynamic or exposure-response relationship for trientine. |
| popPK | Corlatti_2026 | irrelevant | 0 | 0 | This is a phytochemical review of Helianthus species with no trientine pharmacokinetic parameters. |
| PD | Corlatti_2026 | not_relevant | 0 | 0 | The paper is a review of Helianthus phytochemicals and biological activities and contains no data on trientine or any numeric PK/PD, exposure-response, or dose-response relationship. |
| popPK | Cuffaro_2025 | irrelevant | 0 | 0 | The paper studies zoledronic acid analogues in antibody–drug conjugates, not trientine, and reports no trientine pharmacokinetic parameters. |
| PD | Cuffaro_2025 | not_relevant | 0 | 0 | The paper does not study trientine or report a trientine dose/exposure-response relationship; it only evaluates fixed-concentration cetuximab aminobisphosphonate ADCs and binding/efficacy outcomes. |
| PGx | Das_2006 | not_relevant | 0 | 0 | The review discusses ATP7B mutations and Wilson disease biology but does not report genotype- or phenotype-dependent effects on any pharmacokinetic or pharmacodynamic parameter of trientine. |
| popPK | Dorn_1993 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | Dorn_1993 | not_relevant | 0 | 0 | The paper concerns thromboxane A2 signaling in vascular smooth muscle and reports no trientine exposure-/dose-response relationship or numeric pharmacodynamic parameters. |
| popPK | Drakulich_2003 | irrelevant | 0 | 0 | This is a cellular receptor-signaling study of neuropeptide Y, not a trientine pharmacokinetic study. |
| PD | Drakulich_2003 | not_relevant | 0 | 0 | The paper studies NPY-mediated sensitization and reports an NPY EC50, but contains no data or PD/exposure-response relationship for trientine. |
| PGx | El-Youssef_2003 | not_relevant | 0 | 0 | The text discusses Wilson disease genetics and treatment generally but reports no genotype- or phenotype-dependent pharmacokinetic or pharmacodynamic effect of trientine. |
| PGx | Erickson_2023 | not_relevant | 0 | 0 | The paper studies Aeromonas genomics and antimicrobial MICs, with no trientine exposure and no gene variant effect on a trientine PK or PD parameter. |
| popPK | European_2019 | irrelevant | 0 | 0 | This is an antimicrobial-resistance surveillance report with no trientine pharmacokinetic parameters or numeric disposition values. |
| PD | European_2019 | not_relevant | 0 | 0 | The paper concerns antimicrobial resistance surveillance and contains no trientine exposure-, dose-, or concentration-response analysis or numeric pharmacodynamic parameters. |
| popPK | Fan_1998 | irrelevant | 0 | 0 | This is a cellular signaling study with no trientine pharmacokinetic parameters or numeric disposition values. |
| PD | Fan_1998 | not_relevant | 0 | 0 | The paper studies U73122/U73343 in cell signaling and reports no pharmacodynamic or exposure-response relationship for trientine. |
| PD | Fatmawati_2011 | not_relevant | 0 | 0 | The paper concerns ganoderol B and α-glucosidase inhibition, not trientine, so it reports no trientine PD or exposure-response relationship. |
| PD | Gu_2025 | not_relevant | 0 | 0 | The text concerns steroids from Munronia pinnata and reports no trientine pharmacodynamic or exposure-response relationship. |
| PD | Hilmi_2003 | not_relevant | 0 | 0 | The paper concerns cytotoxic sesquiterpene lactones from Warionia saharae and reports no pharmacodynamic or exposure-response relationship for trientine. |
| PD | Horiuchi_1988 | not_relevant | 0 | 0 | The paper evaluates cytotoxicity of RM-49, FK973, and other anticancer drugs, not trientine, and reports no trientine-specific exposure-response or dose-response parameters. |
| PD | Hwang_2013 | not_relevant | 0 | 0 | The paper concerns a novel phenyl alkene and reports an IC50 for that compound, not trientine, with no trientine PD or exposure-response relationship. |
| PD | Ilovaisky_2025 | not_relevant | 0 | 0 | The paper does not study trientine or report a trientine-related pharmacodynamic, exposure-response, or dose-response relationship. |
| popPK | Jan_2000 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of W-7, not a pharmacokinetic study of trientine. |
| PD | Jan_2000 | not_relevant | 0 | 0 | The paper reports a concentration-effect EC50 for W-7, not for trientine, so no trientine PD relationship or parameters are available. |
| popPK | Jan_2002 | irrelevant | 0 | 0 | This is an in-vitro calcium-signaling study of CP55,940, not a pharmacokinetic study of trientine. |
| PD | Jan_2002 | not_relevant | 0 | 0 | The paper reports a concentration-effect relationship (EC50 8 microM) for CP55,940, not for trientine; no trientine PD parameters or exposure-response data are provided. |
| PD | Jung_2010 | not_relevant | 0 | 0 | The paper does not study trientine or report a trientine exposure-response/dose-response relationship or numeric PD parameters. |
| popPK | Kaiho_1996 | irrelevant | 0 | 0 | This is an in-vitro ATP ion-channel study with no trientine pharmacokinetic parameters. |
| PD | Kaiho_1996 | not_relevant | 0 | 0 | The paper reports an ATP concentration-effect relationship (EC50 approximately 0.75 mM) in NG108-15 cells, but does not study trientine or report trientine-related pharmacodynamic parameters. |
| popPK | Kim_2018 | irrelevant | 0 | 0 | This study concerns phthalate exposure and respiratory outcomes, not trientine pharmacokinetics. |
| PD | Kim_2018 | not_relevant | 0 | 0 | The paper evaluates urinary phthalate metabolite exposure and respiratory outcomes, not trientine, and reports no trientine PD or exposure-response parameters. |
| popPK | Kimura_1999 | irrelevant | 0 | 0 | This is a hepatocyte proliferation study with no trientine or pharmacokinetic parameters. |
| PD | Kimura_1999 | not_relevant | 0 | 0 | The paper does not study trientine or report any trientine dose/exposure-response relationship or PD parameters. |
| popPK | Klein_2011 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of U73122, not a pharmacokinetic study of trientine. |
| PD | Klein_2011 | not_relevant | 0 | 0 | The paper reports a concentration-effect relationship for U73122, not for trientine. |
| PD | Kondempudi_2009 | not_relevant | 0 | 0 | The paper concerns marine sponge compounds and reports IC50 cytotoxicity for compound 2, not trientine or a trientine PD/exposure-response relationship. |
| PD | Kong_2023 | not_relevant | 0 | 0 | The paper evaluates Ganoderma triterpenoids for alpha-glucosidase inhibition, not trientine, and reports no trientine exposure- or dose-response relationship. |
| popPK | Kumar_2022 | irrelevant | 0 | 0 | This is an in-silico BBB permeation study and reports no quantitative trientine pharmacokinetic parameters. |
| PD | Kumar_2022 | not_relevant | 0 | 0 | The paper develops computational BBB-permeation pharmacophore models and reports no trientine dose- or exposure-response relationship or numeric PD parameters. |
| popPK | Lee_2001 | irrelevant | 0 | 0 | This is a cellular histamine calcium-signaling study with no trientine pharmacokinetic parameters. |
| PD | Lee_2001 | not_relevant | 0 | 0 | The paper reports a concentration-effect EC50 for histamine-induced Ca2+ responses, not for trientine, and provides no trientine PD or exposure-response relationship. |
| popPK | Lee_2001_2 | irrelevant | 0 | 0 | This is a cellular calcium-mobilization study of eicosatriynoic acid, not a trientine pharmacokinetic study. |
| PD | Lee_2001_2 | not_relevant | 0 | 0 | The paper reports a concentration-dependent Ca2+ effect and EC50 for 5,8,11-eicosatriynoic acid, not for trientine. |
| popPK | Lee_2018 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of trenbolone, not a pharmacokinetic study of trientine. |
| PD | Lee_2018 | not_relevant | 0 | 0 | The paper concerns 17β-trenbolone, not trientine; although it reports a 30 pM proliferation EC50 for 17β-trenbolone, no trientine PD or exposure-response relationship is provided. |
| PD | Leutcha_2021 | not_relevant | 0 | 0 | The paper studies tirucallane derivatives from Stereospermum acuminatissimum, not trientine, and reports no trientine exposure-response or dose-response parameters. |
| popPK | Li_2018 | irrelevant | 0 | 0 | This study concerns berberine and TetA in E. coli, not trientine pharmacokinetics. |
| PD | Li_2018 | not_relevant | 0 | 0 | The paper reports a bacterial EC50 for berberine, not trientine, and provides no trientine exposure-, dose-, or concentration-response relationship. |
| popPK | Lin_2002 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of fendiline, not a trientine pharmacokinetic study. |
| PD | Lin_2002 | not_relevant | 0 | 0 | The paper reports a concentration-effect EC50 for fendiline, not trientine, so it provides no PD relationship or parameters for trientine. |
| popPK | Lindauer_2026 | irrelevant | 0 | 0 | This models copper metabolism and VTX-801, not trientine pharmacokinetics, and reports no trientine parameter values. |
| PD | Lindauer_2026 | not_relevant | 0 | 0 | The paper models VTX-801 dose-response and copper biomarkers, but reports no trientine-specific exposure-response or dose-response relationship or numeric PD parameters. |
| popPK | Liu_2002 | irrelevant | 0 | 0 | This is an in-vitro carvedilol calcium-signaling study with no trientine pharmacokinetic parameters. |
| PD | Liu_2002 | not_relevant | 0 | 0 | The paper reports a concentration-effect relationship for carvedilol, not trientine, so no trientine PD parameters or exposure/dose-response relationship are provided. |
| popPK | Liu_2003 | irrelevant | 0 | 0 | This is a cellular signaling study with no trientine pharmacokinetic parameters or numeric disposition values. |
| PD | Liu_2003 | not_relevant | 0 | 0 | The paper reports an apomorphine concentration-effect relationship (EC50 10 nM) in dopamine D2S-expressing cells, but contains no data or PD relationship for trientine. |
| PD | Liu_2008 | not_relevant | 0 | 0 | The paper concerns cytotoxic sesquiterpenes from Ligularia platyglossa and reports IC50 values for those compounds, not trientine or a trientine exposure-/dose-response relationship. |
| PD | Liu_2022 | not_relevant | 0 | 0 | The paper concerns lanostane triterpenoids from Fomitopsis pinicola and does not study trientine or report a trientine exposure-response or dose-response relationship. |
| popPK | Lu_2002 | irrelevant | 0 | 0 | This is an in-vitro calcium-signaling study of CP55,940, not a pharmacokinetic study of trientine. |
| PD | Lu_2002 | not_relevant | 0 | 0 | The paper reports a concentration-effect relationship with an EC50 of 8 µM for CP55,940, not for trientine. |
| PD | Maltais_2011 | not_relevant | 0 | 0 | The paper concerns a 17β-HSD1 inhibitor rather than trientine and reports no trientine dose- or exposure-response relationship. |
| PGx | Maltais_2014 | not_relevant | 0 | 0 | This paper concerns a 17β-HSD1 inhibitor and reports no pharmacogenomic effects on any PK or PD parameter of trientine. |
| PD | Martínez-Luis_2005 | not_relevant | 0 | 0 | The paper concerns phytotoxic fungal metabolites and reports IC50 values for those compounds, not trientine or a trientine exposure-/dose-response relationship. |
| PD | Matsuda_2009 | not_relevant | 0 | 0 | The paper concerns Cordyceps sterols and cytotoxicity in HL-60 cells; trientine is not studied and no trientine exposure-response or dose-response relationship is reported. |
| PD | Mernyák_2015 | not_relevant | 0 | 0 | The paper concerns in vitro antiproliferative IC50 values for synthetic estradiol triazoles, not trientine, and reports no trientine exposure-response or dose-response relationship. |
| PGx | Mohr_2025 | not_relevant | 0 | 0 | The paper does not evaluate how ATP7B or any other genetic variant, genotype, or phenotype alters a pharmacokinetic or pharmacodynamic parameter of trientine. |
| popPK | Morgan_1983 | irrelevant | 0 | 0 | The study concerns a fluorescent sterol analog, not trientine, and reports no trientine pharmacokinetic parameters. |
| popPK | Neurath_1995 | irrelevant | 0 | 0 | This is an antiviral porphyrin-binding study with no trientine or quantitative pharmacokinetic parameters. |
| PD | Neurath_1995 | not_relevant | 0 | 0 | The paper concerns MTCPP and other porphyrin derivatives, not trientine, and reports no trientine dose- or exposure-response relationship or numeric PD parameters. |
| PD | Nguyen_2017 | not_relevant | 0 | 0 | The paper evaluates cytotoxic dose-response effects of isolated pregnane steroids, not trientine, and reports no trientine PD or exposure-response parameters. |
| popPK | Noriyama_2006 | irrelevant | 0 | 0 | The paper is a neurophysiology study on dopamine receptors in rat hippocampus and does not involve trientine or pharmacokinetic parameters. |
| PD | Noriyama_2006 | not_relevant | 0 | 0 | The paper studies dopamine in neonatal rat hippocampus and does not mention trientine or report any pharmacodynamic parameters for it. |
| PGx | Palan_2026 | not_relevant | 0 | 0 | The ATP7B variants are reported for Wilson disease diagnosis, not as modifying a pharmacokinetic or pharmacodynamic parameter of trientine. |
| PGx | Pandit_2002 | not_relevant | 0 | 0 | The text discusses Wilson disease genetics and trientine therapy generally but reports no genotype-related pharmacokinetic or pharmacodynamic effect. |
| PGx | Parr_2012 | not_relevant | 0 | 0 | The paper concerns CYP-mediated metabolism of metandienone/NorMD, not trientine, and reports no genetic variant, genotype, or phenotype effect on a trientine PK/PD parameter. |
| popPK | Patel_2022 | irrelevant | 0 | 0 | This is a population-PK study of imipenem/relebactam, not trientine, and reports no trientine parameters. |
| PD | Patel_2022 | not_relevant | 0 | 0 | The paper concerns imipenem/cilastatin/relebactam rather than trientine and reports only simulated PK/PD target attainment, with no extractable numeric PD parameters or effect-versus-concentration relationship. |
| PGx | Patil_2013 | not_relevant | 0 | 0 | This review discusses ATP7B genotype–phenotype relationships in Wilson disease but does not report genotype-dependent pharmacokinetic or pharmacodynamic effects for trientine. |
| popPK | Pitt_2005 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| PD | Pitt_2005 | not_relevant | 0 | 0 | The paper concerns P2Y receptor potentiation by extracellular potassium and reports no trientine exposure-, dose-, or pharmacodynamic-response relationship. |
| PD | Qu_2010 | not_relevant | 0 | 0 | The paper concerns cytotoxic diterpenoids from Scutellaria barbata, not trientine, and reports no trientine exposure- or dose-response relationship. |
| PD | Quang_2013 | not_relevant | 0 | 0 | The paper concerns cytotoxic fungal constituents and does not study trientine or report a trientine dose-, concentration-, or exposure-response relationship. |
| PD | Quirk_1986 | not_relevant | 0 | 0 | The paper reports a dose-response for glucocorticoid ligands in rat mammary explants, not for trientine. |
| PD | Quirk_1989 | not_relevant | 0 | 0 | The paper concerns glucocorticoid/progestin effects on mammary-gland WAP and does not study trientine or report a trientine exposure-response or dose-response relationship. |
| PGx | Roy_2025 | not_relevant | 0 | 0 | The paper discusses ATP7B mutations and Wilson disease diagnosis but does not report genotype- or phenotype-related effects on any pharmacokinetic or pharmacodynamic parameter of trientine. |
| PD | Salari_1993 | not_relevant | 0 | 0 | The paper reports an inhibition dose-response for U-73122 (IC50 7 microM), not for trientine. |
| popPK | Salman_2012 | irrelevant | 0 | 0 | The paper reports population pharmacokinetics for piperaquine and artemisinin, not trientine. |
| PD | Salman_2012 | not_relevant | 3 | 0 | Reports only a qualitative association between lower piperaquine exposure and recurrent parasitemia, with no numeric exposure-response parameters, effect curve, or PK/PD fit. |
| popPK | Saraei_2025 | irrelevant | 0 | 0 | This is a wastewater-remediation study of tetracycline, not a pharmacokinetic study of trientine. |
| PD | Saraei_2025 | not_relevant | 0 | 0 | The paper concerns tetracycline and ARG removal by a nanocomposite, with no trientine pharmacodynamic or exposure-/dose-response analysis. |
| popPK | Sayaf_2024 | irrelevant | 0 | 0 | This is a computational PHD-inhibitor screening study and does not investigate trientine or report trientine pharmacokinetic parameters. |
| PD | Sayaf_2024 | not_relevant | 0 | 0 | This molecular docking and simulation study does not evaluate trientine or report any pharmacodynamic, exposure-response, or dose-response relationship or numeric PD parameters. |
| popPK | Sharma_2026 | irrelevant | 0 | 0 | This is a cellular ferroptosis study with no trientine pharmacokinetic parameters or numeric disposition values. |
| PD | Sharma_2026 | not_relevant | 0 | 0 | The text does not study trientine or report any trientine dose/exposure–response relationship or numeric pharmacodynamic parameters. |
| PD | Sofian_2023 | not_relevant | 0 | 0 | The paper concerns cytotoxic fungal compounds and reports no pharmacodynamic or exposure-response relationship for trientine. |
| popPK | Soria-Jasso_1996 | irrelevant | 0 | 0 | This is an in-vitro histamine receptor study with no trientine pharmacokinetic parameters or numeric disposition values. |
| PD | Soria-Jasso_1996 | not_relevant | 0 | 0 | The paper reports concentration-effect parameters for histamine, not trientine, and contains no trientine PD or exposure-response relationship. |
| popPK | Soriano-Ursúa_2009 | irrelevant | 0 | 0 | This is an in-vitro pharmacology and docking study of BR-AEA, not a trientine pharmacokinetic study. |
| PD | Soriano-Ursúa_2009 | not_relevant | 0 | 0 | The paper concerns BR-AEA and salbutamol in guinea pig tracheal rings, not trientine; therefore it reports no trientine PD or exposure-/dose-response relationship. |
| popPK | Swinkels_2024 | irrelevant | 0 | 0 | The paper studies antimicrobial resistance selection for amoxicillin, doxycycline, and enrofloxacin, not trientine pharmacokinetics. |
| PD | Swinkels_2024 | not_relevant | 0 | 0 | The paper does not study trientine and reports no trientine PK/PD or numeric exposure-response parameters. |
| popPK | Symeonides_2024 | irrelevant | 0 | 0 | This umbrella review concerns plastic-associated chemical health outcomes and reports no trientine pharmacokinetic parameters. |
| PD | Symeonides_2024 | not_relevant | 0 | 0 | This umbrella review concerns plastic-associated chemical exposures and human health outcomes; trientine and any drug-specific PD or exposure-response relationship are not reported. |
| popPK | Taank_2024 | irrelevant | 0 | 0 | This is an in-vitro sterol receptor/anticancer study with no trientine pharmacokinetic parameters. |
| PD | Taank_2024 | not_relevant | 0 | 0 | The paper evaluates ergosterol-related sterols in cell assays, not trientine, so it reports no trientine PD or exposure-response relationship. |
| PD | Tabot_2010 | not_relevant | 0 | 0 | The paper concerns a cytotoxic marine steroid, not trientine, and reports no trientine pharmacodynamic or exposure-response relationship. |
| popPK | Taki_2026 | irrelevant | 0 | 0 | This is a nematocidal phenotypic screening study with no trientine pharmacokinetic parameters. |
| PD | Taki_2026 | not_relevant | 0 | 0 | The text does not mention trientine or provide any trientine-specific dose/exposure-response relationship or numeric PD parameters. |
| popPK | Taliwe_2026 | irrelevant | 0 | 0 | This is a botanical review with no trientine pharmacokinetic study or numeric disposition parameters. |
| PD | Taliwe_2026 | not_relevant | 0 | 0 | The text is a general review of Asteraceae botanicals and reports no trientine-specific dose/exposure-response relationship or numeric PD parameters. |
| PD | Tatrai_1994 | not_relevant | 0 | 0 | The paper reports dose-response IC50 values for U-73122 in osteoblastic cells, not for trientine. |
| popPK | Tavares_2018 | irrelevant | 0 | 0 | This is a review of Juniperus metabolites and contains no trientine pharmacokinetic parameters or numeric disposition values. |
| PD | Tavares_2018 | not_relevant | 0 | 0 | This review concerns Juniperus metabolites and reports no trientine exposure-response, dose-response, or numeric pharmacodynamic parameters. |
| PD | Teng_2023 | not_relevant | 0 | 0 | The paper concerns lanostane triterpenoids from Ganoderma sinense and reports an IC50 for compound 14, but it contains no data or PD relationship for trientine. |
| PD | Thompson_1991 | not_relevant | 0 | 0 | The paper reports IC50 values for U-73122, not trientine, so it provides no trientine PD or exposure-response relationship. |
| PD | Tredway_1974 | not_relevant | 0 | 0 | The paper concerns oral contraceptive effects on gonadotrophins and gonadal steroids, not trientine, and reports no trientine exposure-response or dose-response relationship. |
| PD | Urbina_1995 | not_relevant | 0 | 0 | The paper does not study trientine; its IC50 values concern unrelated sterol analog inhibitors of T. cruzi sterol methyltransferase. |
| PD | Vickers_1993 | not_relevant | 0 | 0 | The paper studies the pharmacology of U73122, not trientine, and does not report any exposure-response or dose-response relationship for trientine. |
| PD | Wang_1997 | not_relevant | 0 | 0 | The paper reports concentration-effect IC50 values for acetylshikonin, not trientine. |
| PD | Wang_1997_2 | not_relevant | 0 | 0 | The paper reports concentration-effect IC50 values for abruquinone A, not for trientine. |
| popPK | Wang_2001 | irrelevant | 0 | 0 | This is a cellular bradykinin signaling study with no trientine pharmacokinetic parameters. |
| PD | Wang_2001 | not_relevant | 0 | 0 | The paper reports a concentration-response EC50 for bradykinin-induced Ca2+ mobilization, not for trientine. |
| popPK | Wei_2021 | irrelevant | 0 | 0 | This is a review of acyclovir, not a trientine pharmacokinetic study, and contains no trientine parameter values. |
| PD | Wei_2021 | not_relevant | 0 | 0 | The paper is a review of acyclovir synthesis, toxicology, and analytical detection methods and reports no trientine exposure-response or dose-response relationship or numeric PD parameters. |
| popPK | Wiernas_1998 | irrelevant | 0 | 0 | This is a cellular bradykinin receptor study with no trientine pharmacokinetic parameters. |
| PD | Wiernas_1998 | not_relevant | 0 | 0 | The paper concerns bradykinin pharmacology in corneal epithelial cells and contains no pharmacodynamic or exposure-response analysis for trientine. |
| PD | Wu_2020 | not_relevant | 0 | 0 | The paper concerns abietane diterpenoids and in vitro cytotoxicity, not trientine, and reports no trientine PD or exposure-/dose-response relationship. |
| popPK | Wu_2020_2 | irrelevant | 0 | 0 | This study evaluates contezolid, not trientine, and reports no trientine pharmacokinetic parameters. |
| PD | Wu_2020_2 | not_relevant | 0 | 0 | The paper reports a numeric QTc exposure-response slope for contezolid, not trientine; therefore no trientine PD relationship is reported. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper concerns terpenoids from Curcuma kwangsiensis and does not study trientine or report a trientine-specific PD, exposure-response, or dose-response relationship. |
| popPK | Zmijewski_2011 | irrelevant | 0 | 0 | This paper concerns steroid photochemistry and melanoma activity, not trientine pharmacokinetics. |
| PD | Zmijewski_2011 | not_relevant | 0 | 0 | The paper concerns synthesized secosteroids and their anti-melanoma effects, not trientine, and reports no trientine exposure-response or dose-response PD parameters. |
| PGx | Zöllner_2010 | not_relevant | 0 | 0 | The paper studies CYP21/CYP3A4-mediated biotransformation of metandienone, not trientine, and reports no genotype-related PK or PD parameter effect. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 61 chars of text extracted (&lt; 400) |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text only indicates that a PDF is available and contains no trientine PK/PD, dose-response, or numeric pharmacodynamic information. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
