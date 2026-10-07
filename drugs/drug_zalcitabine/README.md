<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;zalcitabine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zalcitabine_Adams1998_reference&quot;,&quot;label&quot;:&quot;Adams_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zalcitabine/Zalcitabine_Adams1998_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zalcitabine_Ibrahim1991_reference&quot;,&quot;label&quot;:&quot;Ibrahim_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zalcitabine/Zalcitabine_Ibrahim1991_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# zalcitabine

- **generic name:** zalcitabine
- **ATC codes:** `J05AF03`
- **DrugBank:** [DB00943](https://go.drugbank.com/drugs/DB00943) · **PubChem:** [CID 24066](https://pubchem.ncbi.nlm.nih.gov/compound/24066)
- **molar mass:** 211.2178 g/mol (C9H13N3O3) — DrugBank
- **groups:** approved, withdrawn

## About

Zalcitabine is a nucleoside reverse transcriptase inhibitor that was used to treat HIV infection and AIDS. It has been withdrawn and is no longer used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2344582](https://www.wikidata.org/wiki/Q2344582) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| zalcitabine (2',3'-dideoxycytidine (DDC; zalcitabine)) | parent | 211.218 | C9H13N3O3 | DrugBank | [24066](https://pubchem.ncbi.nlm.nih.gov/compound/24066) | Adams_1998, Ibrahim_1991, Kelley_1987 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:10 | 10:16 | 2/0/1 | 0/0/0 | 0/0/0 | 217,147/46,650 | openai / gpt-6-luna | 30 | 7/17 | 27/3 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Adams_1998_reference](drugs/drug_zalcitabine/Zalcitabine_Adams1998_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Adams JM et al., Zalcitabine population pharmacokinetics…, Antimicrobial agents and ch… (1998) | [10.1128/AAC.42.2.409](https://doi.org/10.1128/AAC.42.2.409) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Ibrahim_1991_reference](drugs/drug_zalcitabine/Zalcitabine_Ibrahim1991_reference.md) | ▶ model + simulator | 1-compartment, oral | 7 | Ibrahim SS et al., Pharmacokinetics of 2',3'-dideoxycytidi…, Journal of pharmaceutical s… (1991) | [10.1002/jps.2600800110](https://doi.org/10.1002/jps.2600800110) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.98).">human + animal</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Kelley_1987_reference](drugs/drug_zalcitabine/Zalcitabine_Kelley1987_reference.md) | — | 1-compartment (no model) | 3 | Kelley JA et al., The disposition and metabolism of 2',3'…, Drug metabolism and disposi… (1987) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=zalcitabine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown, `SLC29A1` unknown | DrugBank actor |
| distribution | liver | `SLC29A1` unknown | DrugBank actor |
| metabolism | kidney | `SLC22A7` substrate | DrugBank actor |
| metabolism | liver | `SLC22A7` substrate | DrugBank actor |
| excretion | kidney | `SLC22A6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DCK (substrate), SLC29A2 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 270 matched, 140 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 2  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Adams_1998.pdf` | Adams JM et al., Zalcitabine population pharmacokinetics…, Antimicrobial agents and ch… (1998) | popPK | 10 | [10.1128/AAC.42.2.409](https://doi.org/10.1128/AAC.42.2.409) | [9527795](https://pubmed.ncbi.nlm.nih.gov/9527795) | Human population-PK model reports numeric oral clearance and volume of distribution. |
| `Ibrahim_1991.pdf` | Ibrahim SS et al., Pharmacokinetics of 2',3'-dideoxycytidi…, Journal of pharmaceutical s… (1991) | popPK | 10 | [10.1002/jps.2600800110](https://doi.org/10.1002/jps.2600800110) | [1849573](https://pubmed.ncbi.nlm.nih.gov/1849573) | The rat study reports readable quantitative pharmacokinetic parameters for zalcitabine (DDC). |
| `Kelley_1987.pdf` | Kelley JA et al., The disposition and metabolism of 2',3'…, Drug metabolism and disposi… (1987) | popPK | 10 | not captured | [2891473](https://pubmed.ncbi.nlm.nih.gov/2891473) | Zalcitabine pharmacokinetics are reported in animals, including numeric terminal half-lives and a two-compartment model. |
| `Solimano_1990.pdf` | Solimano F et al., A nonlinear three-compartment model for…, Bulletin of mathematical bi… (1990) | popPK | 8 | [10.1007/BF02460809](https://doi.org/10.1007/BF02460809) | [2177675](https://pubmed.ncbi.nlm.nih.gov/2177675) | A three-compartment model for ddCyd is described, but no numeric parameter values are provided in the evidence. |

<sub>queue written 2026-10-07T16:02:24.282607+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abdel-Rahman_2000 | not_relevant | 0 | 0 | The paper studies CYP variants and NNK-induced chromosome aberrations, not zalcitabine pharmacokinetics or pharmacodynamics. |
| PGx | Abu-Serie_2022 | not_relevant | 0 | 0 | The paper studies nanoparticle treatments for metastatic breast cancer and does not report zalcitabine or a gene-variant effect on its PK or PD. |
| PGx | Ahmed_2020 | not_relevant | 0 | 0 | The paper studies octopamine receptor agonists and gene expression in Drosophila, not zalcitabine or pharmacogenomic effects on its PK/PD. |
| PGx | Alonso-Navarro_2014 | not_relevant | 0 | 0 | The review discusses genetic associations with Parkinson’s disease risk, not genotype effects on zalcitabine pharmacokinetic or pharmacodynamic parameters. |
| popPK | Aquaro_1997 | irrelevant | 0 | 0 | This is an in-vitro antiviral efficacy study, not a pharmacokinetic study, and reports no zalcitabine disposition parameters. |
| popPK | Asif_2005 | irrelevant | 0 | 0 | Numeric pharmacokinetic values are reported for L-3′-Fd4C, not zalcitabine. |
| PGx | Atwal_2015 | not_relevant | 0 | 0 | The paper discusses DDC variants and AADC deficiency, not zalcitabine or a pharmacokinetic/pharmacodynamic effect. |
| popPK | Balzarini_1998 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study and reports no zalcitabine pharmacokinetic parameters. |
| PGx | Barry_1997 | not_relevant | 0 | 0 | The paper discusses protease-inhibitor pharmacokinetics and mentions zalcitabine only as combination therapy; it reports no pharmacogenomic effect on a zalcitabine PK/PD parameter. |
| popPK | Bo_2013 | irrelevant | 0 | 0 | This is a polysaccharide sulfation and activity study; zalcitabine (ddC) is only an activity comparator, with no PK parameters reported. |
| PGx | Brennenstuhl_2020 | not_relevant | 0 | 0 | The paper studies newborn screening for AADC deficiency and reports no zalcitabine pharmacogenomic effects on PK or PD parameters. |
| popPK | Chong_2003 | irrelevant | 0 | 0 | This is an in-vitro antiviral chemistry study with no zalcitabine pharmacokinetic parameters. |
| popPK | Coleman_1993 | irrelevant | 0 | 0 | This is an in-vitro dapsone study and reports no zalcitabine pharmacokinetic parameters. |
| popPK | Coleman_1994 | irrelevant | 0 | 0 | This is an in-vitro dapsone study and reports no zalcitabine parameters. |
| popPK | Coleman_1999 | irrelevant | 0 | 0 | The study concerns 4-PAPP, not zalcitabine, and reports no zalcitabine pharmacokinetic parameters. |
| PGx | Corominas_2009 | not_relevant | 0 | 0 | The paper studies dopamine-related genetic associations with migraine susceptibility and reports no zalcitabine PK or PD parameters. |
| popPK | Currens_1996 | irrelevant | 0 | 0 | The paper studies calanolide A’s antiviral activity and reports no zalcitabine pharmacokinetic parameters. |
| PGx | De_2003 | not_relevant | 0 | 0 | The paper studies Drosophila Ddc variants and longevity, not zalcitabine pharmacokinetics or pharmacodynamics. |
| PGx | Devos_2014 | not_relevant | 0 | 0 | The paper reports DDC genotype effects on the motor response to L-dopa, not zalcitabine. |
| popPK | Dhawan_1996 | irrelevant | 0 | 0 | The paper studies FDOPA and 3OMFD PET, not zalcitabine, and reports no zalcitabine parameters. |
| PGx | Ekins_1997 | not_relevant | 0 | 0 | The paper examines CYP enzyme probes and does not report a pharmacogenomic effect on any zalcitabine PK or PD parameter. |
| PGx | Fragoulis_2019 | not_relevant | 0 | 0 | The paper studies Nrf2 and DDC-induced liver disease, not zalcitabine pharmacokinetics or pharmacodynamics. |
| popPK | Gao_1994 | irrelevant | 0 | 0 | This is an in-vitro HIV drug-resistance study with no zalcitabine disposition parameters reported. |
| PGx | Gibson_2025 | not_relevant | 0 | 0 | The paper studies Hippo signaling and dopamine metabolism in Drosophila and reports no zalcitabine-related pharmacogenomic effects. |
| PGx | Gibson_2026 | not_relevant | 0 | 0 | The paper studies Hippo signaling, pigmentation, and dopamine in Drosophila; it reports no zalcitabine pharmacogenomic effects on PK or PD parameters. |
| PGx | Ginsburg_1997 | not_relevant | 0 | 0 | The paper studies DDC and nitric oxide effects on cultured endothelial cells and reports no gene variant or zalcitabine PK/PD parameter. |
| PGx | Gorski_1997 | not_relevant | 0 | 0 | The paper studies CYP-mediated chlorzoxazone metabolism, not a pharmacogenomic effect on zalcitabine PK or PD. |
| popPK | Gründer_2003 | irrelevant | 0 | 0 | The paper models FDOPA disposition in humans, not zalcitabine; no zalcitabine parameter values are reported. |
| PGx | Guo_2006 | not_relevant | 0 | 0 | The paper studies gene expression in endometrial carcinoma and reports no zalcitabine pharmacokinetic or pharmacodynamic effects. |
| PGx | Gupta_2016 | not_relevant | 0 | 0 | The paper studies TSPAN5 and ERICH3 associations with serotonin and SSRI outcomes, not zalcitabine pharmacokinetics or pharmacodynamics. |
| PGx | Haavik_2008 | not_relevant | 0 | 0 | The text discusses monoamine-pathway gene variants and reports no pharmacogenomic effect on a zalcitabine PK or PD parameter. |
| popPK | Hardeman_2017 | irrelevant | 1 | 0 | Zalcitabine is used in vitro to alter melanoma-cell metabolism, but no zalcitabine disposition parameters are reported. |
| PGx | Hardeman_2017 | not_relevant | 0 | 0 | The study tests zalcitabine’s metabolic effects on melanoma cells and sensitivity to PLX4720, but reports no gene variant, genotype, or phenotype effect on zalcitabine PK or PD. |
| PGx | Ho_2021 | not_relevant | 0 | 0 | The paper concerns TSPAN5 variants and acamprosate treatment response, not zalcitabine pharmacokinetics or pharmacodynamics. |
| PGx | Hyland_2020 | not_relevant | 0 | 0 | The paper concerns DDC variants and AADC deficiency, not zalcitabine pharmacokinetics or pharmacodynamics. |
| popPK | Ishikawa_1996 | irrelevant | 0 | 0 | The study reports PET kinetic measures for fluorodopa tracers, not zalcitabine. |
| PGx | Jelnes_2007 | not_relevant | 0 | 0 | The paper studies oval-cell phenotypes in rodent liver regeneration and does not examine zalcitabine or pharmacogenomic effects on PK/PD parameters. |
| popPK | Kaneko_2000 | irrelevant | 0 | 0 | This is an in-vitro antiviral efficacy study, not a pharmacokinetic study, and no disposition parameters are reported. |
| popPK | Kaneko_2001 | irrelevant | 0 | 0 | Zalcitabine (ddC) is only an in-vitro comparator, with no disposition parameters reported. |
| popPK | Kaneko_2003 | irrelevant | 0 | 0 | Zalcitabine is an in-vitro antiviral comparator, with no disposition parameters reported. |
| PGx | Kraemmer_2016 | not_relevant | 0 | 0 | The paper studies genetic prediction of impulse control disorders during dopamine replacement therapy, not zalcitabine pharmacokinetics or pharmacodynamics. |
| popPK | Kumar_1994 | irrelevant | 0 | 0 | Zalcitabine is only a comparator in an in-vitro antiviral study, with no zalcitabine disposition parameters reported. |
| PGx | Lavigne_2002 | not_relevant | 0 | 0 | The paper studies cytochrome P450-related porphyrin formation and does not report a zalcitabine pharmacokinetic or pharmacodynamic effect by genotype. |
| popPK | Lee_1994 | irrelevant | 0 | 0 | Zalcitabine (ddC) is only an anti-HIV comparator, and no pharmacokinetic parameters are reported. |
| popPK | Li_2012 | irrelevant | 0 | 0 | This is an in-vitro HIV inhibitor study and reports no zalcitabine pharmacokinetic parameters. |
| PGx | Li_2014 | not_relevant | 0 | 0 | The paper reports a genetic association with treatment-resistant schizophrenia, not a zalcitabine pharmacokinetic or pharmacodynamic parameter. |
| PGx | Li_2020 | not_relevant | 0 | 0 | The paper reports a DDC genotype association with motor response to levodopa, not zalcitabine. |
| PGx | Li_2020_2 | not_relevant | 0 | 0 | The paper studies dopamine-related variants and heroin-dependence phenotypes, not zalcitabine pharmacokinetics or pharmacodynamics. |
| PGx | Liu_2000 | not_relevant | 0 | 0 | The paper studies nimodipine metabolism, not zalcitabine, and reports no genotype-dependent PK or PD effect for zalcitabine. |
| popPK | Lubberink_2020 | irrelevant | 0 | 0 | This monkey PET study models [11C]5-HTP, not zalcitabine, and reports no zalcitabine parameters. |
| PGx | Löhle_2018 | not_relevant | 0 | 0 | The study examines MAOB genotype effects on dopamine turnover in Parkinson’s disease and does not report zalcitabine PK or PD. |
| PGx | Löhle_2022 | not_relevant | 0 | 0 | The paper studies MAOB genotype and levodopa-associated dyskinesia in Parkinson’s disease, not zalcitabine pharmacokinetics or pharmacodynamics. |
| PGx | Mastrangelo_2023 | not_relevant | 0 | 0 | This review concerns inherited biogenic amine disorders and reports no pharmacogenomic effects on zalcitabine PK or PD parameters. |
| popPK | Meyer_2020 | irrelevant | 0 | 0 | This nanotheranostic study reports no zalcitabine pharmacokinetics or quantitative disposition parameters. |
| PGx | Micozzi_2014 | not_relevant | 0 | 0 | The paper characterizes cytidine deaminase variants but does not report a pharmacokinetic or pharmacodynamic effect on zalcitabine. |
| popPK | Miesel_1995 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study, with ddC only as a comparator and no zalcitabine disposition parameters. |
| popPK | Miyano-Kurosaki_1994 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity assay, not a pharmacokinetic study, and reports no disposition parameters. |
| PGx | Moreau_2015 | not_relevant | 0 | 0 | The paper studies SLC6A3 genotype associations with response to l-DOPA and methylphenidate, not zalcitabine. |
| popPK | Nishigaki_1985 | irrelevant | 0 | 0 | No paper content or zalcitabine pharmacokinetic values are provided in the evidence. |
| PGx | Piechota_2006 | not_relevant | 0 | 0 | The study examines cellular responses to dideoxycytidine, not how a genetic variant or phenotype changes a zalcitabine PK or PD parameter. |
| popPK | Pontikis_2000 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study and reports no zalcitabine pharmacokinetic parameters. |
| popPK | Premanathan_1997 | irrelevant | 0 | 0 | This is an in-vitro SOD antiviral study; zalcitabine (ddC) is only a comparator, with no PK parameters reported. |
| PGx | Prosperi_2012 | not_relevant | 0 | 0 | The study reports toxicity-related discontinuation associated with zalcitabine use, but no gene variant, genotype, or phenotype effect on zalcitabine PK or PD parameters. |
| popPK | Sabo_2000 | irrelevant | 0 | 0 | Zalcitabine was background therapy, but its pharmacokinetics were not modeled or quantified. |
| PGx | Sahai_1996 | not_relevant | 0 | 0 | The paper discusses drug–drug interactions but reports no gene variant, genotype, or phenotype effect on a zalcitabine PK or PD parameter. |
| popPK | Salvatori_2001 | irrelevant | 0 | 0 | This is an in-vitro antiviral study and reports no zalcitabine disposition parameters. |
| PGx | Schmider_1997 | not_relevant | 0 | 0 | The paper studies in vitro dextromethorphan metabolism, not zalcitabine or a pharmacogenomic effect on its PK/PD. |
| popPK | Schwendener_1999 | irrelevant | 1 | 0 | The study concerns ddC-containing conjugates, and no numeric zalcitabine disposition parameters are present in the evidence. |
| popPK | Senek_2020 | irrelevant | 0 | 0 | The population-PK model and numeric parameters are for levodopa, not zalcitabine. |
| PGx | Senek_2020 | not_relevant | 0 | 0 | This paper studies genetic effects on levodopa pharmacokinetics, not zalcitabine. |
| popPK | Siddique_2009 | irrelevant | 0 | 0 | This in-vitro neuroendocrine cell-line study reports no zalcitabine pharmacokinetic parameters. |
| popPK | Silveira_2026 | irrelevant | 0 | 0 | The numeric PK values are for Me-DDC and Me-DTC, not zalcitabine. |
| popPK | Solimano_1990 | relevant | 8 | 0 | A three-compartment model for ddCyd is described, but no numeric parameter values are provided in the evidence. |
| popPK | Suphanchaimat_2021 | irrelevant | 0 | 0 | This COVID-19 vaccination and case-finding model reports no zalcitabine pharmacokinetic parameters. |
| popPK | Tanaka_1997 | irrelevant | 0 | 0 | Zalcitabine is only an in-vitro combination drug, with no zalcitabine disposition parameters reported. |
| popPK | Tay_2019 | irrelevant | 0 | 0 | This study measures flame retardants, not zalcitabine or its metabolite. |
| popPK | Törnevik_1990 | irrelevant | 0 | 0 | This in-vitro cell study reports metabolite pools, not quantitative pharmacokinetic disposition parameters. |
| PGx | Ungureanu_2024 | not_relevant | 0 | 0 | The paper assesses drug–drug interactions in prostate cancer treatment and psychotropics, not pharmacogenomic effects on zalcitabine. |
| PGx | Vagany_2021 | not_relevant | 0 | 0 | The paper studies ALAS1 genotype effects on hepatic responses to phenobarbital and 4-ethyl-DDC, not zalcitabine PK or PD parameters. |
| popPK | Vanhove_1997 | irrelevant | 2 | 0 | The study estimates drug exposure for an exposure-response analysis but reports no quantitative zalcitabine disposition parameters or values. |
| popPK | Volsky_1992 | irrelevant | 0 | 0 | This in-vitro antiviral assay reports EC50 values, not zalcitabine pharmacokinetic disposition parameters. |
| PGx | Vuletić_2021 | not_relevant | 0 | 0 | This review concerns Parkinson’s disease pharmacogenomics and does not report a genotype-related PK or PD effect for zalcitabine. |
| popPK | Wei_2008 | irrelevant | 0 | 0 | This is an electrophysiology study of sulfur dioxide derivatives in rat myocytes and reports no zalcitabine pharmacokinetic parameters. |
| PGx | Weiss_2007 | not_relevant | 0 | 0 | The study tests zalcitabine’s inhibition of BCRP in vitro, not how a genetic variant, genotype, or phenotype affects a zalcitabine PK/PD parameter. |
| popPK | Witvrouw_2004 | irrelevant | 0 | 0 | This is an in-vitro antiviral susceptibility study and reports no zalcitabine disposition parameters. |
| PGx | Xiao_2020 | not_relevant | 0 | 0 | The paper studies melanin synthesis in ladybird beetles and reports no zalcitabine treatment or pharmacokinetic/pharmacodynamic effects. |
| PGx | Xie_2021 | not_relevant | 0 | 0 | The paper studies IDH1 genotype and MRI biomarkers in gliomas, not zalcitabine pharmacokinetics or pharmacodynamics. |
| PGx | Xue_2021 | not_relevant | 0 | 0 | The paper studies a herbal decoction’s effects on bile acid metabolism in mice and reports no zalcitabine, genetic variation, or pharmacogenomic PK/PD effect. |
| popPK | Yusa_1994 | irrelevant | 0 | 0 | This is an in-vitro study of daphnodorins and reports no zalcitabine pharmacokinetic parameters. |
| PGx | Zeng_1998 | not_relevant | 0 | 0 | The paper studies CYP3A4-mediated metabolism of ivermectin, not a gene-related PK/PD effect for zalcitabine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:02 UTC</sub>
