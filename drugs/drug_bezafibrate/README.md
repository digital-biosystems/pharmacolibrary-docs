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
| 2026-10-15 01:09 | 1:01 | 0/0/0 | 1/0/0 | 0/0/0 | 95,646/3,963 | einfracz / qwen3.8-27b | 16 | 4/10 | 14/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cione_2021_cell_growth](drugs/drug_bezafibrate/pd_Cione_2021_cell_growth.md) | MCF-7 cell growth biomarker turnover ← bezafibrate | — | Cione E et al., Pharmacophore-guided repurposing of fib…, Journal of enzyme inhibitio… (2021) | [10.1080/14756366.2020.1864629](https://doi.org/10.1080/14756366.2020.1864629) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cione_2021_insulin_secretion](drugs/drug_bezafibrate/pd_Cione_2021_insulin_secretion.md) | insulin secretion biomarker turnover ← bezafibrate | — | Cione E et al., Pharmacophore-guided repurposing of fib…, Journal of enzyme inhibitio… (2021) | [10.1080/14756366.2020.1864629](https://doi.org/10.1080/14756366.2020.1864629) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bezafibrate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2C8` inhibitor, `CYP3A4` substrate, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer, `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: NR1I2 (partial agonist), PPARA (target), PPARD (target), PPARG (target), RXRA (target), RXRB (target), RXRG (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 98 matched, 84 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ali_2026 | irrelevant | 0 | 0 | The study evaluates PPAR agonist activity and biological effects of novel chalcone derivatives, using bezafibrate only as a positive control/comparator, with no PK parameters reported. |
| PGx | Attia_1997 | not_relevant | 1 | 0 | The study describes a pharmacodynamic response to bezafibrate and mentions APOE genotypes only to describe subgroups with different clinical outcomes, but it does not report the genotypes as a primary factor modifying a specific pharmacokinetic parameter. |
| popPK | Berger_1989 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating the efficacy of simvastatin for hypercholesterolemia, and while bezafibrate is mentioned as a co-administered lipid-lowering agent, no pharmacokinetic parameters (CL, V, ka, etc.) are reported. |
| popPK | Bettati_1998 | irrelevant | 0 | 0 | The study investigates the allosteric mechanism of hemoglobin oxygen binding and mentions bezafibrate only as an allosteric effector, containing no pharmacokinetic data for the drug. |
| popPK | Boltes_2012 | irrelevant | 0 | 0 | The study is an in vitro toxicity assessment of chemical mixtures in algae, containing no pharmacokinetic data for bezafibrate. |
| PGx | Canudas_2001 | not_relevant | 1 | 5 | The study investigates chitotriosidase genotype/phenotype (an unrelated enzyme marker) and does not report genetic variants affecting the pharmacokinetics or pharmacodynamics of bezafibrate. |
| popPK | Carrara_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of soy isoflavones on PPAR receptors where bezafibrate serves only as a positive control, with no pharmacokinetic parameters reported. |
| popPK | Chen_2014 | irrelevant | 0 | 0 | The study focuses on the novel compound ZBH, using bezafibrate only as a comparative reference for pharmacodynamic and efficacy endpoints, without reporting any pharmacokinetic disposition parameters (CL, V, ka, etc.) for bezafibrate. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for olanzapine, not bezafibrate. |
| popPK | Cione_2021 | irrelevant | 0 | 0 | The paper reports in-vitro pharmacological activity (EC50 values) of bezafibrate as a GPR40 agonist in cell lines, not pharmacokinetic disposition parameters. |
| popPK | EFSA_2018 | irrelevant | 0 | 0 | The paper is a risk assessment for perfluorooctane sulfonic acid (PFOS) and perfluorooctanoic acid (PFOA) in food, and does not involve the drug bezafibrate. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper concerns perfluoroalkyl substances (PFASs), not bezafibrate, and reports no pharmacokinetic parameters for the target drug. |
| popPK | Hernando_2004 | irrelevant | 0 | 0 | The paper is an environmental analysis method and toxicity study in wastewater/Daphnia, not a pharmacokinetic study. |
| PGx | Higgins_2012 | not_relevant | 3 | 3 | This paper reports on PPARδ-PPARα interaction in transgenic mice, demonstrating PPARδ-mediated attenuation of bezafibrate-induced hepatomegaly, which is a pharmacodynamic cross-talk effect in an animal model rather than a human pharmacogenomic effect on a specific PK/PD parameter. |
| PGx | Honda_2013 | not_relevant | 0 | 0 | The study examines the anticholestatic mechanism of action (PD) and efficacy of bezafibrate in PBC patients but does not report any pharmacogenomic variants or genotype-specific effects on PK/PD parameters. |
| PGx | Kajosaari_2005 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (enzymatic inhibition) of repaglinide metabolism by bezafibrate in vitro, not pharmacogenomic effects (gene variants). |
| popPK | Kakara_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of statins and ezetimibe in humans, and bezafibrate is not mentioned or modeled. |
| popPK | Kelley_1994 | irrelevant | 0 | 0 | The study evaluates peroxisomal enzyme induction in various animal species, and bezafibrate is used only as a positive control compound without any pharmacokinetic parameter analysis. |
| PGx | Kido_2016 | not_relevant | 1 | 0 | The paper discusses bezafibrate as a general therapeutic agent for mitochondrial dysfunction in influenza and does not report any pharmacokinetic or pharmacodynamic parameter changes resulting from genetic variants. |
| popPK | Kuwabara_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacological profile of NS-220, using bezafibrate only as a comparator in in-vitro binding assays without reporting any pharmacokinetic parameters for bezafibrate. |
| popPK | Lalezari_1990 | irrelevant | 0 | 0 | The paper describes the structural and functional effects of two new compounds on hemoglobin, mentioning bezafibrate only as a prior binding site reference in a crystallography context, with no pharmacokinetic data. |
| popPK | Lendaro_1992 | irrelevant | 0 | 0 | The paper is a mechanistic hemoglobin biophysics study where bezafibrate is used only as an allosteric effector, not for pharmacokinetic analysis. |
| PGx | Leshinsky-Silver_2006 | not_relevant | 0 | 0 | The paper reports allele frequencies in a cohort of cardiovascular patients but does not analyze the effect of genotypes on bezafibrate's pharmacokinetics or pharmacodynamics. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro electrophysiology study of fenofibrate, and bezafibrate is only mentioned as a comparator that did not affect Kv currents, with no pharmacokinetic parameters reported. |
| PGx | Miller_1998 | not_relevant | 0 | 0 | The paper is a general clinical pharmacokinetics review of fibrates and does not report specific pharmacogenomic effects or gene variants for bezafibrate. |
| popPK | Muratti_1994 | irrelevant | 0 | 0 | The study is a cohort analysis of lipid response to combination therapy, not a pharmacokinetic study, and reports no disposition parameters for bezafibrate. |
| PGx | Na_2025 | not_relevant | 0 | 0 | The paper discusses bezafibrate's role as a mitochondrial biogenesis inducer in a review of mitochondrial disease treatments, without reporting specific pharmacogenomic effects on its PK or PD parameters. |
| PGx | Olsen_2013 | not_relevant | 0 | 0 | The paper is a review of genetic modifiers in fatty acid oxidation defects and mentions bezafibrate only as a potential therapeutic agent to induce enzyme expression, without reporting any data on pharmacokinetic or pharmacodynamic effects modified by genetic variants. |
| popPK | Olsson_1978 | irrelevant | 0 | 0 | The study reports therapeutic effects on serum lipoprotein concentrations (clinical efficacy) rather than pharmacokinetic disposition parameters. |
| popPK | Quinn_2008 | irrelevant | 0 | 0 | The study is an ecotoxicological investigation of bezafibrate on the cnidarian *Hydra attenuata*, reporting toxicity endpoints (LC50/EC50) rather than pharmacokinetic parameters. |
| popPK | Quinn_2009 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on Hydra attenuata measuring toxicity endpoints (EC50, teratogenicity), not pharmacokinetic disposition parameters for bezafibrate. |
| popPK | Rivera-Jaimes_2018 | irrelevant | 0 | 0 | The study measures environmental concentrations of bezafibrate in water, not pharmacokinetic parameters. |
| popPK | Rosal_2010 | irrelevant | 0 | 0 | The paper reports ecotoxicity (EC50) data for bezafibrate in aquatic organisms, not pharmacokinetic parameters. |
| popPK | Somogyi-Végh_2019 | irrelevant | 0 | 0 | This is a retrospective analysis of drug utilization and prescription data to identify drug-drug interactions, and it does not report any pharmacokinetic parameters for bezafibrate. |
| PGx | Southwood_2007 | not_relevant | 0 | 0 | The study investigates UGT-mediated DNA damage (genotoxicity) in HEK293 cells, not the pharmacokinetic or pharmacodynamic parameters of bezafibrate. |
| popPK | Sperry_2023 | irrelevant | 0 | 0 | The study investigates the antiviral efficacy of statins in COVID-19 patients and does not involve bezafibrate or pharmacokinetic modeling. |
| PGx | Takanohashi_2007 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving bezafibrate as an inhibitor of nateglinide metabolism, not the pharmacogenomic impact on bezafibrate's own PK or PD parameters. |
| popPK | Tanne_2002 | irrelevant | 0 | 0 | The study is a clinical epidemiological analysis of stroke risk in patients treated with bezafibrate, not a pharmacokinetic study. |
| PGx | Thompson_2022 | not_relevant | 0 | 0 | The paper is a review of Barth syndrome treatment and mentions bezafibrate only in the context of clinical trials targeting mitochondrial pathology, without reporting any pharmacogenomic associations. |
| popPK | Van_2024 | irrelevant | 1 | 0 | The paper is a clinical case report on a metabolic disorder treatment, lacking quantitative pharmacokinetic parameter values (CL, V, etc.) for bezafibrate. |
| PGx | Yamada_2019 | not_relevant | 0 | 0 | The paper discusses the treatment of VLCAD deficiency and mentions bezafibrate, but it does not report any pharmacogenomic effects or data linking gene variants to PK/PD parameters of bezafibrate. |
| PGx | Yamada_2022 | not_relevant | 2 | 4 | The paper reports the association between the ETFDH p.Y507D variant and poor clinical response to riboflavin, but it does not quantify the effect on pharmacokinetic (PK) or pharmacodynamic (PD) parameters of bezafibrate. |
| PGx | Yamazaki_2005 | not_relevant | 0 | 0 | The study examines the effect of bezafibrate as an inhibitor of transporters in vitro, not how genetic variants affect the PK/PD of bezafibrate. |
| PGx | Yao_2011 | not_relevant | 2 | 2 | The study investigates the effect of bezafibrate on mitochondrial function in patients with specific CPT2 variants, but does not report changes in standard PK/PD parameters of the drug itself (e.g., AUC, clearance, receptor binding). |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for olanzapine, with bezafibrate listed only as a co-administered concomitant medication without specific PK data. |
| PGx | Zhang_2026 | not_relevant | 0 | 0 | The paper is a case report of an adverse drug reaction (rhabdomyolysis) associated with comorbidities (CKD) and drug interactions (CYP3A4 inhibitors), but it does not report a specific gene variant or genotype effect on PK or PD. |
| popPK | unknown_1992 | irrelevant | 0 | 0 | This is a clinical trial screening phase study reporting lipid profiles (TC, HDL-C, TG) for risk classification, not a pharmacokinetic study providing disposition parameters for bezafibrate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
