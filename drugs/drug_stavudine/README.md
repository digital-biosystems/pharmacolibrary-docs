<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;stavudine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Stavudine_Panhard2007_reference&quot;,&quot;label&quot;:&quot;Panhard_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_stavudine/Stavudine_Panhard2007_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# stavudine

- **generic name:** stavudine
- **ATC codes:** `J05AF04`, `J05AR28`
- **DrugBank:** [DB00649](https://go.drugbank.com/drugs/DB00649) · **PubChem:** [CID 18283](https://pubchem.ncbi.nlm.nih.gov/compound/18283)
- **molar mass:** 224.2133 g/mol (C10H12N2O4) — DrugBank
- **groups:** approved, investigational

## About

Stavudine is a nucleoside reverse-transcriptase inhibitor that was used to treat HIV infection and AIDS.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423984](https://www.wikidata.org/wiki/Q423984) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| stavudine | parent | 224.213 | C10H12N2O4 | DrugBank | [18283](https://pubchem.ncbi.nlm.nih.gov/compound/18283) | Horton_1995, Innes_2018, Panhard_2007, Tatsunami_2001 |
| stavudine triphosphate | metabolite | 464.153 | C10H15N2O13P3 | PubChem | [65355](https://pubchem.ncbi.nlm.nih.gov/compound/65355) | Innes_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:00 | 13:36 | 1/3/1 | 1/0/0 | 0/0/0 | 262,188/13,697 | einfracz / qwen3.8-27b | 13 | 1/10 | 13/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Panhard_2007_reference](drugs/drug_stavudine/Stavudine_Panhard2007_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Panhard X et al., Population pharmacokinetic analysis of…, European journal of clinica… (2007) | [10.1007/s00228-007-0337-x](https://doi.org/10.1007/s00228-007-0337-x) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q351, Q63, Q30, Q64 — no SI value t…</sub><br><sub>route_to: `human_review`</sub> | [Innes_2018_reference](drugs/drug_stavudine/Stavudine_Innes2018_reference.md) | — | 1-compartment (no model) | 6 | Innes S et al., Can We Improve Stavudine's Safety Profi…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.00761-18](https://doi.org/10.1128/AAC.00761-18) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Horton_1995_reference](drugs/drug_stavudine/Stavudine_Horton1995_reference.md) | — | 2-compartment (no model) | 10 | Horton CM et al., Population pharmacokinetics of stavudin…, Antimicrobial agents and ch… (1995) | [10.1128/AAC.39.10.2309](https://doi.org/10.1128/AAC.39.10.2309) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Jullien_2007_reference](drugs/drug_stavudine/Stavudine_Jullien2007_reference.md) | — | 1-compartment (no model) | 0 | Jullien V et al., Age-related differences in the pharmaco…, British journal of clinical… (2007) | [10.1111/j.1365-2125.2007.02854.x](https://doi.org/10.1111/j.1365-2125.2007.02854.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Tatsunami_2001_reference](drugs/drug_stavudine/Stavudine_Tatsunami2001_reference.md) | — | 1-compartment (no model) | 6 | Tatsunami S et al., Determination of pharmacokinetic parame…, European journal of drug me… (2001) | [10.1007/BF03190387](https://doi.org/10.1007/BF03190387) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Balzarini_1998_EC50](drugs/drug_stavudine/pd_Balzarini_1998_EC50.md) | anti-VV potency ← stavudine · inhibition effect | — | Balzarini J et al., Marked inhibitory activity of masked ar…, Journal of acquired immune… (1998) | [10.1097/00042560-199804010-00002](https://doi.org/10.1097/00042560-199804010-00002) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=stavudine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` unknown | DrugBank actor |
| excretion | kidney | `SLC22A6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: SLC28A1 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 137 matched, 110 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 5  ·  extracted 1  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jullien_2007.pdf` | Jullien V et al., Age-related differences in the pharmaco…, British journal of clinical… (2007) | popPK | 10 | [10.1111/j.1365-2125.2007.02854.x](https://doi.org/10.1111/j.1365-2125.2007.02854.x) | [17324223](https://pubmed.ncbi.nlm.nih.gov/17324223) | The paper reports quantitative population pharmacokinetic parameters (V/F and CL/F) for stavudine in children directly in the text. |
| `Panhard_2007.pdf` | Panhard X et al., Population pharmacokinetic analysis of…, European journal of clinica… (2007) | popPK | 10 | [10.1007/s00228-007-0337-x](https://doi.org/10.1007/s00228-007-0337-x) | [17694300](https://pubmed.ncbi.nlm.nih.gov/17694300) | The abstract explicitly provides quantitative population PK parameters (V/F, Cl/F, ka) for stavudine in HIV-infected patients. |
| `Tatsunami_2001.pdf` | Tatsunami S et al., Determination of pharmacokinetic parame…, European journal of drug me… (2001) | popPK | 9 | [10.1007/BF03190387](https://doi.org/10.1007/BF03190387) | [11554428](https://pubmed.ncbi.nlm.nih.gov/11554428) | The paper reports quantitative pharmacokinetic parameters (Cmax, AUC, t1/2, Tmax) for stavudine in human patients, with specific numeric values provided in the text. |
| `Sy_2014.pdf` | Sy SK et al., Estimation of intracellular concentrati…, Antimicrobial agents and ch… (2014) | popPK | 8 | [10.1128/AAC.01717-13](https://doi.org/10.1128/AAC.01717-13) | [24295968](https://pubmed.ncbi.nlm.nih.gov/24295968) | The study presents a population pharmacokinetic model for stavudine's active intracellular metabolite (d4T-TP), reporting predicted concentration values but lacking explicit disposition parameters (CL, V, ka) in the provided text. |
| `Dumond_2007.pdf` | Dumond JB et al., Antiretroviral drug exposure in the fem…, AIDS (London, England) (2007) | popPK | 5 | [10.1097/QAD.0b013e328270385a](https://doi.org/10.1097/QAD.0b013e328270385a) | [17721097](https://pubmed.ncbi.nlm.nih.gov/17721097) | The study reports pharmacokinetic data for stavudine in humans, but only provides relative exposure ratios (genital tract vs. plasma) rather than standard quantitative disposition parameters like CL or V. |
| `Vrijens_2005.pdf` | Vrijens B et al., Successful projection of the time cours…, Journal of clinical pharmac… (2005) | popPK | 5 | [10.1177/0091270004274433](https://doi.org/10.1177/0091270004274433) | [15778427](https://pubmed.ncbi.nlm.nih.gov/15778427) | The study includes stavudine as part of the antiretroviral regimen for which pharmacokinetic assessments were performed, but the evidence text only details the modeling of lopinavir, and no quantitative numeric parameter values for stavudine are provided in the extracted text. |

<sub>queue written 2026-10-07T13:55:17.168951+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarwal_2011 | irrelevant | 1 | 0 | The study focuses on the synthesis and biological evaluation of stavudine derivatives, reporting anti-HIV activity and cellular uptake in cell lines, but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka) for the parent drug or a population model. |
| PGx | Ait-Khaled_2002 | not_relevant | 0 | 0 | The paper focuses on HIV-1 resistance mutations (viral genetics) and virological outcomes, not on host pharmacogenomic variants affecting stavudine PK/PD. |
| PGx | Balboa-Beltrán_2015 | not_relevant | 0 | 0 | The paper studies TYMS polymorphisms and gene expression but does not measure pharmacokinetic or pharmacodynamic parameters of stavudine. |
| popPK | Balzarini_1998 | irrelevant | 0 | 0 | The study focuses on antiviral efficacy (EC50) of prodrugs in cell culture, not pharmacokinetic parameters. |
| PGx | Baruffini_2010 | not_relevant | 4 | 2 | Reports a functional assay (susceptibility/toxicity) in a yeast model, not a change in clinical PK/PD parameters in humans. |
| PGx | Baruffini_2015 | not_relevant | 2 | 5 | The study reports increased mitochondrial DNA mutability and instability in a yeast model, which is a cellular toxicity marker and not a standard pharmacokinetic or pharmacodynamic parameter of the drug. |
| popPK | Bertrand_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of efavirenz, with stavudine only mentioned as a co-administered drug, and no quantitative PK parameters for stavudine are reported. |
| PGx | Bertrand_2014 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics for efavirenz, not stavudine. |
| popPK | Bienczak_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of efavirenz, with stavudine listed only as a co-administered companion drug in the antiretroviral regimen. |
| PGx | Boyd_2015 | not_relevant | 0 | 0 | The paper analyzes HIV-1 viral resistance mutations and clinical outcomes, not human gene variants affecting stavudine pharmacokinetics or pharmacodynamics. |
| PGx | Bräu_2005 | not_relevant | 0 | 0 | The paper is a review of HIV/HCV coinfection treatment and mentions stavudine only in the context of mitochondrial toxicity safety profiles, without reporting any pharmacogenomic effects on PK/PD parameters. |
| PGx | Bräu_2005_2 | not_relevant | 0 | 0 | The paper discusses clinical management and safety of HCV treatment in HIV patients, mentioning stavudine toxicity but not reporting pharmacogenomic effects on its PK or PD parameters. |
| popPK | Chen_2007 | irrelevant | 0 | 0 | The study focuses on the synthesis and in-vitro anti-HIV-1 activity of novel podophyllotoxin-stavudine conjugates, reporting no pharmacokinetic or disposition parameters for stavudine. |
| popPK | Chokephaibulkit_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of zidovudine, lamivudine, and nevirapine, with stavudine only mentioned as a comparator or background context for toxicity concerns, and no PK parameters for stavudine are reported. |
| PGx | Chokephaibulkit_2011 | not_relevant | 0 | 0 | The study reports pharmacogenomic effects on Nevirapine, but the query specifically asks about stavudine. |
| popPK | Crawford_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lopinavir, with stavudine serving only as a co-administered antiretroviral agent without any reported PK parameters. |
| PGx | Dhoro_2013 | not_relevant | 0 | 0 | The study investigates associations between genetic variants and adverse drug reactions, not pharmacokinetic or pharmacodynamic parameters, and identifies time on treatment (not genetics) as the primary factor for Stavudine lipodystrophy. |
| popPK | Duber_2015 | irrelevant | 0 | 0 | The paper is an observational study of ART regimen adoption rates in East African countries and contains no pharmacokinetic data for stavudine. |
| popPK | Dumond_2007 | relevant | 5 | 1 | The study reports pharmacokinetic data for stavudine in humans, but only provides relative exposure ratios (genital tract vs. plasma) rather than standard quantitative disposition parameters like CL or V. |
| PGx | Egaña-Gorroño_2014 | not_relevant | 0 | 0 | The paper studies genetic associations with body fat changes (host phenotype/metabolic PD) rather than the pharmacokinetics or specific pharmacodynamic response to stavudine. |
| PGx | Franchi_2009 | not_relevant | 0 | 0 | The paper reports mutagenic and recombinagenic effects in Drosophila, not pharmacokinetic or pharmacodynamic changes influenced by gene variants. |
| popPK | Gainotti_2010 | irrelevant | 0 | 0 | The paper describes an in vitro antiviral susceptibility assay (EC50) for adenovirus, not a pharmacokinetic or disposition study of stavudine. |
| PGx | Han_2005 | not_relevant | 0 | 0 | The paper reports on HIV drug resistance mutations (K103N, Y181C, etc.) and virologic efficacy, but does not investigate host pharmacogenomic variants affecting the pharmacokinetics or pharmacodynamics of stavudine. |
| PGx | Hulgan_2008 | not_relevant | 0 | 10 | The study reports a genetic association with lipoatrophy (a clinical adverse outcome) rather than a pharmacokinetic (PK) or pharmacodynamic (PD) parameter of stavudine. |
| popPK | Kappelhoff_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of nevirapine and efavirenz, with stavudine only mentioned as a co-administered drug. |
| popPK | Kappelhoff_2005_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of nevirapine, while stavudine is only a co-administered drug. |
| PGx | Katlama_2001 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of a drug regimen in HIV patients but does not investigate the impact of any gene variants on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Kwara_2009 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on zidovudine clearance, not stavudine. |
| popPK | Lin_1999 | irrelevant | 0 | 0 | The paper focuses on viral susceptibility and resistance mechanisms, reporting EC50 values rather than pharmacokinetic parameters. |
| PGx | Llibre_2002 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction between ritonavir and acenocoumarol in an HIV patient, with no mention of gene variants or pharmacogenomics. |
| PGx | Manasa_2013 | not_relevant | 0 | 0 | The paper reports HIV drug resistance mutations in failing patients, not pharmacogenomic effects of host gene variants on stavudine PK/PD. |
| PGx | McComsey_2008 | not_relevant | 0 | 0 | The paper investigates the clinical effects of dose reduction (PK dosing strategy) but does not report on genetic variants, genotypes, or pharmacogenomic interactions. |
| PGx | Miller_2001 | not_relevant | 0 | 0 | The paper discusses viral genetic resistance mechanisms to stavudine, not human pharmacogenomic variations affecting its pharmacokinetics or pharmacodynamics. |
| PGx | Moketla_2018 | not_relevant | 3 | 1 | The study associates genetic variants with the clinical adverse event (sensory neuropathy) rather than reporting specific quantitative pharmacokinetic or pharmacodynamic parameter changes (like AUC or Cmax). |
| popPK | Monif_2009 | irrelevant | 1 | 0 | This is a bioequivalence study for a pediatric formulation that reports only standard NCA endpoints (AUC, Cmax) for the combination drug, without quantitative disposition parameters like clearance or volume, and the specific numeric values are not present in the evidence. |
| popPK | Murphy_2001 | irrelevant | 0 | 0 | The study is a clinical efficacy trial focusing on antiviral activity and safety, reporting only ABT-378 trough concentrations and HIV-1 RNA levels, with no pharmacokinetic parameters (CL, V, t1/2) for stavudine. |
| popPK | Palmer_2008 | irrelevant | 0 | 0 | The study analyzes longitudinal HIV-1 viral load kinetics (viremia decay) rather than the pharmacokinetics (disposition parameters) of the antiretroviral drugs. |
| popPK | Pemmaraju_2014 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro biological evaluation (anti-HIV activity and cytotoxicity) of derivatives, with no pharmacokinetic data or disposition parameters reported. |
| PGx | Prosperi_2012 | not_relevant | 0 | 0 | The study identifies stavudine as a clinical risk factor for treatment discontinuation but does not report pharmacokinetic/pharmacodynamic parameters or the influence of specific gene variants (pharmacogenomics) on stavudine. |
| popPK | Regazzi_2000 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of nelfinavir, with stavudine acting only as a co-administered background agent. |
| popPK | Robinson_2000 | irrelevant | 0 | 0 | The study focuses on the in vitro antiviral activity of BMS-232632, and stavudine is only mentioned as a comparator in combination studies without reporting any pharmacokinetic parameters. |
| popPK | Rojas_2003 | irrelevant | 0 | 0 | The study analyzes metabolic side effects (triglyceride levels) of indinavir and NRTIs, not the pharmacokinetic parameters of stavudine. |
| popPK | Sabo_2000 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of nevirapine and lamivudine, mentioning stavudine only as part of the patients' background therapy, not as the subject of PK parameter estimation. |
| popPK | Sarfo_2014 | irrelevant | 0 | 0 | The paper is a clinical outcome study on HIV/HBV co-infection and does not report pharmacokinetic parameters for stavudine. |
| popPK | Sarfo_2014_2 | irrelevant | 0 | 0 | The study is a clinical outcomes/efficacy trial comparing NNRTI-based therapies and does not report pharmacokinetic parameters for stavudine. |
| popPK | Singh_2014 | irrelevant | 0 | 0 | The paper reports in-vitro antiviral potency (EC50) and cytotoxicity of stavudine prodrugs, not pharmacokinetic disposition parameters. |
| PGx | Soko_2023 | not_relevant | 0 | 0 | The paper identifies stavudine as a commonly prescribed drug and lists potential pharmacogenes but does not report specific effects of gene variants on stavudine's PK or PD parameters. |
| PGx | Soriano_2007 | not_relevant | 0 | 0 | The paper is a review of hepatitis C treatment in HIV patients and does not report any pharmacogenomic effects on the PK or PD of stavudine. |
| PGx | Soriano_2009 | not_relevant | 0 | 0 | The paper is a general review of hepatitis B treatment and mentions stavudine only in the context of potential pharmacodynamic interactions with other drugs, not pharmacogenomics. |
| popPK | Sy_2014 | relevant | 8 | 2 | The study presents a population pharmacokinetic model for stavudine's active intracellular metabolite (d4T-TP), reporting predicted concentration values but lacking explicit disposition parameters (CL, V, ka) in the provided text. |
| popPK | Taylor_2000 | irrelevant | 0 | 0 | The study investigates the antiviral activity and resistance profiles of dOTC (BCH-10652) and its combinations with stavudine in vitro; it does not report pharmacokinetic parameters for stavudine. |
| PGx | Verstuyft_2005 | not_relevant | 0 | 0 | The study investigates MDR1 polymorphisms and indinavir pharmacokinetics, not stavudine. |
| PGx | Vidal_2011 | not_relevant | 0 | 0 | The paper is a review of the association between genetic variants and the clinical outcome of lipodystrophy (a PD/toxicity phenotype), but it does not report specific pharmacokinetic parameters or quantitative pharmacodynamic effect sizes for stavudine. |
| popPK | Vrijens_2005 | relevant | 5 | 0 | The study includes stavudine as part of the antiretroviral regimen for which pharmacokinetic assessments were performed, but the evidence text only details the modeling of lopinavir, and no quantitative numeric parameter values for stavudine are provided in the extracted text. |
| popPK | Wang_2025 | irrelevant | 1 | 0 | The paper is a medicinal chemistry study evaluating prodrugs for HIV inhibition and uses stavudine only as a comparator for potency, with no population pharmacokinetic parameters reported. |
| PGx | Weinberg_2009 | not_relevant | 0 | 0 | The paper reports on antiretroviral resistance (viral mutations) in pregnant women, not on how human genetic variants affect the pharmacokinetics or pharmacodynamics of stavudine. |
| PGx | Weiss_2007 | not_relevant | 0 | 0 | The paper investigates the inhibition of BCRP activity by stavudine in vitro but does not report any pharmacogenomic effects (gene variants) on stavudine pharmacokinetics or pharmacodynamics. |
| popPK | Witvrouw_2004 | irrelevant | 0 | 0 | The paper evaluates the in-vitro antiviral susceptibility (EC50) of HIV-2, SIV, and SHIV strains to stavudine, rather than measuring pharmacokinetic disposition parameters. |
| PGx | Zhang_2009 | not_relevant | 0 | 0 | The paper reports a retrospective clinical association between HAART therapy and dyslipidemia/IMT, containing no analysis of gene variants or their effect on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Zhao_2011 | not_relevant | 0 | 0 | The paper analyzes HIV-1 viral genotypic resistance mutations and treatment efficacy, not human pharmacogenomic variants affecting the PK or PD of stavudine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:55 UTC</sub>
