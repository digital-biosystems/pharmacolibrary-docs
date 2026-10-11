<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;lonafarnib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lonafarnib_Canini2017_reference&quot;,&quot;label&quot;:&quot;Canini_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lonafarnib/Lonafarnib_Canini2017_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# lonafarnib

- **generic name:** lonafarnib
- **ATC codes:** `A16AX20`
- **DrugBank:** [DB06448](https://go.drugbank.com/drugs/DB06448) · **PubChem:** [CID 148195](https://pubchem.ncbi.nlm.nih.gov/compound/148195)
- **molar mass:** 638.822 g/mol (C27H31Br2ClN4O2) — DrugBank
- **groups:** approved

## About

Lonafarnib is a farnesyltransferase enzyme inhibitor used to treat progeria and certain laminopathies. It is an approved medicine, authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3258910](https://www.wikidata.org/wiki/Q3258910) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lonafarnib | parent | 638.822 | C27H31Br2ClN4O2 | DrugBank | [148195](https://pubchem.ncbi.nlm.nih.gov/compound/148195) | Canini_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:49 | 2:35 | 1/0/0 | 0/0/1 | 0/0/0 | 257,819/15,898 | einfracz / qwen3.8-27b | 10 | 3/8 | 8/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Canini_2017_reference](drugs/drug_lonafarnib/Lonafarnib_Canini2017_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Canini L et al., Pharmacokinetics and pharmacodynamics m…, Hepatology communications (2017) | [10.1002/hep4.1043](https://doi.org/10.1002/hep4.1043) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Canini_2017_HDV_production](drugs/drug_lonafarnib/pd_Canini_2017_HDV_production.md) | HDV production ← lonafarnib · direct sigmoid Emax (Hill) effect | model (no simulator) | Canini L et al., Pharmacokinetics and pharmacodynamics m…, Hepatology communications (2017) | [10.1002/hep4.1043](https://doi.org/10.1002/hep4.1043) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lonafarnib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2A6` substrate, `CYP2C19` inhibitor/substrate, `CYP2C8` inhibitor/substrate, `CYP2C9` substrate, `CYP2E1` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` inhibitor | DrugBank actor |
| excretion | liver | `ABCC2` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: FNTA (inhibitor), FNTB (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 50 matched, 53 returned
- **screened:** 6  ·  **relevant:** 3
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Awada_2002.pdf` | Awada A et al., Phase I and pharmacological study of th…, European journal of cancer… (2002) | popPK | 9 | [10.1016/s0959-8049(02)00379-9](https://doi.org/10.1016/s0959-8049(02)00379-9) | [12441264](https://pubmed.ncbi.nlm.nih.gov/12441264) | The paper is a Phase I PK study of SCH 66336 (lonafarnib) reporting half-life, volume of distribution, and accumulation, but specific numeric values for CL, V, or Q are not explicitly listed in the provided text (only half-life range 5-9h). |
| `Zhu_2007.pdf` | Zhu Y et al., Effect of food on the pharmacokinetics…, International journal of cl… (2007) | popPK | 8 | [10.5414/cpp45539](https://doi.org/10.5414/cpp45539) | [17966839](https://pubmed.ncbi.nlm.nih.gov/17966839) | The study reports food effects on lonafarnib PK (Cmax, AUC, bioavailability) in humans, but specific numeric disposition parameters (CL, Vd, half-life) are likely in tables not fully provided. |
| `Wong_2011.pdf` | Wong NS et al., A phase I multicenter study of continuo…, Cancer investigation (2011) | popPK | 7 | [10.3109/07357907.2011.621912](https://doi.org/10.3109/07357907.2011.621912) | [22011284](https://pubmed.ncbi.nlm.nih.gov/22011284) | Reports clinical PK parameters (half-life, Tmax) for lonafarnib, but detailed compartmental values like clearance or volume of distribution are not explicitly provided in the evidence. |
| `Yu_2022.pdf` | Yu J et al., Pharmacokinetic Drug-Drug Interactions…, Drug metabolism and disposi… (2022) | pgx | 8 | [10.1124/dmd.121.000401](https://doi.org/10.1124/dmd.121.000401) | [34620694](https://www.ncbi.nlm.nih.gov/pubmed/34620694) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-07T17:48:05.558568+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Appels_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic characterization of a different drug (AZD3409) where lonafarnib serves only as a comparator, and no pharmacokinetic parameters are reported. |
| popPK | Asselah_2020 | irrelevant | 0 | 0 | This is a narrative review of HDV treatments that mentions lonafarnib but provides no original pharmacokinetic parameter values or models. |
| popPK | Awada_2002 | relevant | 9 | 4 | The paper is a Phase I PK study of SCH 66336 (lonafarnib) reporting half-life, volume of distribution, and accumulation, but specific numeric values for CL, V, or Q are not explicitly listed in the provided text (only half-life range 5-9h). |
| popPK | Balmus_2018 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug Remodelin, not lonafarnib, which is only mentioned as a standard-of-care comparator in the discussion. |
| PD | Balmus_2018 | not_relevant | 0 | 0 | The paper studies Remodelin (a NAT10 inhibitor), not lonafarnib, and reports only qualitative efficacy and basic PK data without any exposure-response or dose-response modeling. |
| popPK | Bjorkli_2022 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study on Alzheimer's pathology in mice, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Castaneda_2011 | irrelevant | 2 | 0 | The evidence describes a Phase I study for lonafarnib that qualitatively notes PK properties (dose dependence, renal excretion) but does not provide quantitative disposition parameters (CL, V, Ka) or compartmental model values in the text. |
| popPK | Caviglia_2020 | irrelevant | 0 | 0 | This is a narrative review of therapeutic strategies for Hepatitis D and contains no original quantitative pharmacokinetic data or parameter values for lonafarnib. |
| popPK | Chow_2008 | relevant | 4 | 0 | Study is a relevant Phase I PK study in humans, but no quantitative pharmacokinetic parameters (CL, V, t1/2, etc.) are provided in the text. |
| popPK | Cortes_2007 | irrelevant | 1 | 0 | The paper mentions pharmacokinetics qualitatively but provides no quantitative disposition parameters (CL, V, etc.) for lonafarnib in the evidence. |
| PD | Feldman_2008 | not_relevant | 3 | 1 | The paper reports PK data and a binary pharmacodynamic marker (HDJ-2 farnesylation shift) but explicitly states that no clear correlation between the PD marker and clinical effect could be made, and no numeric PD parameters (Emax, EC50, etc.) are provided. |
| popPK | Foo_2024 | irrelevant | 0 | 0 | The paper is a mechanistic/cellular study on lamin A farnesylation in HGPS, not a pharmacokinetic study reporting disposition parameters for lonafarnib. |
| popPK | Gabriel_2017 | irrelevant | 0 | 0 | This is an in vitro mechanistic study on fibroblast cultures focusing on cellular homeostasis and autophagy, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ghosal_2006 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study identifying CYP enzymes responsible for lonafarnib metabolism and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.). |
| PD | Ghosal_2006 | not_relevant | 0 | 0 | The paper describes in vitro metabolic pathways and CYP enzyme identification, not pharmacodynamic exposure-response or dose-response relationships. |
| PGx | Ghosal_2006 | not_relevant | 0 | 0 | The study describes the role of CYP enzymes in drug metabolism but does not report specific genetic variants or genotypes affecting PK/PD parameters. |
| popPK | Hahn_2020 | irrelevant | 0 | 0 | The paper is an in vitro study assessing the anti-amoebic activity of lonafarnib against Naegleria fowleri and does not contain any pharmacokinetic disposition parameters. |
| PD | Hahn_2020 | not_relevant | 0 | 0 | The paper evaluates a farnesyltransferase inhibitor against Naegleria fowleri in vitro and does not mention lonafarnib or report any pharmacodynamic parameters for it. |
| popPK | Hongnak_2023 | irrelevant | 0 | 0 | The paper is a structure-activity relationship (SAR) and in-vitro cytotoxicity study of lonafarnib derivatives, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Hongnak_2023 | not_relevant | 3 | 3 | The paper reports IC50 values for lonafarnib and its derivatives in cell lines, which are single-point potency metrics rather than a full exposure-response or dose-response curve with derived PD parameters (e.g., Emax, slope, EC50 from a fitted model). |
| popPK | Hsieh_2003 | irrelevant | 2 | 0 | The paper is a method development study for APPI-MS/MS analysis in rats; while it mentions using the method for PK of 42 compounds including lonafarnib, it does not report specific quantitative PK parameters (CL, V, etc.) for lonafarnib in the provided evidence. |
| PGx | Jung_2023 | not_relevant | 0 | 0 | The paper is a review discussing general protein prenylation regulation and drug development, not a pharmacogenomic study reporting genotype-specific effects on lonafarnib PK or PD. |
| popPK | Keskin_2023 | irrelevant | 0 | 0 | The paper is a review article discussing therapeutic mechanisms and clinical trial status, containing no quantitative pharmacokinetic parameter values for lonafarnib. |
| popPK | Khuri_2004 | irrelevant | 3 | 0 | The abstract mentions pharmacokinetic characterization but provides no quantitative disposition parameters (CL, V, etc.) in the evidence provided. |
| popPK | Kieran_2007 | irrelevant | 2 | 0 | The study is a Phase I PK study for lonafarnib, but the provided evidence contains only dose levels and toxicity descriptions, with no quantitative PK parameter values (CL, V, T1/2) or specific numerical results in the tables or text. |
| popPK | Kim_1999 | irrelevant | 0 | 0 | The study is about SCH 66336, not lonafarnib. |
| popPK | Lempp_2019 | irrelevant | 0 | 0 | The paper is an in-vitro virology study reporting antiviral IC50 values for lonafarnib in cell culture, not pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Medeiros_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of tipifarnib's P-glycoprotein inhibitory properties, and lonafarnib is only mentioned as a comparator in the introduction without any pharmacokinetic data. |
| popPK | Milojkovic_2013 | irrelevant | 2 | 0 | While the study mentions pharmacokinetics, the abstract only provides qualitative descriptions of exposure (higher vs. lower) and MTD, lacking specific quantitative PK parameters (CL, V, ka, etc.). |
| popPK | Moorthy_2013 | irrelevant | 0 | 0 | The paper is a comprehensive review of farnesyltransferase inhibitors focusing on structural analysis and does not report original quantitative pharmacokinetic parameters for lonafarnib. |
| PD | Moorthy_2013 | not_relevant | 1 | 0 | The text is a structural review of farnesyltransferase inhibitors that mentions lonafarnib clinical studies but provides no numeric pharmacodynamic parameters, exposure-response data, or dose-effect curves. |
| popPK | Negro_2023 | irrelevant | 0 | 0 | This is a clinical review of Hepatitis D that mentions lonafarnib as a therapeutic agent but does not provide any pharmacokinetic or disposition parameters. |
| PGx | Okawa_2025 | not_relevant | 0 | 0 | The paper is an epidemiological survey describing prevalence and clinical features of HGPS in Japan, and does not report pharmacokinetic or pharmacodynamic effects of lonafarnib based on genotypes. |
| popPK | Ready_2007 | irrelevant | 0 | 0 | The study mentions pharmacokinetics in the purpose but the provided evidence only reports maximum tolerated dose and toxicity without any quantitative PK parameters like clearance or half-life. |
| popPK | Reinshagen_2025 | irrelevant | 0 | 0 | The paper describes bioinformatics workflows for drug repurposing and does not contain any pharmacokinetic data for lonafarnib. |
| PD | Reinshagen_2025 | not_relevant | 0 | 0 | The paper describes bioinformatics pipelines for drug repurposing and does not report any pharmacodynamic or exposure-response data for lonafarnib. |
| popPK | Rizzetto_2018 | irrelevant | 0 | 0 | This is a review paper discussing therapeutic strategies for Hepatitis D; it mentions lonafarnib's mechanism of action and clinical efficacy but does not contain pharmacokinetic data. |
| popPK | Sake_2024 | irrelevant | 0 | 0 | The paper is an antiviral study reporting IC50 values and mechanistic data, not a pharmacokinetic study reporting disposition parameters for lonafarnib. |
| popPK | Saracco_2022 | irrelevant | 0 | 0 | The paper is a general review of chronic viral hepatitis therapies that mentions lonafarnib but contains no pharmacokinetic data, models, or numeric parameters. |
| popPK | Soriano_2017 | irrelevant | 0 | 0 | The paper is a review on hepatitis delta and HIV infection; lonafarnib is mentioned only as a therapeutic class (prenylation inhibitor) with no pharmacokinetic parameters or data. |
| popPK | Soriano_2023 | irrelevant | 0 | 0 | The paper is a review of bulevirtide for hepatitis delta and only mentions lonafarnib in passing as a potential future combination therapy, providing no pharmacokinetic data for it. |
| popPK | Soriano_2023_2 | irrelevant | 0 | 0 | The paper is a narrative review regarding the treatment of Hepatitis Delta and HIV coinfection; it does not contain original pharmacokinetic data or quantitative disposition parameters for lonafarnib. |
| popPK | Taylor_2008 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (growth inhibition, apoptosis, biomarkers) and does not report quantitative pharmacokinetic parameters for lonafarnib. |
| PD | Taylor_2008 | not_relevant | 2 | 1 | The paper reports qualitative pharmacodynamic effects (growth inhibition, apoptosis, biomarker shifts) of a drug combination but does not provide numeric concentration-effect curves, dose-response parameters (Emax, EC50), or a formal PK/PD model fit. |
| popPK | Theodore_2005 | irrelevant | 0 | 0 | The paper studies the effect of farnesyl transferase inhibitor SCH66336 on the pharmacokinetics of gemcitabine; lonafarnib is not the subject of the study. |
| PGx | Tong_2006 | not_relevant | 0 | 0 | The paper focuses on the analytical chemistry and identification of unstable metabolites of lonafarnib, without reporting any pharmacogenomic effects on PK or PD parameters. |
| PGx | Wang_2017 | not_relevant | 0 | 0 | The paper investigates the mechanistic effects of lonafarnib on cell proliferation and apoptosis in vitro and its ability to reverse drug resistance via ABCB1 inhibition, but it does not report pharmacogenomic data showing how a specific gene variant alters the drug's pharmacokinetics or pharmacodynamics in a human subject. |
| PGx | Wang_2021 | not_relevant | 1 | 0 | The paper investigates the effect of viral genotypes (HDV/HBV) on drug efficacy (PD), which is virology, not human pharmacogenomics (drug-gene interaction in a patient). |
| popPK | Wong_2011 | relevant | 7 | 3 | Reports clinical PK parameters (half-life, Tmax) for lonafarnib, but detailed compartmental values like clearance or volume of distribution are not explicitly provided in the evidence. |
| PD | Wong_2011 | not_relevant | 1 | 0 | The text mentions pharmacodynamics as an endpoint but provides no numeric PD parameters, concentration-effect data, or dose-response curves. |
| PGx | Yu_2022 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (CYP3A inhibition), not pharmacogenomic effects (gene variants). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:48 UTC</sub>
