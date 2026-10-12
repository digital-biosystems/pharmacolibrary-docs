<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;bezafibrate&quot;}]"></div>

# bezafibrate

- **generic name:** bezafibrate
- **ATC codes:** `C10AB02`
- **DrugBank:** [DB01393](https://go.drugbank.com/drugs/DB01393) · **PubChem:** [CID 39042](https://pubchem.ncbi.nlm.nih.gov/compound/39042)
- **molar mass:** 361.819 g/mol (C19H20ClNO4) — DrugBank
- **groups:** approved, investigational

## About

Bezafibrate is a fibrate lipid-lowering drug used to treat hyperlipidemia, including familial hyperlipidemia. It is an approved medicine, though it is not authorised in the European Union and is used mainly in some other countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q577387](https://www.wikidata.org/wiki/Q577387) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:12 | 11:31 | 0/0/0 | 2/0/0 | 0/0/0 | 275,059/5,385 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 4/10 | 14/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cione_2021_cell_viability](drugs/drug_bezafibrate/pd_Cione_2021_cell_viability.md) | cell viability biomarker turnover ← bezafibrate | — | Cione E et al., Pharmacophore-guided repurposing of fib…, Journal of enzyme inhibitio… (2021) | [10.1080/14756366.2020.1864629](https://doi.org/10.1080/14756366.2020.1864629) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cione_2021_insulin_secretion](drugs/drug_bezafibrate/pd_Cione_2021_insulin_secretion.md) | insulin secretion biomarker turnover ← bezafibrate | — | Cione E et al., Pharmacophore-guided repurposing of fib…, Journal of enzyme inhibitio… (2021) | [10.1080/14756366.2020.1864629](https://doi.org/10.1080/14756366.2020.1864629) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Quinn_2008_2_regeneration](drugs/drug_bezafibrate/pd_Quinn_2008_2_regeneration.md) | regeneration ← bezafibrate · direct Emax (saturable) effect | — | Quinn B et al., The effects of pharmaceuticals on the r…, The Science of the total en… (2008) | [10.1016/j.scitotenv.2008.04.039](https://doi.org/10.1016/j.scitotenv.2008.04.039) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bezafibrate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C8` inhibitor, `CYP3A4` substrate, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer, `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: NR1I2 (partial agonist), PPARA (target), PPARD (target), PPARG (target), RXRA (target), RXRB (target), RXRG (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 98 matched, 84 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ali_2026 | irrelevant | 0 | 0 | The study focuses on the synthesis and biological evaluation of novel PPAR agonists, using bezafibrate only as a comparator for PPARδ activity, with no pharmacokinetic data reported. |
| PGx | Attia_1997 | not_relevant | 2 | 5 | The paper reports a clinical response to bezafibrate in diabetic patients and mentions LPL genotypes (epsilon3/3, etc.) only to describe the baseline hypertriglyceridemic status of a subgroup, without analyzing how these genotypes modulate the drug's pharmacokinetic or pharmacodynamic effects. |
| popPK | Berger_1989 | irrelevant | 0 | 0 | The study focuses on the efficacy of simvastatin in treating hypercholesterolemia, and bezafibrate is only mentioned as a co-administered agent for lipid effects, with no pharmacokinetic parameters reported. |
| popPK | Bettati_1998 | irrelevant | 0 | 0 | The paper studies the allosteric mechanism of haemoglobin and mentions bezafibrate only as an allosteric effector, not as a subject of pharmacokinetic analysis. |
| popPK | Boltes_2012 | irrelevant | 0 | 0 | The study is an in-vitro toxicology assessment of mixture effects on algae, not a pharmacokinetic study of bezafibrate. |
| PGx | Canudas_2001 | not_relevant | 0 | 0 | The paper investigates the effect of bezafibrate on chitotriosidase activity and lipid levels, but does not report how a gene variant affects the pharmacokinetics or pharmacodynamics of bezafibrate itself. |
| popPK | Carrara_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of PPAR activation by soy isoflavones, using bezafibrate only as a positive control, and reports no pharmacokinetic parameters. |
| popPK | Chen_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and efficacy of a novel compound (ZBH) in hamsters, using bezafibrate only as a comparator drug without reporting its pharmacokinetic parameters. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for olanzapine, not bezafibrate. |
| popPK | Cione_2021 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of GPR40 agonism and insulin secretion, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for bezafibrate. |
| popPK | EFSA_2018 | irrelevant | 0 | 0 | The paper discusses the toxicology and exposure of PFOS and PFOA, not the pharmacokinetics of bezafibrate. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper is a risk assessment for perfluoroalkyl substances (PFASs) and does not contain any pharmacokinetic data for bezafibrate. |
| popPK | Hernando_2004 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting bezafibrate in wastewater and its toxicity to Daphnia magna, not a pharmacokinetic study in humans or animals. |
| PGx | Higgins_2012 | not_relevant | 0 | 0 | The paper investigates the interaction between PPARδ and PPARα signaling using transgenic mice, not the effect of human gene variants on bezafibrate pharmacokinetics or pharmacodynamics. |
| PGx | Honda_2013 | not_relevant | 0 | 0 | The study investigates the anticholestatic mechanism of bezafibrate in PBC patients and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Kajosaari_2005 | not_relevant | 0 | 0 | The paper investigates the effect of bezafibrate as a drug inhibitor on repaglinide metabolism, not the effect of a gene variant on bezafibrate's PK/PD. |
| popPK | Kakara_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of statins (atorvastatin, pitavastatin, rosuvastatin) and ezetimibe, with no mention of bezafibrate. |
| popPK | Kelley_1994 | irrelevant | 0 | 0 | The study focuses on peroxisomal enzyme induction by RG 7152, and bezafibrate is only mentioned as a positive control in an in-vitro assay, with no pharmacokinetic parameters reported. |
| PGx | Kido_2016 | not_relevant | 0 | 0 | The paper discusses bezafibrate as a therapeutic option for influenza-related metabolic disorders but does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kuwabara_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of a novel PPAR-alpha agonist (NS-220) in mice, with bezafibrate serving only as a comparator in in-vitro binding assays without any pharmacokinetic parameter reporting. |
| popPK | Lalezari_1990 | irrelevant | 0 | 0 | The paper describes the structural and functional effects of new hemoglobin effectors, with bezafibrate mentioned only as a reference for binding site location, not as a subject of pharmacokinetic analysis. |
| popPK | Lendaro_1992 | irrelevant | 0 | 0 | The paper is a study on hemoglobin variants and oxygen affinity, where bezafibrate is used only as an allosteric effector, not as the subject of a pharmacokinetic analysis. |
| PGx | Leshinsky-Silver_2006 | not_relevant | 0 | 0 | The paper reports allele frequency differences in candidate genes between CVD patients and healthy controls, but does not analyze the effect of these variants on the pharmacokinetics or pharmacodynamics of bezafibrate. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of fenofibrate's effect on ion channels, where bezafibrate is only used as a negative control and no pharmacokinetic parameters are reported. |
| PGx | Miller_1998 | not_relevant | 0 | 0 | The paper is a general review of fibrate pharmacokinetics and does not report any specific pharmacogenomic effects (gene variants) on bezafibrate PK or PD parameters. |
| popPK | Muratti_1994 | irrelevant | 0 | 0 | The study is a clinical efficacy analysis of lipid response to fluvastatin and bezafibrate, reporting no pharmacokinetic parameters for bezafibrate. |
| PGx | Na_2025 | not_relevant | 0 | 0 | The paper is a review of epilepsy treatments in mitochondrial diseases and mentions bezafibrate only as a potential therapy for mitochondrial biogenesis, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Nakajima_2010 | not_relevant | 2 | 5 | The study compares PPARalpha-null vs wild-type mice to assess oxidative stress mechanisms, but does not report pharmacokinetic or pharmacodynamic parameter changes driven by human genetic variants relevant to clinical pharmacogenomics. |
| PGx | Olsen_2013 | not_relevant | 0 | 0 | The paper is a review discussing bezafibrate as a potential therapeutic agent for fatty acid oxidation defects, but it does not report any pharmacogenomic effects on the PK or PD parameters of bezafibrate itself. |
| popPK | Olsson_1978 | irrelevant | 0 | 0 | The study reports dose-response effects on serum lipoprotein concentrations (pharmacodynamics) but contains no pharmacokinetic parameters (CL, V, ka, etc.) for bezafibrate. |
| popPK | Quinn_2008 | irrelevant | 0 | 0 | The study is an ecotoxicology investigation measuring LC50/EC50 in Hydra attenuata, not a pharmacokinetic study reporting disposition parameters for bezafibrate. |
| popPK | Quinn_2009 | irrelevant | 0 | 0 | The study is an ecotoxicology assessment of pharmaceutical mixtures on Hydra attenuata, not a pharmacokinetic study of bezafibrate. |
| popPK | Rivera-Jaimes_2018 | irrelevant | 0 | 0 | The study is an environmental analysis of pharmaceutical concentrations in water, not a pharmacokinetic study of bezafibrate disposition. |
| popPK | Rosal_2010 | irrelevant | 0 | 0 | The paper is an ecotoxicity study reporting EC50 values for aquatic organisms, not a pharmacokinetic study with disposition parameters. |
| popPK | Somogyi-Végh_2019 | irrelevant | 0 | 0 | The paper is a retrospective analysis of drug interaction prevalence in pharmacy dispensing data and does not report any pharmacokinetic parameters for bezafibrate. |
| PGx | Southwood_2007 | not_relevant | 0 | 0 | The paper investigates the genotoxicity of bezafibrate via UGT-mediated acyl glucuronide formation in cell lines, but does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters in humans. |
| popPK | Sperry_2023 | irrelevant | 0 | 0 | The paper focuses on statins and their effects on COVID-19 mortality and viral inhibition, with no mention of bezafibrate or its pharmacokinetics. |
| PGx | Takanohashi_2007 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (inhibition of nateglinide metabolism by bezafibrate) in vitro, not pharmacogenomic effects of gene variants on bezafibrate PK/PD. |
| popPK | Tanne_2002 | irrelevant | 0 | 0 | The study is a clinical epidemiological analysis of angina severity and stroke risk in patients from a bezafibrate trial, reporting no pharmacokinetic parameters. |
| PGx | Thompson_2022 | not_relevant | 0 | 0 | The paper is a review of Barth syndrome treatments and mentions bezafibrate only as a therapeutic agent in clinical trials, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Van_2024 | irrelevant | 0 | 0 | The paper is a clinical case report describing therapeutic outcomes and mentions peak levels only qualitatively relative to EC50, without reporting quantitative PK parameters like clearance or volume. |
| PGx | Yamada_2019 | not_relevant | 0 | 0 | The paper is a review of fatty acid oxidation disorders and mentions bezafibrate only as a potential treatment with controversial efficacy, without reporting any pharmacogenomic effects on PK or PD parameters. |
| PGx | Yamada_2022 | not_relevant | 0 | 0 | The paper investigates the clinical and genetic characteristics of MADD patients and mentions bezafibrate as a treatment, but it does not report pharmacokinetic or pharmacodynamic parameters of bezafibrate or how genetic variants affect these parameters. |
| PGx | Yamazaki_2005 | not_relevant | 0 | 0 | The paper investigates in vitro transporter inhibition by fibrates but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Yao_2011 | not_relevant | 0 | 0 | The paper investigates the effect of bezafibrate on CPT II activity and mitochondrial function in fibroblasts with CPT II variants, which is a pharmacodynamic effect on a disease mechanism, not a pharmacokinetic or pharmacodynamic parameter of bezafibrate itself (e.g., bezafibrate clearance, exposure, or receptor binding affinity). |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of olanzapine, and bezafibrate is only listed as a concomitant medication without any PK parameters reported for it. |
| PGx | Zhang_2026 | not_relevant | 0 | 0 | The paper is a case report of bezafibrate-induced rhabdomyolysis in a patient with CKD and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | unknown_1992 | irrelevant | 0 | 0 | The paper reports lipid and lipoprotein levels (TC, HDL-C, TG) for risk classification, not pharmacokinetic parameters (CL, V, ka) for bezafibrate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
