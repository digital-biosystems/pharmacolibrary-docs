<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;defibrotide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Defibrotide_Tocchetti2016_reference&quot;,&quot;label&quot;:&quot;Tocchetti_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_defibrotide/Defibrotide_Tocchetti2016_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# defibrotide

- **generic name:** defibrotide
- **ATC codes:** `B01AX01`
- **DrugBank:** [DB04932](https://go.drugbank.com/drugs/DB04932) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Defibrotide, a mixture of single-stranded DNA fragments from pig intestinal mucosa, is an antithrombotic medicine used to treat hepatic veno-occlusive disease. It is authorised in the European Union and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3704725](https://www.wikidata.org/wiki/Q3704725) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 14:32 | 12:13 | 1/1/0 | 0/0/0 | 0/0/0 | 215,520/27,692 | ollama / qwen3.8:27b-mtp-q8_0 | 19 | 5/11 | 9/10 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Tocchetti_2016_reference](drugs/drug_defibrotide/Defibrotide_Tocchetti2016_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Tocchetti P et al., Pharmacokinetic profile of defibrotide…, Drug design, development an… (2016) | [10.2147/DDDT.S112181](https://doi.org/10.2147/DDDT.S112181) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Pescador_1983_reference](drugs/drug_defibrotide/Defibrotide_Pescador1983_reference.md) | — | 2-compartment (no model) | 8 | Pescador R et al., Pharmacokinetics of Defibrotide and of…, Thrombosis research (1983) | [10.1016/0049-3848(83)90391-2](https://doi.org/10.1016/0049-3848(83)90391-2) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=defibrotide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADORA1 (target), ADORA2A (target), ADORA2B (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 48 matched, 41 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gryglewski_1989.pdf` | Gryglewski RJ et al., Prostacyclin and the mechanism of actio…, Eicosanoids (1989) | pd | 4 | not captured | [2517030](https://www.ncbi.nlm.nih.gov/pubmed/2517030) | metadata signals extractable PD data (IC50) |
| `Zhang_2022.pdf` | Zhang F et al., Potential Anti-SARS-CoV-2 Activity of P…, Pharmaceuticals (Basel, Swi… (2022) | pd | 4 | [10.3390/ph15020258](https://doi.org/10.3390/ph15020258) | [35215371](https://www.ncbi.nlm.nih.gov/pubmed/35215371) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-05T14:22:00.872069+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arnold_2023 | irrelevant | 0 | 0 | The study investigates heparan sulfate oligosaccharides, not defibrotide. |
| popPK | Asako_1994 | irrelevant | 0 | 0 | The paper studies histamine-induced leukocyte rolling and albumin clearance in rat mesentery and does not involve defibrotide or report pharmacokinetic parameters for it. |
| PD | Aziz_2018 | not_relevant | 1 | 0 | The paper is a narrative review summarizing efficacy and safety outcomes (response rates, survival) rather than reporting a specific pharmacodynamic model or numeric exposure-response parameters. |
| PD | Bagal_2018 | not_relevant | 1 | 0 | The paper explicitly states that no dose-response relationship was observed and provides no numeric PD parameters or concentration-effect data. |
| popPK | Bartelink_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and clinical outcomes of busulfan, not defibrotide. |
| PD | Bartelink_2016 | not_relevant | 0 | 0 | The paper analyzes busulfan exposure-response relationships, not defibrotide. |
| popPK | Berti_1991 | irrelevant | 1 | 0 | The study focuses on the pharmacodynamic effects of defibrotide on prostacyclin release and renal function in rabbits, not on quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Bi_2023 | irrelevant | 0 | 0 | The paper focuses on curcumin nanoemulsions and does not involve defibrotide or its pharmacokinetics. |
| popPK | Botting_1989 | irrelevant | 0 | 0 | The paper is a review of endothelial mediators and mentions defibrotide only as a drug that may release prostacyclin, without reporting any pharmacokinetic parameters. |
| popPK | Cao_2022 | irrelevant | 0 | 0 | The paper focuses on the preparation and properties of a thymol-chitooligosaccharide complex for food storage, with no mention of defibrotide or pharmacokinetic parameters. |
| popPK | Cella_2001 | irrelevant | 2 | 1 | The study focuses on the mechanism of TFPI release and reports only a single plasma concentration point for defibrotide, lacking a full pharmacokinetic model or standard disposition parameters like clearance and volume. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The paper is about sewage sludge pretreatment for lipid production and does not involve defibrotide or pharmacokinetics. |
| popPK | Cheng_2024 | irrelevant | 0 | 0 | The paper studies zinc bioavailability using nanoparticles and does not involve defibrotide or pharmacokinetic parameters. |
| PGx | Coppell_2003 | not_relevant | 0 | 0 | The paper is a review of the pathogenesis of hepatic veno-occlusive disease and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of defibrotide. |
| PD | Glusa_2001 | not_relevant | 1 | 2 | The paper reports an IC50 for defibrotide as an inhibitor of cathepsin G-induced relaxation, which is a pharmacological interaction study, not a pharmacodynamic exposure-response or dose-response analysis of defibrotide's own therapeutic effect. |
| popPK | Gross_1987 | irrelevant | 0 | 0 | The paper studies the clearance of rat liver secretory glycoproteins and does not involve defibrotide. |
| popPK | Guo_2025 | irrelevant | 0 | 0 | The paper studies naringin nanoparticles and does not involve defibrotide or its pharmacokinetics. |
| popPK | Halbeek_1993 | irrelevant | 0 | 0 | The paper is a review on NMR spectroscopy for glycoprotein characterization and does not contain any pharmacokinetic data for defibrotide. |
| popPK | Harenberg_2010 | irrelevant | 0 | 0 | The paper discusses idraparinux and idrabiotaparinux, not defibrotide. |
| popPK | Hong_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cyclophosphamide, not defibrotide. |
| PD | Hong_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of cyclophosphamide and its metabolites, not defibrotide; while defibrotide is mentioned in supplementary tables regarding VOD treatment, no pharmacodynamic or exposure-response analysis for defibrotide is presented. |
| popPK | Huang_2019 | irrelevant | 0 | 0 | The study focuses on curcumin as a model drug for solid dispersion formulation, not defibrotide. |
| popPK | Imber_1981 | irrelevant | 0 | 0 | The paper studies the clearance of alpha 2-macroglobulin in mice, not the pharmacokinetics of defibrotide. |
| popPK | Koehl_2007 | irrelevant | 0 | 0 | The study focuses on the anti-angiogenic mechanism of defibrotide in vitro and in vivo, reporting no quantitative pharmacokinetic parameters such as clearance, volume, or half-life values. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper studies lutein-stachyose derivatives and does not involve defibrotide. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The study focuses on the oral delivery of doxorubicin, not defibrotide. |
| popPK | Loganathan_2023 | irrelevant | 0 | 0 | The paper is a review of non-coding RNAs in human health and disease and contains no pharmacokinetic data for defibrotide. |
| PD | Loganathan_2023 | not_relevant | 0 | 0 | The paper is a review on non-coding RNAs as biomarkers and therapeutic targets and does not contain any pharmacodynamic or exposure-response analysis for defibrotide. |
| popPK | Lu_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sodium oligomannate, not defibrotide. |
| popPK | Lunghi_2025 | irrelevant | 0 | 0 | The paper investigates the effects of OligoGM1 on microglial activation and alpha-synuclein clearance in an in vitro model, and does not involve defibrotide or report any pharmacokinetic parameters. |
| popPK | Magner_1984 | irrelevant | 0 | 0 | The paper is a mechanistic study on carbohydrate processing of thyrotropin in mouse pituitary tumors and does not involve defibrotide or pharmacokinetic parameters. |
| popPK | Natale_2022 | irrelevant | 0 | 0 | This is a Cochrane review of antiplatelet agents in CKD that mentions defibrotide only as a comparator in limited head-to-head data, without reporting any pharmacokinetic parameters. |
| PD | Noseda_1986 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (half-life, AUC, Vd) and their dose-dependence, with no pharmacodynamic or exposure-response data. |
| popPK | Oltolini_2023 | irrelevant | 0 | 0 | The paper is a clinical case report regarding SARS-CoV-2 management in a transplant patient where defibrotide is mentioned only as a treatment for veno-occlusive disease, with no pharmacokinetic parameters reported. |
| PD | Palmer_1993 | not_relevant | 1 | 0 | The text is a qualitative review of pharmacodynamic properties and therapeutic use, containing no numeric PD parameters, concentration-effect curves, or quantitative exposure-response data. |
| popPK | Pennesi_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of inotuzumab ozogamicin, not defibrotide. |
| PD | Pescador_1983 | not_relevant | 4 | 2 | The abstract describes dose-dependent PK parameters and qualitative trends in profibrinolytic activity but does not provide specific numeric PD parameters (e.g., Emax, EC50) or quantitative concentration-effect data. |
| popPK | Pérez-González_2025 | irrelevant | 0 | 0 | The study focuses on a dexamethasone nanosystem and does not involve defibrotide or report any pharmacokinetic parameters for it. |
| popPK | Rigotti_1991 | irrelevant | 0 | 0 | The study measures renal function and urinary prostanoid excretion, not the pharmacokinetic disposition parameters (CL, V, t1/2) of defibrotide. |
| popPK | Shah_2018 | irrelevant | 0 | 0 | The paper is a case series discussing Sinusoidal Obstruction Syndrome and mentions defibrotide only as a treatment, without reporting any pharmacokinetic parameters for it. |
| popPK | Strous_1985 | irrelevant | 0 | 0 | The paper studies the effect of monensin on glycosylation in HeLa cells and does not involve defibrotide or pharmacokinetic parameters. |
| popPK | Tanabe_2020 | irrelevant | 0 | 0 | The paper studies the bioavailability of maltobionic acid, not defibrotide. |
| popPK | Thotakura_1991 | irrelevant | 0 | 0 | The paper studies recombinant human thyrotropin (TSH), not defibrotide. |
| popPK | Tian_2024 | irrelevant | 0 | 0 | The paper studies xylooligosaccharides from rice husks and contains no information regarding defibrotide or its pharmacokinetics. |
| popPK | Tollefsen_1988 | irrelevant | 0 | 0 | The paper studies the clearance of human glycosylated alpha-amylase in rats, not defibrotide. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | The paper focuses on the synthesis of heparan sulfate oligosaccharides and their anticoagulant properties, not the pharmacokinetics of defibrotide. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper focuses on the analysis of heparan sulfate structural motifs and heparin/enoxaparin, not the pharmacokinetics of defibrotide. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The paper studies heparan sulfate in Alzheimer's disease models and does not involve defibrotide or its pharmacokinetics. |
| popPK | Wu_2022_2 | irrelevant | 0 | 0 | The paper investigates heparan sulfate for Alzheimer's disease and does not involve defibrotide or pharmacokinetic parameters. |
| popPK | Wyss_2020 | irrelevant | 0 | 0 | The paper focuses on the renal clearance of polymeric nanoparticles and does not involve defibrotide or report any pharmacokinetic parameters for it. |
| popPK | Zeitlinger_2021 | irrelevant | 0 | 0 | no_text gate: only 26 chars of text extracted (&lt; 400) |
| PD | Zeitlinger_2021 | not_relevant | 0 | 0 | The provided text contains abstracts for oxycodone, esomeprazole/IL-6, daridorexant, bile acids, and atorvastatin, but does not contain any information regarding defibrotide. |
| PD | Zhang_2022 | not_relevant | 0 | 0 | The paper reports IC50 values for Pentosan Polysulfate (PPS) and Mucopolysaccharide Polysulfate (MPS), but only mentions defibrotide as part of the tested library without providing any specific numeric PD parameters (IC50, Emax, etc.) or concentration-effect data for it. |
| popPK | de_2015 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for busulfan, not defibrotide. |
| PD | de_2015 | not_relevant | 0 | 0 | The paper focuses on busulfan PK and dosing algorithms, not defibrotide, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract collection and contains no scientific content, data, or PD parameters. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, models, or parameters for defibrotide. |
| popPK | unknown_2015_2 | irrelevant | 0 | 0 | no_text gate: only 48 chars of text extracted (&lt; 400) |
| PD | unknown_2015_2 | not_relevant | 0 | 0 | The provided text is a header for a poster session and contains no scientific content, data, or PD parameters. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text contains abstracts for G-CSF, Clofarabine/Mitoxantrone, DFMO, Genomic Profiling, Gemcitabine/Nab-paclitaxel, Nanomedicine, and CVL management, but does not contain any information regarding defibrotide or its pharmacodynamic parameters. |
| popPK | unknown_2016_2 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| PD | unknown_2016_2 | not_relevant | 0 | 0 | The provided text is a header ("Physicians Abstracts") and contains no scientific content, data, or analysis regarding defibrotide or any pharmacodynamic relationship. |
| popPK | unknown_2016_3 | irrelevant | 0 | 0 | no_text gate: only 40 chars of text extracted (&lt; 400) |
| PD | unknown_2016_3 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of defibrotide pharmacodynamics. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 26 chars of text extracted (&lt; 400) |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text contains abstracts regarding VZV vaccine, fludarabine exposure, G-CSF, plerixafor, and CD34 counts, but does not contain any information or data regarding defibrotide. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of defibrotide pharmacodynamics. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a header for a conference poster session and contains no scientific content, data, or PD parameters. |
| popPK | unknown_2020 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PD | unknown_2020 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or mention of defibrotide pharmacodynamics. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 135 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text contains abstracts regarding bone marrow transplantation outcomes and risk scores, with no mention of defibrotide or any pharmacodynamic modeling. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 14:22 UTC</sub>
