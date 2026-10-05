<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;Tocopherol&quot;}]"></div>

# Tocopherol

- **generic name:** Tocopherol
- **ATC codes:** `A11HA03`
- **DrugBank:** [DB11251](https://go.drugbank.com/drugs/DB11251) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tocopherol (vitamin E) is a fat-soluble vitamin and antioxidant used as a vitamin supplement to treat or prevent vitamin E deficiency. It is approved and widely available as a plain vitamin preparation, and has also been studied investigationally for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q141180](https://www.wikidata.org/wiki/Q141180) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| alpha-tocopherol | metabolite | 430.717 | C29H50O2 | PubChem | [14985](https://pubchem.ncbi.nlm.nih.gov/compound/14985) | Hidiroglou_1996 |
| dl-alpha-tocopherol acetate | metabolite | 472.754 | C31H52O3 | PubChem | [2117](https://pubchem.ncbi.nlm.nih.gov/compound/2117) | Hidiroglou_1996 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 08:54 | 14:37 | 0/1/0 | 0/1/0 | 0/0/4 | 343,024/31,899 | ollama / qwen3.8:27b-mtp-q8_0 | 21 | 7/20 | 19/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">sheep</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hidiroglou_1996_reference](drugs/drug_tocopherol/Tocopherol_Hidiroglou1996_reference.md) | — | 1-compartment (no model) | 4 | Hidiroglou M, Pharmacokinetic profile of plasma tocop…, Journal of dairy science (1996) | [10.3168/jds.S0022-0302(96)76455-X](https://doi.org/10.3168/jds.S0022-0302(96)76455-X) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Hishinuma_1988_LDH](drugs/drug_tocopherol/pd_Hishinuma_1988_LDH.md) | LDH leakage ← α-tocopherol · direct Emax (saturable) effect | — | Hishinuma I et al., Alpha-tocopherol and inhibition of cyto…, Journal of nutritional scie… (1988) | [10.3177/jnsv.34.11](https://doi.org/10.3177/jnsv.34.11) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP4F2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Athinarayanan_2014](drugs/drug_tocopherol/pgx_Athinarayanan_2014_CYP4F2_Q100.md) | Athinarayanan S et al., Genetic polymorphism of cytochrome P450…, PloS one (2014) | [10.1371/journal.pone.0095366](https://doi.org/10.1371/journal.pone.0095366) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | **FADS1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Civelek_2022](drugs/drug_tocopherol/pgx_Civelek_2022_FADS1_Q100.md) | Civelek M et al., Genetic Factors Associated with Respons…, Antioxidants (Basel, Switze… (2022) | [10.3390/antiox11071284](https://doi.org/10.3390/antiox11071284) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | **FADS2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Civelek_2022](drugs/drug_tocopherol/pgx_Civelek_2022_FADS2_Q100.md) | Civelek M et al., Genetic Factors Associated with Respons…, Antioxidants (Basel, Switze… (2022) | [10.3390/antiox11071284](https://doi.org/10.3390/antiox11071284) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | **HP** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Civelek_2022](drugs/drug_tocopherol/pgx_Civelek_2022_HP_Q100.md) | Civelek M et al., Genetic Factors Associated with Respons…, Antioxidants (Basel, Switze… (2022) | [10.3390/antiox11071284](https://doi.org/10.3390/antiox11071284) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tocopherol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transporter | DrugBank actor |
| absorption | kidney | `ABCB1` transporter | DrugBank actor |
| absorption | liver | `ABCB1` transporter | DrugBank actor |
| absorption | placenta | `ABCB1` transporter | DrugBank actor |
| absorption | small intestine | `ABCB1` transporter | DrugBank actor |
| absorption | testis | `ABCB1` transporter | DrugBank actor |
| metabolism | kidney | `CYP4F2` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP4F2` metabolism/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: APOBR (transporter), FADS1 (metabolism), FADS2 (metabolism), Free radicals (binder), HP (transport), LDLR (binder), SCARB1 (transporter), SEC14L2 (substrate), SEC14L3 (substrate), SEC14L4 (substrate), TTPA (substrate), VLDLR (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1019 matched, 100 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_15 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hidiroglou_1996.pdf` | Hidiroglou M, Pharmacokinetic profile of plasma tocop…, Journal of dairy science (1996) | popPK | 10 | [10.3168/jds.S0022-0302(96)76455-X](https://doi.org/10.3168/jds.S0022-0302(96)76455-X) | [8827467](https://pubmed.ncbi.nlm.nih.gov/8827467) | The study reports quantitative pharmacokinetic parameters (Ka, half-life, AUC) for tocopherol in sheep. |
| `Hidiroglou_1991.pdf` | Hidiroglou M, Plasma kinetics of tritiated d-alpha-to…, Annales de recherches veter… (1991) | popPK | 9 | not captured | [1809212](https://pubmed.ncbi.nlm.nih.gov/1809212) | The study reports compartmental PK modeling of tocopherol in sheep, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Hidiroglou_1993.pdf` | Hidiroglou M, Assessment of the oral administration o…, Veterinary research (1993) | popPK | 9 | not captured | [8111430](https://pubmed.ncbi.nlm.nih.gov/8111430) | The study reports a 2-compartment pharmacokinetic model for tocopherol in sheep, but the specific numeric parameter values are not present in the provided evidence. |
| `Bateman_1985.pdf` | Bateman NE et al., Kinetics of D-alpha-tocopherol in a wat…, The Journal of pharmacy and… (1985) | popPK | 8 | [10.1111/j.2042-7158.1985.tb04952.x](https://doi.org/10.1111/j.2042-7158.1985.tb04952.x) | [2867143](https://pubmed.ncbi.nlm.nih.gov/2867143) | The study reports PK kinetics for tocopherol in humans using a one-compartment model, but the evidence only provides plasma concentration values (Cmax, C24h) and does not explicitly list the derived quantitative parameters (CL, V, t1/2, ka). |
| `Hidiroglou_1992.pdf` | Hidiroglou M et al., Biokinetics and biliary excretion of ra…, Journal of animal science (1992) | popPK | 8 | [10.2527/1992.7041220x](https://doi.org/10.2527/1992.7041220x) | [1316347](https://pubmed.ncbi.nlm.nih.gov/1316347) | The study describes a two-compartment model for tocopherol in sheep, but specific numeric parameter values (CL, V, t1/2) are not provided in the text. |
| `Watanabe_2021.pdf` | Watanabe A et al., Pharmacokinetic-pharmacodynamic modelin…, Biopharmaceutics & drug dis… (2021) | pd | 5 | [10.1002/bdd.2271](https://doi.org/10.1002/bdd.2271) | [33724506](https://www.ncbi.nlm.nih.gov/pubmed/33724506) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `de_1990.pdf` | de Whalley CV et al., Flavonoids inhibit the oxidative modifi…, Biochemical pharmacology (1990) | pd | 5 | [10.1016/0006-2952(90)90120-a](https://doi.org/10.1016/0006-2952(90)90120-a) | [2344371](https://www.ncbi.nlm.nih.gov/pubmed/2344371) | metadata signals extractable PD data (IC50) |
| `Cantele_2020.pdf` | Cantele C et al., Antioxidant Effects of Hemp (Cannabis s…, Antioxidants (Basel, Switze… (2020) | pd | 4 | [10.3390/antiox9111131](https://doi.org/10.3390/antiox9111131) | [33202647](https://www.ncbi.nlm.nih.gov/pubmed/33202647) | metadata signals extractable PD data (EC50) |
| `Dumandan_2022.pdf` | Dumandan NG et al., Extraction, Profiling, and Characteriza…, Biochemistry research inter… (2022) | pd | 4 | [10.1155/2022/6604984](https://doi.org/10.1155/2022/6604984) | [36606186](https://www.ncbi.nlm.nih.gov/pubmed/36606186) | metadata signals extractable PD data (EC50) |
| `Findik_2024.pdf` | Findik BT et al., Phytochemical profile, enzyme inhibitio…, Food chemistry (2024) | pd | 4 | [10.1016/j.foodchem.2024.139921](https://doi.org/10.1016/j.foodchem.2024.139921) | [38843718](https://www.ncbi.nlm.nih.gov/pubmed/38843718) | metadata signals extractable PD data (IC50) |
| `Khan_2016.pdf` | Khan H et al., Antioxidant and Antiplasmodial Activiti…, Oxidative medicine and cell… (2016) | pd | 4 | [10.1155/2016/1051925](https://doi.org/10.1155/2016/1051925) | [26998192](https://www.ncbi.nlm.nih.gov/pubmed/26998192) | metadata signals extractable PD data (EC50) |
| `Masaki_1995.pdf` | Masaki H et al., Peroxyl radical scavenging activities o…, Free radical research (1995) | pd | 4 | [10.3109/10715769509147550](https://doi.org/10.3109/10715769509147550) | [7633570](https://www.ncbi.nlm.nih.gov/pubmed/7633570) | metadata signals extractable PD data (IC50) |
| `Yamamoto_1984.pdf` | Yamamoto T et al., Effects of fatty acids on activity of c…, Archives of biochemistry an… (1984) | pd | 4 | [10.1016/0003-9861(84)90132-2](https://doi.org/10.1016/0003-9861(84)90132-2) | [6322693](https://www.ncbi.nlm.nih.gov/pubmed/6322693) | metadata signals extractable PD data (IC50) |
| `Clarke_2009.pdf` | Clarke MW et al., Vitamin E supplementation and hepatic d…, Journal of cardiovascular p… (2009) | pgx | 7 | [10.1097/FJC.0b013e3181bfae18](https://doi.org/10.1097/FJC.0b013e3181bfae18) | [19755916](https://www.ncbi.nlm.nih.gov/pubmed/19755916) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Perepechaeva_2022.pdf` | Perepechaeva ML et al., Effects of prolonged subchronic benzo(α…, Drug and chemical toxicology (2022) | pgx | 7 | [10.1080/01480545.2020.1849270](https://doi.org/10.1080/01480545.2020.1849270) | [33213213](https://www.ncbi.nlm.nih.gov/pubmed/33213213) | metadata signals extractable PGX data (CYP1A, PK/PD-context) |

<sub>queue written 2026-10-05T08:41:39.467828+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Agyare_2013 | not_relevant | 0 | 0 | The paper evaluates plant extracts and uses alpha-tocopherol only as a reference standard for antioxidant activity (IC50), not as the subject of a pharmacodynamic or exposure-response analysis. |
| popPK | Alum_2025 | irrelevant | 0 | 0 | The study investigates the neuroprotective effects of Jimson weed extract on methotrexate-induced toxicity in rats and does not involve tocopherol or report any pharmacokinetic parameters. |
| PD | Alum_2025 | not_relevant | 0 | 0 | The paper studies Jimson weed extract, not Tocopherol, and reports only qualitative group comparisons without dose-response curves or numeric PD parameters. |
| PGx | Apryatin_2017 | not_relevant | 0 | 0 | The study investigates the effect of dietary sugars on tocopherol levels in rats and mice, not the effect of a gene variant on tocopherol pharmacokinetics or pharmacodynamics. |
| popPK | Azevedo_2021 | irrelevant | 0 | 0 | The study is an in silico computational analysis of enzymatic tunnels for biotransformation, not a pharmacokinetic study reporting disposition parameters. |
| PD | Azevedo_2021 | not_relevant | 0 | 0 | The paper is an in silico structural analysis of enzymatic tunnels for biotransformation and does not report any pharmacodynamic, exposure-response, or dose-response relationships for Tocopherol. |
| PGx | Barron_2021 | not_relevant | 0 | 0 | The paper studies the effect of folic acid on vitamin metabolism in mice, not the pharmacokinetics or pharmacodynamics of tocopherol as a drug. |
| popPK | Bateman_1985 | relevant | 8 | 2 | The study reports PK kinetics for tocopherol in humans using a one-compartment model, but the evidence only provides plasma concentration values (Cmax, C24h) and does not explicitly list the derived quantitative parameters (CL, V, t1/2, ka). |
| PGx | Berg_2017 | not_relevant | 2 | 5 | The paper reports an association between a lipoprotein lipase mutation and lower plasma alpha-tocopherol levels, but it does not report a pharmacokinetic or pharmacodynamic effect of a drug on tocopherol, nor does it characterize tocopherol as the primary drug of interest in a pharmacogenomic context. |
| PGx | Brigelius-Flohé_2003 | not_relevant | 0 | 0 | The paper discusses the metabolic pathways of tocopherols and their potential to induce CYP enzymes, but it does not report a pharmacogenomic effect (gene variant/genotype) on the PK or PD parameters of tocopherol. |
| PGx | Bruno_2008 | not_relevant | 0 | 0 | The study investigates the effect of green tea extract on hepatic steatosis and alpha-tocopherol levels in obese mice, but does not report a pharmacogenomic effect (gene variant) on the PK or PD of tocopherol. |
| popPK | Bulitta_2009 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for paclitaxel, not tocopherol, which is only a component of the formulation. |
| popPK | Cantele_2020 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | Cantele_2020 | not_relevant | 0 | 0 | The paper investigates the antioxidant stability of linseed oil using hemp extract, not the pharmacodynamics of Tocopherol in a biological system. |
| PGx | Cheng_2011 | not_relevant | 0 | 0 | The paper investigates the association between serum tocopherol levels and cancer risk, not the pharmacokinetics or pharmacodynamics of tocopherol as a drug. |
| PGx | Cho_2021 | not_relevant | 0 | 0 | The paper uses tocopherol as a biomarker for cancer diagnosis via mass spectrometry and does not report pharmacokinetic or pharmacodynamic effects of gene variants on tocopherol. |
| popPK | Chow_1995 | irrelevant | 0 | 0 | The study investigates the stability and oxidation of liposomes using alpha-tocopherol as an antioxidant, not the pharmacokinetics of tocopherol. |
| PGx | Civelek_2022 | not_relevant | 5 | 5 | The paper is a narrative review discussing genetic factors associated with clinical response (histological improvement) to vitamin E, but it does not report fitted quantitative pharmacokinetic or pharmacodynamic effect sizes for specific gene variants. |
| PGx | Clarke_2006 | not_relevant | 2 | 5 | The paper reports lower tocopherol levels in patients with a genetic disorder (FHBL) compared to controls, but it does not report a pharmacokinetic or pharmacodynamic effect of a specific gene variant on the metabolism of tocopherol as a drug (e.g., clearance, AUC, or response to supplementation). |
| PGx | Clarke_2009 | not_relevant | 0 | 0 | The study investigates the effect of vitamin E supplementation on midazolam metabolism in a general population, not the effect of a specific gene variant/genotype on tocopherol PK/PD. |
| popPK | Corlatti_2026 | irrelevant | 0 | 0 | The paper is a review of phytochemicals in the Helianthus genus and does not report pharmacokinetic parameters for tocopherol. |
| PD | Corlatti_2026 | not_relevant | 0 | 0 | The paper is a general review of phytochemicals and biological activities in the Helianthus genus and does not report specific pharmacodynamic or exposure-response data for Tocopherol. |
| PGx | Delgado_2024 | not_relevant | 0 | 0 | The study investigates the association between haptoglobin genotype and mortality risk in relation to tocopherol levels, but does not report a pharmacogenomic effect on the pharmacokinetic or pharmacodynamic parameters of tocopherol itself. |
| PGx | Dong_2024 | not_relevant | 0 | 0 | The paper studies the metabolism of paralytic shellfish toxins in bivalves using tocopherol as an inducer, not the pharmacokinetics or pharmacodynamics of tocopherol itself in humans or other mammals. |
| popPK | Dumandan_2022 | irrelevant | 0 | 0 | no_text gate: only 172 chars of text extracted (&lt; 400) |
| PD | Dumandan_2022 | not_relevant | 0 | 0 | The paper focuses on the extraction and characterization of phytosterols and triterpenoids from Pili pulp oil, not on the pharmacokinetics or pharmacodynamics of Tocopherol. |
| PD | Durmaz_2022 | not_relevant | 0 | 0 | The paper investigates Magnofluorine, not Tocopherol; Tocopherol is only used as a positive control in in vitro assays. |
| popPK | Encinas-Valero_2022 | irrelevant | 0 | 0 | The study measures tocopherol concentrations in oak leaves as a biomarker for tree health, not pharmacokinetic parameters. |
| PD | Findik_2024 | not_relevant | 0 | 0 | The paper focuses on the phytochemical profile and in vitro bioactivity (enzyme inhibition, antioxidant, antibacterial) of Rosa pimpinellifolia, not on the pharmacokinetics or pharmacodynamics of Tocopherol in a biological system. |
| PD | Fraisse_1993 | not_relevant | 1 | 1 | The paper reports IC50 values for novel compounds compared to alpha-tocopherol, but does not provide a concentration-effect curve or numeric PD parameters for Tocopherol itself. |
| popPK | Fujinami_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of radical scavenging activity (DPPH assay) and does not report any pharmacokinetic parameters (CL, V, t1/2) for tocopherol. |
| popPK | Gonzalez_2022 | irrelevant | 0 | 0 | The study is an in vitro reproductive biology experiment assessing lycopene's effect on bovine blastocyst development, with no pharmacokinetic analysis of tocopherol. |
| PD | Grisar_1991 | not_relevant | 3 | 2 | The paper reports a single-dose efficacy result (54% reduction at 1 mg/kg/h) and an in vitro IC50, but lacks a dose-response curve or PK/PD model to derive numeric PD parameters like Emax or EC50 for the in vivo effect. |
| PGx | Gurjar_2018 | not_relevant | 0 | 0 | The paper investigates the effect of excipients on P-glycoprotein activity using digoxin as a substrate, not the pharmacogenomics of tocopherol. |
| popPK | Główka_2024 | irrelevant | 0 | 0 | The study measures steady-state plasma concentrations of tocopherol in CVD patients to assess nutritional status, but does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PD | Główka_2024 | not_relevant | 0 | 0 | The study is a cross-sectional observational analysis of vitamin concentrations and psychosocial factors in CVD patients, reporting no dose-response, exposure-response, or pharmacodynamic modeling for tocopherol. |
| popPK | Hidiroglou_1991 | relevant | 9 | 0 | The study reports compartmental PK modeling of tocopherol in sheep, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Hidiroglou_1992 | relevant | 8 | 2 | The study describes a two-compartment model for tocopherol in sheep, but specific numeric parameter values (CL, V, t1/2) are not provided in the text. |
| popPK | Hidiroglou_1993 | relevant | 9 | 0 | The study reports a 2-compartment pharmacokinetic model for tocopherol in sheep, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Hishinuma_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of tocopherol's protective effects on glutathione depletion and cell lysis in cultured rat hepatocytes, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |
| PGx | Hu_2025 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters for a drug formulation in wild-type mice but does not investigate the effect of any gene variant or genotype on these parameters. |
| PD | Huang_2019 | not_relevant | 3 | 2 | The paper reports epidemiological hazard ratios for mortality across quintiles of serum alpha-tocopherol, which is an observational association rather than a pharmacodynamic exposure-response model with numeric PD parameters like Emax or EC50. |
| PGx | Iakovleva_1987 | not_relevant | 0 | 0 | The paper discusses the impact of xenobiotics on vitamin E levels but does not report any pharmacogenomic effects (gene variants) on tocopherol PK or PD parameters. |
| PGx | Izzo_2003 | not_relevant | 0 | 0 | The paper investigates the effect of a cyclin D1 genotype on the clinical response to a combination therapy containing tocopherol, but it does not report any pharmacokinetic or pharmacodynamic parameters of tocopherol itself. |
| PD | Janero_1989 | not_relevant | 0 | 0 | The paper does not report a pharmacodynamic or exposure-response relationship for Tocopherol; it only mentions alpha-tocopherol qualitatively as a known antioxidant with a similar profile to the tested oxygenase inhibitors. |
| popPK | Jungert_2020 | irrelevant | 0 | 0 | The study is a longitudinal epidemiological analysis of plasma concentrations and determinants, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Kabran_2015 | irrelevant | 0 | 0 | The paper is a phytochemical study isolating compounds from a plant and testing in vitro antiparasitic activity; it does not report pharmacokinetic parameters for tocopherol. |
| PD | Kabran_2015 | not_relevant | 0 | 0 | The paper reports in vitro cytotoxicity (EC50/LC100) for phloroglucinols and other compounds, but does not report a pharmacodynamic or exposure-response relationship for Tocopherol. |
| PD | Kaufman_1994 | not_relevant | 0 | 0 | The paper focuses on captopril and ascorbic acid; tocopherol is only mentioned in a negative context regarding synergy with captopril, with no PD parameters or dose-response data provided for tocopherol itself. |
| popPK | Khan_2016 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Khan_2016 | not_relevant | 0 | 0 | The paper focuses on Bergenin and 11-O-Galloylbergenin, not Tocopherol, and does not report any pharmacodynamic or exposure-response data for Tocopherol. |
| PGx | Kluth_2005 | not_relevant | 0 | 0 | The paper investigates the effect of tocopherol on CYP3A11 expression, not the effect of a gene variant on tocopherol pharmacokinetics or pharmacodynamics. |
| PGx | Kobayashi_2008 | not_relevant | 0 | 0 | The paper studies tocopherol metabolism in Arabidopsis plants, not human pharmacogenomics or drug PK/PD. |
| PGx | Le_1997 | not_relevant | 0 | 0 | The study investigates environmental and nutritional correlates of CYP1A2 activity, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of tocopherol. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study on bicyclo[1.1.1]pentane derivatives and contains no pharmacokinetic data for tocopherol. |
| PD | Lee_2025 | not_relevant | 0 | 0 | The paper is a synthetic chemistry study on the synthesis of bicyclo[1.1.1]pentane derivatives and contains no pharmacodynamic, exposure-response, or dose-response data for Tocopherol or any other drug. |
| PGx | Liang_2025 | not_relevant | 0 | 0 | The paper investigates causal links between plasma metabolites and leukemia subtypes using Mendelian randomization, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of tocopherol. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The study is a clinical trial on probiotics and GI function in pregnancy where tocopherol is only measured as a fecal metabolite biomarker, not as a subject drug for pharmacokinetic modeling. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The study is an epidemiological analysis of dietary intake and cognitive decline, not a pharmacokinetic study, and reports no disposition parameters. |
| PD | Lozada-García_2017 | not_relevant | 0 | 0 | The paper focuses on the synthesis and in vitro cytotoxic/antioxidant screening of curcuminoids; α-tocopherol is only mentioned as a reference standard in the antioxidant assay, and no pharmacodynamic or exposure-response relationship for tocopherol is reported. |
| popPK | Luo_2008 | irrelevant | 0 | 0 | The paper analyzes smoking cessation patterns in the ATBC study and does not report any pharmacokinetic parameters for tocopherol. |
| popPK | Lőrincz_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cell death pathways using ascorbate and tocopherol as agents, not a pharmacokinetic study of tocopherol. |
| PD | Lőrincz_2019 | not_relevant | 0 | 0 | The paper focuses on the mechanism of ascorbate-induced cell death and mentions tocopherol only as a qualitative control agent that failed to mitigate ascorbate toxicity, without providing any numeric PD parameters or dose-response curves for tocopherol. |
| PGx | Maman_2023 | not_relevant | 0 | 0 | The paper studies tocopherol degradation in maize kernels during storage, not human pharmacokinetics or pharmacodynamics. |
| PGx | Mao_1998 | not_relevant | 0 | 0 | The paper investigates genetic alterations (LOH) as biomarkers for chemoprevention efficacy in head and neck lesions, not the effect of gene variants on the pharmacokinetics or pharmacodynamics of tocopherol. |
| PD | Masaki_1995 | not_relevant | 0 | 0 | The paper focuses on the antioxidant activity of hamamelitannin, not Tocopherol, and does not report pharmacodynamic or exposure-response relationships for the target drug. |
| PGx | Milne_2015 | not_relevant | 0 | 0 | The paper investigates associations between micronutrient levels (including alpha-tocopherol) and DNA damage markers in children, but does not report pharmacokinetic or pharmacodynamic parameters of tocopherol as a drug, nor does it analyze how specific gene variants alter these parameters. |
| popPK | Mnisi_2025 | irrelevant | 0 | 0 | The paper is a review of the ethnomedicinal uses and phytochemistry of Senna petersiana, mentioning tocopherol only as a phytochemical constituent without reporting any pharmacokinetic parameters. |
| PD | Mnisi_2025 | not_relevant | 0 | 0 | The paper is a review of Senna petersiana and does not report any pharmacodynamic or exposure-response data for Tocopherol. |
| PGx | Noreen_2021 | not_relevant | 0 | 0 | The paper studies plant physiology and salt stress in barley, not human pharmacogenomics or tocopherol PK/PD. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not report pharmacokinetic parameters for tocopherol. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The text is a general review of radiomitigators and does not contain specific data, models, or numeric parameters for Tocopherol. |
| popPK | Paemanee_2018 | irrelevant | 0 | 0 | The study is an in-vitro virology screening for anti-dengue activity and does not report any pharmacokinetic parameters for tocopherol. |
| PD | Paemanee_2018 | not_relevant | 1 | 0 | The study reports that alpha-tocopherol slightly increased DENV infection levels, indicating a lack of anti-viral pharmacodynamic effect, and does not provide numeric PD parameters or a dose-response curve for the compound. |
| PGx | Peng_2022 | not_relevant | 0 | 0 | The paper investigates the genetic etiology of high GGT syndrome in horses and measures alpha-tocopherol levels, but it does not report a pharmacogenomic effect of a gene variant on the pharmacokinetics or pharmacodynamics of tocopherol as a drug. |
| PGx | Perepechaeva_2022 | not_relevant | 0 | 0 | The study investigates the effect of tocopherol on CYP1A expression and liver morphology in rats exposed to benzo(α)pyrene, but does not report any pharmacogenomic effects (gene variants) on tocopherol's PK or PD parameters. |
| PGx | Poulsen_1998 | not_relevant | 0 | 0 | The paper investigates oxidative DNA damage and its correlation with CYP1A2 activity and plasma antioxidants, but does not report pharmacokinetic or pharmacodynamic parameters of tocopherol itself. |
| popPK | Prom_2022 | irrelevant | 0 | 0 | The study measures static concentrations of alpha-tocopherol in serum and colostrum to assess transfer, but does not report pharmacokinetic parameters (CL, V, ka, t1/2) or a PK model for tocopherol. |
| PGx | Quadrana_2013 | not_relevant | 0 | 0 | The paper analyzes gene expression and metabolite levels in tomato plants, not pharmacogenomic effects on human PK/PD parameters. |
| PGx | Rimbach_2010 | not_relevant | 2 | 0 | The text mentions that apoE genotype affects genes involved in tocopherol transport, but it does not report specific changes in pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic parameters resulting from this genetic variation. |
| popPK | Saldanha_2023 | irrelevant | 0 | 0 | The paper is a review of in silico studies for vaccine development and does not contain any pharmacokinetic data for tocopherol. |
| PD | Saldanha_2023 | not_relevant | 0 | 0 | The paper is a review of in silico methods for vaccine development and does not report any pharmacodynamic or exposure-response data for Tocopherol. |
| PGx | Schmidt_1997 | not_relevant | 0 | 0 | The paper investigates risk factors for cerebral damage and reports associations between alpha-tocopherol levels and disease status, but does not report a pharmacogenomic effect (gene variant) on the PK or PD of tocopherol. |
| PGx | Schmölz_2016 | not_relevant | 2 | 0 | The text is a general review of vitamin E metabolism and mentions genetic constitution as a factor but does not report specific pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Sebastiani_2020 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of vitamin E for NASH and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for tocopherol. |
| PGx | Sidorova_2004 | not_relevant | 0 | 0 | The paper describes the induction of CYP1A1 by alpha-tocopherol in rats but does not report a pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter. |
| popPK | Talath_2026 | irrelevant | 0 | 0 | The paper is a review of natural supplements in breast cancer therapy and does not report quantitative pharmacokinetic parameters for tocopherol. |
| PD | Talath_2026 | not_relevant | 0 | 0 | The text is a general review of natural supplements in breast cancer and does not contain any specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for Tocopherol. |
| popPK | Thanishka_2026 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro evaluation of a herbal suppository containing Peperomia pellucida, with no mention of tocopherol pharmacokinetics. |
| PD | Thanishka_2026 | not_relevant | 0 | 0 | The paper studies Peperomia pellucida, not Tocopherol, and reports in vitro IC50 values for a plant extract rather than a pharmacodynamic model for the specified drug. |
| popPK | Watanabe_2021 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| PD | Watanabe_2021 | not_relevant | 0 | 0 | The paper focuses on antisense oligonucleotides, not Tocopherol, and does not report PD parameters for the specified drug. |
| PGx | Werba_2007 | not_relevant | 0 | 0 | The study investigates the effect of statins (simvastatin vs. pravastatin) on tocopherol levels, not the effect of a gene variant on tocopherol pharmacokinetics or pharmacodynamics. |
| PGx | Wong_2019 | not_relevant | 0 | 0 | The paper studies the effect of vitamin E analogues on the metabolism of lithocholic acid, not the pharmacokinetics or pharmacodynamics of tocopherol itself. |
| popPK | Yamamoto_1984 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Yamamoto_1984 | not_relevant | 0 | 0 | The paper investigates the effects of fatty acids on phosphodiesterase activity and does not mention Tocopherol or report any exposure-response or dose-response data for it. |
| popPK | Yang_2006 | irrelevant | 0 | 0 | The study investigates the antioxidant properties of a plant extract in vitro, with tocopherol used only as a comparator, and reports no pharmacokinetic parameters. |
| PD | Yang_2006 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant activity (EC50) for plant extracts, not a pharmacodynamic or exposure-response relationship for the drug Tocopherol in a biological system. |
| PD | Yoshino_1994 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain any scientific content, data, or analysis regarding Tocopherol or pharmacodynamics. |
| PD | Yue_1992 | not_relevant | 0 | 0 | The paper reports pharmacodynamic parameters (IC50) for Carvedilol, not Tocopherol. |
| PGx | Zarubina_1989 | not_relevant | 0 | 0 | The paper studies lipid metabolism and tocopherol synthesis in bacteria, not human pharmacogenomics or PK/PD parameters. |
| popPK | Zhakipbekov_2026 | irrelevant | 0 | 0 | The paper is a review of the plant Cirsium arvense and does not report pharmacokinetic parameters for tocopherol. |
| PD | Zhakipbekov_2026 | not_relevant | 0 | 0 | The paper is a narrative review of the plant Cirsium arvense and does not report any pharmacodynamic or exposure-response data for Tocopherol. |
| PGx | Zhan_2019 | not_relevant | 0 | 0 | The paper describes plant genetics (maize) and tocopherol biosynthesis, not human pharmacogenomics or drug PK/PD. |
| PGx | Zhang_2004 | not_relevant | 0 | 0 | The paper investigates the mechanism of acetaminophen-induced CYP3A4 degradation and mentions tocopherol only as a protective agent in an in vitro model, without reporting any pharmacogenomic effects on tocopherol PK/PD. |
| PD | de_1990 | not_relevant | 0 | 0 | The paper focuses on flavonoids and does not report any pharmacodynamic or exposure-response data for Tocopherol. |
| PD | de_2020 | not_relevant | 0 | 0 | The paper studies amyrin-rich extracts from Eugenia pyriformis; tocopherol is only used as a positive control for antioxidant activity, and no PD or exposure-response relationship for tocopherol is reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 08:41 UTC</sub>
