<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05B&quot;,&quot;href&quot;:&quot;atc/A05B.md&quot;},{&quot;label&quot;:&quot;Ornithine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ornithine_Serkland2026_reference&quot;,&quot;label&quot;:&quot;Serkland_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ornithine/Ornithine_Serkland2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ornithine_Jia2026_reference&quot;,&quot;label&quot;:&quot;Jia_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ornithine/Ornithine_Jia2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ornithine_Kwack2026_reference&quot;,&quot;label&quot;:&quot;Kwack_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ornithine/Ornithine_Kwack2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ornithine_Wang2022_reference&quot;,&quot;label&quot;:&quot;Wang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ornithine/Ornithine_Wang2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-10-04 15:29 | 28:50 | 1/0/4 | 0/0/0 | 0/0/0 | 692,518/70,521 | ollama / qwen3.8:27b-mtp-q8_0 | 37 | 8/30 | 35/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.636). The first reading is what the record holds.">cross-check: disputed</span> | [Serkland_2026_reference](drugs/drug_ornithine/Ornithine_Serkland2026_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Serkland TT et al., Pharmacokinetic-Pharmacodynamic Modelli…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01692-8](https://doi.org/10.1007/s40262-026-01692-8) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Jia_2026_reference](drugs/drug_ornithine/Ornithine_Jia2026_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Jia M et al., Population pharmacokinetics of rivaroxa…, European journal of clinica… (2026) | [10.1007/s00228-026-04034-6](https://doi.org/10.1007/s00228-026-04034-6) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.923). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Kwack_2026_reference](drugs/drug_ornithine/Ornithine_Kwack2026_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Kwack H et al., PKGPT: Expert-Orchestrated Recursive LL…, Pharmaceutics (2026) | [10.3390/pharmaceutics18040501](https://doi.org/10.3390/pharmaceutics18040501) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Le_1997_reference](drugs/drug_ornithine/Ornithine_Le1997_reference.md) | — | 1-compartment (no model) | 4 | Le Bricon T et al., Ornithine alpha-ketoglutarate metabolis…, The American journal of cli… (1997) | [10.1093/ajcn/65.2.512](https://doi.org/10.1093/ajcn/65.2.512) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Wang_2022_reference](drugs/drug_ornithine/Ornithine_Wang2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Wang X et al., Population Pharmacokinetic Analysis to…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01075-1](https://doi.org/10.1007/s40262-021-01075-1) |

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
- **records:** 5  ·  extracted 1  ·  needs_review 4  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Le_1997.pdf` | Le Bricon T et al., Ornithine alpha-ketoglutarate metabolis…, The American journal of cli… (1997) | popPK | 9 | [10.1093/ajcn/65.2.512](https://doi.org/10.1093/ajcn/65.2.512) | [9022538](https://pubmed.ncbi.nlm.nih.gov/9022538) | The study reports quantitative pharmacokinetic parameters (absorption constant, elimination half-life, one-compartment model) for ornithine in human burn patients. |
| `Gupta_2022.pdf` | Gupta S et al., Gene expression study to elucidate the…, Parasitology international (2022) | pd | 5 | [10.1016/j.parint.2022.102632](https://doi.org/10.1016/j.parint.2022.102632) | [35870741](https://www.ncbi.nlm.nih.gov/pubmed/35870741) | metadata signals extractable PD data (IC50) |
| `Hazra_2008.pdf` | Hazra A et al., Pharmacodynamic modeling of acute and c…, Gene regulation and systems… (2008) | pd | 5 | not captured | [19787073](https://www.ncbi.nlm.nih.gov/pubmed/19787073) | metadata signals extractable PD data (Pharmacodynamicmodel) |
| `Ignarro_1989.pdf` | Ignarro LJ et al., Basic polyamino acids rich in arginine,…, Circulation research (1989) | pd | 5 | [10.1161/01.res.64.2.315](https://doi.org/10.1161/01.res.64.2.315) | [2492213](https://www.ncbi.nlm.nih.gov/pubmed/2492213) | metadata signals extractable PD data (EC50) |
| `Coirini_1994.pdf` | Coirini H et al., Binding of the anti-inflammatory steroi…, The Journal of steroid bioc… (1994) | pd | 4 | [10.1016/0960-0760(94)90299-2](https://doi.org/10.1016/0960-0760(94)90299-2) | [8003438](https://www.ncbi.nlm.nih.gov/pubmed/8003438) | metadata signals extractable PD data (IC50) |
| `Forgan_2018.pdf` | Forgan LG et al., Vasoactivity of nitrite in the iliac ar…, American journal of physiol… (2018) | pd | 4 | [10.1152/ajpregu.00315.2016](https://doi.org/10.1152/ajpregu.00315.2016) | [29046317](https://www.ncbi.nlm.nih.gov/pubmed/29046317) | metadata signals extractable PD data (EC50) |
| `Maquiaveli_2016.pdf` | Maquiaveli CDC et al., Stachytarpheta cayennensis extract inhi…, Journal of ethnopharmacology (2016) | pd | 4 | [10.1016/j.jep.2016.07.044](https://doi.org/10.1016/j.jep.2016.07.044) | [27432217](https://www.ncbi.nlm.nih.gov/pubmed/27432217) | metadata signals extractable PD data (EC50) |
| `Pacheco-Hernández_2024.pdf` | Pacheco-Hernández Y et al., Nutraceutical Properties of the Hydroal…, Chemistry & biodiversity (2024) | pd | 4 | [10.1002/cbdv.202401331](https://doi.org/10.1002/cbdv.202401331) | [39031675](https://www.ncbi.nlm.nih.gov/pubmed/39031675) | metadata signals extractable PD data (IC50) |
| `Tichý_2010.pdf` | Tichý M et al., Primary rat hepatocytes in chemical tes…, Toxicology in vitro : an in… (2010) | pd | 4 | [10.1016/j.tiv.2009.08.028](https://doi.org/10.1016/j.tiv.2009.08.028) | [19735719](https://www.ncbi.nlm.nih.gov/pubmed/19735719) | metadata signals extractable PD data (EC50) |
| `Yang_2021.pdf` | Yang X et al., The responses of the growth, cytochrome…, Ecotoxicology and environme… (2021) | pgx | 7 | [10.1016/j.ecoenv.2020.111547](https://doi.org/10.1016/j.ecoenv.2020.111547) | [33254406](https://www.ncbi.nlm.nih.gov/pubmed/33254406) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Bilgin_2024.pdf` | Bilgin H et al., Clinical, biochemical, and genotypical…, European review for medical… (2024) | pgx | 5 | [10.26355/eurrev_202403_35601](https://doi.org/10.26355/eurrev_202403_35601) | [38497870](https://www.ncbi.nlm.nih.gov/pubmed/38497870) | metadata signals extractable PGX data (SLC25A15) |

<sub>queue written 2026-10-04T15:04:56.885819+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelal_1983 | irrelevant | 0 | 0 | The paper is an in-vitro enzymology study on carbamoylphosphate synthetase from Pseudomonas aeruginosa, not a pharmacokinetic study of ornithine. |
| PD | Abdelal_1983 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics and regulation of Carbamoylphosphate synthetase, not a pharmacodynamic exposure-response relationship for the drug Ornithine in a biological system. |
| PGx | Ampawong_2023 | not_relevant | 0 | 0 | The paper investigates the effect of sericin on urea cycle enzymes and does not report any pharmacogenomic effects on the PK or PD of ornithine. |
| PGx | Ash_2004 | not_relevant | 0 | 0 | The paper describes the structure and function of arginase enzymes and their inhibitors, but does not report pharmacogenomic effects on the PK or PD of ornithine. |
| popPK | Bellofatto_1987 | irrelevant | 0 | 0 | The study investigates the mechanism of drug resistance in Trypanosoma brucei using DFMO, an ornithine analog, rather than reporting pharmacokinetic parameters for ornithine itself. |
| PD | Bellofatto_1987 | not_relevant | 3 | 2 | The paper reports EC50 values for DFMO (an inhibitor of ornithine decarboxylase) in Trypanosoma brucei, but it does not report a pharmacodynamic relationship for Ornithine itself, nor does it provide a concentration-effect curve or numeric PD parameters for Ornithine. |
| PGx | Bilgin_2024 | not_relevant | 0 | 0 | The paper describes a genetic disease (urea cycle disorder) and its biochemical phenotype (ornithine levels), not the pharmacokinetics or pharmacodynamics of a drug. |
| PD | Bondy_1987 | not_relevant | 4 | 2 | The paper describes a dose-response relationship for electroshock intensity on enzyme activity, but it is a toxicological/pharmacological stimulus-response study, not a drug exposure-response (PK/PD) study for Ornithine. |
| popPK | Bräm_2026 | irrelevant | 0 | 0 | The paper describes a methodological approach for automated pharmacometric model development using neural ODEs and LASSO regression, demonstrating it on warfarin and generic PK data, but does not study ornithine. |
| PD | Bräm_2026 | not_relevant | 0 | 0 | The paper focuses on a methodological approach for automated pharmacometric model development using Neural ODEs and LASSO, applying it to weight development, generic PK, and Warfarin PK/PD, but does not report any PD relationship or parameters for Ornithine. |
| PGx | Buyeverov_2019 | not_relevant | 0 | 0 | The paper reports clinical efficacy of L-ornithine-L-aspartate in hepatitis C patients but does not investigate any gene variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Cetin_2021 | not_relevant | 0 | 0 | The paper describes a biophysical assay for cell growth and does not report pharmacogenomic effects on the PK or PD of ornithine. |
| PGx | Chen_2026 | not_relevant | 0 | 0 | The paper discusses UBE2C's role in D-ornithine metabolism in thyroid carcinoma, but does not report a pharmacogenomic effect on the PK or PD of a drug. |
| PD | Coirini_1994 | not_relevant | 3 | 2 | The paper reports IC50 values for receptor binding (a pharmacodynamic parameter) and mentions ornithine decarboxylase activity, but it does not provide a quantitative exposure-response or dose-response curve for Ornithine itself, nor does it link Ornithine levels to drug exposure with numeric PD parameters. |
| popPK | Cox_2018 | irrelevant | 0 | 0 | The study measures plasma amino acid concentrations (including ornithine) as biomarkers of arginine bioavailability and endothelial function, but does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for ornithine. |
| popPK | Devens_2000 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of polyamine depletion using DFMO and ORI 1202, not the pharmacokinetics of ornithine itself. |
| PD | Edwards_1991 | not_relevant | 3 | 2 | The paper reports IC50 values for a series of polyamine analogues and mentions ornithine decarboxylase inhibition, but it does not report a pharmacodynamic (exposure-response) relationship for the drug Ornithine itself, nor does it provide numeric PD parameters (like Emax, EC50 for Ornithine, or slope) for Ornithine. |
| popPK | El-Saber_2020 | irrelevant | 0 | 0 | The study investigates the antiparasitic efficacy of eflornithine (an ornithine analog) and hydroxyurea, not the pharmacokinetics of ornithine itself. |
| popPK | Fatima_2021 | irrelevant | 0 | 0 | The study investigates the anticancer effects of neomenthol, and ornithine is only mentioned as a substrate for the enzyme ornithine decarboxylase (ODC) in an in vitro assay, not as a subject drug for pharmacokinetic analysis. |
| PGx | Favre_1998 | not_relevant | 0 | 0 | The paper investigates the effect of putrescine on CYP3A4 levels during liver regeneration, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of ornithine. |
| PGx | Fitzgerald_1989 | not_relevant | 0 | 0 | The paper characterizes the sequence and structure of the human ornithine decarboxylase gene but does not report any pharmacokinetic or pharmacodynamic effects of ornithine or any drug. |
| popPK | Forgan_2018 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | Forgan_2018 | not_relevant | 0 | 0 | The paper investigates the vasoactivity of nitrite, not Ornithine. |
| popPK | Gaitonde_1967 | irrelevant | 0 | 0 | The paper describes a spectrophotometric method for determining cysteine and mentions ornithine only as a non-reactive amino acid in the specificity test, containing no pharmacokinetic data. |
| PD | Gaitonde_1967 | not_relevant | 0 | 0 | The paper describes a chemical assay for cysteine and reports that ornithine does not interfere with the reaction; it contains no pharmacodynamic or exposure-response data for ornithine. |
| PGx | Giessel_2022 | not_relevant | 0 | 0 | The paper focuses on computational protein engineering of ornithine transcarbamylase (OTC) to improve catalytic efficiency and stability, not on pharmacogenomic effects of gene variants on the pharmacokinetics or pharmacodynamics of ornithine as a drug. |
| PD | Ginty_1989 | not_relevant | 3 | 2 | The paper reports an IC50 for a calmodulin antagonist (W-7) affecting ODC activity, but does not report a pharmacodynamic exposure-response or dose-response relationship for Ornithine itself. |
| PGx | Guo_2022 | not_relevant | 0 | 0 | The paper reports plasma amino acid levels (including ornithine) as biomarkers for hypertrophic cardiomyopathy, not the pharmacokinetics or pharmacodynamics of ornithine as a drug. |
| PD | Gupta_2022 | not_relevant | 0 | 0 | The paper studies the effect of Quinapyramine (QPS) on gene expression and mentions Ornithine Decarboxylase as a gene target, but does not report a pharmacodynamic or exposure-response relationship for the drug Ornithine itself. |
| PGx | Guzman-Lepe_2018 | not_relevant | 0 | 0 | The paper investigates the correlation between transcription factor expression and liver function in chronic hepatic failure, not the effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of ornithine. |
| popPK | Gültekin_2026 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of L-citrulline, and while ornithine levels are reported as a secondary amino acid response (percent change), no quantitative PK parameters (CL, V, etc.) for ornithine itself are provided. |
| popPK | Hammermann_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of amino acid metabolism in rat alveolar macrophages and does not report pharmacokinetic parameters for ornithine. |
| popPK | Hanke_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug iclepertin, not ornithine. |
| PD | Harmon_1986 | not_relevant | 0 | 0 | The paper studies the developmental effects of imipramine on rat heart and brain, mentioning ornithine decarboxylase (ODC) activity but providing no pharmacodynamic or exposure-response analysis for the drug ornithine itself. |
| popPK | Hazra_2008 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| PD | Hazra_2008 | not_relevant | 0 | 0 | The paper focuses on methylprednisolone, not Ornithine, and does not report a pharmacodynamic model for Ornithine. |
| popPK | Hellmann_2023 | irrelevant | 0 | 0 | The study investigates microbial community composition and metabolic pathways in pediatric IBD, not the pharmacokinetics of ornithine as a drug. |
| popPK | Hu_2021 | irrelevant | 0 | 0 | The study is an observational association analysis of air pollution and amino acid levels, not a pharmacokinetic study of ornithine disposition. |
| PGx | Huang_2008 | not_relevant | 0 | 0 | The paper investigates neuroprotective mechanisms of LPS preconditioning and does not report any pharmacogenomic effects on the PK or PD of ornithine. |
| PGx | Hubner_2008 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on a clinical outcome (adenoma recurrence) rather than a pharmacokinetic or pharmacodynamic parameter of ornithine. |
| popPK | Hüttl_2026 | irrelevant | 2 | 0 | The study focuses on arginine metabolism and uses ornithine only as a co-administered tracer, with no quantitative PK parameters for ornithine reported in the evidence. |
| popPK | Ignarro_1989 | irrelevant | 0 | 0 | no_text gate: only 183 chars of text extracted (&lt; 400) |
| PD | Ignarro_1989 | not_relevant | 0 | 0 | The paper describes qualitative physiological effects of polyamino acids on nitric oxide formation without providing numeric concentration-effect data or PD parameters for ornithine. |
| PGx | Jang_2018 | not_relevant | 0 | 0 | The paper describes genetic variants in the OTC gene causing a metabolic disorder (OTC deficiency) and reduced gene expression, but does not report pharmacogenomic effects on the PK or PD of a specific drug. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not ornithine. |
| PD | Jia_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for rivaroxaban, not ornithine, and does not provide a pharmacodynamic (PD) model or numeric PD parameters (e.g., Emax, EC50) for the drug. |
| popPK | Karlsen_2026 | irrelevant | 0 | 0 | The paper describes a simulated benchmarking framework for covariate model building using a generic "molecule" from Sanofi clinical trials, not ornithine. |
| PD | Karlsen_2026 | not_relevant | 0 | 0 | The paper describes a framework for benchmarking covariate model building in population pharmacokinetics (popPK) using simulated data; it does not report any pharmacodynamic (PD) or exposure-response relationships for Ornithine or any other drug. |
| PD | Kelley_2024 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (IC50, Ki) for ArgE inhibitors, not pharmacodynamic exposure-response relationships for the drug Ornithine in a biological system. |
| popPK | Kok_2019 | irrelevant | 0 | 0 | The paper describes a mathematical model of the urea cycle for gene therapy in urea cycle defects, not a pharmacokinetic study of ornithine as a drug. |
| popPK | Konai_2020 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on membrane-active antibacterial compounds where ornithine is used only as a structural building block, not as a subject drug for pharmacokinetic analysis. |
| PD | Konai_2020 | not_relevant | 0 | 0 | The paper reports dose-response data for a synthetic antibacterial compound (2y), not for the drug Ornithine. |
| PGx | Kramer_1995 | not_relevant | 0 | 0 | The paper studies gene amplification in cell lines and polyamine metabolism, not the pharmacokinetics or pharmacodynamics of the drug ornithine in humans. |
| PGx | Kubo_2018 | not_relevant | 0 | 0 | The paper is a review of transport mechanisms at the blood-retinal barrier and does not report pharmacogenomic effects on PK/PD parameters. |
| PD | Kumar_2026 | not_relevant | 2 | 1 | The paper describes a mechanistic pathway and mentions qualitative pharmacodynamic depletion of polyamines in a small clinical trial, but it does not report numeric PD parameters (e.g., Emax, EC50) or quantitative exposure-response curves for Ornithine. |
| popPK | Kwack_2026 | irrelevant | 0 | 0 | The paper describes an LLM tool for PK modeling using warfarin, theophylline, and tobramycin datasets, with no mention of ornithine. |
| PD | Kwack_2026 | not_relevant | 0 | 0 | The paper focuses on automated population pharmacokinetic (PopPK) modeling for warfarin, theophylline, and tobramycin, and does not report any pharmacodynamic (PD) or exposure-response relationships for Ornithine. |
| popPK | Lambert_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the radiopharmaceutical 177Lu-Dotatate, not ornithine. |
| popPK | Lee_2026 | irrelevant | 0 | 0 | The study investigates ruminal methane production and microbiome in cattle, mentioning ornithine only as a metabolic biomarker associated with ammonia detoxification, not as a subject drug for pharmacokinetic analysis. |
| PD | Li_1998 | not_relevant | 0 | 0 | The paper describes the engineering of a destabilized GFP reporter using an ornithine decarboxylase degradation domain, not the pharmacodynamics of the drug Ornithine. |
| PGx | Li_1998 | not_relevant | 0 | 0 | The paper describes the creation of a destabilized GFP reporter using a fragment of ornithine decarboxylase, not the pharmacokinetics or pharmacodynamics of ornithine itself. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of PF-06804103 (an anti-HER2 antibody-drug conjugate), not ornithine. |
| PGx | Lim_2007 | not_relevant | 0 | 0 | The paper characterizes a cell line's enzyme expression and mentions ornithine transcarbamoylase activity only as a marker of hepatocyte function, not as a pharmacokinetic or pharmacodynamic parameter of the drug ornithine influenced by a genetic variant. |
| popPK | Lutakome_2025 | irrelevant | 0 | 0 | The study is an observational metabolic analysis of dairy cows measuring amino acid concentrations and ratios, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for ornithine. |
| PGx | López-Corella_2017 | not_relevant | 0 | 0 | The paper describes a case of ornithine transcarbamylase deficiency and kernicterus, but does not report pharmacokinetic or pharmacodynamic parameters of ornithine as a drug. |
| popPK | Maggi_1986 | irrelevant | 0 | 0 | The study characterizes vasopressin and oxytocin receptor binding in porcine seminal vesicles, not the pharmacokinetics of ornithine. |
| PD | Maggi_1986 | not_relevant | 0 | 0 | The paper investigates vasopressin receptor binding and physiology in porcine seminal vesicles; Ornithine is only mentioned as a structural component of a synthetic vasotocin analog, and no pharmacodynamic or exposure-response analysis for Ornithine is performed. |
| popPK | Mansour_2025 | irrelevant | 0 | 0 | The study is a metabolomic biomarker analysis of bronchoalveolar lavage fluid in cystic fibrosis patients, not a pharmacokinetic study of ornithine as a drug. |
| popPK | Maquiaveli_2016 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| PD | Maquiaveli_2016 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of a plant extract (Stachytarpheta cayennensis) on Leishmania, not the pharmacodynamics of the drug Ornithine. |
| PGx | Mardon_1969 | not_relevant | 0 | 0 | The paper studies the morphological dimorphism of Candida albicans in response to amino acids, not the pharmacokinetics or pharmacodynamics of ornithine in humans or the effect of genetic variants on drug response. |
| PGx | Marschall_1995 | not_relevant | 0 | 0 | The paper studies the role of ornithine decarboxylase in NGF signaling in PC12 cells, not the pharmacokinetics or pharmacodynamics of ornithine as a drug. |
| popPK | Medina-Enríquez_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of an ornithine derivative as an enzyme inhibitor, not a pharmacokinetic study of ornithine disposition. |
| popPK | Messeri_2000 | irrelevant | 0 | 0 | The study investigates in vitro transport kinetics (Km, Vmax) of ornithine in rat alveolar macrophages, which is a mechanistic cellular study, not a pharmacokinetic study of disposition parameters (CL, V, t1/2) in an organism. |
| PGx | Michaud_1992 | not_relevant | 0 | 0 | The paper describes a method for detecting mutations in the ornithine delta-aminotransferase gene but does not report any pharmacokinetic or pharmacodynamic effects of these variants on ornithine or any drug. |
| PGx | Miyazaki_1993 | not_relevant | 0 | 0 | The paper describes a genetic variant affecting the stability of the enzyme ornithine decarboxylase, not the pharmacokinetics or pharmacodynamics of ornithine as a drug. |
| PGx | Morin_1971 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of endogenous amino acids (ornithine) in cystinuria, not the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Nomura_1982 | irrelevant | 0 | 0 | The study investigates receptor binding and enzyme activity (ornithine decarboxylase) in rat hearts, not the pharmacokinetic disposition parameters of ornithine. |
| PD | Nomura_1982 | not_relevant | 0 | 0 | The paper investigates the effects of isoproterenol on cardiac receptors and ornithine decarboxylase activity, but does not report a pharmacodynamic or exposure-response relationship for the drug Ornithine itself. |
| popPK | Novitzky-Basso_2026 | irrelevant | 0 | 0 | The study is a metabolomic biomarker analysis of AML patients, not a pharmacokinetic study, and reports no disposition parameters (CL, V, etc.) for ornithine. |
| PD | Olson_1985 | not_relevant | 4 | 2 | The paper reports a qualitative dose-response relationship for nicotine on ODC activity but does not provide specific numeric PD parameters (e.g., EC50, Emax) or detailed concentration-effect data in the provided text. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for elafibranor and its metabolite GFT1007, not for ornithine. |
| PGx | Ou_2013 | not_relevant | 0 | 0 | The paper studies liver function and ornithine decarboxylase induction in rats at high altitude, not the pharmacokinetics or pharmacodynamics of ornithine as a drug in relation to genetic variants. |
| PD | Pacheco-Hernández_2024 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (anti-ornithine decarboxylase) and in vivo metabolic effects of a plant extract, but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug Ornithine itself. |
| PGx | Palmer_2023 | not_relevant | 0 | 0 | The paper describes a genetic disorder (Gyrate Atrophy) affecting endogenous ornithine metabolism, not the pharmacokinetics or pharmacodynamics of a drug. |
| PD | Pathak_2021 | not_relevant | 0 | 0 | The paper reports pharmacological activity for Cirsimaritin, not Ornithine, and does not contain any data or parameters for the specified drug. |
| PGx | Poulin_1990 | not_relevant | 0 | 0 | The paper studies the regulation of ornithine decarboxylase (ODC) expression by osmotic shock in cell lines, not the pharmacokinetics or pharmacodynamics of ornithine itself influenced by genetic variants. |
| PGx | Raul_2007 | not_relevant | 0 | 0 | The paper discusses DFMO (a drug) and mentions ODC polymorphism as a risk marker for cancer, but it does not report how a gene variant changes the pharmacokinetic or pharmacodynamic parameters of ornithine itself. |
| popPK | Reguera_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (ODC) by ornithine analogues, not a pharmacokinetic study of ornithine disposition. |
| popPK | Revuelta_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle contraction using DFMO (an ornithine derivative) and spermine, not a pharmacokinetic study of ornithine. |
| PGx | Rumping_2020 | not_relevant | 0 | 0 | The paper investigates the metabolic consequences of glutaminase hyperactivity on the cellular metabolome, not the pharmacokinetics or pharmacodynamics of ornithine as a drug. |
| popPK | Sarfati_1992 | irrelevant | 0 | 0 | The study investigates the effect of bFGF on ornithine decarboxylase activity in cell lines, which is a mechanistic/in-vitro study of an enzyme, not a pharmacokinetic study of ornithine disposition. |
| popPK | Scemama_1989 | irrelevant | 0 | 0 | The study investigates the stimulation of ornithine decarboxylase activity by CCK/gastrin in a cell line, which is a mechanistic/enzymatic study, not a pharmacokinetic study of ornithine disposition. |
| PGx | Schmidt_2005 | not_relevant | 0 | 0 | The paper focuses on pyrimidine metabolism and diagnostic biomarkers, not the pharmacokinetics or pharmacodynamics of the drug ornithine. |
| PGx | Segura-Sanchez_2026 | not_relevant | 0 | 0 | The paper studies drought resilience in trees and mentions an ornithine decarboxylase gene, but does not report pharmacokinetic or pharmacodynamic parameters of ornithine as a drug. |
| popPK | Serkland_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for ocrelizumab, not ornithine. |
| popPK | Sikorski_2019 | irrelevant | 0 | 0 | The study investigates the toxicological effects of glyphosate on duckweed (Lemna minor) and mentions ornithine decarboxylase activity, but does not report pharmacokinetic parameters for ornithine. |
| PD | Sikorski_2019 | not_relevant | 0 | 0 | The paper reports dose-response data for glyphosate, not ornithine; ornithine is only mentioned as a substrate for an enzyme whose activity was measured. |
| PD | Song_2026 | not_relevant | 2 | 1 | The paper mentions a qualitative "dose-response trend" for ornithine in response to PM2.5 exposure but does not provide numeric PD parameters (e.g., EC50, slope) or a quantitative concentration-effect curve for the drug/metabolite itself. |
| PGx | Su_2019 | not_relevant | 0 | 0 | The paper describes the establishment of a cell culture model for a genetic disease (OTCD) and characterizes general liver functions (CYPs, albumin), but it does not report a pharmacogenomic effect on the PK or PD of ornithine as a drug. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for 5-fluorouracil (5-FU), not ornithine. |
| PD | Suthahar_2026 | not_relevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic (PK) models for 5-fluorouracil and does not report any pharmacodynamic (PD) or exposure-response relationships for Ornithine or any other drug. |
| PGx | Svirklys_1988 | not_relevant | 0 | 0 | The paper describes genetic linkage analysis for prenatal diagnosis of a metabolic disorder, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of ornithine as a drug. |
| PGx | Tailor_2025 | not_relevant | 0 | 0 | The paper is a review of the therapeutic potential of Herbacetin and does not report any pharmacogenomic effects on the PK or PD of ornithine. |
| popPK | Tichý_2010 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| PD | Tichý_2010 | not_relevant | 0 | 0 | The paper focuses on the applicability of primary rat hepatocytes in chemical testing and QSAR, with no mention of Ornithine or any pharmacodynamic/exposure-response analysis. |
| PGx | Tomizawa_2017 | not_relevant | 0 | 0 | The paper investigates sorafenib resistance in hepatocellular carcinoma cells and the effects of arginine/glucose deprivation, but does not report pharmacogenomic effects on the PK/PD of ornithine. |
| popPK | Tricot_1994 | irrelevant | 0 | 0 | The paper describes the purification and enzymatic kinetics (Km, Hill coefficient) of a succinyltransferase from Pseudomonas aeruginosa, which is a mechanistic/in-vitro study, not a pharmacokinetic study of ornithine disposition. |
| PD | Tricot_1994 | not_relevant | 0 | 0 | The paper describes in vitro enzyme kinetics (Km, Hill coefficient) for a bacterial enzyme, not pharmacodynamic exposure-response relationships for the drug Ornithine in a biological system. |
| popPK | Vargas-Ramírez_2016 | irrelevant | 0 | 0 | The study investigates the antitumor activity of N-ω-chloroacetyl-L-ornithine (an ODC inhibitor) and does not report pharmacokinetic parameters for ornithine itself. |
| popPK | Wang_2022 | relevant | 9 | 2 | The paper is a population PK study of L-ornithine (ORN) in humans, but the specific numeric parameter values for ORN (CL, V) are located in Supplementary Table S2, which is referenced but not fully provided in the evidence text. |
| PD | Wang_2022 | not_relevant | 3 | 1 | The paper focuses on population PK modeling for dose selection; while it mentions ammonia removal as a PD effect and explores a semi-mechanistic link, the final model omits the PD marker (ammonia) and does not report numeric PD parameters (Emax, EC50, etc.) for Ornithine. |
| popPK | Wellendorph_2007 | irrelevant | 0 | 0 | The study is a receptor pharmacology paper characterizing GPRC6A in vitro, reporting an EC50 for ornithine as an agonist, but contains no pharmacokinetic disposition parameters (CL, V, t1/2) for ornithine. |
| popPK | Wong_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular reactivity where ornithine is used as a co-administered substrate/product, not a pharmacokinetic study of ornithine disposition. |
| popPK | Xajil-Ramos_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tacrolimus, not ornithine. |
| PD | Xajil-Ramos_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for tacrolimus, not ornithine, and contains no pharmacodynamic or exposure-response analysis. |
| PGx | Yang_2021 | not_relevant | 0 | 0 | The paper studies toxicological effects of dichlorvos on earthworms and does not report pharmacogenomic effects on the PK/PD of ornithine. |
| PGx | Zell_2010 | not_relevant | 2 | 5 | The paper reports a pharmacogenomic interaction on clinical outcomes (adenoma recurrence) and toxicity, but does not report changes in the pharmacokinetic or pharmacodynamic parameters of ornithine itself. |
| PGx | Zell_2012 | not_relevant | 0 | 0 | The paper investigates the association between Odc1 genotype, meat consumption, and colorectal cancer mortality, not the pharmacokinetic or pharmacodynamic effects of a drug on ornithine. |
| PGx | Zhang_2022 | not_relevant | 0 | 0 | The paper investigates chemical adduct formation of a reactive metabolite with amines (including ornithine) and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Zhou_2024 | not_relevant | 0 | 0 | The paper reports on the genetic diagnosis and prenatal screening for a metabolic disorder (OTCD), not the pharmacokinetic or pharmacodynamic effects of a drug. |
| PGx | Zhu_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of a traditional Chinese medicine formula on fertility and metabolism, reporting no pharmacogenomic effects on the PK or PD of ornithine. |
| PGx | de_2020 | not_relevant | 0 | 0 | The paper studies plant physiology (aluminum toxicity in rye) and ornithine metabolism in plants, not human pharmacogenomics or drug PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 15:05 UTC</sub>
