<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12C&quot;,&quot;href&quot;:&quot;atc/A12C.md&quot;},{&quot;label&quot;:&quot;magnesium chloride&quot;}]"></div>

# magnesium chloride

- **generic name:** magnesium chloride
- **ATC codes:** `A12CC01`, `B05XA11`
- **DrugBank:** [DB09407](https://go.drugbank.com/drugs/DB09407) · **PubChem:** [CID 5360315](https://pubchem.ncbi.nlm.nih.gov/compound/5360315)
- **molar mass:** 95.211 g/mol (Cl2Mg) — DrugBank
- **groups:** approved, investigational

## About

Magnesium chloride is a magnesium salt used as a mineral supplement to treat or prevent magnesium deficiency, and as an additive in intravenous electrolyte solutions. It is an approved medicine, widely available as a supplement, and also used in hospital settings for infusion solutions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q265414](https://www.wikidata.org/wiki/Q265414) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 09:30 | 1:44 | 0/0/0 | 0/0/0 | 0/0/0 | 57,710/2,296 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 3/15 | 5/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=magnesium_chloride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 57 matched, 55 returned
- **screened:** 3  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Villiger_1985.pdf` | Villiger JW, Specific [3H]neurotensin binding to rat…, Neuropharmacology (1985) | pd | 4 | [10.1016/0028-3908(85)90019-x](https://doi.org/10.1016/0028-3908(85)90019-x) | [3018619](https://www.ncbi.nlm.nih.gov/pubmed/3018619) | metadata signals extractable PD data (IC50) |
| `Badée_2019.pdf` | Badée J et al., Optimization of Experimental Conditions…, Drug metabolism and disposi… (2019) | pgx | 7 | [10.1124/dmd.118.084301](https://doi.org/10.1124/dmd.118.084301) | [30478159](https://www.ncbi.nlm.nih.gov/pubmed/30478159) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Salleh_2016.pdf` | Salleh NA et al., Effects of Curcuma xanthorrhiza Extract…, Pharmacognosy research (2016) | pgx | 7 | [10.4103/0974-8490.188873](https://doi.org/10.4103/0974-8490.188873) | [27695274](https://www.ncbi.nlm.nih.gov/pubmed/27695274) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |

<sub>queue written 2026-10-05T09:29:39.610255+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alon_2021 | irrelevant | 0 | 0 | The paper describes structural biology and ligand discovery for the sigma-2 receptor and does not involve magnesium chloride pharmacokinetics. |
| PD | Alon_2021 | not_relevant | 0 | 0 | The paper focuses on the discovery of sigma-2 receptor ligands and does not report any pharmacodynamic or exposure-response data for magnesium chloride. |
| PGx | Badée_2019 | not_relevant | 0 | 0 | The paper focuses on optimizing glucuronidation assays in liver microsomes and does not involve magnesium_chloride or pharmacogenomic effects. |
| popPK | Barvaliya_2013 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo pharmacological investigation of neuromuscular transmission where magnesium chloride is used only as a co-administered agent to test interactions, not as the subject of a pharmacokinetic analysis. |
| PD | Barvaliya_2013 | not_relevant | 1 | 0 | The paper mentions magnesium chloride only as a fixed-concentration inhibitor in a qualitative interaction study with zidovudine, without reporting any dose-response curve or numeric PD parameters for magnesium chloride itself. |
| popPK | Bautista-Gallego_2008 | irrelevant | 0 | 0 | The paper investigates the antimicrobial effects of magnesium chloride on microorganisms, not its pharmacokinetics in humans or animals. |
| popPK | Breznock_1978 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of chemical defibrillation efficacy in dogs, not a pharmacokinetic study, and reports no disposition parameters for magnesium chloride. |
| PD | Breznock_1978 | not_relevant | 1 | 0 | The paper mentions magnesium chloride only to state that it failed to defibrillate dogs, providing no numeric dose-response data, concentration-effect curve, or PD parameters for magnesium chloride. |
| PGx | Chen_2015 | not_relevant | 0 | 0 | The paper investigates the association of genetic polymorphisms with lipid levels, not the pharmacokinetics or pharmacodynamics of magnesium chloride. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The paper describes a computational drug design method (TransformerCPI2.0) and contains no pharmacokinetic data for magnesium chloride. |
| PD | Chen_2023 | not_relevant | 0 | 0 | The paper focuses on computational drug design (TransformerCPI2.0) and does not report any pharmacodynamic or exposure-response data for magnesium chloride. |
| popPK | Cipriano_2026 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of nalmefene, with magnesium chloride serving only as an excipient/absorption enhancer rather than the subject drug. |
| popPK | Ciscato_2025 | irrelevant | 0 | 0 | The paper describes a chemogenetic protocol for neuropharmacology in mice and does not involve magnesium chloride or pharmacokinetic parameter estimation. |
| PD | Ciscato_2025 | not_relevant | 0 | 0 | The paper describes a chemogenetic tool (CATCH) for receptor antagonism and provides a protocol for electrophysiology and behavioral assays, but it does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for magnesium chloride. |
| popPK | De_2025 | irrelevant | 0 | 0 | The paper describes the development of novel dual GPBAR1/LIFR modulators for liver fibrosis and does not involve magnesium chloride or its pharmacokinetics. |
| PD | De_2025 | not_relevant | 0 | 0 | The paper focuses on the development of novel estradienone derivatives for liver fibrosis and does not report any pharmacodynamic or exposure-response data for magnesium chloride. |
| popPK | Gajurel_2021 | irrelevant | 0 | 0 | The paper is a plant biology study on peanut antioxidants where magnesium chloride is used only as a co-treatment agent, not as a subject drug for pharmacokinetic analysis. |
| PD | Gajurel_2021 | not_relevant | 0 | 0 | The paper reports the antioxidant activity (IC50) of plant extracts, not the pharmacodynamic or exposure-response relationship of magnesium chloride as a drug. |
| popPK | Hayashi_2018 | irrelevant | 0 | 0 | The paper investigates magnesium chloride as a chemical sensitizer in radiation dosimeters, not as a drug for pharmacokinetic analysis. |
| PD | Hayashi_2018 | not_relevant | 0 | 0 | The paper investigates the physical chemistry of gel dosimeters (radiation sensitivity), not the pharmacodynamics of magnesium chloride in a biological system. |
| popPK | Huang_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a tissue plasminogen activator (tPA) nanomedicine, not magnesium chloride. |
| PD | Huang_2022 | not_relevant | 0 | 0 | The paper describes a nanomedicine delivery system for tPA and reports PK profiles and efficacy outcomes, but it does not report a pharmacodynamic model or numeric exposure-response/dose-response parameters for magnesium chloride. |
| popPK | Katsukunya_2025 | irrelevant | 0 | 0 | The study is a pharmacogenetic analysis of hypertension susceptibility and does not report pharmacokinetic parameters for magnesium chloride. |
| PD | Katsukunya_2025 | not_relevant | 0 | 0 | The paper is a pharmacogenomic study investigating genetic associations with resistant hypertension and does not report any pharmacokinetic or pharmacodynamic data for magnesium chloride. |
| popPK | Keyvani_2024 | irrelevant | 0 | 0 | The study focuses on vancomycin and gentamicin, not magnesium chloride. |
| PD | Keyvani_2024 | not_relevant | 0 | 0 | The paper focuses on biosensor development for vancomycin and gentamicin PK monitoring and pH tracking, with no mention of magnesium chloride or any pharmacodynamic modeling. |
| PGx | Khairy_2016 | not_relevant | 0 | 0 | The paper studies plant physiology (tobacco) and heavy metal toxicity, not human pharmacogenomics or magnesium chloride PK/PD. |
| PGx | Kibria_2021 | not_relevant | 0 | 0 | The paper studies plant physiology and soil chemistry, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of magnesium chloride as a drug. |
| popPK | Lawley_1990 | irrelevant | 0 | 0 | The study investigates behavioral pharmacology (conditioned place preference) in mice and does not report any pharmacokinetic parameters for magnesium chloride. |
| popPK | Lee_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of irinotecan and raltegravir, not magnesium chloride. |
| PD | Lee_2016 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of raltegravir and irinotecan and their correlation with toxicity, but does not report any pharmacodynamic or exposure-response relationship for magnesium chloride. |
| popPK | Li_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of veliparib, not magnesium_chloride. |
| PD | Li_2014 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) of veliparib and the impact of renal function, CYP2D6, and OCT2 on exposure; it does not report any pharmacodynamic (PD) or exposure-response relationships for magnesium chloride or any other drug. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper describes the design of miniprotein inhibitors for complement C9 and contains no pharmacokinetic data for magnesium chloride. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper reports dose-response data for mini-protein inhibitors targeting complement C9, not magnesium chloride. |
| PGx | Liu_2021 | not_relevant | 0 | 0 | The paper reports a case of Gitelman syndrome and discusses the impact of correcting electrolyte imbalances (hypokalemia/hypomagnesemia) on glucose metabolism and hypoglycemic drug choice, but it does not report a pharmacogenomic effect of a gene variant on the pharmacokinetic or pharmacodynamic parameters of magnesium chloride itself. |
| popPK | Lu_2010 | irrelevant | 0 | 0 | The study investigates the in-vitro interaction between methadone and CYP19, not the pharmacokinetics of magnesium chloride. |
| PD | Lu_2010 | not_relevant | 0 | 0 | The paper investigates the enzyme kinetics of methadone as an inhibitor of CYP19 (aromatase) and does not report any pharmacodynamic or exposure-response relationship for magnesium chloride. |
| popPK | McNally_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the plasticizer Hexamoll Diisononyl-Cyclohexane-1, 2-Dicarboxylate, not magnesium chloride. |
| PD | McNally_2019 | not_relevant | 0 | 0 | The paper describes a PBPK model for the plasticizer DINCH (Hexamoll), not magnesium chloride, and focuses on pharmacokinetics (urinary excretion of metabolites) rather than pharmacodynamics or exposure-response relationships. |
| popPK | McNally_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Di-(2-propylheptyl) phthalate (DPHP), not magnesium chloride. |
| PD | McNally_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PBPK modeling) of Di-(2-propylheptyl) Phthalate (DPHP), not magnesium chloride, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | McNally_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of di-(2-ethylhexyl) terephthalate (DEHTP), not magnesium chloride. |
| PD | McNally_2023 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PBPK modeling) of DEHTP and does not report any pharmacodynamic or exposure-response relationships for magnesium chloride. |
| PGx | Morrow_1986 | not_relevant | 0 | 0 | The paper investigates the effect of magnesium chloride on ethanol sensitivity in mice, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of magnesium chloride itself. |
| popPK | Nahata_1995 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| PD | Nahata_1995 | not_relevant | 0 | 0 | The provided text is only a title/header for a symposium abstract collection and contains no specific data, analysis, or PD parameters for magnesium chloride. |
| popPK | Nwodo_2014 | irrelevant | 0 | 0 | The paper is a microbiology study on bioflocculant production where magnesium chloride is used as a nutrient source, not a pharmacokinetic study of the drug. |
| PD | Nwodo_2014 | not_relevant | 0 | 0 | The paper describes microbial bioflocculant production and media optimization, not a pharmacodynamic or exposure-response relationship for magnesium chloride as a drug. |
| popPK | Othman_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of GA2-50, not magnesium_chloride. |
| popPK | Padrón_2022 | irrelevant | 0 | 0 | The paper is a clinical trial of immunotherapy and chemotherapy for pancreatic cancer and does not involve magnesium chloride pharmacokinetics. |
| PD | Padrón_2022 | not_relevant | 0 | 0 | The paper is a clinical trial for immunotherapy (sotigalimab/nivolumab) and does not report any pharmacodynamic or exposure-response data for magnesium chloride. |
| popPK | Piddock_1997 | irrelevant | 0 | 0 | The paper is a microbiology study on ciprofloxacin resistance in bacteria, where magnesium chloride is used only as an experimental reagent, not as the subject drug for pharmacokinetic analysis. |
| PD | Piddock_1997 | not_relevant | 0 | 0 | The paper investigates ciprofloxacin resistance in bacteria and mentions magnesium chloride only as a modulator of drug accumulation, without reporting any pharmacodynamic exposure-response or dose-response relationship for magnesium chloride itself. |
| popPK | Pozo_2026 | irrelevant | 0 | 0 | The paper focuses on glycine's role in hepatocyte maturation and xenobiotic metabolism, with no mention of magnesium chloride pharmacokinetics. |
| PD | Pozo_2026 | not_relevant | 0 | 0 | The paper investigates the metabolic effects of glycine on hepatocyte maturation and does not report any pharmacodynamic or exposure-response relationship for magnesium chloride. |
| popPK | Prado_2002 | irrelevant | 0 | 0 | The study is a pharmacological investigation of antinociceptive potency (ED50) in rats, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Raig_2025 | irrelevant | 0 | 0 | The paper describes the development of LRRK2 kinase inhibitors for Parkinson's disease and contains no pharmacokinetic data for magnesium chloride. |
| PD | Raig_2025 | not_relevant | 0 | 0 | The paper describes the discovery of LRRK2 kinase inhibitors and their structural binding mode, but does not report any pharmacodynamic (exposure-response or dose-response) analysis for magnesium chloride. |
| popPK | Rezek_2026 | irrelevant | 0 | 0 | The paper describes an in-vitro study of an antisense oligonucleotide for a retinal dystrophy and does not involve magnesium chloride pharmacokinetics. |
| PD | Rezek_2026 | not_relevant | 0 | 0 | The paper describes an antisense oligonucleotide therapy for a genetic retinal disease and does not involve magnesium chloride or report any pharmacodynamic exposure-response or dose-response parameters. |
| popPK | Rodina_2025 | irrelevant | 0 | 0 | The paper describes a chemoproteomic method for mapping protein-protein interactions and contains no pharmacokinetic data for magnesium chloride. |
| PD | Rodina_2025 | not_relevant | 0 | 0 | The paper describes a chemoproteomic method for mapping protein-protein interactions and contains no pharmacodynamic or exposure-response analysis for magnesium chloride. |
| popPK | Rudnicki_2024 | irrelevant | 0 | 0 | The paper is an electrochemical study of danofloxacin, not a pharmacokinetic study of magnesium chloride. |
| PD | Rudnicki_2024 | not_relevant | 0 | 0 | The paper is an electroanalytical chemistry study on danofloxacin detection and does not report any pharmacodynamic or exposure-response data for magnesium chloride. |
| popPK | Salleh_2016 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PD | Salleh_2016 | not_relevant | 0 | 0 | The paper investigates the effects of Curcuma xanthorrhiza on drug-metabolizing enzymes and does not report any pharmacodynamic or exposure-response data for magnesium chloride. |
| PGx | Salleh_2016 | not_relevant | 0 | 0 | The paper investigates the effects of Curcuma xanthorrhiza on drug-metabolizing enzymes, not the pharmacogenomics of magnesium chloride. |
| popPK | Sato_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of midazolam, not magnesium chloride. |
| PD | Sato_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of midazolam and CYP3A activity, not on magnesium chloride or any pharmacodynamic (exposure-response) relationship. |
| popPK | Schiffman_1995 | irrelevant | 0 | 0 | The study investigates the effects of environmental pollutants on taste responses in gerbils, using magnesium chloride only as a taste stimulus, not as a subject drug for pharmacokinetic analysis. |
| PD | Schiffman_1995 | not_relevant | 0 | 0 | The paper studies the effect of environmental pollutants on taste responses to magnesium chloride (as a tastant), not the pharmacodynamic or exposure-response relationship of magnesium chloride itself. |
| popPK | Shi_2022 | irrelevant | 0 | 0 | The study focuses on the cardiotoxicity and pharmacokinetics of methadone, not magnesium chloride. |
| PD | Shi_2022 | not_relevant | 0 | 0 | The paper focuses on the cardiotoxicity of methadone, not magnesium chloride. |
| popPK | Siddiqi_2011 | irrelevant | 0 | 0 | The study is a toxicological investigation of magnesium chloride's effect on lung collagen content, not a pharmacokinetic study, and reports no disposition parameters. |
| PD | Siddiqi_2011 | not_relevant | 2 | 1 | The study reports qualitative dose-response observations for NaF and protective effects of MgCl2 on hydroxyproline levels, but lacks numeric PD parameters (e.g., EC50, Emax) or a formal concentration-effect model for magnesium chloride. |
| popPK | Song_2023 | irrelevant | 0 | 0 | The paper is a systematic review of electrolyte imbalances as prognostic markers in COVID-19, not a pharmacokinetic study of magnesium chloride. |
| popPK | Sung_2018 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of magnesium chloride's effect on rocuronium-induced neuromuscular blockade, not a pharmacokinetic study reporting disposition parameters for magnesium chloride. |
| popPK | Villiger_1985 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study where magnesium chloride is used only as a non-effecting ionic condition, not as the subject drug for pharmacokinetic analysis. |
| PD | Villiger_1985 | not_relevant | 0 | 0 | The paper reports that magnesium chloride had no effect on neurotensin binding and does not provide any dose-response data or numeric PD parameters for magnesium chloride. |
| popPK | Westerhout_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of acetaminophen in rats, not magnesium_chloride. |
| PD | Westerhout_2012 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (distribution) of acetaminophen in the brain using a PBPK model and does not report any pharmacodynamic or exposure-response relationship for magnesium chloride. |
| popPK | Wilmott_2013 | irrelevant | 0 | 0 | The study investigates the behavioral effects of magnesium chloride on memory in rats and does not report any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PD | Wilmott_2013 | not_relevant | 4 | 2 | The paper reports a qualitative dose-dependent effect and a sex-based shift in the dose-response curve, but the provided text does not contain the specific numeric data points or fitted parameters (e.g., ED50, Emax) required to extract a quantitative PD relationship. |
| popPK | Wood_1975 | irrelevant | 0 | 0 | The paper is a microbiological assay study regarding penicillin and citrate interference, not a pharmacokinetic study of magnesium chloride. |
| PD | Wood_1975 | not_relevant | 1 | 0 | The paper discusses the inhibitory effect of citrates on penicillin assays and the reversal by magnesium, but it does not report a pharmacodynamic exposure-response or dose-response relationship for magnesium chloride itself with numeric PD parameters. |
| popPK | Zhao_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and toxicodynamics of diazinon, not magnesium chloride. |
| PD | Zhao_2021 | not_relevant | 0 | 0 | The paper focuses on diazinon and its metabolite diazoxon, not magnesium chloride. |
| popPK | van_2003 | irrelevant | 0 | 0 | The study investigates the effect of magnesium chloride on coagulation assays (INR/PT) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
