<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;stiripentol&quot;}]"></div>

# stiripentol

- **generic name:** stiripentol
- **ATC codes:** `N03AX17`
- **DrugBank:** [DB09118](https://go.drugbank.com/drugs/DB09118) · **PubChem:** [CID 5311454](https://pubchem.ncbi.nlm.nih.gov/compound/5311454)
- **molar mass:** 234.295 g/mol (C14H18O3) — DrugBank
- **groups:** approved, investigational

## About

Stiripentol is an anticonvulsant drug used to treat epilepsy, notably juvenile myoclonic epilepsy. It is authorised in the European Union and is also under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412182](https://www.wikidata.org/wiki/Q412182) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:49 | 4:49 | 0/1/0 | 0/0/0 | 0/0/1 | 64,453/3,949 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Peigné_2018_reference](drugs/drug_stiripentol/Stiripentol_Peign2018_reference.md) | — | 1-compartment (no model) | 0 | Peigné S et al., Population Pharmacokinetics of Stiripen…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0592-7](https://doi.org/10.1007/s40262-017-0592-7) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2C19** | `Q27` · CL/F | metabolism | [Eltanameli_2025](drugs/drug_stiripentol/pgx_Eltanameli_2025_CYP2C19_Q27.md) | Eltanameli B et al., Physiologically Based Pharmacokinetic M…, Journal of personalized med… (2025) | [10.3390/jpm15110549](https://doi.org/10.3390/jpm15110549) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=stiripentol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer/inhibitor/substrate, `CYP2B6` inducer/inhibitor, `CYP2C19` inhibitor/metabolism/substrate, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target), GABRG3 (modulator), LDHA (inhibitor), LDHB (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 72 matched, 49 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_17 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Peigné_2014.pdf` | Peigné S et al., Reassessment of stiripentol pharmacokin…, Epilepsy research (2014) | popPK | 10 | [10.1016/j.eplepsyres.2014.03.009](https://doi.org/10.1016/j.eplepsyres.2014.03.009) | [24725808](https://pubmed.ncbi.nlm.nih.gov/24725808) | The study reports quantitative non-compartmental pharmacokinetic parameters (AUC, t1/2, Vmax, Km) for stiripentol in healthy adult volunteers. |
| `Peigné_2018.pdf` | Peigné S et al., Population Pharmacokinetics of Stiripen…, Clinical pharmacokinetics (2018) | popPK | 10 | [10.1007/s40262-017-0592-7](https://doi.org/10.1007/s40262-017-0592-7) | [28819726](https://pubmed.ncbi.nlm.nih.gov/28819726) | The abstract explicitly provides mean population estimates for CL/F (4.2 L/h) and Vd/F (82 L) with variability, derived from a population PK model. |
| `Shen_1992.pdf` | Shen DD et al., Comparative anticonvulsant potency and…, Epilepsy research (1992) | popPK | 10 | [10.1016/0920-1211(92)90088-b](https://doi.org/10.1016/0920-1211(92)90088-b) | [1526226](https://pubmed.ncbi.nlm.nih.gov/1526226) | The abstract explicitly reports quantitative pharmacokinetic parameters (clearance and half-life) for stiripentol enantiomers in rats. |
| `Klein_2019.pdf` | Klein P et al., Drug-drug interactions and pharmacodyna…, Epilepsy & behavior : E&B (2019) | pd | 5 | [10.1016/j.yebeh.2019.106459](https://doi.org/10.1016/j.yebeh.2019.106459) | [31519475](https://www.ncbi.nlm.nih.gov/pubmed/31519475) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Chiron_2016.pdf` | Chiron C, Stiripentol and vigabatrin current role…, Expert opinion on pharmacot… (2016) | pgx | 8 | [10.1517/14656566.2016.1161026](https://doi.org/10.1517/14656566.2016.1161026) | [26933940](https://www.ncbi.nlm.nih.gov/pubmed/26933940) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Djordjevic_2017.pdf` | Djordjevic N et al., Pharmacokinetics and Pharmacogenetics o…, European journal of drug me… (2017) | pgx | 8 | [10.1007/s13318-016-0397-3](https://doi.org/10.1007/s13318-016-0397-3) | [28064419](https://www.ncbi.nlm.nih.gov/pubmed/28064419) | metadata signals extractable PGX data (CYP1A2*1F, PK/PD-context) |
| `Jaisupa_2025.pdf` | Jaisupa N et al., Cannabidiol metabolism in vitro: the ro…, Xenobiotica; the fate of fo… (2025) | pgx | 8 | [10.1080/00498254.2025.2498696](https://doi.org/10.1080/00498254.2025.2498696) | [40315023](https://www.ncbi.nlm.nih.gov/pubmed/40315023) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Kouga_2015.pdf` | Kouga T et al., Effect of CYP2C19 polymorphisms on stir…, Brain & development (2015) | pgx | 8 | [10.1016/j.braindev.2014.04.003](https://doi.org/10.1016/j.braindev.2014.04.003) | [24819914](https://www.ncbi.nlm.nih.gov/pubmed/24819914) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Nabbout_2012.pdf` | Nabbout R et al., Stiripentol: an example of antiepilepti…, European journal of paediat… (2012) | pgx | 8 | [10.1016/j.ejpn.2012.04.009](https://doi.org/10.1016/j.ejpn.2012.04.009) | [22695038](https://www.ncbi.nlm.nih.gov/pubmed/22695038) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Yamamoto_2020.pdf` | Yamamoto Y et al., Impact of CYP2C19 Phenotypes on Clinica…, Therapeutic drug monitoring (2020) | pgx | 8 | [10.1097/FTD.0000000000000676](https://doi.org/10.1097/FTD.0000000000000676) | [31318844](https://www.ncbi.nlm.nih.gov/pubmed/31318844) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Cazali_2003.pdf` | Cazali N et al., Inhibitory effect of stiripentol on car…, British journal of clinical… (2003) | pgx | 7 | [10.1046/j.0306-5251.2003.01919.x](https://doi.org/10.1046/j.0306-5251.2003.01919.x) | [14651727](https://www.ncbi.nlm.nih.gov/pubmed/14651727) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Giraud_2006.pdf` | Giraud C et al., In vitro and in vivo inhibitory effect…, Drug metabolism and disposi… (2006) | pgx | 7 | [10.1124/dmd.105.007237](https://doi.org/10.1124/dmd.105.007237) | [16415114](https://www.ncbi.nlm.nih.gov/pubmed/16415114) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Spina_1996.pdf` | Spina E et al., Clinically significant pharmacokinetic…, Clinical pharmacokinetics (1996) | pgx | 7 | [10.2165/00003088-199631030-00004](https://doi.org/10.2165/00003088-199631030-00004) | [8877250](https://www.ncbi.nlm.nih.gov/pubmed/8877250) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Verdier_2012.pdf` | Verdier MC et al., [Therapeutic drug monitoring of stiripe…, Therapie (2012) | pgx | 7 | [10.2515/therapie/2012014](https://doi.org/10.2515/therapie/2012014) | [22850103](https://www.ncbi.nlm.nih.gov/pubmed/22850103) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yamamoto_2014.pdf` | Yamamoto Y et al., Impact of cytochrome P450 inducers with…, European journal of clinica… (2014) | pgx | 7 | [10.1007/s00228-014-1719-5](https://doi.org/10.1007/s00228-014-1719-5) | [25048408](https://www.ncbi.nlm.nih.gov/pubmed/25048408) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Zaccara_2021.pdf` | Zaccara G et al., A review of pharmacokinetic drug intera…, Epileptic disorders : inter… (2021) | pgx | 7 | [10.1684/epd.2021.1261](https://doi.org/10.1684/epd.2021.1261) | [33814360](https://www.ncbi.nlm.nih.gov/pubmed/33814360) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Yamamoto_2013.pdf` | Yamamoto Y et al., Influence of CYP2C19 polymorphism and c…, Therapeutic drug monitoring (2013) | pgx | 5 | [10.1097/FTD.0b013e318283b49a](https://doi.org/10.1097/FTD.0b013e318283b49a) | [23666564](https://www.ncbi.nlm.nih.gov/pubmed/23666564) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-07T07:48:23.369653+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arends_1994 | irrelevant | 3 | 0 | The study is in rats and mentions "elimination half-life" and brain concentration ratios, but the provided evidence contains no quantitative numeric PK parameters (CL, V, ka, specific half-life values) for stiripentol. |
| popPK | Bai_2019 | irrelevant | 0 | 0 | The paper is a medicinal chemistry and preclinical pharmacodynamics study of novel synthetic compounds, where stiripentol serves only as a comparator drug for anticonvulsant activity, with no pharmacokinetic data reported. |
| PGx | Burns_2016 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics of clobazam and its metabolite, mentioning stiripentol only as a comedication that influences drug-drug interactions, rather than investigating a pharmacogenomic effect on stiripentol. |
| PGx | Cazali_2003 | not_relevant | 0 | 0 | The paper describes drug-drug interactions (DDI) where stiripentol inhibits the metabolism of carbamazepine and saquinavir, rather than a pharmacogenomic effect on stiripentol's own PK/PD. |
| PGx | Chiron_2005 | not_relevant | 1 | 0 | The text describes the drug mechanism and general CYP inhibition interactions, but does not report specific pharmacogenomic gene variants or genotype-specific effects. |
| PGx | Chiron_2007 | not_relevant | 0 | 0 | The paper reviews the pharmacology, efficacy, and safety of stiripentol but does not report any pharmacogenomic studies linking gene variants to its PK or PD parameters. |
| PGx | Chiron_2016 | not_relevant | 0 | 0 | The paper is a narrative review on the roles of stiripentol and vigabatrin, with no quantitative data on a pharmacogenomic effect on PK or PD parameters. |
| PGx | Chiron_2019 | not_relevant | 2 | 2 | The paper mentions pharmacogenetic data supporting the anticonvulsant effect but does not report specific gene variants affecting PK or PD parameters. |
| PGx | Cokley_2022 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (DPIs) involving stiripentol, not pharmacogenomic effects (gene variant/genotype) on its PK/PD parameters. |
| PGx | Djordjevic_2017 | not_relevant | 0 | 0 | The paper discusses carbamazepine pharmacogenetics, not stiripentol. |
| PGx | Giraud_2006 | not_relevant | 0 | 0 | The paper investigates drug-drug interaction (stiripentol inhibiting clobazam), not a pharmacogenomic effect of a gene variant on stiripentol's PK/PD. |
| PGx | Inoue_2009 | not_relevant | 3 | 5 | The paper reports clinical efficacy and safety of stiripentol in a Japanese population and mentions CYP2C19 mutations in the context of clobazam interaction, but it does not report a specific pharmacogenomic effect (e.g., genotype-specific change) on a stiripentol PK or PD parameter. |
| PGx | Jaisupa_2025 | not_relevant | 0 | 0 | The paper focuses on the metabolism of Cannabidiol and the effects of CYP2C19 genotypes, not on the pharmacokinetics or pharmacodynamics of stiripentol. |
| popPK | Jullien_2015 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for clobazam and N-desmethylclobazam, while stiripentol is only a concomitant medication and its own PK parameters are not reported. |
| popPK | Klein_2019 | irrelevant | 0 | 0 | The study models the pharmacokinetics of clobazam and N-desmethylclobazam; stiripentol is only a co-administered drug used to assess drug-drug interactions on clobazam levels, not the subject of PK parameter estimation. |
| PGx | Levy_1995 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions and CYP isoform specificity for phenytoin and carbamazepine, but does not report pharmacogenomic effects (gene variants) on stiripentol. |
| PGx | Martin_2022 | not_relevant | 0 | 0 | The paper evaluates the pharmacokinetics of fenfluramine and its interaction with stiripentol but does not report a pharmacogenomic effect (gene variant) on stiripentol's PK or PD. |
| PGx | Nabbout_2012 | not_relevant | 3 | 2 | The paper mentions that CYP2C19 polymorphisms affect clobazam metabolism when co-administered with stiripentol, but it does not report pharmacogenomic effects on stiripentol's own PK/PD parameters. |
| PGx | Patsalos_2020 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (pharmacokinetic effects of CBD on stiripentol), but does not investigate or report pharmacogenomic effects (gene variant/genotype/phenotype). |
| PGx | Roberti_2025 | not_relevant | 0 | 0 | The paper is a review focusing on drug-drug interactions and mentions pharmacogenetics only as a future direction without reporting specific gene variant effects on stiripentol PK/PD. |
| PGx | Spina_1996 | not_relevant | 1 | 1 | The paper discusses drug-drug interactions affecting carbamazepine and does not report pharmacogenomic effects on stiripentol PK/PD parameters. |
| popPK | Sun_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of β-asaronol using zebrafish models, where stiripentol is only used as a comparator agent and no stiripentol PK parameters are reported. |
| popPK | Sun_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of α-Asaronol, with stiripentol used only as a comparator drug, and no pharmacokinetic parameters for stiripentol are reported. |
| popPK | Tolbert_2019 | irrelevant | 1 | 0 | This is a population pharmacokinetic study of clobazam, and stiripentol is mentioned only as a comparator drug in a previous study, with no quantitative PK parameters provided for it. |
| PGx | Tran_2001 | not_relevant | 0 | 0 | The study investigates the protective effect of stiripentol on acetaminophen toxicity in rats but does not report any pharmacogenomic associations or gene variants affecting stiripentol's PK/PD. |
| PGx | Verdier_2012 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics and therapeutic drug monitoring guidelines for stiripentol but does not report any effects of gene variants or genotypes on its PK or PD parameters. |
| PGx | Yamamoto_2013 | not_relevant | 0 | 0 | The paper discusses Clobazam, not Stiripentol. |
| PGx | Yamamoto_2014 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions affecting clobazam, not the pharmacogenomics of stiripentol. |
| PGx | Yamamoto_2020 | not_relevant | 4 | 2 | The paper investigates the impact of CYP2C19 genotypes on the pharmacokinetics of clobazam and NCLB (due to stiripentol inhibition) and clinical retention of stiripentol, but does not report pharmacokinetic parameters for stiripentol itself. |
| PGx | Zaccara_2021 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions, specifically involving stiripentol, but does not discuss pharmacogenomic effects (gene variants) on its pharmacokinetic or pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:48 UTC</sub>
