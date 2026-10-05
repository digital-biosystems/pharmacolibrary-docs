<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;trientine&quot;}]"></div>

# trientine

- **generic name:** trientine
- **ATC codes:** `A16AX12`
- **DrugBank:** [DB06824](https://go.drugbank.com/drugs/DB06824) · **PubChem:** not captured
- **groups:** approved

## About

Trientine is a chelating agent used to treat Wilson disease. It is an approved medicine and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418386](https://www.wikidata.org/wiki/Q418386) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 12:06 | 2:42 | 0/0/0 | 0/1/0 | 0/0/0 | 64,102/4,279 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 3/13 | 4/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Cho_2009_copper_excretion](drugs/drug_trientine/pd_Cho_2009_copper_excretion.md) | copper excretion ← trientine · direct linear effect | — | Cho HY et al., Pharmacokinetic and pharmacodynamic mod…, Journal of clinical pharmac… (2009) | [10.1177/0091270009337939](https://doi.org/10.1177/0091270009337939) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trientine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

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
| `Cho_2009.pdf` | Cho HY et al., Pharmacokinetic and pharmacodynamic mod…, Journal of clinical pharmac… (2009) | popPK | 10 | [10.1177/0091270009337939](https://doi.org/10.1177/0091270009337939) | [19602718](https://pubmed.ncbi.nlm.nih.gov/19602718) | The paper describes a population PK study of trientine in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
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

<sub>queue written 2026-10-05T12:06:18.198179+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Acharya_2020 | not_relevant | 0 | 0 | The paper is a case report describing the clinical association of IgA vasculitis and Wilson disease, mentioning trientine treatment but providing no data on how genetic variants affect trientine's pharmacokinetics or pharmacodynamics. |
| popPK | Afzal_2026 | irrelevant | 0 | 0 | The paper investigates the antimicrobial activity of plant-derived terpenoids against bacteria and does not involve the drug trientine or any pharmacokinetic parameters. |
| PD | Afzal_2026 | not_relevant | 0 | 0 | The paper concerns Anagallis foemina terpenoids against Acinetobacter baumannii and reports no trientine exposure-response, dose-response, or numeric pharmacodynamic parameters. |
| popPK | Ba_2023 | irrelevant | 0 | 0 | The paper studies Staphylococcus epidermidis susceptibility to antibiotics and does not involve trientine pharmacokinetics. |
| PD | Ba_2023 | not_relevant | 0 | 0 | The paper does not study trientine or report trientine exposure-/dose-response parameters; its limited dose-response results concern amoxicillin/clavulanate only. |
| PD | Babich_1994 | not_relevant | 0 | 0 | The paper does not study trientine; its reported IC50 applies to the unrelated phospholipase C inhibitor U73,122. |
| popPK | Balbontín_2021 | irrelevant | 0 | 0 | The paper is a microbiology study on antibiotic resistance in bacteria and does not involve the drug trientine or pharmacokinetic parameters. |
| PD | Balbontín_2021 | not_relevant | 0 | 0 | The text provides no trientine exposure- or dose-response analysis and no numeric pharmacodynamic parameters or effect-versus-concentration relationship. |
| popPK | Biancani_1994 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PD | Biancani_1994 | not_relevant | 0 | 0 | The paper studies acetylcholine and intracellular signaling in cat lower esophageal sphincter, not trientine, and reports no trientine exposure- or dose-response relationship or numeric PD parameters. |
| popPK | Billesbølle_2023 | irrelevant | 0 | 0 | The paper describes the structural basis of odorant recognition by a human odorant receptor and does not involve trientine or pharmacokinetics. |
| PD | Billesbølle_2023 | not_relevant | 0 | 0 | The paper concerns propionate activation of the odorant receptor OR51E2 and reports no pharmacodynamic or exposure-response relationship for trientine. |
| PD | Bleasdale_1990 | not_relevant | 0 | 0 | The paper studies the pharmacology of U-73122 (a phospholipase C inhibitor) and does not mention trientine or report any exposure-response relationship for it. |
| popPK | Borda_1999 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | Borda_1999 | not_relevant | 0 | 0 | The paper investigates haloperidol-mediated phosphoinositide hydrolysis, not trientine, and reports no trientine PD or exposure-response relationship. |
| PD | Chawengrum_2021 | not_relevant | 0 | 0 | The paper concerns diterpenoids from Kaempferia elegans and reports no pharmacodynamic or exposure-response relationship for trientine. |
| popPK | Chen_2001 | irrelevant | 0 | 0 | The paper studies the mechanism of clomiphene on calcium levels in osteoblast cells and does not involve trientine or its pharmacokinetics. |
| PD | Chen_2001 | not_relevant | 0 | 0 | The paper reports a concentration-response relationship for clomiphene in osteoblast-like cells (EC50 50 microM), not for trientine. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The paper is a computational drug design study and does not report any pharmacokinetic parameters for trientine. |
| PD | Chen_2023 | not_relevant | 0 | 0 | The paper does not study trientine or report any trientine dose/exposure-response relationship or numeric pharmacodynamic parameters. |
| popPK | Cheng_2000 | irrelevant | 0 | 0 | The paper studies histamine-induced calcium signaling in hepatoma cells and does not involve trientine or its pharmacokinetics. |
| PD | Cheng_2000 | not_relevant | 0 | 0 | The study reports a histamine concentration-[Ca2+]i response (EC50 about 1 microM), but does not evaluate trientine or provide trientine-specific pharmacodynamic parameters. |
| popPK | Cheng_2001 | irrelevant | 0 | 0 | The study investigates the mechanism of action of fendiline on intracellular calcium in liver cells and does not involve trientine or pharmacokinetic parameters. |
| PD | Cheng_2001 | not_relevant | 0 | 0 | The paper reports a concentration-response relationship with an EC50 of 25 micromol/L for fendiline, not trientine. |
| popPK | Cheng_2002 | irrelevant | 0 | 0 | The study investigates the effect of gossypol on intracellular calcium levels in Chang liver cells and does not involve trientine or its pharmacokinetics. |
| PD | Cheng_2002 | not_relevant | 0 | 0 | The paper studies gossypol, not trientine. |
| popPK | Cho_2009 | relevant | 10 | 2 | The paper describes a population PK study of trientine in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Choi_2003 | irrelevant | 0 | 0 | The study investigates the effect of ginsenoside on ion channels in Xenopus oocytes and does not involve trientine or pharmacokinetic parameters. |
| PD | Choi_2003 | not_relevant | 0 | 0 | The paper reports an EC50 for ginsenoside in Xenopus oocytes, not a pharmacodynamic or exposure-response relationship for trientine. |
| popPK | Corlatti_2026 | irrelevant | 0 | 0 | The paper is a review of phytochemicals in the Helianthus genus and does not mention trientine or report any pharmacokinetic parameters. |
| PD | Corlatti_2026 | not_relevant | 0 | 0 | The paper is a review of Helianthus phytochemicals and biological activities and contains no data on trientine or any numeric PK/PD, exposure-response, or dose-response relationship. |
| popPK | Cuffaro_2025 | irrelevant | 0 | 0 | The paper studies antibody-drug conjugates containing aminobisphosphonates, not the drug trientine. |
| PD | Cuffaro_2025 | not_relevant | 0 | 0 | The paper does not study trientine or report a trientine dose/exposure-response relationship; it only evaluates fixed-concentration cetuximab aminobisphosphonate ADCs and binding/efficacy outcomes. |
| PGx | Das_2006 | not_relevant | 0 | 0 | The paper is a general review of Wilson's disease and its treatment, mentioning trientine as a chelator but not reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Dorn_1993 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | Dorn_1993 | not_relevant | 0 | 0 | The paper concerns thromboxane A2 signaling in vascular smooth muscle and reports no trientine exposure-/dose-response relationship or numeric pharmacodynamic parameters. |
| popPK | Drakulich_2003 | irrelevant | 0 | 0 | The paper describes in vitro signaling mechanisms in bovine chromaffin cells and does not involve trientine or pharmacokinetic parameters. |
| PD | Drakulich_2003 | not_relevant | 0 | 0 | The paper studies NPY-mediated sensitization and reports an NPY EC50, but contains no data or PD/exposure-response relationship for trientine. |
| PGx | El-Youssef_2003 | not_relevant | 0 | 0 | The text is a general overview of Wilson disease and its treatments, mentioning trientine only as a therapeutic option without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Erickson_2023 | not_relevant | 0 | 0 | The paper analyzes bacterial genomics and antimicrobial resistance in fish pathogens, not human pharmacogenomics of trientine. |
| popPK | European_2019 | irrelevant | 0 | 0 | The paper is a report on antimicrobial resistance in bacteria and contains no pharmacokinetic data for trientine. |
| PD | European_2019 | not_relevant | 0 | 0 | The paper concerns antimicrobial resistance surveillance and contains no trientine exposure-, dose-, or concentration-response analysis or numeric pharmacodynamic parameters. |
| popPK | Fan_1998 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of the phospholipase C inhibitor U73122 in cell lines and does not involve the drug trientine or any pharmacokinetic parameters. |
| PD | Fan_1998 | not_relevant | 0 | 0 | The paper studies U73122/U73343 in cell signaling and reports no pharmacodynamic or exposure-response relationship for trientine. |
| PD | Fatmawati_2011 | not_relevant | 0 | 0 | The paper concerns ganoderol B and α-glucosidase inhibition, not trientine, so it reports no trientine PD or exposure-response relationship. |
| PD | Gu_2025 | not_relevant | 0 | 0 | The text concerns steroids from Munronia pinnata and reports no trientine pharmacodynamic or exposure-response relationship. |
| PD | Hilmi_2003 | not_relevant | 0 | 0 | The paper concerns cytotoxic sesquiterpene lactones from Warionia saharae and reports no pharmacodynamic or exposure-response relationship for trientine. |
| PD | Horiuchi_1988 | not_relevant | 0 | 0 | The paper evaluates cytotoxicity of RM-49, FK973, and other anticancer drugs, not trientine, and reports no trientine-specific exposure-response or dose-response parameters. |
| PD | Hwang_2013 | not_relevant | 0 | 0 | The paper concerns a novel phenyl alkene and reports an IC50 for that compound, not trientine, with no trientine PD or exposure-response relationship. |
| PD | Ilovaisky_2025 | not_relevant | 0 | 0 | The paper does not study trientine or report a trientine-related pharmacodynamic, exposure-response, or dose-response relationship. |
| popPK | Jan_2000 | irrelevant | 0 | 0 | The paper studies the mechanism of a calmodulin inhibitor (W-7) on calcium levels in bladder cancer cells and does not involve trientine or its pharmacokinetics. |
| PD | Jan_2000 | not_relevant | 0 | 0 | The paper reports a concentration-effect EC50 for W-7, not for trientine, so no trientine PD relationship or parameters are available. |
| popPK | Jan_2002 | irrelevant | 0 | 0 | The study investigates the effect of a cannabinoid receptor agonist on calcium levels in cancer cells and does not involve trientine or its pharmacokinetics. |
| PD | Jan_2002 | not_relevant | 0 | 0 | The paper reports a concentration-effect relationship (EC50 8 microM) for CP55,940, not for trientine; no trientine PD parameters or exposure-response data are provided. |
| PD | Jung_2010 | not_relevant | 0 | 0 | The paper does not study trientine or report a trientine exposure-response/dose-response relationship or numeric PD parameters. |
| popPK | Kaiho_1996 | irrelevant | 0 | 0 | The paper describes electrophysiological mechanisms of ATP-activated cation currents in NG108-15 cells and does not involve the drug trientine or its pharmacokinetics. |
| PD | Kaiho_1996 | not_relevant | 0 | 0 | The paper reports an ATP concentration-effect relationship (EC50 approximately 0.75 mM) in NG108-15 cells, but does not study trientine or report trientine-related pharmacodynamic parameters. |
| popPK | Kim_2018 | irrelevant | 0 | 0 | The study investigates the association between phthalate exposure and asthma outcomes in children, with no mention of trientine or its pharmacokinetics. |
| PD | Kim_2018 | not_relevant | 0 | 0 | The paper evaluates urinary phthalate metabolite exposure and respiratory outcomes, not trientine, and reports no trientine PD or exposure-response parameters. |
| popPK | Kimura_1999 | irrelevant | 0 | 0 | The paper investigates cell proliferation in rat hepatocytes and does not involve trientine or pharmacokinetic parameters. |
| PD | Kimura_1999 | not_relevant | 0 | 0 | The paper does not study trientine or report any trientine dose/exposure-response relationship or PD parameters. |
| popPK | Klein_2011 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| PD | Klein_2011 | not_relevant | 0 | 0 | The paper reports a concentration-effect relationship for U73122, not for trientine. |
| PD | Kondempudi_2009 | not_relevant | 0 | 0 | The paper concerns marine sponge compounds and reports IC50 cytotoxicity for compound 2, not trientine or a trientine PD/exposure-response relationship. |
| PD | Kong_2023 | not_relevant | 0 | 0 | The paper evaluates Ganoderma triterpenoids for alpha-glucosidase inhibition, not trientine, and reports no trientine exposure- or dose-response relationship. |
| popPK | Kumar_2022 | irrelevant | 0 | 0 | The paper is an in silico study on blood-brain barrier permeation modeling and does not report pharmacokinetic parameters for trientine. |
| PD | Kumar_2022 | not_relevant | 0 | 0 | The paper develops computational BBB-permeation pharmacophore models and reports no trientine dose- or exposure-response relationship or numeric PD parameters. |
| popPK | Lee_2001 | irrelevant | 0 | 0 | The paper studies histamine-induced calcium signaling in osteosarcoma cells and does not involve trientine pharmacokinetics. |
| PD | Lee_2001 | not_relevant | 0 | 0 | The paper reports a concentration-effect EC50 for histamine-induced Ca2+ responses, not for trientine, and provides no trientine PD or exposure-response relationship. |
| popPK | Lee_2001_2 | irrelevant | 0 | 0 | The paper studies the mechanism of action of a lipoxygenase inhibitor on calcium mobilization in canine kidney cells and does not involve the drug trientine or its pharmacokinetics. |
| PD | Lee_2001_2 | not_relevant | 0 | 0 | The paper reports a concentration-dependent Ca2+ effect and EC50 for 5,8,11-eicosatriynoic acid, not for trientine. |
| popPK | Lee_2018 | irrelevant | 0 | 0 | The study investigates the molecular mechanism of 17β-trenbolone (a veterinary anabolic steroid) in prostate cancer cells, not the pharmacokinetics of trientine. |
| PD | Lee_2018 | not_relevant | 0 | 0 | The paper concerns 17β-trenbolone, not trientine; although it reports a 30 pM proliferation EC50 for 17β-trenbolone, no trientine PD or exposure-response relationship is provided. |
| PD | Leutcha_2021 | not_relevant | 0 | 0 | The paper studies tirucallane derivatives from Stereospermum acuminatissimum, not trientine, and reports no trientine exposure-response or dose-response parameters. |
| popPK | Li_2018 | irrelevant | 0 | 0 | The paper investigates the mechanism of bacterial resistance to berberine in E. coli and does not involve trientine or its pharmacokinetics. |
| PD | Li_2018 | not_relevant | 0 | 0 | The paper reports a bacterial EC50 for berberine, not trientine, and provides no trientine exposure-, dose-, or concentration-response relationship. |
| popPK | Lin_2002 | irrelevant | 0 | 0 | The study investigates the mechanism of action of fendiline on calcium levels in rabbit cells and does not involve trientine or pharmacokinetic parameters. |
| PD | Lin_2002 | not_relevant | 0 | 0 | The paper reports a concentration-effect EC50 for fendiline, not trientine, so it provides no PD relationship or parameters for trientine. |
| popPK | Lindauer_2026 | irrelevant | 0 | 0 | The paper focuses on a mechanistic model of copper metabolism and a gene therapy (VTX-801) for Wilson disease, not the pharmacokinetics of the drug trientine. |
| PD | Lindauer_2026 | not_relevant | 0 | 0 | The paper models VTX-801 dose-response and copper biomarkers, but reports no trientine-specific exposure-response or dose-response relationship or numeric PD parameters. |
| popPK | Liu_2002 | irrelevant | 0 | 0 | The study investigates the effect of carvedilol on calcium handling in renal cells and does not involve trientine or its pharmacokinetics. |
| PD | Liu_2002 | not_relevant | 0 | 0 | The paper reports a concentration-effect relationship for carvedilol, not trientine, so no trientine PD parameters or exposure/dose-response relationship are provided. |
| popPK | Liu_2003 | irrelevant | 0 | 0 | The paper studies dopamine receptor signaling in cell lines and does not involve trientine pharmacokinetics. |
| PD | Liu_2003 | not_relevant | 0 | 0 | The paper reports an apomorphine concentration-effect relationship (EC50 10 nM) in dopamine D2S-expressing cells, but contains no data or PD relationship for trientine. |
| PD | Liu_2008 | not_relevant | 0 | 0 | The paper concerns cytotoxic sesquiterpenes from Ligularia platyglossa and reports IC50 values for those compounds, not trientine or a trientine exposure-/dose-response relationship. |
| PD | Liu_2022 | not_relevant | 0 | 0 | The paper concerns lanostane triterpenoids from Fomitopsis pinicola and does not study trientine or report a trientine exposure-response or dose-response relationship. |
| popPK | Lu_2002 | irrelevant | 0 | 0 | The study investigates the effect of the cannabinoid agonist CP55,940 on intracellular calcium levels in human osteosarcoma cells and does not involve trientine or its pharmacokinetics. |
| PD | Lu_2002 | not_relevant | 0 | 0 | The paper reports a concentration-effect relationship with an EC50 of 8 µM for CP55,940, not for trientine. |
| PD | Maltais_2011 | not_relevant | 0 | 0 | The paper concerns a 17β-HSD1 inhibitor rather than trientine and reports no trientine dose- or exposure-response relationship. |
| PGx | Maltais_2014 | not_relevant | 0 | 0 | The paper describes the synthesis and characterization of a new 17β-HSD1 inhibitor and contains no information regarding trientine or pharmacogenomics. |
| PD | Martínez-Luis_2005 | not_relevant | 0 | 0 | The paper concerns phytotoxic fungal metabolites and reports IC50 values for those compounds, not trientine or a trientine exposure-/dose-response relationship. |
| PD | Matsuda_2009 | not_relevant | 0 | 0 | The paper concerns Cordyceps sterols and cytotoxicity in HL-60 cells; trientine is not studied and no trientine exposure-response or dose-response relationship is reported. |
| PD | Mernyák_2015 | not_relevant | 0 | 0 | The paper concerns in vitro antiproliferative IC50 values for synthetic estradiol triazoles, not trientine, and reports no trientine exposure-response or dose-response relationship. |
| PGx | Mohr_2025 | not_relevant | 0 | 0 | The study analyzes 24-hour urinary copper excretion in Wilson disease patients to compare sampling methods (on vs. off therapy) and does not report any pharmacogenomic effects (gene variants) on the pharmacokinetics or pharmacodynamics of trientine. |
| popPK | Morgan_1983 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a fluorescent cholesterol analog (cholesta-5,7,9-trien-3 beta-ol) in rats, not the drug trientine. |
| popPK | Neurath_1995 | irrelevant | 0 | 0 | The paper describes the structural binding of an antiviral porphyrin to HIV-1 gp120 and does not involve trientine or pharmacokinetic parameters. |
| PD | Neurath_1995 | not_relevant | 0 | 0 | The paper concerns MTCPP and other porphyrin derivatives, not trientine, and reports no trientine dose- or exposure-response relationship or numeric PD parameters. |
| PD | Nguyen_2017 | not_relevant | 0 | 0 | The paper evaluates cytotoxic dose-response effects of isolated pregnane steroids, not trientine, and reports no trientine PD or exposure-response parameters. |
| popPK | Noriyama_2006 | irrelevant | 0 | 0 | The paper studies dopamine's effect on synaptic transmission in rat hippocampus and does not involve trientine or its pharmacokinetics. |
| PD | Noriyama_2006 | not_relevant | 0 | 0 | The paper studies dopamine in neonatal rat hippocampus and does not mention trientine or report any pharmacodynamic parameters for it. |
| PGx | Palan_2026 | not_relevant | 0 | 0 | The paper reports a case of Wilson disease diagnosis and treatment response to trientine, but does not investigate how specific gene variants affect the pharmacokinetics or pharmacodynamics of trientine. |
| PGx | Pandit_2002 | not_relevant | 0 | 0 | The text is a general review of Wilson's disease diagnosis and treatment, mentioning trientine as a therapy but containing no data on pharmacogenomics or PK/PD parameters. |
| PGx | Parr_2012 | not_relevant | 0 | 0 | The paper investigates the metabolism of metandienone (an anabolic steroid), not trientine. |
| popPK | Patel_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of imipenem/cilastatin/relebactam, not trientine. |
| PD | Patel_2022 | not_relevant | 0 | 0 | The paper concerns imipenem/cilastatin/relebactam rather than trientine and reports only simulated PK/PD target attainment, with no extractable numeric PD parameters or effect-versus-concentration relationship. |
| PGx | Patil_2013 | not_relevant | 0 | 0 | The paper is a general review of Wilson disease and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of trientine. |
| popPK | Pitt_2005 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| PD | Pitt_2005 | not_relevant | 0 | 0 | The paper concerns P2Y receptor potentiation by extracellular potassium and reports no trientine exposure-, dose-, or pharmacodynamic-response relationship. |
| PD | Qu_2010 | not_relevant | 0 | 0 | The paper concerns cytotoxic diterpenoids from Scutellaria barbata, not trientine, and reports no trientine exposure- or dose-response relationship. |
| PD | Quang_2013 | not_relevant | 0 | 0 | The paper concerns cytotoxic fungal constituents and does not study trientine or report a trientine dose-, concentration-, or exposure-response relationship. |
| PD | Quirk_1986 | not_relevant | 0 | 0 | The paper reports a dose-response for glucocorticoid ligands in rat mammary explants, not for trientine. |
| PD | Quirk_1989 | not_relevant | 0 | 0 | The paper concerns glucocorticoid/progestin effects on mammary-gland WAP and does not study trientine or report a trientine exposure-response or dose-response relationship. |
| PGx | Roy_2025 | not_relevant | 0 | 0 | The paper is a review on the diagnosis and genetics of Wilson disease, mentioning trientine only as a treatment option without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PD | Salari_1993 | not_relevant | 0 | 0 | The paper reports an inhibition dose-response for U-73122 (IC50 7 microM), not for trientine. |
| popPK | Salman_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of piperaquine and artemisinin, not trientine. |
| PD | Salman_2012 | not_relevant | 3 | 0 | Reports only a qualitative association between lower piperaquine exposure and recurrent parasitemia, with no numeric exposure-response parameters, effect curve, or PK/PD fit. |
| popPK | Saraei_2025 | irrelevant | 0 | 0 | The paper describes a nanocomposite for removing tetracycline and antibiotic resistance genes from wastewater and does not involve the drug trientine or any pharmacokinetic parameters. |
| PD | Saraei_2025 | not_relevant | 0 | 0 | The paper concerns tetracycline and ARG removal by a nanocomposite, with no trientine pharmacodynamic or exposure-/dose-response analysis. |
| popPK | Sayaf_2024 | irrelevant | 0 | 0 | The paper is a computational study on PHD inhibitors and does not involve trientine or pharmacokinetic parameters. |
| PD | Sayaf_2024 | not_relevant | 0 | 0 | This molecular docking and simulation study does not evaluate trientine or report any pharmacodynamic, exposure-response, or dose-response relationship or numeric PD parameters. |
| popPK | Sharma_2026 | irrelevant | 0 | 0 | The paper investigates the role of polyamines in iron buffering and ferroptosis, with no mention of trientine or its pharmacokinetics. |
| PD | Sharma_2026 | not_relevant | 0 | 0 | The text does not study trientine or report any trientine dose/exposure–response relationship or numeric pharmacodynamic parameters. |
| PD | Sofian_2023 | not_relevant | 0 | 0 | The paper concerns cytotoxic fungal compounds and reports no pharmacodynamic or exposure-response relationship for trientine. |
| popPK | Soria-Jasso_1996 | irrelevant | 0 | 0 | no_text gate: only 97 chars of text extracted (&lt; 400) |
| PD | Soria-Jasso_1996 | not_relevant | 0 | 0 | The paper reports concentration-effect parameters for histamine, not trientine, and contains no trientine PD or exposure-response relationship. |
| popPK | Soriano-Ursúa_2009 | irrelevant | 0 | 0 | The paper studies a beta2 adrenoceptor agonist (BR-AEA) and does not involve trientine or its pharmacokinetics. |
| PD | Soriano-Ursúa_2009 | not_relevant | 0 | 0 | The paper concerns BR-AEA and salbutamol in guinea pig tracheal rings, not trientine; therefore it reports no trientine PD or exposure-/dose-response relationship. |
| popPK | Swinkels_2024 | irrelevant | 0 | 0 | The paper studies antimicrobial resistance in E. coli and does not involve the drug trientine or its pharmacokinetics. |
| PD | Swinkels_2024 | not_relevant | 0 | 0 | The paper does not study trientine and reports no trientine PK/PD or numeric exposure-response parameters. |
| popPK | Symeonides_2024 | irrelevant | 0 | 0 | The paper is an umbrella review of epidemiological studies on plastic-associated chemicals and does not contain any pharmacokinetic data for trientine. |
| PD | Symeonides_2024 | not_relevant | 0 | 0 | This umbrella review concerns plastic-associated chemical exposures and human health outcomes; trientine and any drug-specific PD or exposure-response relationship are not reported. |
| popPK | Taank_2024 | irrelevant | 0 | 0 | The paper studies ergosterol metabolites as LXR agonists in cancer cells and does not involve trientine or its pharmacokinetics. |
| PD | Taank_2024 | not_relevant | 0 | 0 | The paper evaluates ergosterol-related sterols in cell assays, not trientine, so it reports no trientine PD or exposure-response relationship. |
| PD | Tabot_2010 | not_relevant | 0 | 0 | The paper concerns a cytotoxic marine steroid, not trientine, and reports no trientine pharmacodynamic or exposure-response relationship. |
| popPK | Taki_2026 | irrelevant | 0 | 0 | The paper describes a high-throughput screen for nematocidal compounds and does not involve trientine or its pharmacokinetics. |
| PD | Taki_2026 | not_relevant | 0 | 0 | The text does not mention trientine or provide any trientine-specific dose/exposure-response relationship or numeric PD parameters. |
| popPK | Taliwe_2026 | irrelevant | 0 | 0 | The paper is a review of botanicals from the Asteraceae family and does not mention trientine or report any pharmacokinetic parameters. |
| PD | Taliwe_2026 | not_relevant | 0 | 0 | The text is a general review of Asteraceae botanicals and reports no trientine-specific dose/exposure-response relationship or numeric PD parameters. |
| PD | Tatrai_1994 | not_relevant | 0 | 0 | The paper reports dose-response IC50 values for U-73122 in osteoblastic cells, not for trientine. |
| popPK | Tavares_2018 | irrelevant | 0 | 0 | The paper is a review of Juniperus metabolites and does not contain any pharmacokinetic data for trientine. |
| PD | Tavares_2018 | not_relevant | 0 | 0 | This review concerns Juniperus metabolites and reports no trientine exposure-response, dose-response, or numeric pharmacodynamic parameters. |
| PD | Teng_2023 | not_relevant | 0 | 0 | The paper concerns lanostane triterpenoids from Ganoderma sinense and reports an IC50 for compound 14, but it contains no data or PD relationship for trientine. |
| PD | Thompson_1991 | not_relevant | 0 | 0 | The paper reports IC50 values for U-73122, not trientine, so it provides no trientine PD or exposure-response relationship. |
| PD | Tredway_1974 | not_relevant | 0 | 0 | The paper concerns oral contraceptive effects on gonadotrophins and gonadal steroids, not trientine, and reports no trientine exposure-response or dose-response relationship. |
| PD | Urbina_1995 | not_relevant | 0 | 0 | The paper does not study trientine; its IC50 values concern unrelated sterol analog inhibitors of T. cruzi sterol methyltransferase. |
| PD | Vickers_1993 | not_relevant | 0 | 0 | The paper studies the pharmacology of U73122, not trientine, and does not report any exposure-response or dose-response relationship for trientine. |
| PD | Wang_1997 | not_relevant | 0 | 0 | The paper reports concentration-effect IC50 values for acetylshikonin, not trientine. |
| PD | Wang_1997_2 | not_relevant | 0 | 0 | The paper reports concentration-effect IC50 values for abruquinone A, not for trientine. |
| popPK | Wang_2001 | irrelevant | 0 | 0 | The paper investigates bradykinin-induced calcium mobilization in osteosarcoma cells and does not involve trientine or pharmacokinetic parameters. |
| PD | Wang_2001 | not_relevant | 0 | 0 | The paper reports a concentration-response EC50 for bradykinin-induced Ca2+ mobilization, not for trientine. |
| popPK | Wei_2021 | irrelevant | 0 | 0 | The paper is a review of acyclovir, not trientine, and contains no pharmacokinetic data for the subject drug. |
| PD | Wei_2021 | not_relevant | 0 | 0 | The paper is a review of acyclovir synthesis, toxicology, and analytical detection methods and reports no trientine exposure-response or dose-response relationship or numeric PD parameters. |
| popPK | Wiernas_1998 | irrelevant | 0 | 0 | The paper studies bradykinin receptor signaling in corneal cells and does not involve trientine or its pharmacokinetics. |
| PD | Wiernas_1998 | not_relevant | 0 | 0 | The paper concerns bradykinin pharmacology in corneal epithelial cells and contains no pharmacodynamic or exposure-response analysis for trientine. |
| PD | Wu_2020 | not_relevant | 0 | 0 | The paper concerns abietane diterpenoids and in vitro cytotoxicity, not trientine, and reports no trientine PD or exposure-/dose-response relationship. |
| popPK | Wu_2020_2 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics and QT interval effects of contezolid, not trientine. |
| PD | Wu_2020_2 | not_relevant | 0 | 0 | The paper reports a numeric QTc exposure-response slope for contezolid, not trientine; therefore no trientine PD relationship is reported. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper concerns terpenoids from Curcuma kwangsiensis and does not study trientine or report a trientine-specific PD, exposure-response, or dose-response relationship. |
| popPK | Zmijewski_2011 | irrelevant | 0 | 0 | The paper describes the synthesis and anti-melanoma activity of secosteroids, not the pharmacokinetics of trientine. |
| PD | Zmijewski_2011 | not_relevant | 0 | 0 | The paper concerns synthesized secosteroids and their anti-melanoma effects, not trientine, and reports no trientine exposure-response or dose-response PD parameters. |
| PGx | Zöllner_2010 | not_relevant | 0 | 0 | The paper discusses the metabolism of metandienone (an anabolic steroid) for doping control, not trientine. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text only indicates that a PDF is available and contains no trientine PK/PD, dose-response, or numeric pharmacodynamic information. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
