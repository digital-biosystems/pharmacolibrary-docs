<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05B&quot;,&quot;href&quot;:&quot;atc/A05B.md&quot;},{&quot;label&quot;:&quot;Ornithine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ornithine_Jia2026_reference&quot;,&quot;label&quot;:&quot;Jia_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ornithine/Ornithine_Jia2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ornithine_Kwack2026_reference&quot;,&quot;label&quot;:&quot;Kwack_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ornithine/Ornithine_Kwack2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ornithine_Serkland2026_reference&quot;,&quot;label&quot;:&quot;Serkland_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ornithine/Ornithine_Serkland2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Ornithine

- **generic name:** Ornithine
- **ATC codes:** `A05BA06`
- **DrugBank:** [DB00129](https://go.drugbank.com/drugs/DB00129) · **PubChem:** not captured
- **groups:** approved, investigational, nutraceutical

## About

Ornithine is used in liver therapy, as a lipotropic agent for liver conditions. It is approved and also sold as a nutraceutical, with some investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7103624](https://www.wikidata.org/wiki/Q7103624) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ornithine | parent | 132.163 | C5H12N2O2 | PubChem | [6262](https://pubchem.ncbi.nlm.nih.gov/compound/6262) | Le_1997 |
| ornithine alpha-ketoglutarate | metabolite | 278.261 | C10H18N2O7 | PubChem | [78866](https://pubchem.ncbi.nlm.nih.gov/compound/78866) | Le_1997 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:40 | 6:42 | 4/1/0 | 0/1/0 | 0/0/0 | 790,326/46,265 | einfracz / qwen3.8-27b | 38 | 8/31 | 36/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Jia_2026_reference](drugs/drug_ornithine/Ornithine_Jia2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Jia M et al., Population pharmacokinetics of rivaroxa…, European journal of clinica… (2026) | [10.1007/s00228-026-04034-6](https://doi.org/10.1007/s00228-026-04034-6) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.923). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Kwack_2026_reference](drugs/drug_ornithine/Ornithine_Kwack2026_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Kwack H et al., PKGPT: Expert-Orchestrated Recursive LL…, Pharmaceutics (2026) | [10.3390/pharmaceutics18040501](https://doi.org/10.3390/pharmaceutics18040501) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.636). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Serkland_2026_reference](drugs/drug_ornithine/Ornithine_Serkland2026_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Serkland TT et al., Pharmacokinetic-Pharmacodynamic Modelli…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01692-8](https://doi.org/10.1007/s40262-026-01692-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Wang_2022_reference](drugs/drug_ornithine/Ornithine_Wang2022_reference.md) | — | — (no model) | 0 | Wang X et al., Population Pharmacokinetic Analysis to…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01075-1](https://doi.org/10.1007/s40262-021-01075-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Le_1997_reference](drugs/drug_ornithine/Ornithine_Le1997_reference.md) | — | general linear (no model) | 7 | Le Bricon T et al., Ornithine alpha-ketoglutarate metabolis…, The American journal of cli… (1997) | [10.1093/ajcn/65.2.512](https://doi.org/10.1093/ajcn/65.2.512) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wellendorph_2007_inositol_phosphate_turnover](drugs/drug_ornithine/pd_Wellendorph_2007_inositol_phosphate_turnover.md) | inositol phosphate turnover ← l-ornithine · stimulation effect | — | Wellendorph P et al., The rat GPRC6A: cloning and characteriz…, Gene (2007) | [10.1016/j.gene.2007.03.008](https://doi.org/10.1016/j.gene.2007.03.008) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ornithine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ARG1 (unknown), ARG2 (unknown), GATM (unknown), OAT (unknown), OAZ1 (unknown), OTC (unknown), SLC25A15 (unknown), SLC25A2 (unknown), SLC7A1 (unknown), SLC7A2 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 606 matched, 117 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 5  ·  extracted 4  ·  needs_review 0  ·  rejected 1  ·  stale 5
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Le_1997.pdf` | Le Bricon T et al., Ornithine alpha-ketoglutarate metabolis…, The American journal of cli… (1997) | popPK | 10 | [10.1093/ajcn/65.2.512](https://doi.org/10.1093/ajcn/65.2.512) | [9022538](https://pubmed.ncbi.nlm.nih.gov/9022538) | The study reports quantitative pharmacokinetic parameters (one-compartment model, absorption constant, half-life) for ornithine in human burn patients. |
| `Gupta_2022.pdf` | Gupta S et al., Gene expression study to elucidate the…, Parasitology international (2022) | pd | 5 | [10.1016/j.parint.2022.102632](https://doi.org/10.1016/j.parint.2022.102632) | [35870741](https://www.ncbi.nlm.nih.gov/pubmed/35870741) | metadata signals extractable PD data (IC50) |
| `Ignarro_1989.pdf` | Ignarro LJ et al., Basic polyamino acids rich in arginine,…, Circulation research (1989) | pd | 5 | [10.1161/01.res.64.2.315](https://doi.org/10.1161/01.res.64.2.315) | [2492213](https://www.ncbi.nlm.nih.gov/pubmed/2492213) | metadata signals extractable PD data (EC50) |
| `Coirini_1994.pdf` | Coirini H et al., Binding of the anti-inflammatory steroi…, The Journal of steroid bioc… (1994) | pd | 4 | [10.1016/0960-0760(94)90299-2](https://doi.org/10.1016/0960-0760(94)90299-2) | [8003438](https://www.ncbi.nlm.nih.gov/pubmed/8003438) | metadata signals extractable PD data (IC50) |
| `Forgan_2018.pdf` | Forgan LG et al., Vasoactivity of nitrite in the iliac ar…, American journal of physiol… (2018) | pd | 4 | [10.1152/ajpregu.00315.2016](https://doi.org/10.1152/ajpregu.00315.2016) | [29046317](https://www.ncbi.nlm.nih.gov/pubmed/29046317) | metadata signals extractable PD data (EC50) |
| `Maquiaveli_2016.pdf` | Maquiaveli CDC et al., Stachytarpheta cayennensis extract inhi…, Journal of ethnopharmacology (2016) | pd | 4 | [10.1016/j.jep.2016.07.044](https://doi.org/10.1016/j.jep.2016.07.044) | [27432217](https://www.ncbi.nlm.nih.gov/pubmed/27432217) | metadata signals extractable PD data (EC50) |
| `Pacheco-Hernández_2024.pdf` | Pacheco-Hernández Y et al., Nutraceutical Properties of the Hydroal…, Chemistry & biodiversity (2024) | pd | 4 | [10.1002/cbdv.202401331](https://doi.org/10.1002/cbdv.202401331) | [39031675](https://www.ncbi.nlm.nih.gov/pubmed/39031675) | metadata signals extractable PD data (IC50) |
| `Tichý_2010.pdf` | Tichý M et al., Primary rat hepatocytes in chemical tes…, Toxicology in vitro : an in… (2010) | pd | 4 | [10.1016/j.tiv.2009.08.028](https://doi.org/10.1016/j.tiv.2009.08.028) | [19735719](https://www.ncbi.nlm.nih.gov/pubmed/19735719) | metadata signals extractable PD data (EC50) |
| `Yang_2021.pdf` | Yang X et al., The responses of the growth, cytochrome…, Ecotoxicology and environme… (2021) | pgx | 7 | [10.1016/j.ecoenv.2020.111547](https://doi.org/10.1016/j.ecoenv.2020.111547) | [33254406](https://www.ncbi.nlm.nih.gov/pubmed/33254406) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Bilgin_2024.pdf` | Bilgin H et al., Clinical, biochemical, and genotypical…, European review for medical… (2024) | pgx | 5 | [10.26355/eurrev_202403_35601](https://doi.org/10.26355/eurrev_202403_35601) | [38497870](https://www.ncbi.nlm.nih.gov/pubmed/38497870) | metadata signals extractable PGX data (SLC25A15) |

<sub>queue written 2026-10-07T19:35:24.150913+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelal_1983 | irrelevant | 0 | 0 | The paper is a biochemical study of enzyme kinetics in Pseudomonas aeruginosa, not a pharmacokinetic study of ornithine disposition. |
| PD | Abdelal_1983 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics and regulation of Carbamoylphosphate synthetase, not a pharmacodynamic exposure-response relationship for the drug Ornithine in a biological system. |
| PGx | Ampawong_2023 | not_relevant | 0 | 0 | The paper investigates the effects of sericin on ammonia detoxification mechanisms and does not report any pharmacogenomic effects or associations with gene variants. |
| PGx | Ash_2004 | not_relevant | 0 | 0 | The paper is a structural biology review of arginase enzyme and inhibitors, reporting no clinical pharmacogenomic studies or PK/PD data for ornithine. |
| popPK | Bellofatto_1987 | irrelevant | 0 | 0 | The study focuses on the mechanism of DFMO resistance in Trypanosoma brucei and does not report pharmacokinetic parameters (CL, V, ka) for ornithine. |
| PD | Bellofatto_1987 | not_relevant | 3 | 2 | The paper reports EC50 values for DFMO (an inhibitor of ornithine decarboxylase) in Trypanosoma brucei, but it does not report a pharmacodynamic relationship for Ornithine itself, nor does it provide a concentration-effect curve or numeric PD parameters for Ornithine. |
| PGx | Bilgin_2024 | not_relevant | 3 | 2 | The paper describes a genetic disorder (SLC25A13/SLC25A15 mutations) affecting endogenous ornithine metabolism, not the pharmacokinetic or pharmacodynamic effect of a drug administered to the patient. |
| PD | Bondy_1987 | not_relevant | 4 | 2 | The paper describes a dose-response relationship for electroshock intensity on enzyme activity, but it is a toxicological/pharmacological stimulus-response study, not a drug exposure-response (PK/PD) study for Ornithine. |
| popPK | Bräm_2026 | irrelevant | 0 | 0 | The paper is a methodological study on automated pharmacometric model development using NODEs and LASSO, applied to example data (neonatal weight, generic PK, warfarin), and does not contain any pharmacokinetic data for ornithine. |
| PD | Bräm_2026 | not_relevant | 0 | 0 | The paper focuses on a methodological approach for automated pharmacometric model development using Neural ODEs and LASSO, applying it to weight development, generic PK, and Warfarin PK/PD, but does not report any PD relationship or parameters for Ornithine. |
| PGx | Buyeverov_2019 | not_relevant | 0 | 0 | The study reports a clinical trial evaluating the efficacy of L-ornithine-L-aspartate in treating minimal hepatic encephalopathy in a general patient population, without investigating specific gene variants or genotypes (pharmacogenomics). |
| PGx | Cetin_2021 | not_relevant | 0 | 0 | The paper focuses on cell growth and drug resistance using a plasmonic sensor, with no analysis of gene variants affecting pharmacokinetic or pharmacodynamic parameters. |
| PGx | Chen_2026 | not_relevant | 0 | 0 | The paper describes metabolic pathway changes involving ornithine in thyroid cancer cells driven by UBE2C expression, but it does not report a pharmacogenomic effect (gene variant impact) on the PK or PD of ornithine as a drug. |
| PD | Coirini_1994 | not_relevant | 3 | 2 | The paper reports IC50 values for receptor binding (a pharmacodynamic parameter) and mentions ornithine decarboxylase activity, but it does not provide a quantitative exposure-response or dose-response curve for Ornithine itself, nor does it link Ornithine levels to drug exposure with numeric PD parameters. |
| popPK | Cox_2018 | irrelevant | 0 | 0 | The study measures plasma ornithine concentrations as a marker of arginase activity in sickle-cell disease, but does not report pharmacokinetic parameters (CL, V, t1/2) for ornithine as a drug. |
| popPK | Devens_2000 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of polyamine depletion and tumor growth inhibition, not a pharmacokinetic study of ornithine, and no PK parameters (CL, V, t1/2) are reported. |
| PD | Edwards_1991 | not_relevant | 3 | 2 | The paper reports IC50 values for a series of polyamine analogues and mentions ornithine decarboxylase inhibition, but it does not report a pharmacodynamic (exposure-response) relationship for the drug Ornithine itself, nor does it provide numeric PD parameters (like Emax, EC50 for Ornithine, or slope) for Ornithine. |
| popPK | El-Saber_2020 | irrelevant | 0 | 0 | The paper studies eflornithine (DFMO), an ornithine analog, for antiparasitic efficacy, not the pharmacokinetics of ornithine itself. |
| popPK | Fatima_2021 | irrelevant | 0 | 0 | The paper studies the anticancer mechanism of neomenthol, and ornithine is only mentioned as a substrate for the ornithine decarboxylase enzyme assay, not as a drug for PK analysis. |
| PGx | Favre_1998 | not_relevant | 0 | 0 | The paper describes a physiological mechanism involving putrescine and CYP3A4 induction, not a pharmacogenomic study of a gene variant affecting the PK/PD of the drug ornithine. |
| PGx | Fitzgerald_1989 | not_relevant | 0 | 0 | The paper characterizes the human ornithine decarboxylase gene sequence and polymorphism but does not report changes in pharmacokinetic or pharmacodynamic parameters of ornithine itself. |
| popPK | Forgan_2018 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | Forgan_2018 | not_relevant | 0 | 0 | The paper investigates the vasoactivity of nitrite, not Ornithine. |
| popPK | Gaitonde_1967 | irrelevant | 0 | 0 | The paper describes a spectrophotometric method for determining cysteine and mentions ornithine only as an amino acid that does not interfere with the reaction, providing no pharmacokinetic data. |
| PD | Gaitonde_1967 | not_relevant | 0 | 0 | The paper describes a chemical assay for cysteine and reports that ornithine does not interfere with the reaction; it contains no pharmacodynamic or exposure-response data for ornithine. |
| PGx | Giessel_2022 | not_relevant | 0 | 0 | The paper reports on the de novo engineering of ornithine transcarbamylase (OTC) variants using machine learning, not on the pharmacogenomic impact of human gene variants on the pharmacokinetics or pharmacodynamics of ornithine as a therapeutic agent. |
| PD | Ginty_1989 | not_relevant | 3 | 2 | The paper reports an IC50 for a calmodulin antagonist (W-7) affecting ODC activity, but does not report a pharmacodynamic exposure-response or dose-response relationship for Ornithine itself. |
| PGx | Guo_2022 | not_relevant | 0 | 0 | The study investigates amino acid metabolites as diagnostic biomarkers for hypertrophic cardiomyopathy and does not report pharmacogenomic effects on the PK or PD of ornithine as a drug. |
| PD | Gupta_2022 | not_relevant | 0 | 0 | The paper studies the effect of Quinapyramine (QPS) on gene expression and mentions Ornithine Decarboxylase as a gene target, but does not report a pharmacodynamic or exposure-response relationship for the drug Ornithine itself. |
| PGx | Guzman-Lepe_2018 | not_relevant | 0 | 0 | The paper investigates gene expression levels in liver disease and does not report pharmacokinetic or pharmacodynamic parameters of ornithine. |
| popPK | Gültekin_2026 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of L-citrulline, and ornithine is only measured as a secondary amino acid response (percent increase) without quantitative disposition parameters (CL, V, etc.). |
| popPK | Hammermann_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of amino acid metabolism and nitric oxide synthesis in rat alveolar macrophages, not a pharmacokinetic study reporting disposition parameters for ornithine. |
| popPK | Hanke_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for iclepertin, not ornithine. |
| PD | Harmon_1986 | not_relevant | 0 | 0 | The paper studies the developmental effects of imipramine on rat heart and brain, mentioning ornithine decarboxylase (ODC) activity but providing no pharmacodynamic or exposure-response analysis for the drug ornithine itself. |
| popPK | Hazra_2008 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of methylprednisolone on urea cycle genes (including ornithine decarboxylase), and does not report pharmacokinetic parameters for ornithine itself. |
| PD | Hazra_2008 | not_relevant | 0 | 0 | The paper focuses on methylprednisolone, not Ornithine, and does not report a pharmacodynamic model for Ornithine. |
| popPK | Hellmann_2023 | irrelevant | 0 | 0 | The paper focuses on microbial community composition and patient-reported outcomes in IBD, with "ornithine" mentioned only in the context of a microbial metabolic pathway, not as a subject drug for pharmacokinetic analysis. |
| popPK | Hu_2021 | irrelevant | 0 | 0 | The study analyzes associations between air pollution and amino acid plasma levels (including ornithine) in healthy adults, but does not report pharmacokinetic disposition parameters (CL, V, etc.) for ornithine as a drug. |
| PGx | Huang_2008 | not_relevant | 0 | 0 | The paper does not report pharmacogenomic effects on PK/PD parameters of ornithine. |
| PGx | Hubner_2008 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic interaction affecting a clinical endpoint (adenoma recurrence), not the pharmacokinetic or pharmacodynamic parameters of the drug ornithine. |
| popPK | Hüttl_2026 | irrelevant | 2 | 0 | The study focuses on arginine metabolism where ornithine is only a co-administered stable isotope tracer, and no quantitative pharmacokinetic parameters for ornithine are reported in the provided evidence. |
| popPK | Ignarro_1989 | irrelevant | 0 | 0 | no_text gate: only 183 chars of text extracted (&lt; 400) |
| PD | Ignarro_1989 | not_relevant | 0 | 0 | The paper describes qualitative physiological effects of polyamino acids on nitric oxide formation without providing numeric concentration-effect data or PD parameters for ornithine. |
| PGx | Jang_2018 | not_relevant | 0 | 0 | The paper discusses genetic variants in the regulatory regions of the ornithine transcarbamylase (OTC) gene causing urea cycle defects, not the pharmacokinetics or pharmacodynamics of ornithine as a therapeutic drug. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not ornithine. |
| PD | Jia_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for rivaroxaban, not ornithine, and does not provide a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for the drug. |
| popPK | Karlsen_2026 | irrelevant | 0 | 0 | The paper is a benchmarking framework using simulated data for an unspecified molecule developed by Sanofi, not a study of the drug ornithine. |
| PD | Karlsen_2026 | not_relevant | 0 | 0 | The paper describes a framework for benchmarking covariate model building in population pharmacokinetics (popPK) using simulated data; it does not report any pharmacodynamic (PD) or exposure-response relationships for Ornithine or any other drug. |
| PD | Kelley_2024 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (IC50, Ki) for ArgE inhibitors, not pharmacodynamic exposure-response relationships for the drug Ornithine in a biological system. |
| popPK | Kok_2019 | irrelevant | 0 | 0 | The paper presents a mathematical model of urea cycle defects for gene therapy insights, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for ornithine. |
| popPK | Konai_2020 | irrelevant | 0 | 0 | The paper is a study on the synthesis and antibacterial activity of membrane-active molecules that use ornithine as a structural building block, and does not report any pharmacokinetic parameters for ornithine. |
| PD | Konai_2020 | not_relevant | 0 | 0 | The paper reports dose-response data for a synthetic antibacterial compound (2y), not for the drug Ornithine. |
| PGx | Kramer_1995 | not_relevant | 0 | 0 | The paper discusses gene amplification in cell lines affecting polyamine metabolism and drug resistance, but it does not report pharmacogenomic effects on the PK or PD parameters of ornithine in humans. |
| PGx | Kubo_2018 | not_relevant | 0 | 0 | The paper is a review of nutrient transport mechanisms at the blood-retinal barrier and does not report pharmacogenomic effects or specific PK/PD parameter changes for ornithine. |
| PD | Kumar_2026 | not_relevant | 2 | 1 | The paper describes a mechanistic pathway and mentions qualitative pharmacodynamic depletion of polyamines in a small clinical trial, but it does not report numeric PD parameters (e.g., Emax, EC50) or quantitative exposure-response curves for Ornithine. |
| popPK | Kwack_2026 | irrelevant | 0 | 0 | The study focuses on the automated PopPK modeling of warfarin, theophylline, and tobramycin, and does not report any pharmacokinetic parameters for ornithine. |
| PD | Kwack_2026 | not_relevant | 0 | 0 | The paper focuses on automated population pharmacokinetic (PopPK) modeling for warfarin, theophylline, and tobramycin, and does not report any pharmacodynamic (PD) or exposure-response relationships for Ornithine. |
| popPK | Lambert_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the radiopharmaceutical 177Lu-Dotatate, not the amino acid ornithine. |
| popPK | Lee_2026 | irrelevant | 0 | 0 | This is a study on ruminal microbiome and methane emissions in cattle where ornithine is mentioned only as a metabolic biomarker associated with methane groups, not as a subject drug for pharmacokinetic parameter estimation. |
| PD | Li_1998 | not_relevant | 0 | 0 | The paper describes the engineering of a destabilized GFP reporter using an ornithine decarboxylase degradation domain, not the pharmacodynamics of the drug Ornithine. |
| PGx | Li_1998 | not_relevant | 0 | 0 | The paper describes the use of an ornithine decarboxylase domain to destabilize GFP for reporter assays, not a pharmacogenomic effect on ornithine PK/PD. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of the drug PF-06804103 (an anti-HER2 antibody-drug conjugate), not ornithine. |
| PGx | Lim_2007 | not_relevant | 0 | 0 | The paper characterizes a hepatocyte cell line for drug metabolism but does not report pharmacogenomic effects on ornithine PK/PD. |
| popPK | Lutakome_2025 | irrelevant | 0 | 0 | The study characterizes metabolic biomarkers in dairy cows but does not report pharmacokinetic parameters (CL, V, etc.) for ornithine as a subject drug. |
| PGx | López-Corella_2017 | not_relevant | 0 | 0 | The paper reports a case of a genetic deficiency causing metabolic hyperammonemia and pathology, not a pharmacokinetic or pharmacodynamic parameter change for a drug. |
| popPK | Maggi_1986 | irrelevant | 0 | 0 | The study characterizes vasopressin and oxytocin receptor binding in porcine seminal vesicles and does not report pharmacokinetic parameters for ornithine. |
| PD | Maggi_1986 | not_relevant | 0 | 0 | The paper investigates vasopressin receptor binding and physiology in porcine seminal vesicles; Ornithine is only mentioned as a structural component of a synthetic vasotocin analog, and no pharmacodynamic or exposure-response analysis for Ornithine is performed. |
| popPK | Mansour_2025 | irrelevant | 0 | 0 | This is a metabolomics study using ornithine as a diagnostic biomarker in bronchoalveolar lavage fluid to predict lung disease, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Maquiaveli_2016 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| PD | Maquiaveli_2016 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of a plant extract (Stachytarpheta cayennensis) on Leishmania, not the pharmacodynamics of the drug Ornithine. |
| PGx | Mardon_1969 | not_relevant | 0 | 0 | The paper discusses microbial morphology in Candida albicans, not human pharmacogenomics or PK/PD parameters of ornithine as a drug. |
| PGx | Marschall_1995 | not_relevant | 0 | 0 | The paper focuses on the role of ornithine decarboxylase (ODC) expression in signal transduction and cellular differentiation, not on how genetic variants affect the pharmacokinetic or pharmacodynamic parameters of the drug ornithine. |
| popPK | Medina-Enríquez_2015 | irrelevant | 0 | 0 | The paper studies an ornithine derivative as an enzyme inhibitor in vitro and does not report pharmacokinetic parameters for ornithine itself. |
| popPK | Messeri_2000 | irrelevant | 0 | 0 | The study investigates cationic amino acid transporter kinetics (Km/Vmax) in vitro, not pharmacokinetic disposition parameters (CL/V/ka) of ornithine. |
| PGx | Michaud_1992 | not_relevant | 0 | 0 | The paper describes a mutation detection method (SSCP) for the ornithine delta-aminotransferase gene but does not report any changes in pharmacokinetic or pharmacodynamic parameters. |
| PGx | Miyazaki_1993 | not_relevant | 0 | 0 | The paper studies the stability of the enzyme ornithine decarboxylase due to a mutation in the enzyme itself, not the pharmacokinetics or pharmacodynamics of ornithine as a drug. |
| PGx | Morin_1971 | not_relevant | 2 | 5 | The study describes genetic variations in amino acid transport (cystinuria) affecting renal clearance of ornithine, but ornithine is an endogenous amino acid, not a drug, so it does not report a pharmacogenomic effect on a pharmacokinetic parameter of a drug. |
| popPK | Nomura_1982 | irrelevant | 0 | 0 | The study investigates receptor sensitivity and ornithine decarboxylase activity, not the pharmacokinetic parameters of ornithine. |
| PD | Nomura_1982 | not_relevant | 0 | 0 | The paper investigates the effects of isoproterenol on cardiac receptors and ornithine decarboxylase activity, but does not report a pharmacodynamic or exposure-response relationship for the drug Ornithine itself. |
| popPK | Novitzky-Basso_2026 | irrelevant | 0 | 0 | This is a metabolomic biomarker study analyzing plasma levels of ornithine as a prognostic marker, not a pharmacokinetic study reporting disposition parameters for ornithine as a dosed drug. |
| PD | Olson_1985 | not_relevant | 4 | 2 | The paper reports a qualitative dose-response relationship for nicotine on ODC activity but does not provide specific numeric PD parameters (e.g., EC50, Emax) or detailed concentration-effect data in the provided text. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of elafibranor and its metabolite GFT1007, not ornithine. |
| PGx | Ou_2013 | not_relevant | 0 | 0 | The paper is a physiological study on high-altitude acclimatization in rats, not a pharmacogenomic study on drug PK/PD. |
| PD | Pacheco-Hernández_2024 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (anti-ornithine decarboxylase) and in vivo metabolic effects of a plant extract, but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug Ornithine itself. |
| PD | Pathak_2021 | not_relevant | 0 | 0 | The paper reports pharmacological activity for Cirsimaritin, not Ornithine, and does not contain any data or parameters for the specified drug. |
| PGx | Poulin_1990 | not_relevant | 0 | 0 | The paper investigates post-transcriptional regulation of ornithine decarboxylase expression by osmotic stress in cell lines, not the pharmacokinetics or pharmacodynamics of ornithine as a drug or substrate. |
| PGx | Raul_2007 | not_relevant | 1 | 0 | The paper discusses DFMO, a prodrug converted to ornithine, and mentions ODC polymorphism as a cancer risk marker, but does not report a pharmacokinetic or pharmacodynamic effect of a gene variant on ornithine. |
| popPK | Reguera_1995 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on the enzyme kinetics of ornithine decarboxylase in Leishmania infantum, not a pharmacokinetic study of ornithine disposition in an organism. |
| popPK | Revuelta_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of spermine and DFMO on rat uterine smooth muscle contraction, not a pharmacokinetic study of ornithine. |
| PGx | Rumping_2020 | not_relevant | 0 | 0 | The paper reports the metabolic consequences of a GLS variant on endogenous metabolites (including ornithine levels) in a cell model, which is a physiological/metabolic study, not a pharmacogenomic study of a drug's PK or PD parameters. |
| popPK | Sarfati_1992 | irrelevant | 0 | 0 | The study investigates the effect of bFGF on ornithine decarboxylase activity in cell lines, which is an enzymatic/mechanistic study, not a pharmacokinetic study of ornithine. |
| popPK | Scemama_1989 | irrelevant | 0 | 0 | The study focuses on the regulation of ornithine decarboxylase activity by CCK in rat cells, not the pharmacokinetics (disposition parameters) of the drug ornithine. |
| PGx | Schmidt_2005 | not_relevant | 0 | 0 | The paper investigates inborn errors of pyrimidine metabolism and mentions ornithine transcarbamylase deficiency only as a secondary finding, but does not report pharmacogenomic effects on the PK or PD of ornithine as a drug. |
| PGx | Segura-Sanchez_2026 | not_relevant | 0 | 0 | The paper discusses dendrogenomic resilience in trees and mentions the ornithine decarboxylase gene, but does not report pharmacokinetic or pharmacodynamic effects of ornithine. |
| popPK | Serkland_2026 | irrelevant | 0 | 0 | The study models the pharmacokinetics of ocrelizumab (an anti-CD20 antibody), not ornithine. |
| popPK | Sikorski_2019 | irrelevant | 0 | 0 | The study is an environmental toxicity assessment of glyphosate on duckweed (Lemna minor), focusing on enzyme activity (ornithine decarboxylase) and metabolite levels, not the pharmacokinetics of ornithine in a biological system. |
| PD | Sikorski_2019 | not_relevant | 0 | 0 | The paper reports dose-response data for glyphosate, not ornithine; ornithine is only mentioned as a substrate for an enzyme whose activity was measured. |
| PD | Song_2026 | not_relevant | 2 | 1 | The paper mentions a qualitative "dose-response trend" for ornithine in response to PM2.5 exposure but does not provide numeric PD parameters (e.g., EC50, slope) or a quantitative concentration-effect curve for the drug/metabolite itself. |
| PGx | Su_2019 | not_relevant | 0 | 0 | The paper describes the establishment of a cell culture model for ornithine transcarbamylase deficiency, not the pharmacogenomic effect of a variant on the PK or PD of the drug ornithine. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for 5-Fluorouracil (5-FU) in cancer patients, not ornithine. |
| PD | Suthahar_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for 5-fluorouracil and does not report any pharmacodynamic (PD) or exposure-response relationships for Ornithine or any other drug. |
| PGx | Svirklys_1988 | not_relevant | 0 | 0 | The paper investigates genetic linkage and prenatal diagnosis for a genetic disorder (OTCD), not pharmacogenomic effects on drug pharmacokinetics or pharmacodynamics. |
| PGx | Tailor_2025 | not_relevant | 0 | 0 | The paper is a review of Herbacetin's therapeutic potential and does not report pharmacogenomic effects on the PK or PD of ornithine. |
| popPK | Tichý_2010 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| PD | Tichý_2010 | not_relevant | 0 | 0 | The paper focuses on the applicability of primary rat hepatocytes in chemical testing and QSAR, with no mention of Ornithine or any pharmacodynamic/exposure-response analysis. |
| PGx | Tomizawa_2017 | not_relevant | 0 | 0 | The paper investigates sorafenib resistance and arginine deprivation in HCC cells, not the pharmacogenomics of ornithine. |
| popPK | Tricot_1994 | irrelevant | 0 | 0 | This is an in-vitro enzymology study characterizing succinyltransferase kinetics in bacteria, not a pharmacokinetic study of ornithine disposition. |
| PD | Tricot_1994 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics (Km, Hill coefficient) for a bacterial enzyme, not pharmacodynamic exposure-response relationships for the drug Ornithine in a biological system. |
| popPK | Vargas-Ramírez_2016 | irrelevant | 0 | 0 | The study investigates the pharmacological activity and toxicity of an ornithine derivative (NCAO) in cancer models, not the pharmacokinetic disposition parameters (CL, V, etc.) of ornithine itself. |
| popPK | Wang_2022 | relevant | 10 | 4 | The paper is a population PK study of L-ornithine (as the salt L-OPA) in humans, but the specific numeric parameter table for ornithine (Supplementary Table S2) is not fully rendered in the evidence, with only partial values visible in the text/lines. |
| PD | Wang_2022 | not_relevant | 3 | 1 | The paper focuses on population PK modeling for dose selection; while it mentions ammonia removal as a PD effect and explores a semi-mechanistic link, the final model omits the PD marker (ammonia) and does not report numeric PD parameters (Emax, EC50, etc.) for Ornithine. |
| popPK | Wellendorph_2007 | irrelevant | 0 | 0 | This is a receptor characterization study reporting in-vitro pharmacological potency (EC50) of ornithine, not pharmacokinetic disposition parameters. |
| popPK | Wong_2018 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular smooth muscle contraction mechanisms where ornithine is used as a signaling molecule/substrate, not a pharmacokinetic study of ornithine disposition. |
| popPK | Xajil-Ramos_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tacrolimus, not ornithine. |
| PD | Xajil-Ramos_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for tacrolimus, not ornithine, and contains no pharmacodynamic or exposure-response analysis. |
| PGx | Yang_2021 | not_relevant | 0 | 0 | The paper reports toxicological effects of dichlorvos on earthworms, not a pharmacogenomic effect on the PK/PD of ornithine. |
| PGx | Zell_2010 | not_relevant | 3 | 5 | The paper reports on ODC1 genotype interactions with eflornithine on clinical outcomes (adenoma recurrence) and tissue response, but does not report direct PK parameters (AUC, CL) or specific PD parameters (plasma ornithine levels) for ornithine itself. |
| PGx | Zell_2012 | not_relevant | 0 | 0 | The paper investigates the association between Odc1 genotype and colorectal cancer mortality risk in relation to diet, not the pharmacokinetic or pharmacodynamic parameters of ornithine as a drug. |
| PGx | Zhang_2022 | not_relevant | 0 | 0 | The paper reports chemical adduct formation involving ornithine as a biologic amine, not a pharmacogenomic effect on the PK or PD of ornithine. |
| PGx | Zhou_2024 | not_relevant | 0 | 0 | The paper discusses genetic variants in the OTC gene causing a metabolic disorder (urea cycle defect), not the pharmacogenomic effect of a gene variant on the pharmacokinetics or pharmacodynamics of ornithine administered as a drug. |
| PGx | Zhu_2024 | not_relevant | 0 | 0 | The paper investigates the mechanisms of a traditional Chinese medicine formula using multi-omics in a rat model and does not report any pharmacogenomic effects (gene variants) on the PK or PD of ornithine. |
| PGx | de_2020 | not_relevant | 0 | 0 | The paper is a plant science study on aluminium toxicity in rye genotypes, not a human pharmacogenomic study involving a drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:35 UTC</sub>
