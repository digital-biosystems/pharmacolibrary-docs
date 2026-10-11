<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A09A&quot;,&quot;href&quot;:&quot;atc/A09A.md&quot;},{&quot;label&quot;:&quot;tilactase&quot;}]"></div>

# tilactase

- **generic name:** tilactase
- **ATC codes:** `A09AA04`
- **DrugBank:** [DB13761](https://go.drugbank.com/drugs/DB13761) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tilactase (lactase, a beta-galactosidase enzyme) is a digestive enzyme preparation used to help break down lactose, supporting people with lactose intolerance. It is an approved enzyme preparation in the digestives class and is available as a supplement, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q84937963](https://www.wikidata.org/wiki/Q84937963) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:13 | 3:35 | 0/0/0 | 0/0/0 | 0/0/0 | 310,497/8,288 | einfracz / qwen3.8-27b | 39 | 11/18 | 35/4 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tilactase) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | stomach | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: Lactose (cleavage).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 663 matched, 190 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Berraondo_2009.pdf` | Berraondo P et al., Semi-mechanistic pharmacodynamic modell…, European journal of pharmac… (2009) | pd | 4 | [10.1016/j.ejps.2009.03.013](https://doi.org/10.1016/j.ejps.2009.03.013) | [19491033](https://www.ncbi.nlm.nih.gov/pubmed/19491033) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Calmes_1979.pdf` | Calmes R et al., Regulation of lactose catabolism in Str…, Infection and immunity (1979) | pd | 4 | [10.1128/iai.23.1.68-79.1979](https://doi.org/10.1128/iai.23.1.68-79.1979) | [33899](https://www.ncbi.nlm.nih.gov/pubmed/33899) | metadata signals extractable PD data (sigmoid) |
| `Carver_1994.pdf` | Carver LA et al., The 90-kDa heat shock protein is essent…, The Journal of biological c… (1994) | pd | 4 | not captured | [7982913](https://www.ncbi.nlm.nih.gov/pubmed/7982913) | metadata signals extractable PD data (EC50) |
| `Cho_1995.pdf` | Cho EW et al., Binding kinetics of monoclonal antibody…, Journal of immunoassay (1995) | pd | 4 | [10.1080/15321819508013567](https://doi.org/10.1080/15321819508013567) | [8567983](https://www.ncbi.nlm.nih.gov/pubmed/8567983) | metadata signals extractable PD data (IC50) |
| `Eckel_1979.pdf` | Eckel J et al., Uptake of L-tri-iodothyronine by isolat…, The Biochemical journal (1979) | pd | 4 | [10.1042/bj1820473](https://doi.org/10.1042/bj1820473) | [41520](https://www.ncbi.nlm.nih.gov/pubmed/41520) | metadata signals extractable PD data (sigmoid) |
| `Kawanishi_2003.pdf` | Kawanishi M et al., Construction of reporter yeasts for mou…, Mutation research (2003) | pd | 4 | [10.1016/s1383-5718(03)00174-8](https://doi.org/10.1016/s1383-5718(03)00174-8) | [12972062](https://www.ncbi.nlm.nih.gov/pubmed/12972062) | metadata signals extractable PD data (EC50) |
| `Le_2001.pdf` | Le Guével R et al., Streamlined beta-galactosidase assay fo…, BioTechniques (2001) | pd | 4 | [10.2144/01305st05](https://doi.org/10.2144/01305st05) | [11355334](https://www.ncbi.nlm.nih.gov/pubmed/11355334) | metadata signals extractable PD data (EC50) |
| `Lin_1990.pdf` | Lin RC et al., Protein-acetaldehyde adducts in serum o…, Alcoholism, clinical and ex… (1990) | pd | 4 | [10.1111/j.1530-0277.1990.tb00501.x](https://doi.org/10.1111/j.1530-0277.1990.tb00501.x) | [2378429](https://www.ncbi.nlm.nih.gov/pubmed/2378429) | metadata signals extractable PD data (EC50) |
| `Miller_1997.pdf` | Miller CA, Expression of the human aryl hydrocarbo…, The Journal of biological c… (1997) | pd | 4 | [10.1074/jbc.272.52.32824](https://doi.org/10.1074/jbc.272.52.32824) | [9407059](https://www.ncbi.nlm.nih.gov/pubmed/9407059) | metadata signals extractable PD data (EC50) |
| `Nagamani_2019.pdf` | Nagamani G et al., A novel approach for increasing transfo…, 3 Biotech (2019) | pd | 4 | [10.1007/s13205-019-1640-9](https://doi.org/10.1007/s13205-019-1640-9) | [30863697](https://www.ncbi.nlm.nih.gov/pubmed/30863697) | metadata signals extractable PD data (EC50) |
| `Thoduka_2017.pdf` | Thoduka SG et al., Analysis of ribosomal inter-subunit sit…, Biopolymers (2017) | pd | 4 | [10.1002/bip.23004](https://doi.org/10.1002/bip.23004) | [27858985](https://www.ncbi.nlm.nih.gov/pubmed/27858985) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T21:11:51.685813+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Abraham_1994 | not_relevant | 0 | 0 | The paper discusses a different drug system (antibody-enzyme conjugate with beta-D-galactosidase and a prodrug) and does not mention tilactase or provide any PD parameters for it. |
| popPK | Akram_2011 | irrelevant | 0 | 0 | The paper describes in vitro androgen bioassays for nutraceutical steroids and does not contain any pharmacokinetic data for tilactase. |
| PD | Akram_2011 | not_relevant | 0 | 0 | The paper does not mention tilactase and focuses on androgenic steroids in nutraceuticals using in vitro bioassays. |
| PGx | Aksenov_2014 | not_relevant | 0 | 0 | The paper studies the effects of rutin and diet on enzymes in rats, not a pharmacogenomic effect of a gene variant on the PK/PD of tilactase. |
| PD | Al-Mustafa_2021 | not_relevant | 0 | 0 | The paper studies plant extracts (Juniperus phoenicea and Calicotome villosa) and does not mention or study the drug tilactase. |
| popPK | Asano_1995 | irrelevant | 0 | 0 | The paper studies the conformation and inhibitory activity of nitrogen-in-the-ring sugars (glycosidase inhibitors) in vitro and has nothing to do with tilactase or its pharmacokinetics. |
| popPK | Athayde_1990 | irrelevant | 0 | 0 | The paper studies guanine nucleotides and lysosomal secretion in human platelets and does not mention tilactase or provide any pharmacokinetic parameters. |
| PD | Athayde_1990 | not_relevant | 0 | 0 | The paper studies guanine nucleotides and calcium in platelets, not the drug tilactase. |
| popPK | Audrain_2023 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of a monoclonal antibody (ACI-5891.9) targeting TDP-43, not the drug tilactase. |
| PGx | Augustin_2013 | not_relevant | 0 | 0 | The study investigates the drug C-1311, not tilactase. |
| PGx | Augustin_2013_2 | not_relevant | 0 | 0 | The paper investigates C-1305, not tilactase. |
| popPK | Avena_2013 | irrelevant | 0 | 0 | The paper investigates PPARγ activation and tumor metabolism in breast cancer xenograft models and does not involve the drug tilactase. |
| PGx | Balsiger_2024 | not_relevant | 0 | 0 | The study focuses on lactase non-persistence and lactose malabsorption diagnostics using breath tests, not the pharmacokinetics or pharmacodynamics of the drug tilactase. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of population PK models for various therapeutic enzymes in lysosomal storage diseases and does not report specific quantitative parameters for tilactase. |
| PD | Barzel_2026 | not_relevant | 3 | 0 | The paper is a review article that summarizes existing models but does not present original numeric PD parameters or curves for tilactase in the provided text. |
| PGx | Bellanti_2021 | not_relevant | 0 | 0 | The paper focuses on the senescence of HepaRG cells and their transdifferentiation, with no mention of tilactase or specific pharmacogenomic variants affecting its PK/PD. |
| popPK | Benzarti_2008 | irrelevant | 0 | 0 | The paper studies plant responses to heavy metals and does not involve tilactase or pharmacokinetics. |
| PD | Benzarti_2008 | not_relevant | 0 | 0 | The paper studies plant responses to heavy metal toxicity and does not mention tilactase or any pharmacodynamic parameters for a drug. |
| popPK | Berraondo_2009 | irrelevant | 0 | 0 | no_text gate: only 85 chars of text extracted (&lt; 400) |
| PD | Berraondo_2009 | not_relevant | 0 | 0 | The provided text is a title and does not contain any data, analysis, or numeric parameters regarding tilactase or any other drug. |
| PD | Blevins_2015 | not_relevant | 0 | 0 | The paper reports an IC50 for a different compound (NSC95397) in a biochemical assay, not a pharmacodynamic or exposure-response relationship for tilactase. |
| popPK | Boonchird_2010 | irrelevant | 0 | 0 | The paper investigates the estrogenic activity of Pueraria mirifica extracts in vitro and does not mention tilactase or its pharmacokinetics. |
| PD | Boonchird_2010 | not_relevant | 0 | 0 | The paper studies the phytoestrogen Pueraria mirifica, not the drug tilactase. |
| PGx | Borinskaya_2015 | not_relevant | 0 | 0 | The paper discusses population genetics and evolutionary adaptation (lactase, APOE, ADH1B) and does not mention tilactase or any pharmacokinetic/pharmacodynamic parameters of that drug. |
| popPK | Boulay_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and mechanism of action of a new HIV-1 capsid inhibitor (compound H27), not tilactase. |
| popPK | Brussee_2026 | irrelevant | 0 | 0 | The paper describes population pharmacokinetics for lucerastat, not tilactase. |
| PD | Brussee_2026 | not_relevant | 0 | 0 | The paper describes a population pharmacokinetic (PK) model for lucerastat, not tilactase, and focuses solely on exposure and dose adaptation based on renal function without reporting any pharmacodynamic (PD) or exposure-response parameters. |
| popPK | Buckley_2010 | irrelevant | 0 | 0 | The paper describes a yeast estrogen screen for wastewater effluent and does not involve tilactase or any pharmacokinetic parameters. |
| PD | Buckley_2010 | not_relevant | 0 | 0 | The paper reports environmental toxicology data (IC50/EC50) for wastewater effluent using a yeast assay, not pharmacodynamic parameters for the drug tilactase. |
| popPK | Bukovska_1994 | irrelevant | 0 | 0 | The paper describes the expression and biochemical characterization of cystathionine beta-synthase in E. coli and contains no pharmacokinetic data for tilactase. |
| PD | Bukovska_1994 | not_relevant | 0 | 0 | The paper describes the purification and biochemical characterization of the enzyme cystathionine beta-synthase (CBS), not the pharmacodynamics of the drug tilactase. |
| popPK | Calmes_1979 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| PD | Calmes_1979 | not_relevant | 0 | 0 | The paper focuses on the purification and regulatory properties of phospho-beta-galactosidase in Streptococcus mutans, not on the pharmacodynamics of tilactase. |
| popPK | Cao_2020 | irrelevant | 0 | 0 | The paper describes an anticoagulation regimen for an infant after heart-valve replacement using warfarin and does not involve tilactase. |
| PD | Cao_2020 | not_relevant | 0 | 0 | The paper is a case report on warfarin anticoagulation management using the Hamberg model and does not involve tilactase or report any pharmacodynamic parameters. |
| popPK | Capparelli_2012 | irrelevant | 0 | 0 | The paper discusses autophagy and senescence in cancer-associated fibroblasts and tumor metabolism, with no mention of tilactase or pharmacokinetic parameters. |
| popPK | Carter_2005 | irrelevant | 0 | 0 | The paper studies beta2-adrenoceptor signaling in cells and does not involve the drug tilactase or any pharmacokinetic analysis. |
| PD | Carter_2005 | not_relevant | 0 | 0 | The paper studies beta2-adrenoceptor pharmacology (isoprenaline, salmeterol, etc.) and does not mention tilactase. |
| popPK | Carver_1994 | irrelevant | 0 | 0 | no_text gate: only 97 chars of text extracted (&lt; 400) |
| PD | Carver_1994 | not_relevant | 0 | 0 | The paper discusses heat shock protein and Ah receptor signaling in yeast, with no mention of tilactase or any pharmacodynamic/exposure-response analysis. |
| popPK | Castelli_2025 | irrelevant | 0 | 0 | The study investigates the anti-aging effects of Crocus sativus in an in vitro model and does not involve tilactase or any pharmacokinetic parameters. |
| PD | Castelli_2025 | not_relevant | 0 | 0 | The paper studies the anti-aging effects of a Crocus sativus extract in an in vitro model and does not mention tilactase or report any pharmacodynamic parameters. |
| PGx | Cheng_2024 | not_relevant | 0 | 0 | The paper investigates cellular senescence and iron accumulation in diabetic kidney injury, with no mention of tilactase or pharmacogenomic effects. |
| PGx | Chengolova_2024 | not_relevant | 0 | 0 | The paper reviews lactose intolerance and general treatment options, but does not mention tilactase or specific pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Cherdshewasart_2010 | irrelevant | 0 | 0 | The study evaluates estrogenic activities of a traditional herb and does not investigate the pharmacokinetics of tilactase. |
| PD | Cherdshewasart_2010 | not_relevant | 0 | 0 | The paper studies the estrogenic activity of Butea superba extracts, not the drug tilactase. |
| PD | Cho_1995 | not_relevant | 0 | 0 | The paper discusses binding kinetics of a monoclonal antibody to an antigen, not the pharmacodynamics of tilactase. |
| PGx | Choi_2024 | not_relevant | 0 | 0 | The paper discusses microbial engineering of Bacillus subtilis for galactose utilization and does not involve the drug tilactase or human pharmacogenomics. |
| popPK | Crowther_2015 | irrelevant | 0 | 0 | The paper describes a drug screen for antibiotic targets in bacteria (Sec pathway) and does not mention tilactase or its pharmacokinetics. |
| PD | Crowther_2015 | not_relevant | 0 | 0 | The paper discusses a bacterial protein export pathway and hit screening, not the pharmacodynamics of the drug tilactase. |
| popPK | DeLouise_2023 | irrelevant | 0 | 0 | The paper focuses on radioprotective drug screening and does not mention tilactase or its pharmacokinetics. |
| PD | DeLouise_2023 | not_relevant | 0 | 0 | The paper does not mention tilactase or report any pharmacodynamic parameters for it; it focuses on screening other drugs for radioprotection. |
| PGx | Deng_2022 | not_relevant | 0 | 0 | The paper focuses on bladder cancer mechanisms and the drug tilactase is not mentioned or studied. |
| PGx | Diament_1987 | not_relevant | 0 | 0 | The paper is a general review of inborn errors of metabolism and does not mention tilactase or specific pharmacogenomic effects on its PK/PD parameters. |
| PGx | Dragoj_2017 | not_relevant | 0 | 0 | The paper studies doxorubicin, not tilactase. |
| PGx | Duan_2012 | not_relevant | 0 | 0 | The paper studies pluripotin's effect on cell proliferation, not tilactase, and contains no pharmacogenomic data. |
| popPK | Dudley_1993 | irrelevant | 0 | 0 | The paper studies the turnover of sucrase-isomaltase and lactase-phlorizin hydrolase in rats, which is unrelated to the pharmacokinetics of tilactase. |
| popPK | Dudley_1996 | irrelevant | 0 | 0 | The study investigates the protein synthesis kinetics of lactase phlorhizin hydrolase (LPH) in pigs, not the pharmacokinetic parameters (CL, V, ka) of the drug tilactase. |
| popPK | Dudley_1998 | irrelevant | 0 | 0 | The study measures protein synthesis rates of lactase phlorizin hydrolase in pigs, not the pharmacokinetic parameters of the drug tilactase. |
| PD | Dufour_1988 | not_relevant | 0 | 0 | The paper studies polyamines (spermine/spermidine) in rats, not the drug tilactase. |
| PGx | Duvignaud_2020 | not_relevant | 0 | 0 | The paper describes a clinical trial for repurposed drugs in COVID-19 and does not mention tilactase or pharmacogenomics. |
| popPK | Eckel_1979 | irrelevant | 0 | 0 | no_text gate: only 190 chars of text extracted (&lt; 400) |
| PD | Eckel_1979 | not_relevant | 0 | 0 | The paper discusses the uptake of L-tri-iodothyronine by rat liver cells and does not mention tilactase or report any pharmacodynamic parameters for it. |
| PD | El_2019 | not_relevant | 0 | 0 | The paper evaluates in vitro activities of Aristolochia longa extracts and does not mention tilactase or report any pharmacodynamic parameters. |
| PD | Elespuru_1986 | not_relevant | 0 | 0 | The paper describes a microbiological assay for DNA-damaging agents (mutagens) and does not involve the drug tilactase or any pharmacodynamic modeling. |
| PGx | Enko_2018 | not_relevant | 0 | 0 | The paper studies lactose/fructose malabsorption and tryptophan metabolism, not the drug tilactase. |
| PGx | Esimbekova_2023 | not_relevant | 0 | 0 | The paper studies dacarbazine in melanoma, not tilactase, and focuses on cell cycle and focal adhesion, not pharmacogenomics of PK/PD. |
| popPK | Espinosa_2021 | irrelevant | 0 | 0 | The study focuses on the antitrypanosomal activity of 2-styrylquinolines in mice and does not involve the drug tilactase or any pharmacokinetic analysis. |
| popPK | Franco_2020 | irrelevant | 0 | 0 | The paper investigates the enzymatic modification of chamomile flavonoids and their effect on pancreatic lipase, with no mention of tilactase pharmacokinetics. |
| PD | Franco_2020 | not_relevant | 0 | 0 | The paper studies the enzymatic modification of chamomile flavonoids and their effect on pancreatic lipase, not the pharmacodynamics of the drug tilactase. |
| popPK | Frank_2017 | irrelevant | 0 | 0 | The paper is an in vitro neurotoxicology study screening 86 compounds for effects on cortical networks and does not involve the drug tilactase or pharmacokinetic parameters. |
| PD | Frank_2017 | not_relevant | 0 | 0 | The paper does not mention tilactase; it is a screening study of 86 environmental chemicals for developmental neurotoxicity. |
| PGx | Fu_2017 | not_relevant | 0 | 0 | The paper studies peptide inhibition of beta-galactosidase and does not mention tilactase or any pharmacogenomic effects on drug PK/PD. |
| PGx | GIBBONS_1964 | not_relevant | 0 | 0 | The paper discusses bacterial metabolism of Streptococcus mitis and is unrelated to tilactase or human pharmacogenomics. |
| PD | Gandra_2024 | not_relevant | 0 | 0 | The paper studies DFMO (difluoromethylornithine), not tilactase. |
| PGx | Gidfar_2017 | not_relevant | 0 | 0 | The paper studies the effects of rapamycin on corneal epithelial cells and does not mention tilactase or any pharmacogenomic interactions affecting its pharmacokinetics or pharmacodynamics. |
| popPK | Golla_2002 | irrelevant | 0 | 0 | The paper describes an in vitro enzyme fragment complementation assay for cAMP and GPCR agonists, with no mention of tilactase or its pharmacokinetics. |
| PD | Golla_2002 | not_relevant | 0 | 0 | The paper describes a high-throughput screening assay for GPCR agonists (specifically GLP-1) and does not mention tilactase or report any pharmacodynamic parameters for it. |
| PGx | Goto_1986 | not_relevant | 0 | 0 | The paper studies adrenoleukodystrophy and lipid metabolism, with no mention of tilactase or its pharmacokinetic/pharmacodynamic properties. |
| popPK | Graham_2001 | irrelevant | 0 | 0 | The paper describes an in-vitro cell-based screening assay for EGF receptor antagonists using beta-galactosidase and does not involve tilactase pharmacokinetics. |
| PD | Graham_2001 | not_relevant | 0 | 0 | The paper describes a high-throughput screening assay for EGF receptor antagonists and does not report any pharmacodynamic or exposure-response data for tilactase. |
| popPK | Gregório_2024 | irrelevant | 0 | 0 | The paper describes a yeast-based assay for detecting endocrine-disrupting compounds and does not involve tilactase or pharmacokinetics. |
| PD | Gregório_2024 | not_relevant | 0 | 0 | The paper describes a yeast-based assay for detecting endocrine disruptors and reports EC50 values for the assay itself (using 17β-estradiol as a standard), but it does not report a pharmacodynamic or exposure-response relationship for the drug tilactase. |
| PGx | HERMAN_1963 | not_relevant | 0 | 0 | The paper studies beta-glucosidase genetics in yeast, not the pharmacogenomics of tilactase. |
| PD | He_2022 | not_relevant | 0 | 0 | The paper studies vanadium pentoxide (V2O5), not tilactase. |
| PD | Hellingman_2024 | not_relevant | 0 | 0 | The paper describes a new chemiluminescent assay for antimalarial drug screening and does not report any pharmacodynamic or exposure-response data for tilactase. |
| PD | Henderson_2020 | not_relevant | 0 | 0 | The paper is a review of High-Throughput Cellular Thermal Shift Assays (HT-CETSA) methodology and does not report any pharmacodynamic or exposure-response data for tilactase. |
| PGx | Henry-Vitrac_2006 | not_relevant | 0 | 0 | The paper studies the metabolism of the natural compound trans-piceid, not the drug tilactase. |
| PGx | Hernandez_1990 | not_relevant | 0 | 0 | The paper studies gene regulation in E. coli and is completely unrelated to tilactase pharmacogenomics. |
| PGx | Hernandez_2026 | not_relevant | 0 | 0 | The paper studies the effects of indoxyl sulfate on the blood-brain barrier and does not involve the drug tilactase or any pharmacogenomic analysis. |
| PGx | Herrinton_1995 | not_relevant | 0 | 0 | The paper discusses lactase and galactose metabolism in relation to ovarian cancer risk, and does not mention the drug tilactase. |
| popPK | Hill_1995 | irrelevant | 0 | 0 | The paper studies insulin-like growth factors (IGF-I/II) and bone biology, not the drug tilactase. |
| popPK | Hoekstra_2006 | irrelevant | 0 | 0 | The paper studies the estrogenic activity of dicofol, not the pharmacokinetics of tilactase. |
| PD | Hoekstra_2006 | not_relevant | 0 | 0 | The paper studies dicofol, not tilactase. |
| PD | Hosoda_1989 | not_relevant | 0 | 0 | The provided text consists only of library service headers and contains no scientific content, data, or mention of tilactase or pharmacodynamics. |
| popPK | Hu_2025 | irrelevant | 0 | 0 | The paper describes a high-content screening system for cellular senescence modulators and does not mention tilactase or report any pharmacokinetic parameters. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper investigates an Elovl1 inhibitor in a mouse model of adrenoleukodystrophy and does not involve tilactase or report pharmacokinetic parameters for it. |
| PD | Huang_2025 | not_relevant | 0 | 0 | The paper describes a preclinical mouse study of an Elovl1 inhibitor (not tilactase) and does not report any exposure-response or dose-response analysis with numeric PD parameters. |
| PD | Ikeda_2000 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for homonojirimycin analogues, not pharmacodynamic or exposure-response data for tilactase. |
| PD | Imagawa_1984 | not_relevant | 0 | 0 | The paper evaluates enzyme labels for immunoassays and does not report any pharmacodynamic or exposure-response relationship for tilactase. |
| PD | Imagawa_1984_2 | not_relevant | 0 | 0 | The paper discusses enzyme immunoassay labels (beta-D-galactosidase and horseradish peroxidase) for detecting human ferritin, not the pharmacodynamics of the drug tilactase. |
| PD | Indrio_2019 | not_relevant | 0 | 0 | The text is a general review of infantile colic and probiotics; it does not mention tilactase or report any specific pharmacodynamic or exposure-response data. |
| PGx | Irving-Pease_2024 | not_relevant | 0 | 0 | The paper is a study of ancient human population genetics and selection landscapes, and contains no information on the pharmacokinetics or pharmacodynamics of tilactase. |
| PGx | Isakova_2025 | not_relevant | 0 | 0 | The paper discusses temozolomide, TRAIL, and glioblastoma cell lines, not tilactase. |
| PGx | Jooss_1998 | not_relevant | 0 | 0 | The paper studies immune responses to adenovirus gene therapy vectors in mice, not pharmacogenomics of tilactase. |
| popPK | Kaguelidou_2019 | irrelevant | 0 | 0 | The paper is a study protocol for a trial comparing gabapentin and tramadol; tilactase is not mentioned or studied. |
| PD | Kaguelidou_2019 | not_relevant | 0 | 0 | The paper is a study protocol for a clinical trial (GABA-1) and does not report any results, data, or numeric pharmacodynamic parameters. |
| popPK | Kawanishi_2003 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | Kawanishi_2003 | not_relevant | 0 | 0 | The paper describes the construction of reporter yeasts for aryl hydrocarbon receptor activity and does not mention tilactase or report any pharmacodynamic or exposure-response data for it. |
| popPK | Kawashima_1981 | irrelevant | 0 | 0 | The provided evidence contains no pharmacokinetic data for tilactase and appears to be metadata or extraction software information. |
| PD | Kikutani_1978 | not_relevant | 0 | 0 | The paper describes an immunoassay method for hCG using beta-galactosidase as a label, not the pharmacodynamics of the drug tilactase. |
| PGx | Klemm_2020 | not_relevant | 0 | 0 | The paper discusses lactase gene variants and bone metabolism, not tilactase pharmacokinetics or pharmacodynamics. |
| PGx | Kryuchko_2017 | not_relevant | 2 | 5 | The study investigates lactase deficiency (a disease state) and the LCT genotype, but does not report pharmacokinetic or pharmacodynamic parameters of the drug tilactase. |
| PD | Kundu_2026 | not_relevant | 0 | 0 | The paper studies novel benzimidazole compounds (3a and 3b), not tilactase, and reports only in vitro IC50 values without any PK/PD modeling or exposure-response analysis for the target drug. |
| PD | Lachkar_2022 | not_relevant | 0 | 0 | The paper studies plant extracts (Chamaerops humilis), not the drug tilactase, and reports in vitro enzyme inhibition/toxicity data rather than a pharmacodynamic model for tilactase. |
| PGx | Langhans_2025 | not_relevant | 0 | 0 | The paper studies UGT1A variants and aging in mice, which is unrelated to tilactase pharmacokinetics or pharmacodynamics. |
| PD | Larsen_1994 | not_relevant | 0 | 0 | The paper reports in vitro IC50 and single-dose effects for a seco-oxysterol analog (U-88156), not for tilactase. |
| popPK | Larsen_2010 | irrelevant | 0 | 0 | The paper studies an antiviral peptide against Herpes simplex virus in in vitro cells and does not involve tilactase or pharmacokinetic parameters. |
| PD | Larsen_2010 | not_relevant | 0 | 0 | The paper studies TAT-Cd(0) peptide, not tilactase. |
| popPK | Le_2001 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| PD | Le_2001 | not_relevant | 0 | 0 | The paper describes a beta-galactosidase assay for yeast response to estrogens and does not mention tilactase or report any pharmacodynamic parameters for it. |
| PGx | Le_2022 | not_relevant | 0 | 0 | The paper studies ancient European genomes for natural selection signals (e.g., lactase persistence, immune phenotypes) and contains no data on pharmacokinetics or pharmacodynamics for tilactase or any drug. |
| PD | Leenders_1999 | not_relevant | 0 | 0 | The paper describes the synthesis of anthracycline prodrugs and reports in vitro IC50 values for toxicity, but does not report a pharmacodynamic (exposure-response) relationship for tilactase. |
| popPK | Lemini_2015 | irrelevant | 0 | 0 | The paper studies the estrogenic profile of 17β-amino-1,3,5(10)estratrien-3-ol, not tilactase. |
| PGx | Li_1976 | not_relevant | 0 | 0 | The paper studies murine beta-galactosidase genetics and has no connection to tilactase. |
| popPK | Li_2014 | irrelevant | 0 | 0 | The study is an in vitro yeast bioassay for thyroid hormone disruption and does not involve the drug tilactase or pharmacokinetic analysis. |
| PD | Li_2014 | not_relevant | 0 | 0 | The paper describes a yeast bioassay for thyroid hormone disruption and does not mention tilactase or report any pharmacodynamic parameters for it. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of CC-292 (acalabrutinib), not tilactase. |
| popPK | Liaw_1994 | irrelevant | 0 | 0 | The study describes an in-vitro assay for CRF receptors using a beta-galactosidase reporter gene and does not involve the drug tilactase. |
| PD | Liaw_1994 | not_relevant | 0 | 0 | The paper describes a colorimetric assay for CRF receptor ligands and does not mention tilactase or report any PD parameters for it. |
| popPK | Lin_1990 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Lin_1990 | not_relevant | 0 | 0 | The paper discusses protein-acetaldehyde adducts in alcoholic patients and does not mention tilactase or report any pharmacodynamic or exposure-response data. |
| PGx | Liu_2019 | not_relevant | 0 | 0 | The paper studies cellular senescence and p16INK4a promoter activation in mice and is unrelated to the drug tilactase or pharmacogenomics. |
| PD | Liu_2022 | not_relevant | 0 | 0 | The paper investigates the cellular effects of TCPP (a flame retardant) on keratinocytes and does not mention tilactase or report any pharmacodynamic parameters for it. |
| PGx | Liu_2024 | not_relevant | 0 | 0 | The paper studies NLRP3 inflammasome-mediated pyroptosis in cardiac aging and does not mention tilactase or any pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| PGx | Liu_2026 | not_relevant | 0 | 0 | The paper investigates the toxicity of nanoparticles (nPS) on liver enzymes and metabolomics, not the pharmacokinetics or pharmacodynamics of tilactase. |
| PD | Lu_2022 | not_relevant | 0 | 0 | The paper investigates estradiol benzoate and octyl gallate, not tilactase. |
| PGx | Mahmood_2015 | not_relevant | 0 | 0 | The paper is a case report on metachromatic leukodystrophy diagnosis and does not mention tilactase or pharmacogenomic effects on its PK/PD. |
| PGx | Maier_1998 | not_relevant | 0 | 0 | The paper studies AHR polymorphisms and ligand affinity in mice, not the pharmacokinetics or pharmacodynamics of the drug tilactase. |
| PD | Makalani_2026 | not_relevant | 0 | 0 | The paper studies thymoquinone and pentoxifylline in colorectal cancer spheroids and does not mention tilactase or report any pharmacodynamic parameters for it. |
| PGx | Malyarchuk_2024 | not_relevant | 0 | 0 | The paper discusses lactase deficiency and the MCM6/LCT genes, which are unrelated to the pharmacokinetics or pharmacodynamics of tilactase (a recombinant hyaluronidase). |
| PGx | Mancini_1986 | not_relevant | 0 | 0 | The paper investigates ganglioside metabolism in genetic diseases (GM1-gangliosidosis, Morquio B) and does not involve the drug tilactase or its PK/PD parameters. |
| popPK | Miller_1997 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Miller_1997 | not_relevant | 0 | 0 | The paper focuses on the expression of the aryl hydrocarbon receptor in yeast and its activation by indole compounds, containing no data or analysis regarding tilactase or any pharmacodynamic exposure-response relationship. |
| popPK | Mimram_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for clindamycin, not tilactase. |
| PD | Mimram_2022 | not_relevant | 0 | 0 | The paper reports a population PK model for clindamycin (not tilactase) and uses Monte-Carlo simulations for probability of target attainment (PTA), but does not report a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for the drug. |
| PD | Mitchell_1985 | not_relevant | 0 | 0 | The paper studies di(2-ethylhexyl) phthalate (DEHP), not tilactase, and reports qualitative histological/biochemical changes without numeric PD parameters. |
| PD | Miyairi_1993 | not_relevant | 0 | 0 | The paper describes the development of an enzyme immunoassay (EIA) for a metabolite and reports the assay's analytical dose-response curve, not a pharmacodynamic or exposure-response relationship for the drug tilactase. |
| popPK | Moine_2015 | irrelevant | 0 | 0 | The paper describes an in vitro screening of anti-parasitic compounds and does not mention tilactase or any pharmacokinetic parameters. |
| PD | Moine_2015 | not_relevant | 0 | 0 | The paper reports in vitro EC50 values for novel biphenylimidazoazine compounds against parasites, not for tilactase. |
| PD | Molina_2021 | not_relevant | 0 | 0 | The paper evaluates 4-thiazolidinones, not tilactase, and reports in vitro IC50 values for a different class of compounds. |
| popPK | Moral-Sanz_2026 | irrelevant | 0 | 0 | The paper studies the pharmacology and mechanism of the toxin StnI/StnIG, not the pharmacokinetics of tilactase. |
| PGx | Mostafa_2024 | not_relevant | 0 | 0 | The paper studies novel triarylethylene analogs, not tilactase, and does not report pharmacogenomic effects. |
| popPK | Myers_2026 | irrelevant | 0 | 0 | The study investigates the mechanism of action of the radioprotector BMX-001 in mice, with no mention of tilactase or pharmacokinetic parameters. |
| PD | Myers_2026 | not_relevant | 0 | 0 | The paper studies BMX-001 (not tilactase) and reports qualitative/semi-quantitative biological effects (fibrosis markers, methylation) without any pharmacokinetic data, concentration-effect curves, or numeric PD parameters. |
| popPK | Mózes_2026 | irrelevant | 0 | 0 | The paper is a review on dietary polyphenols and brain aging, with no mention or data for tilactase. |
| PD | Mózes_2026 | not_relevant | 0 | 0 | The paper is a narrative review on dietary polyphenols and brain aging, with no mention of tilactase or any pharmacodynamic modeling. |
| PGx | Na_2017 | not_relevant | 0 | 0 | The paper studies NAT2 haplotypes in relation to arylamines and hydrazine drugs, not tilactase (which is a drug that acts on PDE4 and is not a substrate of NAT2). |
| PD | Nada_2026 | not_relevant | 0 | 0 | The paper studies DDR1 inhibitors (AC-4067/AC-4061), not tilactase, and reports no PK/PD or exposure-response data for tilactase. |
| PD | Nagai_1990 | not_relevant | 0 | 0 | The provided text consists only of library service headers and contains no scientific content, data, or mention of tilactase or pharmacodynamics. |
| popPK | Nagamani_2019 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | Nagamani_2019 | not_relevant | 0 | 0 | The paper discusses silver nanoparticles and E. coli transformation efficiency, which is unrelated to the drug tilactase or any pharmacodynamic modeling. |
| popPK | Nascimben_2025 | irrelevant | 0 | 0 | The paper is about a bioinformatics tool for bacterial transcriptomics and does not contain any data related to tilactase pharmacokinetics. |
| PD | Nascimben_2025 | not_relevant | 0 | 0 | The paper describes a bioinformatics tool for analyzing bacterial biofilm transcriptomics (RNA-seq) and does not contain any pharmacokinetic or pharmacodynamic data for tilactase. |
| PD | Nathan_1990 | not_relevant | 0 | 0 | The paper studies butyrate-induced differentiation in colon cancer cells and does not mention tilactase or report any pharmacodynamic parameters for it. |
| PGx | Nicoli_2021 | not_relevant | 0 | 0 | The paper is a review of GM1 gangliosidosis and does not report on the drug tilactase or its pharmacokinetics/pharmacodynamics. |
| popPK | Niu_2026 | irrelevant | 0 | 0 | The paper investigates renal fibrosis and RGS19 in mouse models and is unrelated to tilactase pharmacokinetics. |
| PD | Niu_2026 | not_relevant | 0 | 0 | The paper investigates the role of RGS19 in renal fibrosis using siRNA and nanoparticles; it does not involve the drug tilactase or report any pharmacodynamic/exposure-response parameters. |
| PGx | Ong_2012 | not_relevant | 0 | 0 | The paper reports on Dihydropyrimidine Dehydrogenase (DPYD) deficiency and GM1 gangliosidosis, but does not mention tilactase or any pharmacokinetic/pharmacodynamic parameters for tilactase. |
| popPK | Owczarek-Januszkiewicz_2022 | irrelevant | 0 | 0 | The paper is a review on enzymatically modified isoquercitrin (EMIQ) and does not contain any data on tilactase. |
| PD | Owczarek-Januszkiewicz_2022 | not_relevant | 0 | 0 | The paper is a review of Enzymatically Modified Isoquercitrin (EMIQ) and does not contain any data, analysis, or mention of tilactase or its pharmacodynamics. |
| popPK | Palai_2013 | irrelevant | 0 | 0 | The paper describes in-vitro enzymatic kinetics of lactose conversion using beta-galactosidase, which is unrelated to the pharmacokinetics of the drug tilactase. |
| popPK | Park_1985 | irrelevant | 0 | 0 | The paper describes an in-vitro reactor study of beta-galactosidase and does not involve the drug tilactase. |
| PGx | Park_2015 | not_relevant | 0 | 0 | The paper discusses 1,5-isoquinolinediol as an anti-aging agent and does not mention tilactase or its pharmacokinetic/pharmacodynamic properties. |
| PGx | Pawłowska_2014 | not_relevant | 0 | 0 | The paper investigates the drug C-1311 (imidazoacridinone), not tilactase. |
| popPK | Petruski-Ivleva_2017 | irrelevant | 0 | 0 | The paper investigates the association between milk intake and cognitive decline in a human cohort and does not contain any pharmacokinetic parameters for tilactase. |
| PGx | Peña-Ocaña_2022 | not_relevant | 0 | 0 | The paper studies gastrointestinal microbiota metabolism in rats and does not mention the drug tilactase or any pharmacogenomic effects. |
| PGx | Pimentel_2017 | not_relevant | 0 | 0 | The paper studies lactose metabolism and lactase genetics in humans, not the pharmacokinetics or pharmacodynamics of the drug tilactase. |
| PD | Piraino_2023 | not_relevant | 0 | 0 | The paper does not mention tilactase or report any pharmacodynamic parameters for it. |
| popPK | Pirounaki_2000 | irrelevant | 0 | 0 | The paper describes a phenotypic assay for HIV-1 drug susceptibility and does not involve tilactase or its pharmacokinetics. |
| PD | Pirounaki_2000 | not_relevant | 0 | 0 | The paper describes a phenotypic assay for HIV-1 drugs (ZDV, NVP, IDV, RTV) and does not mention tilactase or report any pharmacodynamic parameters for it. |
| PGx | Qi_2022 | not_relevant | 0 | 0 | The paper investigates the association between host genetics, diet, and gut microbiome on circulating tryptophan metabolites and T2D risk; it does not mention tilactase or its pharmacokinetics/pharmacodynamics. |
| PD | Ren_2025 | not_relevant | 0 | 0 | The paper studies Dendrobium officinale extract, not tilactase, and reports qualitative mechanistic findings without numeric PD parameters. |
| PGx | Robertson_2003 | not_relevant | 0 | 0 | The paper describes the regulation of the CYP3A4 gene in transgenic mice and does not mention tilactase or any pharmacogenomic effects on its PK/PD parameters. |
| PD | Rocancourt_1990 | not_relevant | 0 | 0 | The paper describes a bioassay for HIV titration and mentions its use for drug dose-response, but it does not report any data or parameters for tilactase. |
| PGx | Rong_2026 | not_relevant | 0 | 0 | The study focuses on anti-diabetic drug targets (specifically miglitol and lactase) and atrial fibrillation risk via Mendelian randomization, and does not mention tilactase or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Rudalska_2025 | irrelevant | 0 | 0 | The paper describes p38α inhibitors (e.g., compound 2015) in mice and has no data on tilactase. |
| PGx | Sessions_2019 | not_relevant | 0 | 0 | The paper studies senescence in chondrocytes using navitoclax, not tilactase, and does not report pharmacogenomic effects on PK/PD. |
| PD | Sezgintürk_2008 | not_relevant | 0 | 0 | The paper describes the development and characterization of a biosensor for beta-galactosidase activity, not a pharmacodynamic or exposure-response analysis for the drug tilactase. |
| PGx | Shen_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of diabetic keratopathy and the SIRT1/FOXO1 pathway in limbal cells, with no mention of tilactase or pharmacogenomics. |
| PGx | Shimizu-Kadota_1987 | not_relevant | 0 | 0 | The paper describes lactose metabolism in Lactobacillus casei and is unrelated to tilactase pharmacogenomics. |
| popPK | Shimizu_1982 | irrelevant | 0 | 0 | The paper investigates prostaglandin D2 binding in rat brain and does not involve tilactase or pharmacokinetic parameters. |
| PD | Shimizu_1982 | not_relevant | 0 | 0 | The paper describes in vitro receptor binding properties of prostaglandin D2, not the pharmacodynamics of tilactase. |
| PGx | Shrestha_2020 | not_relevant | 0 | 0 | The study analyzes lactose malabsorption related to native lactase (LCT gene) and does not involve the enzyme tilactase or its pharmacokinetic/pharmacodynamic parameters. |
| PGx | Simau_2024 | not_relevant | 0 | 0 | The paper discusses lactase as a therapeutic enzyme against Acanthamoeba, not tilactase or any pharmacogenomic effects. |
| popPK | Somani_2016 | irrelevant | 0 | 0 | The study focuses on paracetamol, theophylline, indomethacin, and ibuprofen in neonates; tilactase is not mentioned or studied. |
| PD | Somani_2016 | not_relevant | 0 | 0 | The paper focuses on population pharmacokinetic (PK) modeling of oral drug absorption (maturation of absorption rate) in neonates and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Sánchez_2005 | irrelevant | 0 | 0 | The paper studies the enzymatic activity of beta-galactosidase in model membranes, not the pharmacokinetics of tilactase. |
| popPK | Tazawa_2003 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of aconitine in rats, not tilactase. |
| PD | Teng_2021 | not_relevant | 0 | 0 | The paper studies etoposide, not tilactase, and focuses on cellular mechanisms rather than pharmacokinetic or pharmacodynamic modeling. |
| PD | Thoduka_2017 | not_relevant | 0 | 0 | The paper discusses ribosomal targets for oligonucleotides and does not mention tilactase or report any pharmacodynamic or exposure-response data. |
| PGx | Thummala_2002 | not_relevant | 0 | 0 | The paper investigates gene therapy for Crigler-Najjar syndrome using UGT1A1 and does not study the pharmacokinetics or pharmacodynamics of the drug tilactase. |
| PD | Torrente_2025 | not_relevant | 0 | 0 | The paper is a mechanistic study using transgenic mouse models (knockout/knock-in) and does not report any pharmacokinetic data, exposure-response analysis, or numeric PD parameters (e.g., Emax, EC50) for tilactase or any other drug. |
| PGx | Usongo_2012 | not_relevant | 0 | 0 | The study focuses on Wnt signaling and stem cell dynamics in the murine ovarian surface epithelium and does not investigate the pharmacokinetics or pharmacodynamics of tilactase. |
| PD | Vegeto_1992 | not_relevant | 0 | 0 | The paper discusses the molecular mechanism of RU486 (mifepristone) antagonism on the progesterone receptor, not tilactase, and contains no pharmacodynamic or exposure-response data. |
| popPK | Vo_2018 | irrelevant | 0 | 0 | The study focuses on the cytotoxicity of the lampricide TFM in fish cell lines and does not involve tilactase or any pharmacokinetic parameters. |
| PGx | Washio_2011 | not_relevant | 0 | 0 | The paper investigates the mechanism of CYP2B6 induction by cigarette smoke, not the pharmacogenomics of tilactase. |
| PGx | Wefelmeier_2022 | not_relevant | 0 | 0 | The paper studies genetic tools for bio-manufacturing in yeast, not pharmacogenomics of tilactase. |
| PGx | Wonganan_2009 | not_relevant | 0 | 0 | The study reports drug-virus interactions affecting docetaxel PK, not the effect of a gene variant on tilactase. |
| PGx | Yadav_2023 | not_relevant | 0 | 0 | The paper is about transcriptome analysis of chickpea resistance to Fusarium wilt and has no relation to tilactase pharmacology. |
| popPK | Yamada_2018 | irrelevant | 0 | 0 | The study characterizes an antiviral compound (35C10) against cytomegalovirus and does not involve the drug tilactase or its pharmacokinetics. |
| popPK | Yang_2017 | irrelevant | 0 | 0 | The paper is an in vitro study on Trypanosoma cruzi drug susceptibility assays and does not involve tilactase pharmacokinetics. |
| PD | Yang_2017 | not_relevant | 0 | 0 | The paper evaluates assay protocols for Trypanosoma cruzi and does not mention or test the drug tilactase. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | The paper is a pharmacogenomics/genetics study regarding ancestry and does not report any pharmacokinetic parameters for tilactase. |
| PD | Yang_2021 | not_relevant | 0 | 0 | The paper analyzes genetic ancestry and pharmacogenomic loci using population genetics methods (PCA, homozygosity disequilibrium) and does not report any pharmacodynamic (PD) or exposure-response data for tilactase or any other drug. |
| PGx | Yao_2000 | not_relevant | 0 | 0 | The paper studies the metabolism and resistance of vinca alkaloids (vinblastine/vincristine) by CYP3A4, not the drug tilactase. |
| PGx | Yun_2026 | not_relevant | 0 | 0 | The study investigates the cellular mechanisms of doxorubicin toxicity in C2C12 myoblasts and does not involve tilactase or pharmacogenomic effects on PK/PD. |
| PGx | Zachariae_1993 | not_relevant | 0 | 0 | The paper discusses yeast gene expression and metabolism, not pharmacogenomics or the drug tilactase. |
| PD | Zarrelli_2014 | not_relevant | 0 | 0 | The paper discusses ecotoxicology of caffeine derivatives and does not mention tilactase or any pharmacodynamic parameters for it. |
| PGx | Zhao_2018 | not_relevant | 0 | 0 | The paper analyzes carbohydrate metabolism in Lactobacillus reuteri and contains no data regarding the drug tilactase. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 37 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is a conference title and contains no information regarding tilactase, pharmacodynamics, or exposure-response relationships. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 25 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a title/header for an abstract book and contains no data, results, or parameters regarding tilactase. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
