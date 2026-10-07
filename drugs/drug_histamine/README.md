<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;Histamine&quot;}]"></div>

# Histamine

- **generic name:** Histamine
- **ATC codes:** `L03AX14`, `V04CG03`
- **DrugBank:** [DB05381](https://go.drugbank.com/drugs/DB05381) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Histamine is used as an immunostimulant in cancer treatment and as a diagnostic agent in tests of gastric acid secretion. It is an approved drug, though its use is limited to these specialised roles rather than widespread clinical practice.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5772985](https://www.wikidata.org/wiki/Q5772985) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:19 | 19:10 | 0/0/0 | 0/1/0 | 0/0/3 | 323,576/7,404 | einfracz / qwen3.8-27b | 20 | 9/9 | 18/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Yanovsky_2011_TMN_neuron_excitation](drugs/drug_histamine/pd_Yanovsky_2011_TMN_neuron_excitation.md) | TMN neuron excitation ← histamine · direct sigmoid Emax (Hill) effect | — | Yanovsky Y et al., L-Dopa activates histaminergic neurons, The Journal of physiology 5… (2011) | [10.1113/jphysiol.2010.203257](https://doi.org/10.1113/jphysiol.2010.203257) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABP1** | `Q320` · Emax | transport | [Jones_2016](drugs/drug_histamine/pgx_Jones_2016_ABP1_Q320.md) | Jones BL et al., Genetic Variation in the Histamine Prod…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00524](https://doi.org/10.3389/fphar.2016.00524) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **HNMT** | `Q320` · Emax | metabolism | [Jones_2016](drugs/drug_histamine/pgx_Jones_2016_HNMT_Q320.md) | Jones BL et al., Genetic Variation in the Histamine Prod…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00524](https://doi.org/10.3389/fphar.2016.00524) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **HRH4** | `Q320` · Emax | target | [Jones_2016](drugs/drug_histamine/pgx_Jones_2016_HRH4_Q320.md) | Jones BL et al., Genetic Variation in the Histamine Prod…, Frontiers in pharmacology (2016) | [10.3389/fphar.2016.00524](https://doi.org/10.3389/fphar.2016.00524) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=histamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A5` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC22A5` inhibitor | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | liver | `SLC22A1` unknown | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABP1 (transport), HNMT (metabolism), HNMT (substrate), HRH1 (target), HRH2 (target), HRH3 (target), HRH4 (target), SLC18A2 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4504 matched, 117 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_18 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Small_1989.pdf` | Small RC et al., Inhibitory effects of AH 21-132 in guin…, British journal of pharmaco… (1989) | pd | 5 | [10.1111/j.1476-5381.1989.tb12576.x](https://doi.org/10.1111/j.1476-5381.1989.tb12576.x) | [2551443](https://www.ncbi.nlm.nih.gov/pubmed/2551443) | metadata signals extractable PD data (concentration-effect) |
| `Borges_1994.pdf` | Borges R, Histamine H1 receptor activation mediat…, Life sciences (1994) | pd | 4 | [10.1016/0024-3205(94)00869-8](https://doi.org/10.1016/0024-3205(94)00869-8) | [7509435](https://www.ncbi.nlm.nih.gov/pubmed/7509435) | metadata signals extractable PD data (EC50) |
| `Chen_2019.pdf` | Chen P et al., Dynamic Microfluidic Cytometry for Sing…, Analytical chemistry (2019) | pd | 4 | [10.1021/acs.analchem.8b05179](https://doi.org/10.1021/acs.analchem.8b05179) | [30561989](https://www.ncbi.nlm.nih.gov/pubmed/30561989) | metadata signals extractable PD data (EC50) |
| `Hamdan_2002.pdf` | Hamdan FF et al., A novel Schistosoma mansoni G protein-c…, Molecular and biochemical p… (2002) | pd | 4 | [10.1016/s0166-6851(01)00400-5](https://doi.org/10.1016/s0166-6851(01)00400-5) | [11755188](https://www.ncbi.nlm.nih.gov/pubmed/11755188) | metadata signals extractable PD data (EC50) |
| `Hew_1990.pdf` | Hew RW et al., Characterization of histamine H3-recept…, British journal of pharmaco… (1990) | pd | 4 | [10.1111/j.1476-5381.1990.tb14130.x](https://doi.org/10.1111/j.1476-5381.1990.tb14130.x) | [1963802](https://www.ncbi.nlm.nih.gov/pubmed/1963802) | metadata signals extractable PD data (EC50) |
| `Katsoulis_1987.pdf` | Katsoulis S et al., Effects of guinea pig neurotensin ([Ser…, European journal of pharmac… (1987) | pd | 4 | [10.1016/0014-2999(87)90293-7](https://doi.org/10.1016/0014-2999(87)90293-7) | [3653250](https://www.ncbi.nlm.nih.gov/pubmed/3653250) | metadata signals extractable PD data (EC50) |
| `Oliveira_2006.pdf` | Oliveira Rde C et al., Spasmolytic action of the methanol extr…, Zeitschrift fur Naturforsch… (2006) | pd | 4 | [10.1515/znc-2006-11-1205](https://doi.org/10.1515/znc-2006-11-1205) | [17294689](https://www.ncbi.nlm.nih.gov/pubmed/17294689) | metadata signals extractable PD data (IC50) |
| `Reviriego_1990.pdf` | Reviriego J et al., Actions of vasoactive drugs on human pl…, General pharmacology (1990) | pd | 4 | [10.1016/0306-3623(90)91024-l](https://doi.org/10.1016/0306-3623(90)91024-l) | [2276590](https://www.ncbi.nlm.nih.gov/pubmed/2276590) | metadata signals extractable PD data (EC50) |
| `Yanovsky_2011.pdf` | Yanovsky Y et al., L-Dopa activates histaminergic neurons, The Journal of physiology (2011) | pd | 4 | [10.1113/jphysiol.2010.203257](https://doi.org/10.1113/jphysiol.2010.203257) | [21242252](https://www.ncbi.nlm.nih.gov/pubmed/21242252) | metadata signals extractable PD data (EC50) |
| `Yu_1992.pdf` | Yu DY et al., Agonist response of human isolated post…, Investigative ophthalmology… (1992) | pd | 4 | not captured | [1346127](https://www.ncbi.nlm.nih.gov/pubmed/1346127) | metadata signals extractable PD data (EC50) |
| `Jang_2025.pdf` | Jang JH et al., Population modeling of pharmacokinetic…, Naunyn-Schmiedeberg's archi… (2025) | pgx | 8 | [10.1007/s00210-025-04299-1](https://doi.org/10.1007/s00210-025-04299-1) | [40439884](https://www.ncbi.nlm.nih.gov/pubmed/40439884) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kinoshita_2004.pdf` | Kinoshita Y, Review article: treatment for gastro-oe…, Alimentary pharmacology & t… (2004) | pgx | 8 | [10.1111/j.1365-2036.2004.02223.x](https://doi.org/10.1111/j.1365-2036.2004.02223.x) | [15575867](https://www.ncbi.nlm.nih.gov/pubmed/15575867) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Knadler_2011.pdf` | Knadler MP et al., Duloxetine: clinical pharmacokinetics a…, Clinical pharmacokinetics (2011) | pgx | 8 | [10.2165/11539240-000000000-00000](https://doi.org/10.2165/11539240-000000000-00000) | [21366359](https://www.ncbi.nlm.nih.gov/pubmed/21366359) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Umukoro_2021.pdf` | Umukoro NN et al., Pharmacogenomics of oxycodone: a narrat…, Pharmacogenomics (2021) | pgx | 8 | [10.2217/pgs-2020-0143](https://doi.org/10.2217/pgs-2020-0143) | [33728947](https://www.ncbi.nlm.nih.gov/pubmed/33728947) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Yasuda_1995.pdf` | Yasuda SU et al., Chlorpheniramine plasma concentration a…, Clinical pharmacology and t… (1995) | pgx | 8 | [10.1016/0009-9236(95)90199-X](https://doi.org/10.1016/0009-9236(95)90199-X) | [7648771](https://www.ncbi.nlm.nih.gov/pubmed/7648771) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Cardona_1999.pdf` | Cardona Pera D, [Drug-food interactions], Nutricion hospitalaria (1999) | pgx | 7 | not captured | [10548035](https://www.ncbi.nlm.nih.gov/pubmed/10548035) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Fontes-Carvalho_2010.pdf` | Fontes-Carvalho R et al., [Clopidogrel--proton pump inhibitors dr…, Revista portuguesa de cardi… (2010) | pgx | 7 | not captured | [21268429](https://www.ncbi.nlm.nih.gov/pubmed/21268429) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Schwasinger-Schmidt_2019.pdf` | Schwasinger-Schmidt TE et al., Other Antidepressants, Handbook of experimental ph… (2019) | pgx | 7 | [10.1007/164_2018_167](https://doi.org/10.1007/164_2018_167) | [30194544](https://www.ncbi.nlm.nih.gov/pubmed/30194544) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T23:17:53.383854+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arrang_1985 | irrelevant | 0 | 0 | The study is an in-vitro investigation of histamine release mechanisms and receptor pharmacology (EC50, Ki), not a pharmacokinetic study of systemic disposition parameters (CL, V, half-life). |
| popPK | Ashworth_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and receptor occupancy of the drug GSK239512 (an antagonist), not the disposition parameters of histamine itself. |
| popPK | Audi_1991 | irrelevant | 0 | 0 | The study investigates pulmonary vascular mechanics (resistance and compliance) in response to histamine infusion, not the pharmacokinetic disposition (clearance, volume, half-life) of histamine. |
| popPK | Bates_1986 | irrelevant | 0 | 0 | This study investigates respiratory mechanics in dogs using histamine as a pharmacological challenge agent, not the pharmacokinetics of histamine. |
| PGx | Bishop_2010 | not_relevant | 2 | 1 | The text discusses iloperidone and mentions CYP enzymes, but does not report specific pharmacogenomic effects on the PK/PD parameters of histamine itself. |
| popPK | Boskabady_2007 | irrelevant | 0 | 0 | The study examines in vitro tracheal responsiveness to histamine (receptor pharmacology) rather than measuring the pharmacokinetic disposition parameters (CL, V, etc.) of histamine. |
| popPK | Brouwers_1994 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic interactions involving NSAIDs, and histamine is only mentioned as a receptor target for a class of drugs (H2-antagonists) without being the subject of a PK study. |
| PGx | Cardona_1999 | not_relevant | 0 | 0 | The paper reviews general drug-food interactions and does not report on any gene variants or pharmacogenomic effects. |
| PGx | Ciszowski_2010 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and toxicology of risperidone, not histamine, and does not report pharmacogenomic effects on the PK/PD parameters of histamine. |
| popPK | Clementino-Neto_2016 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of a plant extract, using histamine only as a stimulus in an in vitro assay, not as the subject drug for PK modeling. |
| PGx | Cornejo-Garcia_2016 | not_relevant | 2 | 1 | The text reviews genetic predictors of drug hypersensitivity reactions (clinical outcomes) and mentions histamine biosynthesis genes only in the context of potential mechanistic roles, without reporting specific pharmacokinetic or pharmacodynamic parameter changes for histamine itself. |
| PGx | Correll_2004 | not_relevant | 2 | 2 | This is a review on pharmacogenetics of antipsychotic-induced weight gain; it mentions histamine H1 receptor genes only as potential targets, not reporting a pharmacogenomic effect on PK/PD parameters of histamine itself. |
| PGx | Cronholm_1968 | not_relevant | 0 | 0 | The paper describes a pharmacodynamic difference in histamine sensitivity between mouse strains (CFW vs CFI), which is a strain comparison, not a specific gene variant/genotype pharmacogenomic effect. |
| popPK | Cuffaro_2025 | irrelevant | 0 | 0 | The study focuses on antibody-drug conjugates of Cetuximab and zoledronic acid analogues for colorectal cancer, with no mention of histamine or its pharmacokinetics. |
| popPK | Curry_2019 | irrelevant | 1 | 1 | The study measures vascular permeability to MRI contrast agents (Dotarem, Gadomer-17) in mice using histamine as a challenge agent to modulate permeability, not as the subject drug for PK parameter estimation. |
| popPK | Delarcina_2007 | irrelevant | 0 | 0 | The study investigates the effect of a plant extract on histamine-induced bronchospasm and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for histamine. |
| popPK | Desager_1995 | irrelevant | 0 | 0 | The paper is a review of H1-antihistamines (drugs that block histamine), not a pharmacokinetic study of histamine itself. |
| PGx | Firkusny_1994 | not_relevant | 4 | 6 | The paper reports pharmacogenomic effects (CYP2D6 PM vs EM) on the PK/PD of maprotiline, not histamine. |
| PGx | Fontes-Carvalho_2010 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetic interaction between clopidogrel and proton pump inhibitors, with no mention of histamine or its PK/PD parameters. |
| PGx | García-Martín_2009 | not_relevant | 2 | 5 | The paper is a review summarizing known polymorphisms and general associations with disease, but does not report specific quantitative pharmacokinetic or pharmacodynamic effect sizes fitted from data for histamine parameters. |
| popPK | Ghazanfari_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the histamine H3 receptor radioligand [11C]GSK-189254 in rats, not the disposition parameters of histamine itself. |
| PGx | Girard_1994 | not_relevant | 0 | 0 | The paper reports on the cloning and biochemical characterization of the HNMT enzyme (including Km and IC50 for an inhibitor), but does not report a study where a specific genetic variant/genotype alters the pharmacokinetic or pharmacodynamic parameters of histamine in humans. |
| PGx | Gutnikova_1994 | not_relevant | 0 | 0 | The paper studies changes in plasma histamine levels during hemosorption in dogs with acute liver failure and contains no information regarding pharmacogenomics, gene variants, or genetic influences. |
| PGx | Halwachs_2016 | not_relevant | 0 | 0 | The paper characterizes the ABCG2 transporter in rabbit placenta and mentions cimetidine (a histamine H2-receptor antagonist) as a substrate, but does not report pharmacogenomic effects on the PK or PD of histamine itself. |
| popPK | Hamdan_2002 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PGx | Hennino_2006 | not_relevant | 0 | 0 | The text describes the general pathophysiology of urticaria and histamine's role as a mediator, but does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Hew_1990 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PGx | Holst_2016 | not_relevant | 1 | 0 | The paper is a conceptual review of sleep pharmacogenetics that lists histamine as a target but does not report specific quantitative pharmacokinetic or pharmacodynamic data for histamine itself. |
| PGx | Hon_2006 | not_relevant | 0 | 0 | The study reports a pharmacogenomic effect on the pharmacodynamics of methylprednisolone, not on a PK or PD parameter of histamine. |
| PGx | Inatomi_2016 | not_relevant | 0 | 0 | The paper is a review of potassium-competitive acid blockers and does not report pharmacogenomic effects of histamine variants on PK/PD parameters. |
| popPK | Iuga_2026 | irrelevant | 0 | 0 | The paper focuses on the design of SARS-CoV-2 papain-like protease inhibitors and contains no pharmacokinetic data for histamine. |
| popPK | Ji_2021 | irrelevant | 0 | 0 | This is a study on the pharmacokinetics of pemigatinib, where histamine-2 antagonists are used as co-administered agents to evaluate drug-drug interactions, not the subject drug. |
| popPK | Kahn_1979 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of vascular permeability using histamine as a mediator, not a pharmacokinetic study of histamine disposition. |
| popPK | Katsoulis_1987 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PGx | Kinoshita_2004 | not_relevant | 0 | 0 | The paper is a general review of GERD treatment and does not report specific pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of histamine or histamine-related drugs. |
| PGx | Knadler_2011 | not_relevant | 0 | 0 | The paper discusses duloxetine, not histamine. |
| PGx | Kuder_2016 | not_relevant | 0 | 0 | The paper describes the synthesis and pharmacological evaluation of novel H3 receptor ligands, reporting no pharmacogenomic data regarding genetic variants affecting the PK or PD of histamine or the tested compounds. |
| popPK | Kumar_2020 | irrelevant | 2 | 0 | The study focuses on the pharmacodynamic reliability of histamine response phenotypes (blood flow) rather than estimating population pharmacokinetic parameters (CL, V, t1/2). |
| PGx | Landolt_2019 | not_relevant | 0 | 0 | The text is a general introduction to sleep-wake pharmacogenetics and does not report specific gene-variant effects on the PK or PD parameters of histamine. |
| PGx | Li_2021 | not_relevant | 0 | 0 | This paper is a review of general SAM-dependent methyltransferases and their disease associations, not a study reporting a specific pharmacogenomic effect on the PK or PD of histamine as a drug. |
| popPK | Lin_2025 | irrelevant | 0 | 0 | The paper describes the discovery of noncovalent Keap1-Nrf2 inhibitors, not the pharmacokinetics of histamine. |
| popPK | Linehan_1983 | irrelevant | 0 | 0 | This is a hemodynamic study of pulmonary vasculature where histamine is used only as a vasoactive stimulus, not as the subject drug for PK parameter estimation. |
| popPK | Liu_2016 | irrelevant | 0 | 0 | no_text gate: extracted text is mostly non-alphabetic (garbled or binary) |
| PGx | Losol_2014 | not_relevant | 0 | 0 | The paper discusses the genetics of chronic urticaria and histamine metabolism mechanisms, but does not report the effect of a gene variant on the pharmacokinetic or pharmacodynamic parameters of histamine itself. |
| popPK | Malo_1985 | irrelevant | 1 | 1 | The study analyzes the time course of physiological airway recovery (lung resistance) after histamine challenge, not the systemic pharmacokinetic disposition parameters (clearance, volume) of histamine itself. |
| popPK | Megens_1994 | irrelevant | 0 | 0 | This is a pharmacodynamic review of risperidone where histamine is only mentioned as a receptor interaction site, not as the subject drug for pharmacokinetic parameter estimation. |
| PGx | Meng_2018 | not_relevant | 1 | 1 | The text is a review of asthma pharmacogenomics that mentions the histamine pathway in a general list of pathways but does not report specific gene variants altering histamine PK or PD parameters. |
| popPK | Mousli_1992 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of C3a stimulation of mast cells and histamine release, not a pharmacokinetic study of histamine disposition parameters. |
| popPK | Namour_2015 | irrelevant | 0 | 0 | The study describes the pharmacokinetics of filgotinib, a JAK1 inhibitor, not histamine. |
| PGx | Nosbaum_2014 | not_relevant | 0 | 0 | The paper describes the general pathophysiology of urticaria and does not mention specific gene variants or pharmacogenomic effects on histamine pharmacokinetics or pharmacodynamics. |
| popPK | Oliveira_2006 | irrelevant | 0 | 0 | no_text gate: only 132 chars of text extracted (&lt; 400) |
| popPK | Peniche_2020 | irrelevant | 0 | 0 | The paper investigates the anti-leishmanial efficacy of histamine H1 receptor antagonists (azelastine, fexofenadine), not the pharmacokinetics of histamine itself. |
| popPK | Peña_2008 | irrelevant | 0 | 0 | The study models the pharmacokinetics of rupatadine and its metabolite desloratadine, using histamine only as a diagnostic agent for the pharmacodynamic effect. |
| PGx | Picado_2006 | not_relevant | 0 | 0 | The paper describes the general pharmacological profile and clinical use of rupatadine without reporting any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Pérez-García_1998 | irrelevant | 0 | 0 | The study is a pharmacological investigation of receptor desensitization in an in-vitro tissue preparation and does not report pharmacokinetic parameters for histamine. |
| popPK | Reviriego_1990 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| popPK | Rock_1989 | irrelevant | 0 | 0 | This is a pharmacodynamic study on airway resistance in guinea pigs where histamine is used as a challenge agent, not a pharmacokinetic study of histamine disposition. |
| popPK | Rusjan_2020 | irrelevant | 0 | 0 | The study is a PET imaging study measuring histamine H3 receptor occupancy by pitolisant, not a pharmacokinetic study of histamine itself. |
| PGx | Röth_2019 | not_relevant | 0 | 0 | The paper describes microbiome metabolism and histone modification in THP-1 cells, not human pharmacogenomics affecting the PK/PD of histamine as a drug. |
| popPK | Sandiego_2019 | irrelevant | 0 | 0 | The study is a PET imaging investigation of histamine H3 receptor occupancy using a radioligand, not a pharmacokinetic study of histamine itself. |
| PGx | Savenko_1978 | not_relevant | 0 | 0 | The paper discusses clinical aspects and pathogenesis of cerebral circulation disorders, focusing on histamine metabolism in disease context, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Schmutzler_1978 | irrelevant | 0 | 0 | The paper is a general review of immunopharmacology and does not report any quantitative pharmacokinetic parameters for histamine. |
| PGx | Schwasinger-Schmidt_2019 | not_relevant | 0 | 0 | The provided text is a header for a section on "Other Antidepressants" and contains no information regarding histamine or its pharmacokinetics/pharmacodynamics. |
| PGx | Schwelberger_2017 | not_relevant | 0 | 0 | The paper maps antibody binding sites on the HNMT protein and does not report the effect of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Schwelberger_2018 | not_relevant | 0 | 0 | The paper maps antibody binding sites for diamine oxidase (DAO) and does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Scott_1988 | not_relevant | 2 | 5 | The study reports heritability of the metabolizing enzyme (HNMT) but does not report PK/PD parameters of histamine itself or link specific genotypes to quantitative changes in histamine levels/effects. |
| PGx | Shibata_1983 | not_relevant | 0 | 0 | The paper studies the crystal polymorphism and physicochemical properties of the drug cimetidine, not the pharmacogenomics of histamine or cimetidine. |
| PGx | Sjaastad_1977 | not_relevant | 0 | 0 | The paper describes histamine catabolism in disease states (migraine/cluster headache) without investigating any specific gene variant or genotype. |
| popPK | Small_1989 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| popPK | Smyth_1990 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for cimetidine (an H2 antagonist) in horses, not for histamine itself. |
| PGx | Stone_2017 | not_relevant | 0 | 0 | The paper discusses general mechanisms of drug-induced angioedema and genetic variants related to bradykinin, but does not report any specific pharmacogenomic effect on the PK or PD parameters of histamine. |
| popPK | Szabo_1993 | irrelevant | 0 | 0 | The study investigates the PET kinetics of the histamine H1 receptor antagonist pyrilamine, not the pharmacokinetics of the drug histamine itself. |
| popPK | Szafarz_2015 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the H3 receptor antagonist DL76, not for histamine itself. |
| PGx | Umukoro_2021 | not_relevant | 0 | 0 | The paper reviews pharmacogenomics for oxycodone, not histamine. |
| popPK | Vanangamudi_2023 | irrelevant | 0 | 0 | The paper is a review of Non-Nucleoside Reverse Transcriptase Inhibitors (NNRTIs) for HIV and does not study the pharmacokinetics of histamine. |
| popPK | Vári_2023 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and biodistribution of liposomal daunomycin formulations in mice; histamine (or histidine) is mentioned only as a buffer component, not as a subject drug. |
| PGx | WEST_1964 | not_relevant | 0 | 0 | The paper discusses pharmacogenetics in the general context of allergy and provides no specific data, effect sizes, or PK/PD parameters for histamine. |
| PGx | Weinshilboum_1992 | not_relevant | 0 | 0 | The paper focuses on thiopurine methyltransferase (TPMT) pharmacogenetics and thiopurine drugs; histamine N-methyltransferase is only mentioned as a related enzyme without reporting specific pharmacogenomic effects on histamine PK/PD parameters. |
| popPK | Wittke_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Ro 44-3888 (sibrafiban), not histamine. |
| PGx | Wu_2018 | not_relevant | 0 | 0 | The paper reports the pharmacokinetics and pharmacodynamics of a specific NaV1.7 peptide inhibitor in wild-type mice, containing no data on gene variants, genotypes, or pharmacogenomic influences. |
| PGx | Wüthrich_2018 | not_relevant | 0 | 0 | The paper discusses wine intolerance and mentions DAO deficiency related to histamine metabolism, but it does not report on gene variants/genotypes (specific to histamine PK/PD) nor provide quantitative pharmacokinetic/pharmacodynamic parameters. |
| popPK | Yamamoto_1991 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of a plant extract on histamine responses in isolated guinea-pig ilea and does not report pharmacokinetic parameters for histamine itself. |
| popPK | Yoo_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of diphenhydramine, not histamine, making it irrelevant to the specific drug requested. |
| popPK | Yu_1992 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
