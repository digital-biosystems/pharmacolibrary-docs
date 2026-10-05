<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A09A&quot;,&quot;href&quot;:&quot;atc/A09A.md&quot;},{&quot;label&quot;:&quot;betaine&quot;}]"></div>

# betaine

- **generic name:** betaine
- **ATC codes:** `A09AB02`, `A16AA06`
- **DrugBank:** [DB06756](https://go.drugbank.com/drugs/DB06756) · **PubChem:** [CID 247](https://pubchem.ncbi.nlm.nih.gov/compound/247)
- **molar mass:** 117.1463 g/mol (C5H11NO2) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

Betaine is used to treat homocystinuria and also acts as a digestive aid. It is authorised in the European Union for homocystinuria and is also available as a nutraceutical.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q10860583](https://www.wikidata.org/wiki/Q10860583) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 20:56 | 7:09 | 0/0/0 | 3/0/0 | 0/0/0 | 244,683/7,532 | ollama / qwen3.8:27b-mtp-q8_0 | 42 | 3/30 | 41/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Matthews_2002_HCY](drugs/drug_betaine/pd_Matthews_2002_HCY.md) | plasma total HCY concentration ← betaine · indirect response — drug stimulates the production of plasma total HCY concentration | — | Matthews A et al., An indirect response model of homocyste…, British journal of clinical… (2002) | [10.1046/j.1365-2125.2002.01620.x](https://doi.org/10.1046/j.1365-2125.2002.01620.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Petty_1999_Cl_selective_current](drugs/drug_betaine/pd_Petty_1999_Cl_selective_current.md) | Cl--selective current ← betaine · direct sigmoid Emax (Hill) effect | — | Petty CN et al., Characterization of a Na+-dependent bet…, Journal of neurophysiology (1999) | [10.1152/jn.1999.81.4.1567](https://doi.org/10.1152/jn.1999.81.4.1567) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.99).">in vitro</span> | [Rehman_2022_AChE](drugs/drug_betaine/pd_Rehman_2022_AChE.md) | acetylcholinesterase activity ← glycine betaine · inhibition effect | — | Rehman S et al., The Insight of In Silico and In Vitro e…, PloS one (2022) | [10.1371/journal.pone.0264074](https://doi.org/10.1371/journal.pone.0264074) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=betaine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `BCHE` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: BHMT (substrate), PRODH (inhibitor), SLC6A12 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 357 matched, 121 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cheng_2024.pdf` | Cheng R et al., Time-dependent hormesis transfer from f…, Environmental research (2024) | pd | 5 | [10.1016/j.envres.2024.118418](https://doi.org/10.1016/j.envres.2024.118418) | [38316386](https://www.ncbi.nlm.nih.gov/pubmed/38316386) | metadata signals extractable PD data (EC50) |
| `Neufeld_1995.pdf` | Neufeld DS et al., Basolateral transport of taurine in epi…, The Journal of experimental… (1995) | pd | 5 | [10.1242/jeb.198.2.465](https://doi.org/10.1242/jeb.198.2.465) | [7699315](https://www.ncbi.nlm.nih.gov/pubmed/7699315) | metadata signals extractable PD data (sigmoid) |
| `Zhou_2022.pdf` | Zhou JJ et al., Saline short-term shock and rapid recov…, Chemosphere (2022) | pd | 5 | [10.1016/j.chemosphere.2022.135687](https://doi.org/10.1016/j.chemosphere.2022.135687) | [35842050](https://www.ncbi.nlm.nih.gov/pubmed/35842050) | metadata signals extractable PD data (IC50) |
| `Danaceau_2000.pdf` | Danaceau JP et al., Mixture interactions of glutamate and b…, Journal of comparative phys… (2000) | pd | 4 | [10.1007/s003590050007](https://doi.org/10.1007/s003590050007) | [10659043](https://www.ncbi.nlm.nih.gov/pubmed/10659043) | metadata signals extractable PD data (EC50) |
| `Dawson_1997.pdf` | Dawson KM et al., Organic osmolytes and embryos: substrat…, Biology of reproduction (1997) | pd | 4 | [10.1095/biolreprod56.6.1550](https://doi.org/10.1095/biolreprod56.6.1550) | [9166709](https://www.ncbi.nlm.nih.gov/pubmed/9166709) | metadata signals extractable PD data (EC50) |
| `MacLean_2019.pdf` | MacLean GE et al., Zellweger spectrum disorder patient-der…, Journal of cellular biochem… (2019) | pd | 4 | [10.1002/jcb.27591](https://doi.org/10.1002/jcb.27591) | [30362618](https://www.ncbi.nlm.nih.gov/pubmed/30362618) | metadata signals extractable PD data (EC50) |
| `Bernard_2024.pdf` | Bernard DJ et al., SLC25A48 influences plasma levels of ch…, Molecular genetics and meta… (2024) | pgx | 5 | [10.1016/j.ymgme.2024.108518](https://doi.org/10.1016/j.ymgme.2024.108518) | [39047301](https://www.ncbi.nlm.nih.gov/pubmed/39047301) | metadata signals extractable PGX data (SLC25A48) |
| `Liu_2015.pdf` | Liu EP et al., Whole Blood PCR Amplification with Pfu…, Genetic testing and molecul… (2015) | pgx | 5 | [10.1089/gtmb.2015.0018](https://doi.org/10.1089/gtmb.2015.0018) | [26360116](https://www.ncbi.nlm.nih.gov/pubmed/26360116) | metadata signals extractable PGX data (CYP2C9*3) |

<sub>queue written 2026-10-04T20:50:51.082488+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abbas_2023 | not_relevant | 0 | 0 | The paper studies plant physiology (maize) and the effect of sodium nitroprusside on nickel stress, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of betaine as a drug. |
| PGx | Ahmad_2020 | not_relevant | 0 | 0 | The paper studies plant physiology (Vicia faba) and arsenic toxicity, not human pharmacogenomics or betaine pharmacokinetics. |
| popPK | Al_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic/toxicology investigation of betaine combinations in rats, reporting biomarkers and histology rather than pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Al_2025 | not_relevant | 2 | 0 | The study is a comparative efficacy trial in rats using fixed doses of combinations; it reports mean biomarker levels but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters (e.g., Emax, EC50) for betaine. |
| popPK | BEST_1950 | irrelevant | 0 | 0 | The paper title indicates a study on dose-response curves for potency estimation, which is pharmacodynamic rather than pharmacokinetic, and no PK parameters are present. |
| popPK | Badal_2025 | irrelevant | 0 | 0 | The paper is an in-vitro cytotoxicity study reporting IC50 values for betaine in prostate cancer cell lines, not a pharmacokinetic study with disposition parameters. |
| PGx | Bernard_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of choline (a nutrient/metabolite), not betaine, and does not report PK/PD parameters for betaine. |
| popPK | Borden_1995 | irrelevant | 0 | 0 | The paper is a molecular biology study on transporter cloning and in-vitro binding kinetics, not a pharmacokinetic study reporting disposition parameters for betaine. |
| PD | Borden_1995 | not_relevant | 3 | 5 | The paper reports an IC50 for betaine as an inhibitor of a transporter in a cell-based assay, which is a pharmacological potency parameter but not a pharmacodynamic exposure-response relationship for betaine as a therapeutic agent. |
| popPK | Bustos_2023 | irrelevant | 0 | 0 | The paper focuses on the design of capsaicin analogues targeting TRPV1 channels and does not involve betaine or its pharmacokinetics. |
| PD | Bustos_2023 | not_relevant | 0 | 0 | The paper focuses on the computational design and in silico prediction of capsaicin analogues targeting TRPV1, reporting binding energies and pharmacokinetic descriptors, but contains no experimental pharmacodynamic data, exposure-response analysis, or numeric PD parameters for betaine. |
| popPK | Che_2024 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for betaine, but the specific numeric values are not present in the provided evidence text. |
| PD | Che_2024 | not_relevant | 2 | 1 | The paper reports qualitative pharmacodynamic effects (suppression of pressure and hypertrophy) but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters like Emax or EC50. |
| PGx | Chen_2024 | not_relevant | 0 | 0 | The paper investigates biological aging and does not report pharmacokinetic or pharmacodynamic effects of betaine or any other drug. |
| popPK | Cheng_2024 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Cheng_2024 | not_relevant | 0 | 0 | The paper focuses on toxicological hormesis of personal care product mixtures and does not report pharmacodynamic or exposure-response relationships for betaine. |
| popPK | Choudhary_2024 | irrelevant | 0 | 0 | The paper is a study on microalgal bioremediation and biofuel production, where betaine is mentioned only as a stress metabolite, not as a subject drug for pharmacokinetic analysis. |
| PD | Choudhary_2024 | not_relevant | 0 | 0 | The paper is a bioremediation study on microalgae and does not report pharmacodynamic or exposure-response relationships for the drug betaine. |
| popPK | Collinsová_2003 | irrelevant | 0 | 0 | The paper focuses on the identification of enzyme inhibitors for betaine: homocysteine S-methyltransferase (BHMT) and reports IC50 values, not pharmacokinetic parameters for betaine. |
| PD | Collinsová_2003 | not_relevant | 3 | 2 | The paper reports a single IC50 value for a specific inhibitor of BHMT, which is a pharmacological potency metric, but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug betaine itself. |
| popPK | Danaceau_2000 | irrelevant | 0 | 0 | no_text gate: only 79 chars of text extracted (&lt; 400) |
| PD | Danaceau_2000 | not_relevant | 0 | 0 | The paper investigates electrophysiological interactions in squid olfactory neurons, which is a basic neuroscience study, not a pharmacokinetic/pharmacodynamic (PK/PD) analysis of betaine as a drug in a clinical or toxicological context. |
| PGx | Darko_2017 | not_relevant | 0 | 0 | The paper investigates plant salt tolerance and metabolic responses in wheat/barley, not human pharmacogenomics or drug pharmacokinetics. |
| popPK | Dawson_1997 | irrelevant | 0 | 0 | no_text gate: only 142 chars of text extracted (&lt; 400) |
| PD | Dawson_1997 | not_relevant | 0 | 0 | The paper investigates the protective effects of organic osmolytes (including betaine) on mouse zygotes under high osmolarity, but it does not report a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters (e.g., EC50, Emax) for betaine. |
| popPK | Dhar_1994 | irrelevant | 0 | 0 | The paper focuses on the synthesis and evaluation of GABA uptake inhibitors, with betaine mentioned only as a substrate for the BGT-1 transporter, and contains no pharmacokinetic parameters for betaine. |
| PD | Dhar_1994 | not_relevant | 0 | 0 | The paper reports in vitro binding/uptake inhibition data (IC50) for a novel GABA transporter inhibitor, not a pharmacodynamic exposure-response or dose-response relationship for betaine. |
| popPK | Dos_2021 | irrelevant | 0 | 0 | The paper is an in-vitro study on the leishmanicidal effects of mesoionic salts (a subclass of betaines) and contains no pharmacokinetic parameters for the drug betaine. |
| PGx | Emamverdian_2023 | not_relevant | 0 | 0 | The paper studies plant physiology (bamboo) and heavy metal toxicity, not human pharmacogenomics or the pharmacokinetics of betaine. |
| PGx | Feng_2011 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of the endogenous enzyme BHMT (homocysteine metabolism), not the pharmacokinetics or pharmacodynamics of the drug betaine. |
| PGx | Filipowicz_2010 | not_relevant | 0 | 0 | The paper reports a clinical trial evaluating the efficacy of betaine as an adjunct therapy for Hepatitis C, but it does not investigate pharmacogenomic variants or their effects on the pharmacokinetics or pharmacodynamics of betaine. |
| popPK | Freeman_2018 | irrelevant | 0 | 0 | The paper focuses on the synthesis and release kinetics of camptothecin prodrugs using a betaine-based polymer scaffold, not the pharmacokinetics of betaine as a drug. |
| popPK | French_2023 | irrelevant | 0 | 0 | The study assesses proline betaine (stachydrine) as a dietary biomarker for citrus intake, not the pharmacokinetics of betaine (trimethylglycine). |
| popPK | Gagneul_2007 | irrelevant | 0 | 0 | The paper is a plant physiology study on osmotic adaptation in *Limonium latifolium*, not a pharmacokinetic study of betaine as a drug. |
| PGx | Ganu_2013 | not_relevant | 0 | 0 | The paper describes splicing variants and expression of the BHMT enzyme in pigs, not the pharmacokinetics or pharmacodynamics of betaine as a drug in humans. |
| popPK | Garcia_2008 | irrelevant | 0 | 0 | The paper studies the environmental fate and toxicity of alkyl betaine surfactants, not the pharmacokinetics of the drug betaine. |
| PD | Garcia_2008 | not_relevant | 0 | 0 | The paper reports environmental toxicity (EC50) of surfactants, not pharmacodynamic exposure-response relationships for a drug. |
| PGx | Gaur_2016 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of betaine on DNA methylation in rheumatoid arthritis cells, not the effect of a gene variant on betaine's pharmacokinetics or pharmacodynamics. |
| popPK | Gong_2023 | irrelevant | 0 | 0 | The study is a cohort analysis of metabolite levels and fetal growth associations, not a pharmacokinetic study reporting disposition parameters like clearance or volume for betaine. |
| popPK | Gould_2024 | irrelevant | 0 | 0 | The paper is a metabolomic analysis of wound exudate composition and does not report pharmacokinetic parameters (CL, V, etc.) for betaine. |
| PD | Gould_2024 | not_relevant | 0 | 0 | The paper is a metabolomic profiling study of wound exudates that identifies betaine as a metabolite but does not report any pharmacodynamic, exposure-response, or dose-response analysis or numeric PD parameters for betaine. |
| PGx | Goyal_2023 | not_relevant | 0 | 0 | The paper studies plant physiology and biostimulants in Brassica, not human pharmacogenomics or betaine pharmacokinetics. |
| PGx | Griffin_2007 | not_relevant | 0 | 0 | The paper studies the effect of orotic acid on metabolite levels (including betaine) in rats, not the pharmacokinetics or pharmacodynamics of betaine as a drug, nor does it report a pharmacogenomic effect on betaine's PK/PD. |
| popPK | Grison_2022 | irrelevant | 0 | 0 | The study is a metabolomic analysis of uranium exposure in rats where betaine is identified as a biomarker/metabolite, not a pharmacokinetic study of betaine as a subject drug. |
| PD | Grison_2022 | not_relevant | 0 | 0 | The paper studies the effects of uranium exposure on metabolites (including betaine) but does not report a pharmacodynamic model or numeric dose-response parameters for betaine itself. |
| popPK | Grunewald_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of osmolyte transport in cell lines, not a pharmacokinetic study reporting disposition parameters for betaine. |
| PGx | Guo_2019 | not_relevant | 0 | 0 | The paper studies drought tolerance in zoysiagrass and the gene BADH (betaine aldehyde dehydrogenase), which is unrelated to the pharmacokinetics or pharmacodynamics of the drug betaine. |
| PGx | Gupta_2021 | not_relevant | 0 | 0 | The paper is a case report of a metabolic disorder (MAHCC) and mentions betaine as a treatment, but it does not report any pharmacogenomic analysis or data on how genetic variants affect the pharmacokinetics or pharmacodynamics of betaine. |
| PGx | Hartiala_2016 | not_relevant | 0 | 0 | The paper investigates genetic associations with plasma betaine levels (a metabolite) and CAD risk, not the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| PGx | He_2024 | not_relevant | 0 | 0 | The study investigates the association between a gene variant and cancer risk, not the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| popPK | Huang_2023 | irrelevant | 0 | 0 | The study is an epidemiological cohort analysis of the association between serum betaine levels and blood pressure/hypertension risk, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Juan_2022 | not_relevant | 0 | 0 | The paper is a clinical case report describing the treatment of a metabolic disorder with betaine, but it does not report any pharmacogenomic analysis of betaine's pharmacokinetics or pharmacodynamics. |
| popPK | Kawano_2018 | irrelevant | 0 | 0 | The study focuses on in vitro enzymatic inhibition (IC50) and molecular modeling of tyrosine betaine analogues, reporting no pharmacokinetic parameters for betaine. |
| PGx | Khan_2025 | not_relevant | 0 | 0 | The paper studies plant physiology and heat stress in Rhododendron, not human pharmacogenomics or drug pharmacokinetics. |
| PGx | Kitano_2004 | not_relevant | 0 | 0 | The paper describes the establishment and characterization of a cell line model for placental transport, not a pharmacogenomic study of betaine. |
| popPK | Koistinen_2025 | irrelevant | 0 | 0 | The study is a metabolomics analysis of glucose metabolism where betaine is identified as a biomarker, not a pharmacokinetic study of betaine disposition. |
| PGx | Li_2019 | not_relevant | 0 | 0 | The study investigates the efficacy of folate therapy, not the pharmacokinetics or pharmacodynamics of betaine. |
| popPK | Li_2020 | irrelevant | 0 | 0 | The study is an in-vitro drug screening using patient-derived organoids and cell lines, reporting IC50 values for cytotoxicity rather than pharmacokinetic disposition parameters (CL, V, etc.) for betaine. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The study analyzes chemical composition and metabolites in plant samples (Peganum harmala) and does not involve pharmacokinetic modeling or disposition parameters for betaine. |
| PD | Li_2021 | not_relevant | 0 | 0 | The paper is a plant metabolomics study comparing chemical profiles of Peganum harmala from different geographical origins; it does not report pharmacodynamic or exposure-response relationships for betaine. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper analyzes gene expression and metabolite levels in chickens to understand egg yolk formation, not the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| popPK | Li_2025_2 | irrelevant | 0 | 0 | The study is an epidemiological cohort analysis of the association between serum betaine levels and hyperuricemia risk, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study is an environmental exposure analysis of quaternary ammonium compounds (including betaine) in dust and urine, not a pharmacokinetic study of betaine as a drug. |
| popPK | Lie_2020 | irrelevant | 0 | 0 | The paper is a pharmacological study of a BGT1 inhibitor (SBV2-114) and does not report pharmacokinetic parameters for betaine. |
| PD | Lie_2020 | not_relevant | 0 | 0 | not captured |
| PGx | Liu_2015 | not_relevant | 0 | 0 | The paper describes a PCR method for genotyping and mentions betaine only as a chemical inhibitor of the polymerase, not as a drug subject to pharmacogenomic analysis. |
| PGx | Louck_2025 | not_relevant | 0 | 0 | The paper reports a GWAS for circulating metabolite levels (choline, betaine, DMG) in healthy individuals, not a pharmacokinetic or pharmacodynamic effect of a drug. |
| popPK | METAYER_1952 | irrelevant | 0 | 0 | The paper focuses on the preparation and pharmacodynamic properties of betaine esters, not pharmacokinetic disposition parameters for betaine itself. |
| PD | METAYER_1952 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric pharmacodynamic parameters, concentration-effect curves, or dose-response data for betaine. |
| popPK | MacLean_2019 | irrelevant | 0 | 0 | no_text gate: only 141 chars of text extracted (&lt; 400) |
| PD | MacLean_2019 | not_relevant | 0 | 0 | The paper investigates the effect of flavonoids on betaine metabolism in Zellweger spectrum disorder fibroblasts, not the pharmacodynamic response to betaine itself. |
| PGx | MacLean_2019 | not_relevant | 0 | 0 | The paper discusses flavonoids and peroxisome function in Zellweger spectrum disorder, not betaine pharmacokinetics or pharmacodynamics. |
| PGx | Makonya_2025 | not_relevant | 0 | 0 | The paper studies the effect of glycine betaine as a biostimulant on plant physiology (heat stress tolerance) in raspberries, not the pharmacokinetics or pharmacodynamics of betaine in humans or animals influenced by genetic variants. |
| popPK | McNamara_2020 | irrelevant | 0 | 0 | The paper is a review of food intake biomarkers where betaine (proline betaine) is used as a diagnostic marker for citrus consumption, not as a subject drug for pharmacokinetic parameter estimation. |
| PD | McNamara_2020 | not_relevant | 1 | 0 | The paper is a review of food intake biomarkers and mentions proline betaine (betaine) only in the context of classifying citrus consumption using ROC curves, without reporting any pharmacodynamic or exposure-response parameters. |
| PGx | Mendes_2021 | not_relevant | 0 | 0 | The paper investigates genetic polymorphisms in one-carbon metabolism and their association with DNA methylation and Down syndrome risk, not the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| PGx | Mills_2012 | not_relevant | 0 | 0 | The paper investigates genetic associations with omphalocele risk, not the pharmacokinetics or pharmacodynamics of betaine. |
| PGx | Mondal_2022 | not_relevant | 0 | 0 | The paper studies microbial thermotolerance and the role of glycine-betaine as an osmoprotectant in bacteria, not human pharmacogenomics or drug PK/PD. |
| popPK | Mufti_2024 | irrelevant | 0 | 0 | The study focuses on antiviral activity and in-vitro assays, and while it mentions pharmacokinetic analysis, no quantitative PK parameters (CL, V, etc.) for betaine are reported in the evidence. |
| PGx | Najafi_2020 | not_relevant | 0 | 0 | The paper investigates the effect of sulfur nanoparticles on lettuce plants, not the pharmacogenomics of betaine in humans. |
| popPK | Nam_2025 | irrelevant | 0 | 0 | The paper is a study on green extraction methods using betaine as a solvent component, not a pharmacokinetic study of betaine. |
| PD | Nam_2025 | not_relevant | 0 | 0 | The paper focuses on the optimization of extraction methods using betaine as a solvent component, not on the pharmacodynamic or exposure-response relationship of betaine as a drug. |
| popPK | Neufeld_1995 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Neufeld_1995 | not_relevant | 0 | 0 | The paper focuses on the basolateral transport of taurine in gill epithelial cells and does not mention betaine or report any pharmacodynamic or exposure-response relationships. |
| popPK | Noh_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 7-O-Succinyl Macrolactin A (SMA), not betaine. |
| PD | Noh_2017 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetics (PK) and allometric scaling to determine a first-in-man dose; it does not report a pharmacodynamic (PD) model or numeric exposure-response parameters (e.g., Emax, EC50) for betaine or SMA. |
| PGx | Ohnishi_2019 | not_relevant | 0 | 0 | The paper investigates betaine as a therapeutic agent and identifies a genetic variant (CHDH eQTL) associated with gene expression and disease stratification, but it does not report a pharmacogenomic effect on the pharmacokinetic or pharmacodynamic parameters of betaine itself. |
| PGx | Orenbuch_2019 | not_relevant | 0 | 0 | The paper investigates the effect of MTHFR genotype on ASD-like behavior and C1 metabolite levels, not the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| popPK | PATANIA_1961 | irrelevant | 0 | 0 | The provided evidence contains only the title of a paper on pharmacodynamic characteristics, with no quantitative pharmacokinetic parameters or data for betaine. |
| PD | PATANIA_1961 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric pharmacodynamic parameters, concentration-effect curves, or dose-response data for betaine. |
| PGx | Palomares_2022 | not_relevant | 0 | 0 | The paper investigates the impact of gene variants on IVF pregnancy outcomes (success, loss, miscarriage) and does not report pharmacokinetic or pharmacodynamic parameters of betaine. |
| popPK | Park_2017 | irrelevant | 0 | 0 | The study is a pharmacodynamic/physiological assessment of betaine supplementation in ducks, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Park_2017 | not_relevant | 3 | 2 | The study reports qualitative dose-response trends (improvements in body weight and SCFA at 700-1300 ppm) but does not provide numeric PD parameters (e.g., Emax, EC50) or a fitted concentration-effect curve. |
| PGx | Pellanda_2013 | not_relevant | 0 | 0 | The paper investigates BHMT expression and splicing variants in liver cancer, not the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| popPK | Petty_1999 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological characterization of a betaine transporter in squid neurons, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Popović_2017 | not_relevant | 0 | 0 | The paper studies plant physiology (poplar tissue culture) and water stress responses, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of betaine as a drug. |
| popPK | Rankovic_2023 | irrelevant | 0 | 0 | The study is a metabolomic analysis of serum concentrations in cats, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for betaine. |
| popPK | Rehman_2022 | irrelevant | 0 | 0 | The paper is an in-silico and in-vitro study on acetylcholinesterase inhibition and does not report any pharmacokinetic parameters for betaine. |
| PGx | Ren_2019 | not_relevant | 0 | 0 | The paper investigates the effect of a gene variant on the efficacy of folate therapy, not on the pharmacokinetic or pharmacodynamic parameters of betaine. |
| PGx | Ren_2026 | not_relevant | 0 | 0 | The paper studies plant resistance to bacterial wilt and rhizosphere microbiome, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of betaine as a drug. |
| PGx | Rhodes_1987 | not_relevant | 0 | 0 | The paper describes a mass spectrometry method for detecting betaines in plants (Zea mays) and does not involve human pharmacogenomics or drug PK/PD parameters. |
| PGx | Sadre-Marandi_2018 | not_relevant | 0 | 0 | The paper models sex differences in one-carbon metabolism and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| PGx | Saha_2022 | not_relevant | 0 | 0 | The paper studies plant physiology (rice) and does not involve human pharmacogenomics or the drug betaine. |
| popPK | Salehi_2021 | irrelevant | 0 | 0 | The paper is a mechanistic modeling study on dissolution and absorption using betaine chloride as a pH modifier, not a pharmacokinetic study of betaine as the subject drug. |
| PGx | Schwahn_2004 | not_relevant | 2 | 5 | The paper studies the effect of a genetic variant (Cbs) on the efficacy of betaine (lowering homocysteine), which is a pharmacodynamic effect, but it does not report pharmacokinetic parameters (like AUC, clearance) of betaine itself, nor does it fit a specific pharmacogenomic effect size model for a PK parameter. |
| popPK | Senesi_2013 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on muscle differentiation and does not report pharmacokinetic parameters for betaine. |
| PGx | Shelke_2019 | not_relevant | 0 | 0 | The paper investigates salt tolerance in soybean plants and mentions glycine betaine as a plant osmolyte, not as a drug subject to human pharmacogenomics. |
| popPK | Sherman_1995 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of betaine's effect on strychnine-induced allodynia, reporting ED50 values rather than pharmacokinetic parameters. |
| PGx | Singh_2011 | not_relevant | 0 | 0 | The paper investigates the association between BHMT gene polymorphisms and coronary artery disease risk, not the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| PGx | Singh_2021 | not_relevant | 0 | 0 | The paper studies salt stress responses in lentil plants, not human pharmacogenomics or betaine pharmacokinetics. |
| popPK | Singh_2021_2 | irrelevant | 0 | 0 | The paper describes the isolation and in-vitro bioactivity of a novel dipeptide (serine-glycine-betaine), not the pharmacokinetics of the drug betaine. |
| PGx | Sita_2021 | not_relevant | 0 | 0 | The paper studies the effect of nitric oxide on heat-stressed lentil plants, not the pharmacogenomics of betaine in humans. |
| PGx | Soliman_2019 | not_relevant | 0 | 0 | The paper studies plant physiology (eggplant) and the effect of nitric oxide on nickel stress, not human pharmacogenomics or the pharmacokinetics of betaine. |
| PGx | Stepien_2026 | not_relevant | 0 | 0 | The paper reports clinical outcomes and safety of betaine treatment in cobalamin-related remethylation disorders, but does not report pharmacokinetic or pharmacodynamic parameters or pharmacogenomic effects. |
| popPK | Stratton_2022 | irrelevant | 0 | 0 | The study investigates the ergogenic effects of pre-workout supplements on exercise performance and does not report any pharmacokinetic parameters for betaine. |
| popPK | Sumito_2020 | irrelevant | 0 | 0 | The paper describes the design of cell-penetration surfactants containing a betaine sequence, not the pharmacokinetics of the drug betaine. |
| PGx | Sun_2022 | not_relevant | 0 | 0 | The paper investigates the effect of castration on beef marbling and liver metabolites (including betaine) in cattle, not the pharmacokinetics or pharmacodynamics of betaine as a drug in humans. |
| popPK | Swantara_2022 | irrelevant | 0 | 0 | The paper is a study on the anticancer activity of plant extracts, and betaine is only mentioned as one of the identified compounds, with no pharmacokinetic data reported. |
| PD | Swantara_2022 | not_relevant | 0 | 0 | The paper reports the anticancer activity of a plant extract (Annona squamosa) and identifies betaine as one of several compounds present, but it does not perform any pharmacodynamic or exposure-response analysis specifically for betaine. |
| PGx | Takeda_2023 | not_relevant | 0 | 0 | The paper investigates pharmacogenomic effects on the toxicity and efficacy of pemetrexed, not betaine. |
| popPK | Tan_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study on dietary intake and mortality, not a pharmacokinetic study, and contains no PK parameters for betaine. |
| PD | Tan_2025 | not_relevant | 0 | 0 | The paper is an epidemiological cohort study analyzing the association between dietary intake and mortality risk using Cox regression, not a pharmacodynamic or exposure-response study with numeric PD parameters. |
| popPK | Teslić_2022 | irrelevant | 0 | 0 | The study focuses on the extraction of ellagic acid from raspberry seeds using betaine as a solvent component, not on the pharmacokinetics of betaine. |
| PD | Teslić_2022 | not_relevant | 0 | 0 | The paper focuses on the extraction and hydrolysis of ellagic acid from raspberry seeds using betaine-based solvents, reporting no pharmacokinetic or pharmacodynamic data for betaine itself. |
| popPK | Trentin_2025 | irrelevant | 0 | 0 | The paper is an in-vitro bioactivity and chemical profiling study of a microalga, where betaine lipids are identified as chemical components but no pharmacokinetic parameters for the drug betaine are reported. |
| PD | Trentin_2025 | not_relevant | 0 | 0 | The paper reports bioactivity screening (IC50/EC50) of crude algal extracts, not a pharmacodynamic or exposure-response relationship for the specific drug betaine. |
| PGx | Tzeng_1999 | not_relevant | 0 | 0 | The paper uses betaine as a reagent in a PCR assay for genetic screening, not as a drug subject to pharmacokinetic or pharmacodynamic analysis. |
| PGx | Verkerke_2024 | not_relevant | 0 | 0 | The paper investigates the role of the SLC25A48 transporter in mitochondrial choline metabolism and thermogenesis, not the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| PGx | Vieira_2020 | not_relevant | 0 | 0 | The paper reports a clinical case of MTHFR deficiency treated with betaine, but it does not analyze how the genotype affects the pharmacokinetic or pharmacodynamic parameters of betaine itself. |
| PGx | Ward_2021 | not_relevant | 0 | 0 | The study investigates the association between MTHFR genotypes and insulin resistance (HOMA-IR) using betaine as a metabolite predictor, but does not report pharmacokinetic or pharmacodynamic parameters of betaine itself. |
| PGx | Wasim_2022 | not_relevant | 0 | 0 | The paper reports the identification of CBS mutations in patients with homocystinuria and mentions betaine as part of the treatment regimen, but it does not analyze how these genetic variants affect the pharmacokinetics or pharmacodynamics of betaine. |
| PGx | Xian_2024 | not_relevant | 0 | 0 | The paper investigates the causal relationship between serum metabolites (including betaine) and active tuberculosis using Mendelian Randomization, not the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| popPK | Xing_2025 | irrelevant | 0 | 0 | The paper is a case-control epidemiological study measuring plasma metabolite levels (including betaine) as biomarkers for asthenozoospermia, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Xing_2025 | not_relevant | 2 | 1 | The study is an epidemiological case-control analysis reporting odds ratios for metabolite levels (including betaine) and asthenozoospermia, not a pharmacodynamic exposure-response or dose-response analysis with PD parameters. |
| popPK | YOUNG_1956 | irrelevant | 0 | 0 | The paper is a dose-response study comparing lipotropic agents, not a pharmacokinetic study reporting quantitative disposition parameters for betaine. |
| PGx | Yang_2025 | not_relevant | 0 | 0 | The paper investigates the role of lncRNA H19 in alcohol-associated liver disease and methionine metabolism, not the pharmacokinetics or pharmacodynamics of betaine as a drug. |
| PGx | Yeroshkina_2023 | not_relevant | 2 | 0 | The paper is a theoretical review discussing the clinical potential of betaine and BHMT gene variants, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes or fitted effect sizes. |
| popPK | Yin_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and metabolomics of Cistanche deserticola extract for constipation, where betaine is merely a quantified component of the extract, not the subject of a pharmacokinetic analysis. |
| PD | Yin_2024 | not_relevant | 0 | 0 | The paper reports qualitative pharmacodynamic effects and mechanistic pathways (metabolomics/western blot) for a plant extract but does not provide numeric concentration-effect or dose-response parameters for betaine. |
| PGx | Zampieri_2012 | not_relevant | 0 | 0 | The paper investigates the association between gene polymorphisms and Down syndrome risk, not the pharmacokinetics or pharmacodynamics of betaine. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | The paper is a metabolomics and anti-inflammatory activity study where betaine is identified as a constituent compound, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The paper title indicates a study on anammox performance in saline shock, which is unrelated to betaine pharmacokinetics. |
| PD | Zhou_2022 | not_relevant | 0 | 0 | The paper discusses anammox performance under saline shock and does not involve the drug betaine or any pharmacodynamic modeling. |
| PGx | Zhu_2024 | not_relevant | 0 | 0 | The paper is a review of one-carbon metabolism nutrients and diabetes risk, not a pharmacogenomic study of betaine's PK/PD parameters. |
| popPK | da_2017 | irrelevant | 0 | 0 | The paper is a lipidomic study of seaweed lipids (including betaine lipids like DGTS/MGTS) and their bioactivity, not a pharmacokinetic study of the drug betaine. |
| popPK | da_2021 | irrelevant | 0 | 0 | The paper is a lipidomics study of seaweed polar lipids (including betaine lipids like DGTS/MGTS) and does not report pharmacokinetic parameters for the drug betaine. |
| PD | da_2021 | not_relevant | 0 | 0 | The paper characterizes the lipid composition of seaweed and reports IC50 values for crude extracts, but does not report a pharmacodynamic or exposure-response relationship for the specific drug betaine. |
| popPK | Łątka_2024 | irrelevant | 0 | 0 | The paper is an in-vitro study on BGT1 transporter inhibitors and does not report pharmacokinetic parameters for betaine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
