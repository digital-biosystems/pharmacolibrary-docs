<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;cerivastatin&quot;}]"></div>

# cerivastatin

- **generic name:** cerivastatin
- **ATC codes:** `C10AA06`
- **DrugBank:** [DB00439](https://go.drugbank.com/drugs/DB00439) · **PubChem:** [CID 446156](https://pubchem.ncbi.nlm.nih.gov/compound/446156)
- **molar mass:** 459.5503 g/mol (C26H34FNO5) — DrugBank
- **groups:** approved, withdrawn

## About

Cerivastatin is a statin that was used to lower blood lipids in conditions such as hyperlipidemia and related cardiovascular disease. It was withdrawn from the market after being linked to serious muscle damage, including fatal rhabdomyolysis, and is no longer used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423439](https://www.wikidata.org/wiki/Q423439) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cerivastatin | parent | 459.55 | C26H34FNO5 | DrugBank | [446156](https://pubchem.ncbi.nlm.nih.gov/compound/446156) | Mück_1997 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:29 | 17:28 | 0/0/1 | 0/0/0 | 0/0/1 | 411,659/15,723 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 2/9 | 12/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2), gpt-oss:120b (not confirmed, agreement 0.188). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Mück_1997_reference](drugs/drug_cerivastatin/Cerivastatin_Mck1997_reference.md) | — | 1-compartment (no model) | 3 | Mück W et al., Absolute and relative bioavailability o…, International journal of cl… (1997) | — |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓ 2/2</span> | **CYP2C8** | `Q22` · CL | metabolism | [Ishikawa_2004](drugs/drug_cerivastatin/pgx_Ishikawa_2004_CYP2C8_Q22.md) | Ishikawa C et al., A frameshift variant of CYP2C8 was iden…, Journal of human genetics (2004) | [10.1007/s10038-004-0188-6](https://doi.org/10.1007/s10038-004-0188-6) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cerivastatin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer, `CYP2C8` inhibitor/metabolism/substrate, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate, `CYP3A7` substrate, `SLCO1B1` inhibitor/substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | kidney | `ABCC2` substrate | DrugBank actor |
| excretion | liver | `ABCB11` substrate, `ABCC2` substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HMGCR (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 168 matched, 104 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_21 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mück_1997.pdf` | Mück W et al., Absolute and relative bioavailability o…, International journal of cl… (1997) | popPK | 9 | not captured | [9208342](https://pubmed.ncbi.nlm.nih.gov/9208342) | The study reports quantitative PK parameters (bioavailability, half-lives, model structure) for cerivastatin in humans, but specific values for clearance (CL) and volume (V) are not explicitly listed in the provided text. |
| `Walsky_2005.pdf` | Walsky RL et al., Examination of 209 drugs for inhibition…, Journal of clinical pharmac… (2005) | pd | 5 | [10.1177/0091270004270642](https://doi.org/10.1177/0091270004270642) | [15601807](https://www.ncbi.nlm.nih.gov/pubmed/15601807) | metadata signals extractable PD data (IC50) |
| `Zeitlinger_2003.pdf` | Zeitlinger M et al., [Clinico-pharmacologic explanation mode…, Wiener medizinische Wochens… (2003) | pd | 5 | [10.1046/j.1563-258x.2003.03029.x](https://doi.org/10.1046/j.1563-258x.2003.03029.x) | [12879633](https://www.ncbi.nlm.nih.gov/pubmed/12879633) | metadata signals extractable PD data (IC50) |
| `Dansette_2000.pdf` | Dansette PM et al., HMG-CoA reductase activity in human liv…, Experimental and toxicologi… (2000) | pd | 4 | [10.1016/S0940-2993(00)80107-4](https://doi.org/10.1016/S0940-2993(00)80107-4) | [10965989](https://www.ncbi.nlm.nih.gov/pubmed/10965989) | metadata signals extractable PD data (IC50) |
| `Ogilvie_2006.pdf` | Ogilvie BW et al., Glucuronidation converts gemfibrozil to…, Drug metabolism and disposi… (2006) | pd | 4 | [10.1124/dmd.105.007633](https://doi.org/10.1124/dmd.105.007633) | [16299161](https://www.ncbi.nlm.nih.gov/pubmed/16299161) | metadata signals extractable PD data (IC50) |
| `Lai_2009.pdf` | Lai XS et al., Human CYP2C8: structure, substrate spec…, Current drug metabolism (2009) | pgx | 8 | [10.2174/138920009790711832](https://doi.org/10.2174/138920009790711832) | [20214592](https://www.ncbi.nlm.nih.gov/pubmed/20214592) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Schmitz_2007.pdf` | Schmitz G et al., Pharmacogenetics and pharmacogenomics o…, Current opinion in lipidolo… (2007) | pgx | 8 | [10.1097/MOL.0b013e3280555083](https://doi.org/10.1097/MOL.0b013e3280555083) | [17353665](https://www.ncbi.nlm.nih.gov/pubmed/17353665) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Christians_1998.pdf` | Christians U et al., Metabolism and drug interactions of 3-h…, Pharmacology & therapeutics (1998) | pgx | 7 | [10.1016/s0163-7258(98)00016-3](https://doi.org/10.1016/s0163-7258(98)00016-3) | [9804052](https://www.ncbi.nlm.nih.gov/pubmed/9804052) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Fujino_2003.pdf` | Fujino H et al., Studies on the interaction between fibr…, Arzneimittel-Forschung (2003) | pgx | 7 | [10.1055/s-0031-1299815](https://doi.org/10.1055/s-0031-1299815) | [14650362](https://www.ncbi.nlm.nih.gov/pubmed/14650362) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Fujino_2004.pdf` | Fujino H et al., Metabolic properties of the acid and la…, Xenobiotica; the fate of fo… (2004) | pgx | 7 | [10.1080/00498250400015319](https://doi.org/10.1080/00498250400015319) | [15801541](https://www.ncbi.nlm.nih.gov/pubmed/15801541) | metadata signals extractable PGX data (CYP2Cs, PK/PD-context) |
| `García_2003.pdf` | García MJ et al., Clinical pharmacokinetics of statins, Methods and findings in exp… (2003) | pgx | 7 | not captured | [12949632](https://www.ncbi.nlm.nih.gov/pubmed/12949632) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kajinami_2003.pdf` | Kajinami K et al., Pitavastatin: efficacy and safety profi…, Cardiovascular drug reviews (2003) | pgx | 7 | [10.1111/j.1527-3466.2003.tb00116.x](https://doi.org/10.1111/j.1527-3466.2003.tb00116.x) | [12931254](https://www.ncbi.nlm.nih.gov/pubmed/12931254) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kantola_1999.pdf` | Kantola T et al., Effect of itraconazole on cerivastatin…, European journal of clinica… (1999) | pgx | 7 | [10.1007/s002280050566](https://doi.org/10.1007/s002280050566) | [10027660](https://www.ncbi.nlm.nih.gov/pubmed/10027660) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Neuvonen_2006.pdf` | Neuvonen PJ et al., Drug interactions with lipid-lowering d…, Clinical pharmacology and t… (2006) | pgx | 7 | [10.1016/j.clpt.2006.09.003](https://doi.org/10.1016/j.clpt.2006.09.003) | [17178259](https://www.ncbi.nlm.nih.gov/pubmed/17178259) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Prueksaritanont_1999.pdf` | Prueksaritanont T et al., Metabolic interactions between mibefrad…, British journal of clinical… (1999) | pgx | 7 | [10.1046/j.1365-2125.1999.00903.x](https://doi.org/10.1046/j.1365-2125.1999.00903.x) | [10215754](https://www.ncbi.nlm.nih.gov/pubmed/10215754) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Prueksaritanont_2002.pdf` | Prueksaritanont T et al., Glucuronidation of statins in animals a…, Drug metabolism and disposi… (2002) | pgx | 7 | [10.1124/dmd.30.5.505](https://doi.org/10.1124/dmd.30.5.505) | [11950779](https://www.ncbi.nlm.nih.gov/pubmed/11950779) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Shitara_2004.pdf` | Shitara Y et al., Gemfibrozil and its glucuronide inhibit…, The Journal of pharmacology… (2004) | pgx | 7 | [10.1124/jpet.104.068536](https://doi.org/10.1124/jpet.104.068536) | [15194707](https://www.ncbi.nlm.nih.gov/pubmed/15194707) | metadata signals extractable PGX data (SLC21A6, PK/PD-context) |
| `Shitara_2006.pdf` | Shitara Y et al., Pharmacokinetic and pharmacodynamic alt…, Pharmacology & therapeutics (2006) | pgx | 7 | [10.1016/j.pharmthera.2006.03.003](https://doi.org/10.1016/j.pharmthera.2006.03.003) | [16714062](https://www.ncbi.nlm.nih.gov/pubmed/16714062) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Williams_2002.pdf` | Williams D et al., Pharmacokinetic-pharmacodynamic drug in…, Clinical pharmacokinetics (2002) | pgx | 7 | [10.2165/00003088-200241050-00003](https://doi.org/10.2165/00003088-200241050-00003) | [12036392](https://www.ncbi.nlm.nih.gov/pubmed/12036392) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Marciante_2011.pdf` | Marciante KD et al., Cerivastatin, genetic variants, and the…, Pharmacogenetics and genomi… (2011) | pgx | 5 | [10.1097/FPC.0b013e328343dd7d](https://doi.org/10.1097/FPC.0b013e328343dd7d) | [21386754](https://www.ncbi.nlm.nih.gov/pubmed/21386754) | metadata signals extractable PGX data (CYP2C8) |
| `Vermes_2004.pdf` | Vermes A et al., Genetic polymorphisms in cytochrome P45…, American journal of cardiov… (2004) | pgx | 5 | [10.2165/00129784-200404040-00005](https://doi.org/10.2165/00129784-200404040-00005) | [15285699](https://www.ncbi.nlm.nih.gov/pubmed/15285699) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-07T11:19:04.523257+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Backman_2016 | not_relevant | 2 | 0 | The text is a general review of CYP2C8 and mentions cerivastatin only as a substrate without reporting specific pharmacogenomic effects on its PK/PD parameters. |
| PGx | Benet_2018 | not_relevant | 0 | 0 | The paper is a theoretical derivation of the extended clearance concept and uses cerivastatin only as a case study for drug-drug interactions, without reporting specific pharmacogenomic effects on PK parameters. |
| PGx | Caron_2007 | not_relevant | 0 | 0 | The paper evaluates a computational algorithm for predicting metabolic sites and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Chojnowska-Jezierska_2000 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving CYP3A4 metabolism but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Christians_1998 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions (CYP3A4 metabolism) in transplant patients and does not report pharmacogenomic effects of gene variants on cerivastatin PK/PD. |
| PGx | Cohen_2000 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of statins on CYP enzymes in vitro, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of cerivastatin. |
| PGx | Cziraky_2006 | not_relevant | 0 | 0 | The paper reports clinical safety outcomes (adverse events) from an administrative claims database and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Farmer_2000 | not_relevant | 0 | 0 | The paper is a general review of HMG-CoA reductase inhibitor tolerability and metabolism, mentioning cerivastatin's CYP3A4 metabolism but reporting no specific pharmacogenomic effects on PK or PD parameters. |
| PGx | Frudakis_2007 | not_relevant | 2 | 5 | The study investigates the association between CYP2D6*4 and statin-induced muscle events (adverse outcomes) rather than a specific pharmacokinetic or pharmacodynamic parameter of cerivastatin. |
| PGx | Fujino_2003 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (gemfibrozil inhibiting cerivastatin metabolism) in vitro, not the effect of a specific gene variant or genotype on pharmacokinetics. |
| PGx | Fujino_2004 | not_relevant | 0 | 0 | The paper compares metabolic properties of acid vs. lactone forms of statins but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | García_2003 | not_relevant | 0 | 0 | The paper is a general review of statin pharmacokinetics and does not report specific pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Hoosain_2016 | not_relevant | 0 | 0 | The paper reports allele and genotype frequencies in specific populations but does not present pharmacokinetic or pharmacodynamic data for cerivastatin. |
| popPK | Jing_2025 | irrelevant | 0 | 0 | The paper is a pharmacovigilance analysis of adverse events (myopathy) in the FAERS database and does not report any pharmacokinetic parameters for cerivastatin. |
| PGx | Kajinami_2003 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetic profile of pitavastatin and mentions the withdrawal of cerivastatin, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters for cerivastatin. |
| PGx | Kantola_1999 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (itraconazole) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Karaźniewicz-Łada_2021 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic interactions among antiepileptic drugs and does not mention cerivastatin. |
| popPK | Kpanou_2021 | irrelevant | 0 | 0 | The paper is a computational study on deep learning models for drug-drug interaction prediction and does not report pharmacokinetic parameters for cerivastatin. |
| PGx | Lai_2009 | not_relevant | 2 | 0 | The paper is a general review of CYP2C8 structure and function; it mentions cerivastatin as a substrate but does not report specific pharmacogenomic data or quantitative PK/PD effects for cerivastatin. |
| PGx | Law_2006 | not_relevant | 0 | 0 | The paper is a systematic review of statin safety and adverse events, discussing CYP3A4 interactions but not reporting specific pharmacogenomic effects of gene variants on PK/PD parameters for cerivastatin. |
| PGx | Lee_2001 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (simvastatin and clarithromycin) causing rhabdomyolysis, not a pharmacogenomic effect on cerivastatin. |
| popPK | Mallillin_2026 | irrelevant | 0 | 0 | The paper is a review of allometric scaling methods using hypothetical examples and does not contain any data for cerivastatin. |
| popPK | Meda_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of endothelial signaling and cytotoxicity, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Molden_2001 | not_relevant | 0 | 0 | The paper is a review of metabolic interactions and does not report pharmacogenomic effects of gene variants on cerivastatin PK/PD parameters. |
| popPK | Monchaud_2009 | irrelevant | 0 | 0 | The paper is a review of immunosuppressants (ciclosporin, tacrolimus, etc.) in thoracic transplantation and does not mention cerivastatin. |
| PGx | Mück_2000 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics and CYP metabolism but does not report any specific gene variant or genotype effects on PK/PD parameters. |
| popPK | Nagar_2024 | irrelevant | 0 | 0 | The paper is a methodological study on PBPK modeling frameworks and does not report specific pharmacokinetic parameters for cerivastatin. |
| PGx | Neuvonen_2006 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (CYP inhibitors) and general metabolism of cerivastatin, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Ni_2010 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for flavopiridol, not cerivastatin. |
| PGx | Notarbartolo_2001 | not_relevant | 0 | 0 | The paper describes general pharmacokinetic properties (CYP3A4/2C8 metabolism) and demographic effects (age/gender) but does not report any specific gene variant or genotype affecting PK/PD parameters. |
| PGx | Ogilvie_2006 | not_relevant | 0 | 0 | The paper investigates the mechanism of gemfibrozil's inhibition of CYP2C8 and its implications for drug-drug interactions with cerivastatin, but it does not report any pharmacogenomic effects (gene variants) on cerivastatin's PK or PD parameters. |
| PGx | Prieto_2001 | not_relevant | 0 | 0 | The text discusses the safety profile and withdrawal of cerivastatin due to rhabdomyolysis but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Prueksaritanont_1999 | not_relevant | 0 | 0 | The paper investigates metabolic interactions with mibefradil in vitro and does not report pharmacogenomic effects on cerivastatin PK/PD. |
| PGx | Prueksaritanont_2002 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (fibrates inhibiting statin metabolism) in vitro, not pharmacogenomic effects of gene variants on PK/PD. |
| PGx | Prueksaritanont_2002_2 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (gemfibrozil and statins) and does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Prueksaritanont_2002_3 | not_relevant | 0 | 0 | The paper describes the metabolic mechanism of statin glucuronidation and lactonization but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Qin_2026 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study of ADHD medications and mentions cerivastatin only as a validation fixture for statistical code, not as a subject of PK analysis. |
| PGx | Saw_2003 | not_relevant | 0 | 0 | The paper analyzes a clinical drug-drug interaction between clopidogrel and statins, not a pharmacogenomic effect of a gene variant on cerivastatin's PK or PD. |
| PGx | Schirris_2015 | not_relevant | 2 | 0 | The paper discusses UGT-mediated lactonization and mentions that polymorphisms *may* contribute to myopathy, but it does not report specific pharmacogenomic effects (genotype-to-PK/PD data) for cerivastatin. |
| PGx | Schmitz_2007 | not_relevant | 2 | 0 | The text is a review summary that mentions cerivastatin and pharmacogenetic targets but does not report specific quantitative effects of gene variants on PK or PD parameters. |
| PGx | Shitara_2004_2 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (gemfibrozil inhibiting cerivastatin uptake/metabolism) and does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Shitara_2006 | not_relevant | 2 | 0 | The paper is a general review of statin pharmacokinetics and drug-drug interactions, mentioning cerivastatin's metabolic pathways but not reporting specific pharmacogenomic effects of gene variants on its PK/PD parameters. |
| popPK | Taskar_2020 | irrelevant | 0 | 0 | The paper is a review of PBPK modeling for transporter-mediated drug-drug interactions and does not report pharmacokinetic parameters for cerivastatin. |
| popPK | Türkmen_2022 | irrelevant | 0 | 0 | The study focuses on simvastatin and atorvastatin pharmacogenomics and outcomes; cerivastatin is only mentioned as a rare switch medication in the context of treatment discontinuation, with no PK parameters reported. |
| PGx | Vermes_2004 | not_relevant | 0 | 0 | The paper is a general review of CYP polymorphisms in statins and mentions cerivastatin only in the context of adverse events, without reporting specific pharmacogenomic effects on its PK or PD parameters. |
| PGx | Wang_2002 | not_relevant | 0 | 0 | The paper investigates drug-drug interaction (gemfibrozil inhibiting CYP2C8) in vitro, not the effect of a genetic variant on cerivastatin PK/PD. |
| PGx | Wang_2015 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (clopidogrel affecting cerivastatin PK) and mentions genetic polymorphisms for clopidogrel metabolism, but does not report a pharmacogenomic effect (gene variant) on the PK or PD of cerivastatin. |
| popPK | Williams_2002 | irrelevant | 0 | 0 | The paper is a review of drug interactions and does not report original quantitative pharmacokinetic parameters for cerivastatin. |
| PGx | Williams_2002 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (CYP inhibitors) and general pharmacokinetics of statins, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Xiang_2018 | not_relevant | 0 | 0 | The paper reports an association between genotype and the risk of an adverse event (myopathy), not a change in a pharmacokinetic or pharmacodynamic parameter. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:19 UTC</sub>
