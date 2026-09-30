<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05B&quot;,&quot;href&quot;:&quot;atc/C05B.md&quot;},{&quot;label&quot;:&quot;phenol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Phenol_Thoueille2023_reference&quot;,&quot;label&quot;:&quot;Thoueille_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_phenol/Phenol_Thoueille2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Phenol_Nichols2008_reference&quot;,&quot;label&quot;:&quot;Nichols_2008_reference&quot;,&quot;href&quot;:&quot;drugs/drug_phenol/Phenol_Nichols2008_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# phenol

- **generic name:** phenol
- **ATC codes:** `C05BB05`, `D08AE03`, `N01BX03`, `R02AA19`
- **DrugBank:** [DB03255](https://go.drugbank.com/drugs/DB03255) · **PubChem:** [CID 996](https://pubchem.ncbi.nlm.nih.gov/compound/996)
- **molar mass:** 94.1112 g/mol (C6H6O) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Phenol is an antiseptic and disinfectant. It is active against a wide range of micro-organisms including some fungi and viruses, but is only slowly effective against spores. Phenol has been used to disinfect skin and to relieve itching. Phenol is also used as an oral analgesic or anesthetic in products such as Chloraseptic to treat pharyngitis. Additionally, phenol and its related compounds are used in surgical ingrown toenail treatment, a process termed phenolization. Research indicates that parental exposure to phenol and its related compounds are positively associated with spontaneous abortion. During the second world war, phenol injections were used as a means of execution by the Nazis. Phenol is a toxic compound whose vapours are corrosive to the skin, eyes, and respiratory tract.

**Indication.** Phenol is primarily indicated for minor sore throat pain, sore mouth, minor mouth irritation, and pain associated with canker sores. Additionally, phenol is indicated in the treatment of focal spasticity.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phenol | parent | 94.1112 | C6H6O | DrugBank | [996](https://pubchem.ncbi.nlm.nih.gov/compound/996) | Nichols_2008 |
| phenyl glucuronide | metabolite | 270.237 | C12H14O7 | PubChem | [119239](https://pubchem.ncbi.nlm.nih.gov/compound/119239) | Nichols_2008 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 21:37 | 2:59:10 | 2/0/0 | 0/0/0 | 0/0/4 | 734,761/76,448 | ollama / qwen3.8:27b-mtp-q8_0 | 36 | 18/18 | 34/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.455). The first reading is what the record holds.">cross-check: disputed</span> | [Thoueille_2023_reference](drugs/drug_phenol/Phenol_Thoueille2023_reference.md) | model (no simulator) | 1-compartment, oral | 3 | Thoueille P et al., Population pharmacokinetic modelling to…, The Journal of antimicrobia… (2023) | [10.1093/jac/dkad103](https://doi.org/10.1093/jac/dkad103) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: F, Cl, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Nichols_2008_reference](drugs/drug_phenol/Phenol_Nichols2008_reference.md) | held back | 1-compartment, oral | 4 | Nichols JW et al., Use of online microdialysis sampling to…, Drug metabolism and disposi… (2008) | [10.1124/dmd.107.020123](https://doi.org/10.1124/dmd.107.020123) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP2A6** | `Q305` · kfm | formation | [Rodríguez-Morató_2017](drugs/drug_phenol/pgx_Rodr_guez_Morat_2017_CYP2A6_Q305.md) | Rodríguez-Morató J et al., CYP2D6 and CYP2A6 biotransform dietary…, Food chemistry (2017) | [10.1016/j.foodchem.2016.09.026](https://doi.org/10.1016/j.foodchem.2016.09.026) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP2D6** | `Q305` · kfm | formation | [Rodríguez-Morató_2017](drugs/drug_phenol/pgx_Rodr_guez_Morat_2017_CYP2D6_Q305.md) | Rodríguez-Morató J et al., CYP2D6 and CYP2A6 biotransform dietary…, Food chemistry (2017) | [10.1016/j.foodchem.2016.09.026](https://doi.org/10.1016/j.foodchem.2016.09.026) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2A6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Soldevila-Domenech_2019](drugs/drug_phenol/pgx_Soldevila_Domenech_2019_CYP2A6_Q100.md) | Soldevila-Domenech N et al., Generation of the Antioxidant Hydroxyty…, Nutrients (2019) | [10.3390/nu11092241](https://doi.org/10.3390/nu11092241) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Soldevila-Domenech_2019](drugs/drug_phenol/pgx_Soldevila_Domenech_2019_CYP2D6_Q100.md) | Soldevila-Domenech N et al., Generation of the Antioxidant Hydroxyty…, Nutrients (2019) | [10.3390/nu11092241](https://doi.org/10.3390/nu11092241) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=phenol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | lung | <sub>“…Phenol is rapidly absorbed through the skin and into the lungs.…”</sub> | prose |
| absorption | skin | <sub>“…Phenol is rapidly absorbed through the skin and into the lungs.…”</sub> | prose |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` formation | paper PGx gene |
| metabolism | liver | `CYP2A6` formation, `CYP2D6` formation | paper PGx gene |
| excretion | kidney | <sub>“…The kidney is the primary route of elimination of phenol.…”</sub> | prose |

<sub>Actors without a tissue in the table: CA1 (inhibitor), CA12 (inhibitor), CA14 (inhibitor), CA2 (inhibitor), CA4 (inhibitor), CA9 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2134 matched, 251 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_45 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Görge_1987.pdf` | Görge G et al., Excretion and metabolism of phenol, 4-n…, Xenobiotica; the fate of fo… (1987) | popPK | 8 | [10.3109/00498258709047160](https://doi.org/10.3109/00498258709047160) | [3501639](https://pubmed.ncbi.nlm.nih.gov/3501639) | The study reports a two-compartment model for phenol in frogs, but specific numeric parameter values (CL, V, ka) are not present in the provided evidence. |
| `Nichols_2008.pdf` | Nichols JW et al., Use of online microdialysis sampling to…, Drug metabolism and disposi… (2008) | popPK | 8 | [10.1124/dmd.107.020123](https://doi.org/10.1124/dmd.107.020123) | [18420782](https://pubmed.ncbi.nlm.nih.gov/18420782) | The study reports quantitative pharmacokinetic parameters (clearance, volume, rate constants) for phenol and its metabolite in rainbow trout using compartmental models. |
| `Pierrehumbert_2002.pdf` | Pierrehumbert G et al., Impact of human variability on the biol…, Toxicology letters (2002) | popPK | 8 | [10.1016/s0378-4274(02)00186-8](https://doi.org/10.1016/s0378-4274(02)00186-8) | [12191875](https://pubmed.ncbi.nlm.nih.gov/12191875) | The paper describes a compartmental toxicokinetic model for phenol, but the specific numeric parameter values are not present in the provided evidence. |
| `Grassman_1993.pdf` | Grassman J et al., Development of an immunoassay to detect…, International archives of o… (1993) | pd | 5 | [10.1007/BF00381328](https://doi.org/10.1007/BF00381328) | [8406913](https://www.ncbi.nlm.nih.gov/pubmed/8406913) | metadata signals extractable PD data (IC50) |
| `Sklorz_1994.pdf` | Sklorz M et al., Determination of microbial activity in…, Environmental science and p… (1994) | pd | 5 | [10.1007/BF02986936](https://doi.org/10.1007/BF02986936) | [24234293](https://www.ncbi.nlm.nih.gov/pubmed/24234293) | metadata signals extractable PD data (EC50) |
| `Afshari_2017.pdf` | Afshari A et al., Antioxidant effect of leaf extracts fro…, Food science & nutrition (2017) | pd | 4 | [10.1002/fsn3.396](https://doi.org/10.1002/fsn3.396) | [28265367](https://www.ncbi.nlm.nih.gov/pubmed/28265367) | metadata signals extractable PD data (EC50) |
| `Anderson_1988.pdf` | Anderson AC et al., Interpretation of microbial bioassays u…, Journal of environmental sc… (1988) | pd | 4 | [10.1080/03601238809372600](https://doi.org/10.1080/03601238809372600) | [3042851](https://www.ncbi.nlm.nih.gov/pubmed/3042851) | metadata signals extractable PD data (EC50) |
| `Beckmann_1994.pdf` | Beckmann JD et al., Regulation of phenol sulfotransferase e…, Journal of cellular physiol… (1994) | pd | 4 | [10.1002/jcp.1041600324](https://doi.org/10.1002/jcp.1041600324) | [8077298](https://www.ncbi.nlm.nih.gov/pubmed/8077298) | metadata signals extractable PD data (EC50) |
| `Boroomand_2018.pdf` | Boroomand N et al., Phytochemical components, total phenol…, Natural product research (2018) | pd | 4 | [10.1080/14786419.2017.1315579](https://doi.org/10.1080/14786419.2017.1315579) | [28403651](https://www.ncbi.nlm.nih.gov/pubmed/28403651) | metadata signals extractable PD data (IC50) |
| `Dueva_2020.pdf` | Dueva EV et al., Spectrum of antiviral activity of 4-ami…, Antiviral chemistry & chemo… (2020) | pd | 4 | [10.1177/2040206620943462](https://doi.org/10.1177/2040206620943462) | [32811155](https://www.ncbi.nlm.nih.gov/pubmed/32811155) | metadata signals extractable PD data (EC50) |
| `Figueredo_2015.pdf` | Figueredo F et al., A new P. putida instrumental toxicity b…, Environmental monitoring an… (2015) | pd | 4 | [10.1007/s10661-015-4499-1](https://doi.org/10.1007/s10661-015-4499-1) | [25910719](https://www.ncbi.nlm.nih.gov/pubmed/25910719) | metadata signals extractable PD data (EC50) |
| `Fragen_1983.pdf` | Fragen RJ et al., Interactions of diisopropyl phenol (ICI…, British journal of anaesthe… (1983) | pd | 4 | [10.1093/bja/55.5.433](https://doi.org/10.1093/bja/55.5.433) | [6133527](https://www.ncbi.nlm.nih.gov/pubmed/6133527) | metadata signals extractable PD data (EC50) |
| `Gong_2026.pdf` | Gong X et al., Antifungal secondary metabolites from a…, Journal of Asian natural pr… (2026) | pd | 4 | [10.1080/10286020.2026.2620992](https://doi.org/10.1080/10286020.2026.2620992) | [41635240](https://www.ncbi.nlm.nih.gov/pubmed/41635240) | metadata signals extractable PD data (EC50) |
| `Hornsby_1985.pdf` | Hornsby PJ et al., Mode of action of butylated hydroxyanis…, Biochemical pharmacology (1985) | pd | 4 | [10.1016/0006-2952(85)90768-3](https://doi.org/10.1016/0006-2952(85)90768-3) | [3872128](https://www.ncbi.nlm.nih.gov/pubmed/3872128) | metadata signals extractable PD data (EC50) |
| `Huang_2021.pdf` | Huang PT et al., Optimization of 4-Anilinoquinolines as…, Molecules (Basel, Switzerla… (2021) | pd | 4 | [10.3390/molecules26237338](https://doi.org/10.3390/molecules26237338) | [34885921](https://www.ncbi.nlm.nih.gov/pubmed/34885921) | metadata signals extractable PD data (EC50) |
| `Liu_2020.pdf` | Liu YM et al., Antioxidant Activities of Selected Medi…, International journal of me… (2020) | pd | 4 | [10.1615/IntJMedMushrooms.2020034161](https://doi.org/10.1615/IntJMedMushrooms.2020034161) | [32558501](https://www.ncbi.nlm.nih.gov/pubmed/32558501) | metadata signals extractable PD data (EC50) |
| `Mhamdi_2015.pdf` | Mhamdi B et al., Chemical composition, antioxidant and a…, Natural product research (2015) | pd | 4 | [10.1080/14786419.2014.981188](https://doi.org/10.1080/14786419.2014.981188) | [25471464](https://www.ncbi.nlm.nih.gov/pubmed/25471464) | metadata signals extractable PD data (IC50) |
| `Murthy_2017.pdf` | Murthy HN et al., Chemical composition, larvicidal and an…, Journal of parasitic diseas… (2017) | pd | 4 | [10.1007/s12639-016-0863-5](https://doi.org/10.1007/s12639-016-0863-5) | [28848256](https://www.ncbi.nlm.nih.gov/pubmed/28848256) | metadata signals extractable PD data (EC50) |
| `Nakamura_2013.pdf` | Nakamura H et al., Biofilm formation and resistance to ben…, Journal of food protection (2013) | pd | 4 | [10.4315/0362-028X.JFP-12-225](https://doi.org/10.4315/0362-028X.JFP-12-225) | [23834792](https://www.ncbi.nlm.nih.gov/pubmed/23834792) | metadata signals extractable PD data (EC50) |
| `Qiu_2017.pdf` | Qiu C et al., Constituents from Vitex negundo var. he…, Journal of natural medicines (2017) | pd | 4 | [10.1007/s11418-016-1032-y](https://doi.org/10.1007/s11418-016-1032-y) | [27535293](https://www.ncbi.nlm.nih.gov/pubmed/27535293) | metadata signals extractable PD data (IC50) |
| `Saint_1998.pdf` | Saint DA, The effects of propofol on macroscopic…, British journal of pharmaco… (1998) | pd | 4 | [10.1038/sj.bjp.0701876](https://doi.org/10.1038/sj.bjp.0701876) | [9690856](https://www.ncbi.nlm.nih.gov/pubmed/9690856) | metadata signals extractable PD data (EC50) |
| `Szallasi_1999.pdf` | Szallasi A et al., A non-pungent triprenyl phenol of funga…, British journal of pharmaco… (1999) | pd | 4 | [10.1038/sj.bjp.0702440](https://doi.org/10.1038/sj.bjp.0702440) | [10217528](https://www.ncbi.nlm.nih.gov/pubmed/10217528) | metadata signals extractable PD data (EC50) |
| `Wang_2018.pdf` | Wang L et al., Identification of toxic substances in p…, Environmental science and p… (2018) | pd | 4 | [10.1007/s11356-018-2035-x](https://doi.org/10.1007/s11356-018-2035-x) | [29736641](https://www.ncbi.nlm.nih.gov/pubmed/29736641) | metadata signals extractable PD data (EC50) |
| `Wu_2002.pdf` | Wu WZ et al., Estrogenic effects from household stoves, Ecotoxicology and environme… (2002) | pd | 4 | [10.1006/eesa.2002.2192](https://doi.org/10.1006/eesa.2002.2192) | [12481859](https://www.ncbi.nlm.nih.gov/pubmed/12481859) | metadata signals extractable PD data (EC50) |
| `Xie_2016.pdf` | Xie Y et al., New urushiols with platelet aggregation…, Fitoterapia (2016) | pd | 4 | [10.1016/j.fitote.2016.05.001](https://doi.org/10.1016/j.fitote.2016.05.001) | [27156871](https://www.ncbi.nlm.nih.gov/pubmed/27156871) | metadata signals extractable PD data (IC50) |
| `Zhang_2007.pdf` | Zhang D et al., Redoxcitrinin, a biogenetic precursor o…, Journal of microbiology and… (2007) | pd | 4 | not captured | [18051311](https://www.ncbi.nlm.nih.gov/pubmed/18051311) | metadata signals extractable PD data (IC50) |
| `Zinsstag_1991.pdf` | Zinsstag J et al., A new photometric assay for testing try…, Parasitology research (1991) | pd | 4 | [10.1007/BF00934381](https://doi.org/10.1007/BF00934381) | [1994369](https://www.ncbi.nlm.nih.gov/pubmed/1994369) | metadata signals extractable PD data (IC50) |
| `Priyadarshini_2021.pdf` | Priyadarshini R et al., Association of plasma docetaxel levels…, Breast cancer (Tokyo, Japan) (2021) | pgx | 8 | [10.1007/s12282-020-01177-x](https://doi.org/10.1007/s12282-020-01177-x) | [33125673](https://www.ncbi.nlm.nih.gov/pubmed/33125673) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Schwartz_2004.pdf` | Schwartz GL et al., Pharmacogenetics of antihypertensive dr…, American journal of pharmac… (2004) | pgx | 8 | [10.2165/00129785-200404030-00002](https://doi.org/10.2165/00129785-200404030-00002) | [15174896](https://www.ncbi.nlm.nih.gov/pubmed/15174896) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Cho_2014.pdf` | Cho YY et al., Effect of honokiol on the induction of…, Drug design, development an… (2014) | pgx | 7 | [10.2147/DDDT.S72305](https://doi.org/10.2147/DDDT.S72305) | [25395831](https://www.ncbi.nlm.nih.gov/pubmed/25395831) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Joo_2015.pdf` | Joo J et al., In vitro metabolism of an estrogen-rela…, Biopharmaceutics & drug dis… (2015) | pgx | 7 | [10.1002/bdd.1929](https://doi.org/10.1002/bdd.1929) | [25451157](https://www.ncbi.nlm.nih.gov/pubmed/25451157) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Klieber_2014.pdf` | Klieber S et al., Identification of metabolic pathways an…, Pharmacology research & per… (2014) | pgx | 7 | [10.1002/prp2.44](https://doi.org/10.1002/prp2.44) | [25505590](https://www.ncbi.nlm.nih.gov/pubmed/25505590) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Pingili_2019.pdf` | Pingili RB et al., Effect of chrysin on the formation of N…, Chemico-biological interact… (2019) | pgx | 7 | [10.1016/j.cbi.2019.02.014](https://doi.org/10.1016/j.cbi.2019.02.014) | [30794797](https://www.ncbi.nlm.nih.gov/pubmed/30794797) | metadata signals extractable PGX data (CYP2E1, PK/PD-context) |
| `Sun_2014.pdf` | Sun D et al., In vitro glucuronidation of Armillarisi…, Xenobiotica; the fate of fo… (2014) | pgx | 7 | [10.3109/00498254.2014.927084](https://doi.org/10.3109/00498254.2014.927084) | [24916899](https://www.ncbi.nlm.nih.gov/pubmed/24916899) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Alaee_2016.pdf` | Alaee E et al., The Association between Prolonged Jaund…, Journal of clinical and dia… (2016) | pgx | 5 | [10.7860/JCDR/2016/19004.8810](https://doi.org/10.7860/JCDR/2016/19004.8810) | [28050400](https://www.ncbi.nlm.nih.gov/pubmed/28050400) | metadata signals extractable PGX data (UGT1A1) |
| `Arun_2015.pdf` | Arun Kumar AS et al., Association of CYP2C8, CYP2C9 and CYP2J…, Pharmacological reports : PR (2015) | pgx | 5 | [10.1016/j.pharep.2014.08.010](https://doi.org/10.1016/j.pharep.2014.08.010) | [25560582](https://www.ncbi.nlm.nih.gov/pubmed/25560582) | metadata signals extractable PGX data (CYP2C8) |
| `Boronat_2019.pdf` | Boronat A et al., Cardiovascular benefits of tyrosol and…, Free radical biology & medi… (2019) | pgx | 5 | [10.1016/j.freeradbiomed.2019.08.032](https://doi.org/10.1016/j.freeradbiomed.2019.08.032) | [31479717](https://www.ncbi.nlm.nih.gov/pubmed/31479717) | metadata signals extractable PGX data (CYP2A6) |
| `Carvalho_2014.pdf` | Carvalho AT et al., Thiopurine-methyltransferase variants i…, World journal of gastroente… (2014) | pgx | 5 | [10.3748/wjg.v20.i12.3327](https://doi.org/10.3748/wjg.v20.i12.3327) | [24696613](https://www.ncbi.nlm.nih.gov/pubmed/24696613) | metadata signals extractable PGX data (TPMT) |
| `Dhivya_2024.pdf` | Dhivya E et al., Impact of ABCB1 genetic polymorphism on…, Drug metabolism and persona… (2024) | pgx | 5 | [10.1515/dmpt-2023-0054](https://doi.org/10.1515/dmpt-2023-0054) | [38507296](https://www.ncbi.nlm.nih.gov/pubmed/38507296) | metadata signals extractable PGX data (ABCB1) |
| `Nagai_1995.pdf` | Nagai F et al., Mapping of rat bilirubin UDP-glucuronos…, Cytogenetics and cell genet… (1995) | pgx | 5 | [10.1159/000133957](https://doi.org/10.1159/000133957) | [7698007](https://www.ncbi.nlm.nih.gov/pubmed/7698007) | metadata signals extractable PGX data (Ugt1a1) |
| `Nestorovska_2023.pdf` | Nestorovska KA et al., Co-Existence of CYP2C19*1/*2 and ABCB1c…, Balkan journal of medical g… (2023) | pgx | 5 | [10.2478/bjmg-2023-0023](https://doi.org/10.2478/bjmg-2023-0023) | [38482263](https://www.ncbi.nlm.nih.gov/pubmed/38482263) | metadata signals extractable PGX data (CYP2C19*1) |
| `Priyadarshini_2019.pdf` | Priyadarshini R et al., Influence of ABCB1 C3435T and C1236T ge…, Journal of clinical pharmac… (2019) | pgx | 5 | [10.1111/jcpt.12797](https://doi.org/10.1111/jcpt.12797) | [30637776](https://www.ncbi.nlm.nih.gov/pubmed/30637776) | metadata signals extractable PGX data (ABCB1) |
| `Priyadharsini_2014.pdf` | Priyadharsini R et al., Single nucleotide polymorphism of CYP3A…, Molecular biology reports (2014) | pgx | 5 | [10.1007/s11033-014-3613-8](https://doi.org/10.1007/s11033-014-3613-8) | [25112801](https://www.ncbi.nlm.nih.gov/pubmed/25112801) | metadata signals extractable PGX data (CYP3A5*3) |
| `Qiu_2018.pdf` | Qiu J et al., Association between polymorphisms in es…, Medicine (2018) | pgx | 5 | [10.1097/MD.0000000000013337](https://doi.org/10.1097/MD.0000000000013337) | [30461653](https://www.ncbi.nlm.nih.gov/pubmed/30461653) | metadata signals extractable PGX data (COMT) |
| `Rodrigues_2020.pdf` | Rodrigues JCG et al., Identification of NUDT15 gene variants…, PloS one (2020) | pgx | 5 | [10.1371/journal.pone.0231651](https://doi.org/10.1371/journal.pone.0231651) | [32294118](https://www.ncbi.nlm.nih.gov/pubmed/32294118) | metadata signals extractable PGX data (NUDT15) |

<sub>queue written 2026-09-28T20:49:42.670424+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abu_2009 | not_relevant | 0 | 0 | The paper describes anaerobic microbial degradation of benzene and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of phenol in humans. |
| popPK | Adhikary_2016 | irrelevant | 0 | 0 | The paper describes the synthesis and catalytic activity of manganese complexes, not the pharmacokinetics of phenol. |
| PGx | Adhikary_2021 | not_relevant | 0 | 0 | The paper investigates postharvest fruit quality in pears, not human pharmacogenomics or the pharmacokinetics of phenol. |
| popPK | Afshari_2017 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PD | Afshari_2017 | not_relevant | 0 | 0 | The paper studies the antioxidant effect of Cressa cretica leaf extracts on soybean oil, not the pharmacodynamics of phenol in a biological system. |
| PGx | Ahmed_2020 | not_relevant | 0 | 0 | The paper focuses on the synthesis of novel tamoxifen analogues to bypass CYP2D6 metabolism, not on the pharmacogenomics of phenol. |
| popPK | Ajao_2015 | irrelevant | 0 | 0 | The study investigates the mitochondrial toxicity of triclosan (a chlorophenol derivative) in vitro, not the pharmacokinetics of phenol. |
| PD | Ajao_2015 | not_relevant | 0 | 0 | The paper investigates the mitochondrial toxicity of triclosan, not phenol, and does not report specific numeric PD parameters for phenol. |
| PGx | Alaee_2016 | not_relevant | 0 | 0 | The study investigates the association between UGT1A1 polymorphism and neonatal jaundice (bilirubin levels), not the pharmacokinetics or pharmacodynamics of the drug phenol. |
| PGx | Althagafy_2013 | not_relevant | 0 | 0 | The paper investigates the chemical synthesis and biological activity of silymarin analogues, not the pharmacogenomics of phenol. |
| popPK | Anderson_1988 | irrelevant | 0 | 0 | The study focuses on microbial toxicity and growth kinetics (EC50, growth rates) rather than pharmacokinetic disposition parameters (CL, V, ka) for phenol. |
| PGx | Arun_2015 | not_relevant | 0 | 0 | The paper investigates the association of CYP gene polymorphisms with myocardial infarction risk, not the pharmacokinetics or pharmacodynamics of the drug phenol. |
| popPK | Babamir_2024 | irrelevant | 0 | 0 | The study evaluates the antioxidant effects of oak extract in thalassemia patients and does not report pharmacokinetic parameters for phenol. |
| PGx | Bagudam_2025 | not_relevant | 0 | 0 | The paper studies plant physiology and transcriptomics in groundnut, not human pharmacogenomics or drug pharmacokinetics. |
| PGx | Balakrishnan_2020 | not_relevant | 0 | 0 | The paper discusses phenytoin, not phenol, and reports a case of gingival enlargement without quantifying PK/PD parameters. |
| PD | Barlocco_1993 | not_relevant | 0 | 0 | The paper focuses on structure-affinity relationships and molecular modeling for mu-opioid receptor binding, not on phenol pharmacodynamics or exposure-response relationships. |
| popPK | Beattie_2007 | irrelevant | 0 | 0 | The study investigates foliar uptake kinetics in plant leaves, not pharmacokinetic disposition parameters (CL, V, etc.) in humans or animals. |
| popPK | Beckmann_1994 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | Beckmann_1994 | not_relevant | 0 | 0 | The paper focuses on the regulation of enzyme expression by hydrocortisone, not on the pharmacodynamic or exposure-response relationship of phenol itself. |
| popPK | Bedoux_2012 | irrelevant | 0 | 0 | The paper is a review of the environmental fate and occurrence of triclosan (TCS), not a pharmacokinetic study of phenol. |
| PD | Bedoux_2012 | not_relevant | 0 | 0 | The paper is a review of the environmental occurrence and toxicity of triclosan, not a pharmacodynamic study of phenol, and does not report numeric PD parameters. |
| popPK | Berthet_2010 | irrelevant | 2 | 0 | The paper is a simulation study on biological monitoring variability for 14 chemicals including phenol, but it does not report specific quantitative PK parameter values (CL, V, etc.) for phenol in the provided evidence, referring instead to an Appendix/Table IV not included. |
| PD | Biernacki_2022 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and in vivo tumor growth inhibition percentages at a single dose, but does not provide a concentration-effect curve, dose-response relationship, or PK/PD model parameters for phenol. |
| PGx | Bock_1992 | not_relevant | 0 | 0 | The paper studies the metabolism of chrysene and benzo(a)pyrene phenols, not the drug phenol, and focuses on enzyme induction rather than genetic variation. |
| PGx | Bock_1993 | not_relevant | 0 | 0 | The paper investigates the metabolism of paracetamol by phenol UDP-glucuronosyltransferases, not the pharmacokinetics or pharmacodynamics of the drug phenol itself. |
| popPK | Bommarito_2024 | irrelevant | 0 | 0 | The study is an epidemiological investigation of fetal growth associations with phenol exposure biomarkers, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Bono_2025 | irrelevant | 0 | 0 | The paper is an in silico study on UGT-mediated metabolism prediction and does not report pharmacokinetic parameters for phenol. |
| PD | Bono_2025 | not_relevant | 0 | 0 | The paper focuses on in silico prediction of UGT-mediated metabolism using machine learning and does not report any pharmacodynamic or exposure-response data for phenol. |
| PGx | Boronat_2019 | not_relevant | 2 | 5 | The study investigates the pharmacogenomics of tyrosol (a dietary phenol) and its conversion to hydroxytyrosol, not the pharmacokinetics or pharmacodynamics of the drug phenol. |
| PD | Boroomand_2018 | not_relevant | 0 | 0 | The paper reports phytochemical composition and antioxidant activity (IC50) of plant extracts, not a pharmacodynamic exposure-response relationship for the drug phenol. |
| popPK | Briguglio_2018 | irrelevant | 0 | 0 | The paper is a review of food-drug interactions and does not report quantitative pharmacokinetic parameters for phenol. |
| PD | Briguglio_2018 | not_relevant | 1 | 0 | The paper is a general review of food-drug interactions and does not report specific numeric PD parameters or exposure-response relationships for phenol. |
| PGx | Carvalho_2014 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of azathioprine (a thiopurine), not phenol. |
| PGx | Charles_2014 | not_relevant | 0 | 0 | The paper investigates phenytoin, not phenol, and reports only genotype frequencies without measuring pharmacokinetic or pharmacodynamic parameters. |
| PGx | Chatuphonprasert_2022 | not_relevant | 0 | 0 | The study investigates the effect of pineapple juice on gene expression in cells, not the effect of a genetic variant on the pharmacokinetics or pharmacodynamics of phenol. |
| PGx | Cheng_2025 | not_relevant | 0 | 0 | The paper describes a novel metabolic cross-coupling mechanism between phenol and arylamines but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Chiba_1997 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on propafenone analogs and does not report pharmacokinetic parameters for phenol. |
| PD | Chiba_1997 | not_relevant | 4 | 2 | The paper reports EC50 values for a series of analogs, but the specific numeric values are not provided in the text, making them non-extractable. |
| popPK | Chiesi_1994 | irrelevant | 0 | 0 | The paper describes the in-vitro mechanism of tannin (a plant phenol) on cardiac enzymes, not the pharmacokinetics of the drug phenol. |
| PGx | Cho_2014 | not_relevant | 0 | 0 | The paper investigates the effect of honokiol on drug-metabolizing enzymes, not the effect of a gene variant on the PK/PD of phenol. |
| PGx | Clark_1977 | not_relevant | 0 | 0 | The paper studies RNA synthesis rates in Drosophila and uses phenol only as a chemical reagent for RNA extraction, not as a drug subject to pharmacogenomic analysis. |
| popPK | Clark_2026 | irrelevant | 0 | 0 | The paper is a clinical trial for an IL-2 delivery system in ovarian cancer and does not study phenol pharmacokinetics. |
| PD | Clark_2026 | not_relevant | 0 | 0 | The paper describes a Phase I trial of an IL-2 delivery system (AVB-001) and reports qualitative dose-dependent PK and immunologic effects, but it does not report any pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for phenol. |
| PGx | Cui_2005 | not_relevant | 0 | 0 | The paper studies SNPs in HDL metabolism genes (ABCA1, CETP, LPL) and uses phenol only as a reagent for DNA extraction, not as a drug subject to pharmacogenomic analysis. |
| PD | DALLEMAGNE_1946 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| PGx | Darbyshire_1996 | not_relevant | 0 | 0 | The paper studies the mechanism of warfarin hydroxylation using deuterium isotope effects, not the pharmacogenomics of phenol. |
| PGx | Das_2018 | not_relevant | 0 | 0 | The paper investigates the impact of soil nutrients on the yield of Carlinoside and its effect on UGT1A1 activity in hepatitis models, not the pharmacogenomics of phenol. |
| PGx | Das_2025 | not_relevant | 0 | 0 | The paper is a network pharmacology study of a plant extract and does not report pharmacogenomic effects on the PK/PD of phenol. |
| PGx | Dengta_2024 | not_relevant | 0 | 0 | The paper studies plant genetics and pest resistance, not human pharmacogenomics or the pharmacokinetics of phenol as a drug. |
| PGx | Dhivya_2024 | not_relevant | 0 | 0 | The study investigates the pharmacogenomics of carbamazepine, not phenol; phenol is only mentioned as a reagent for DNA extraction. |
| PGx | Dooley_1998 | not_relevant | 0 | 0 | The paper describes the cloning and genomic organization of phenol sulfotransferase genes but does not report specific pharmacokinetic or pharmacodynamic parameter changes associated with specific genotypes. |
| popPK | Dueva_2020 | irrelevant | 0 | 0 | no_text gate: only 123 chars of text extracted (&lt; 400) |
| PD | Dueva_2020 | not_relevant | 0 | 0 | The paper studies 4-aminopyrimidine N-oxides, not phenol, and does not report any pharmacodynamic parameters for phenol. |
| popPK | Duprat_2026 | irrelevant | 0 | 0 | The paper studies quercetin in prostate cancer cells and does not involve phenol or pharmacokinetic parameters. |
| PGx | Dvořák_2024 | not_relevant | 0 | 0 | The paper profiles the pharmacokinetics of FKK6, not phenol, and does not report pharmacogenomic effects. |
| popPK | Enger_2016 | irrelevant | 0 | 0 | The paper is a meta-analysis of teat dip efficacy trials in veterinary medicine where phenol is a topical antimicrobial agent, not a study of phenol pharmacokinetics. |
| PD | Farina_1993 | not_relevant | 3 | 2 | The paper reports an IC50 and a qualitative comparison of plasma levels to the IC50, but does not provide a dose-response curve, Emax, or a formal PK/PD model fit with extractable numeric PD parameters. |
| PGx | Favari_2024 | not_relevant | 0 | 0 | The paper is a systematic review of dietary (poly)phenols, not a study on the pharmacogenomics of the drug phenol. |
| popPK | Figueredo_2015 | irrelevant | 0 | 0 | no_text gate: only 46 chars of text extracted (&lt; 400) |
| PD | Figueredo_2015 | not_relevant | 0 | 0 | The paper describes a bioassay for P. putida toxicity and does not report a pharmacodynamic or exposure-response relationship for phenol with numeric PD parameters. |
| popPK | Foszpańczyk_2018 | irrelevant | 0 | 0 | The paper is an environmental chemistry study on the photodegradation of phenol in water, not a pharmacokinetic study, and contains no PK parameters. |
| PD | Foszpańczyk_2018 | not_relevant | 2 | 1 | The paper reports environmental toxicity (EC50) of a mixture during photodegradation, not a pharmacodynamic exposure-response relationship for phenol in a biological system. |
| popPK | Fragen_1983 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Fragen_1983 | not_relevant | 0 | 0 | The paper studies diisopropyl phenol (ICI 35868), not phenol, and focuses on in vitro neuromuscular blocking interactions rather than a pharmacodynamic exposure-response relationship for phenol. |
| PGx | Furman_2011 | not_relevant | 0 | 0 | The paper describes the metabolic activation pathway of PSI-353661, where phenol is merely a byproduct of metabolism, and does not report pharmacogenomic effects on the PK/PD of phenol itself. |
| popPK | Gama-Franceschi_2026 | irrelevant | 0 | 0 | The paper describes a bioluminescence imaging tool (PrismaLuc) and does not involve the drug phenol or report any pharmacokinetic parameters. |
| PD | Gama-Franceschi_2026 | not_relevant | 0 | 0 | The paper describes a bioluminescence imaging tool (PrismaLuc) and does not report any pharmacodynamic or exposure-response relationship for phenol. |
| popPK | Gamage_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study on dietary polyphenol intake and depression, not a pharmacokinetic study of the drug phenol. |
| popPK | Gao_2024 | irrelevant | 0 | 0 | The paper studies the fungicide cyazofamid and mentions phenol only as a plant metabolite content measurement, not as a subject drug for pharmacokinetic analysis. |
| PD | Gao_2024 | not_relevant | 0 | 0 | The paper reports an EC50 for the fungicide cyazofamid, not phenol, and the mention of phenol is limited to a qualitative comparison of fruit quality metrics without any dose-response or exposure-response analysis. |
| popPK | Ge_2010 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on algal growth inhibition and does not report pharmacokinetic parameters for phenol. |
| popPK | Gong_2026 | irrelevant | 0 | 0 | The paper is a natural product isolation and biological activity study, not a pharmacokinetic study, and phenol is only mentioned as a structural component of isolated compounds. |
| PD | Gong_2026 | not_relevant | 0 | 0 | The paper reports EC50 values for specific fungal isolates (Phytophthora capsici and Botrytis cinerea) against isolated compounds, not a pharmacodynamic exposure-response relationship for the drug phenol in a mammalian or relevant biological system. |
| PD | Grassman_1993 | not_relevant | 0 | 0 | The paper focuses on the development of an immunoassay for benzene hemoglobin adducts and does not report any pharmacodynamic or exposure-response relationship for phenol. |
| PGx | Guo_2024 | not_relevant | 0 | 0 | The paper studies the metabolism of the herbicide chlortoluron, not the drug phenol, and does not report pharmacogenomic effects on phenol PK/PD. |
| popPK | Görge_1987 | relevant | 8 | 2 | The study reports a two-compartment model for phenol in frogs, but specific numeric parameter values (CL, V, ka) are not present in the provided evidence. |
| PD | Görlitzer_2004 | not_relevant | 0 | 0 | The paper reports an IC50 for a novel benzofuro[3,2-b]pyridin-4-yl-amine compound, not for phenol, and does not describe a pharmacodynamic model or exposure-response relationship for phenol. |
| PD | Görlitzer_2007 | not_relevant | 3 | 3 | The paper reports in vitro IC50 values for a series of synthesized compounds, which is a standard pharmacological screening result, but it does not report a pharmacokinetic (PK) or exposure-response (PD) relationship for the specific drug "phenol" (which is a reactant, not the active drug) nor does it provide a dose-response curve or model parameters for a single drug's exposure-effect relationship. |
| PGx | Haigler_1992 | not_relevant | 0 | 0 | The paper describes microbial biodegradation of phenol by Pseudomonas sp. strain JS150, not human pharmacogenomics or PK/PD parameters. |
| PGx | Han_2024 | not_relevant | 0 | 0 | The paper discusses polyphenols as potential therapeutic agents for liver injury using network analysis, not the pharmacogenomics of phenol as a drug. |
| PD | Harper_1994 | not_relevant | 3 | 2 | The paper reports a single in vitro IC50 value for a specific compound in a binding assay, which is a pharmacological potency metric rather than a pharmacodynamic exposure-response or dose-response relationship with derivable PD parameters (like Emax, E0, or slope) in a biological system. |
| popPK | Harper_2025 | irrelevant | 0 | 0 | The paper focuses on calpain inhibitors and breast cancer metastasis, not the pharmacokinetics of phenol. |
| PD | Harper_2025 | not_relevant | 0 | 0 | The paper investigates the biological role of calpain isoforms in breast cancer metastasis using genetic knockouts and a peptide inhibitor, but does not report a pharmacodynamic exposure-response or dose-response relationship for phenol. |
| PGx | Harris_2014 | not_relevant | 0 | 0 | The paper focuses on the metabolism of an environmental contaminant (PCB-30) and does not report pharmacogenomic effects on the PK/PD of phenol. |
| PGx | Hassan_2022 | not_relevant | 0 | 0 | The paper reports on novel tamoxifen analogues and their potency in cancer cell lines, not the pharmacogenomics of phenol. |
| popPK | Hinojosa_2026 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on TRPV1 activation and respiratory irritation, not a pharmacokinetic study, and contains no disposition parameters for phenol. |
| popPK | Hornsby_1985 | irrelevant | 0 | 0 | no_text gate: only 157 chars of text extracted (&lt; 400) |
| popPK | Huang_2021 | irrelevant | 0 | 0 | no_text gate: only 62 chars of text extracted (&lt; 400) |
| PD | Huang_2021 | not_relevant | 0 | 0 | The paper focuses on the optimization of 4-anilinoquinolines as Dengue virus inhibitors and does not report any pharmacodynamic or exposure-response data for phenol. |
| PGx | Hussain_2023 | not_relevant | 0 | 0 | The paper discusses plant physiology and resistance to fungal wilt, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of phenol as a drug. |
| popPK | Huwaimel_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on estrogen receptor modulators and does not report pharmacokinetic parameters for phenol. |
| PGx | Ikushiro_1995 | not_relevant | 0 | 0 | The paper studies UGT1 isozyme expression and drug induction in rats, not the effect of a specific gene variant on the PK/PD of phenol. |
| popPK | Imani_2025 | irrelevant | 0 | 0 | The paper focuses on the synthesis of wound dressings using lawsone from Lawsonia inermis and does not report pharmacokinetic parameters for phenol. |
| PD | Imani_2025 | not_relevant | 0 | 0 | The paper focuses on the extraction of lawsone from Lawsonia inermis and the preparation of dressings, with no mention of phenol or any pharmacodynamic modeling. |
| PGx | Iorio_2014 | not_relevant | 0 | 0 | The paper investigates GST gene polymorphisms in Basque populations but does not report pharmacokinetic or pharmacodynamic parameters for phenol. |
| PGx | Isenberg_1963 | not_relevant | 0 | 0 | The paper discusses phenol as a solvent for extracting Candida albicans cell surface materials, not as a drug subject to pharmacogenomic analysis. |
| popPK | Jana_2026 | irrelevant | 0 | 0 | The paper describes an antifungal metabolite (SM06) and its mechanism of action, containing no pharmacokinetic data for phenol. |
| PD | Jana_2026 | not_relevant | 0 | 0 | The paper describes the isolation and mechanism of action of a novel antifungal metabolite (SM06), not phenol, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Jiang_2026 | irrelevant | 0 | 0 | The paper describes the structural biology and inhibition of the enzyme FUT8, not the pharmacokinetics of the drug phenol. |
| popPK | Johnson_1992 | irrelevant | 0 | 0 | The paper is a neuropharmacological study on dopamine receptors and tyrosine hydroxylase inhibition, not a pharmacokinetic study of phenol. |
| PD | Johnson_1992 | not_relevant | 0 | 0 | The paper reports pharmacological data for dopamine and D1/D2 agonists (SKF 38393, RU 24926), not phenol. |
| PGx | Joo_2015 | not_relevant | 0 | 0 | The paper studies the metabolism of GSK5182, not phenol, and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Kadlubar_1995 | not_relevant | 0 | 0 | The paper discusses genetic polymorphisms affecting DNA adduct formation from carcinogens (aromatic amines and PAHs), not the pharmacokinetics or pharmacodynamics of the drug phenol. |
| popPK | Kamarunzaman_2026 | irrelevant | 0 | 0 | The study investigates the effects of cranberry (poly)phenol supplementation on mental health and cortisol levels, not the pharmacokinetics of the specific drug phenol. |
| PGx | Kapoor_2026 | not_relevant | 0 | 0 | The paper studies plant pathology (pigeonpea sterility mosaic disease) and does not involve human pharmacogenomics or the drug phenol. |
| PD | Kawasaki_1999 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any scientific content regarding phenol or pharmacodynamics. |
| popPK | Ke_2014 | irrelevant | 0 | 0 | The paper describes the synthesis and antifungal activity of phenol derivatives, not the pharmacokinetics of phenol itself. |
| PGx | Kerr_1994 | not_relevant | 0 | 0 | The paper studies carbamazepine metabolism, not phenol, and does not report pharmacogenomic effects on phenol PK/PD. |
| PGx | Klieber_2014 | not_relevant | 0 | 0 | The paper studies the metabolism of dronedarone, not phenol, and does not report pharmacogenomic effects on phenol PK/PD. |
| PGx | Koike_2008 | not_relevant | 0 | 0 | The study investigates the association between SULT1A1 polymorphism and prostate cancer risk, not the effect of the genotype on the pharmacokinetic or pharmacodynamic parameters of phenol. |
| PGx | Lang_1999 | not_relevant | 0 | 0 | The paper studies the metabolism of the carcinogen PhIP, not the drug phenol. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study on bicyclo[1.1.1]pentane derivatives and contains no pharmacokinetic data or phenol as a subject drug. |
| PD | Lee_2025 | not_relevant | 0 | 0 | The paper describes the chemical synthesis of bicyclo[1.1.1]pentane derivatives and contains no pharmacodynamic, exposure-response, or dose-response data for phenol or any other drug. |
| PGx | Leiter_1994 | not_relevant | 0 | 0 | The paper studies the effect of the db gene on sex steroid sulfotransferase expression and activity, not the pharmacokinetics or pharmacodynamics of phenol. |
| PGx | Liang_2015 | not_relevant | 0 | 0 | The paper studies the metabolism of daphnetin (a natural product), not the drug phenol, and does not report pharmacogenomic effects on phenol PK/PD. |
| PGx | Lin_2004 | not_relevant | 0 | 0 | The paper studies the metabolism of skatole (a xenobiotic/endogenous compound) in pigs, not the pharmacokinetics or pharmacodynamics of the drug phenol. |
| PGx | Liu_2013 | not_relevant | 0 | 0 | The paper investigates the inhibition of CYP enzymes by norendoxifen (a metabolite of tamoxifen) and does not report pharmacogenomic effects on the PK/PD of phenol. |
| popPK | Liu_2020 | irrelevant | 0 | 0 | The paper studies antioxidant activities of mushroom extracts and mentions phenol only as a content measurement (total phenol content), not as a subject drug for pharmacokinetic analysis. |
| PD | Liu_2020 | not_relevant | 0 | 0 | The paper reports antioxidant activity of mushroom extracts (EC50 for the extracts) and total phenol content, but does not report a pharmacodynamic or exposure-response relationship for the drug phenol itself. |
| PGx | Liu_2022 | not_relevant | 0 | 0 | The paper describes a novel metabolic pathway for phenolic pollutants (like BPA) but does not report pharmacogenomic effects (gene variants) on the PK/PD of phenol. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ciprofol, not phenol. |
| PD | Liu_2024 | not_relevant | 0 | 0 | The paper analyzes ciprofol, not phenol, and reports no meaningful association between exposure and hypotension. |
| PGx | Locuson_2003 | not_relevant | 0 | 0 | The paper investigates CYP2C9 inhibitor binding affinities (Ki) of benzbromarone derivatives, not the pharmacokinetics or pharmacodynamics of phenol itself, nor does it report pharmacogenomic effects. |
| PGx | Luks_2016 | not_relevant | 0 | 0 | The paper studies the metabolism of the herbicide clodinafop-propargyl in plant cell cultures, not the pharmacokinetics or pharmacodynamics of phenol in humans. |
| popPK | Macáková_2009 | irrelevant | 0 | 0 | The paper studies free-radical scavenging activity of mushroom extracts and mentions phenol only as a content measurement, not as a subject drug for pharmacokinetic analysis. |
| PD | Macáková_2009 | not_relevant | 0 | 0 | The paper reports antioxidant activity (EC50) of mushroom extracts, not a pharmacodynamic or exposure-response relationship for the drug phenol. |
| popPK | Macáková_2010 | irrelevant | 0 | 0 | The paper studies free-radical scavenging activity of mushroom extracts and mentions phenol only as a chemical content measurement, not as a subject drug for pharmacokinetic analysis. |
| PD | Macáková_2010 | not_relevant | 0 | 0 | The paper reports antioxidant activity (EC50) of mushroom extracts, not a pharmacodynamic or exposure-response relationship for the drug phenol. |
| PGx | Mancy_1995 | not_relevant | 0 | 0 | The paper investigates the structural requirements for CYP2C9 substrate binding using tienilic acid derivatives and does not report pharmacogenomic effects on phenol PK/PD. |
| PGx | Manzoor_2025 | not_relevant | 0 | 0 | The paper investigates the genetic basis of phenol content in buckwheat plants, not the pharmacokinetics or pharmacodynamics of phenol in humans. |
| PD | Massaad_1998 | not_relevant | 0 | 0 | The paper describes molecular mechanisms of estrogen receptor binding and transcriptional activation, not a pharmacodynamic exposure-response relationship for phenol. |
| popPK | Maus_1989 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on striatal neurons and does not report pharmacokinetic parameters for phenol. |
| PD | Maus_1989 | not_relevant | 0 | 0 | The paper investigates the effect of 17-beta oestradiol on adenylate cyclase activity and mentions phenol red only as a control for additive effects, providing no pharmacodynamic or exposure-response data for phenol. |
| popPK | Mellick_1999 | irrelevant | 2 | 0 | The study focuses on the hepatic disposition of 11 different phenolic compounds in an in situ rat liver perfusion model, not the systemic population pharmacokinetics of phenol specifically, and no numeric PK parameters for phenol are provided in the evidence. |
| PGx | Melnikova_2020 | not_relevant | 0 | 0 | The paper investigates genetic associations with the risk of developing Type 2 Diabetes, not the pharmacokinetics or pharmacodynamics of phenol. |
| popPK | Melnyk_2026 | irrelevant | 0 | 0 | The paper describes a synthetic organic chemistry protocol for deoxyfluorination of boronates and contains no pharmacokinetic data or parameters for phenol. |
| PD | Melnyk_2026 | not_relevant | 0 | 0 | The paper describes a synthetic organic chemistry protocol for deoxyfluorination of boronates and contains no pharmacodynamic, exposure-response, or dose-response data. |
| PGx | Meng_2018 | not_relevant | 0 | 0 | The paper investigates the antioxidant effects of resveratrol in sows and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Mhamdi_2015 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Mhamdi_2015 | not_relevant | 0 | 0 | The paper analyzes the chemical composition and biological activities of Ononis natrix, not the pharmacodynamics of phenol. |
| popPK | Mibu_2005 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and antiviral activity of phenol derivatives, not a pharmacokinetic study of phenol. |
| PD | Mibu_2005 | not_relevant | 0 | 0 | The paper reports the synthesis of phenol derivatives and their antiviral potency (EC50) in vitro, but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for phenol itself. |
| PD | Michael_1984 | not_relevant | 0 | 0 | The paper describes a virology experiment regarding TMV expression in cell-free extracts; phenol is mentioned only as a method for RNA extraction, not as a drug with a pharmacodynamic or dose-response relationship. |
| popPK | Minutolo_2009 | irrelevant | 0 | 0 | The paper focuses on the structural development of salicylaldoximes as estrogen receptor ligands and does not report pharmacokinetic parameters for phenol. |
| PGx | Moghrabi_1992 | not_relevant | 0 | 0 | The paper reports the chromosomal assignment of UGT genes but does not report any pharmacokinetic or pharmacodynamic effects of phenol. |
| popPK | Murthy_2017 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Murthy_2017 | not_relevant | 0 | 0 | The paper studies the larvicidal and antioxidant activities of latex from Garcinia morella, not the pharmacodynamics of phenol. |
| PGx | Münzel_1994 | not_relevant | 0 | 0 | The paper investigates tissue-specific expression and induction of UGT1A1 in rats, not the effect of a human gene variant on the pharmacokinetics or pharmacodynamics of phenol. |
| PGx | Nagai_1995 | not_relevant | 0 | 0 | The paper reports the chromosomal localization of the Ugt1a1 gene in rats and does not report any pharmacokinetic or pharmacodynamic effects of phenol or any other drug. |
| PGx | Nagpal_2015 | not_relevant | 0 | 0 | The paper describes a diagnostic assay for butyrylcholinesterase activity using phenol as a chemical reagent, not a pharmacogenomic study of phenol as a drug. |
| PGx | Najafi_2020 | not_relevant | 0 | 0 | The paper investigates the effects of sulfur nanoparticles on lettuce plants, not the pharmacokinetics or pharmacodynamics of phenol in humans or animals. |
| popPK | Nakamura_2013 | irrelevant | 0 | 0 | The paper studies biofilm formation in Listeria monocytogenes and uses phenol only as a reagent in the phenol-sulfuric acid method for glucose quantification, not as a subject drug for pharmacokinetic analysis. |
| PGx | Nakanishi_2003 | not_relevant | 0 | 0 | The paper studies the effect of PON1 genotypes on the enzymatic hydrolysis of phenyl acetate and paraoxon, not the pharmacokinetics or pharmacodynamics of the drug phenol. |
| PGx | Nestorovska_2023 | not_relevant | 0 | 0 | The paper studies clopidogrel, not phenol, and reports clinical outcomes (MACE) rather than specific PK/PD parameters. |
| popPK | Nishida_1995 | irrelevant | 0 | 0 | The study investigates phenol red (a dye), not phenol, as the subject drug. |
| popPK | Nishida_1997 | irrelevant | 0 | 0 | The study investigates phenol red (a dye), not phenol (the drug), and thus does not report PK parameters for the subject drug. |
| popPK | Nishida_2001 | irrelevant | 0 | 0 | The study investigates phenolsulphonphthalein (phenol red), not phenol, as the subject drug. |
| PGx | Nishida_2007 | not_relevant | 0 | 0 | The paper investigates the metabolism of CJ-036878, not phenol, and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Niu_2011 | not_relevant | 0 | 0 | The paper focuses on computational docking of CYP2B6 substrates and does not report pharmacogenomic effects on the PK/PD of phenol. |
| popPK | Ohta_2013 | irrelevant | 0 | 0 | The paper focuses on the synthesis and receptor binding affinity of carboranyl phenols, not on the pharmacokinetics of the drug phenol. |
| PGx | Orzechowski_1994 | not_relevant | 0 | 0 | The paper studies the metabolism of 4-aminobiphenyl, not phenol, and focuses on enzyme induction rather than genetic variants. |
| popPK | Paixão_2018 | irrelevant | 0 | 0 | The study investigates phenol red (a non-absorbable dye), not phenol, and focuses on gastric emptying modeling rather than systemic pharmacokinetic parameters. |
| PGx | Palugulla_2017 | not_relevant | 0 | 0 | The paper studies oxaliplatin-induced neuropathy, not phenol, and phenol is only mentioned as a reagent for DNA extraction. |
| PGx | Palugulla_2018 | not_relevant | 0 | 0 | The study investigates oxaliplatin-induced neuropathy, not the pharmacokinetics or pharmacodynamics of phenol. |
| popPK | Pan_1995 | irrelevant | 0 | 0 | The paper is an in-vitro cell culture study using phenol red as a permeability tracer, not a pharmacokinetic study of phenol. |
| popPK | Parker_2011 | irrelevant | 0 | 0 | The paper is a pharmacological study on GABA(B) autoreceptors using oximino-propofol analogues, not a pharmacokinetic study of phenol. |
| PD | Parker_2011 | not_relevant | 0 | 0 | The paper studies oximino-propofol analogues at GABA(B) receptors, not phenol, and does not report a PD relationship for phenol. |
| PGx | Pazmiño_1980 | not_relevant | 0 | 0 | The paper studies TPMT activity in uremia and mentions phenol-O-methyltransferase only as a secondary enzyme for correlation, without reporting pharmacogenomic effects on phenol PK/PD. |
| popPK | Pekari_1991 | irrelevant | 0 | 0 | The study focuses on chlorinated phenols (tri-, tetra-, and pentachlorophenol) rather than phenol itself, and reports parameters for these specific derivatives, not the parent drug phenol. |
| PGx | Peng_2022 | not_relevant | 0 | 0 | The paper investigates the interaction between gut microbial metabolites and environmental contaminants (BPA), not the pharmacogenomics of the drug phenol. |
| popPK | Pierrehumbert_2002 | relevant | 8 | 0 | The paper describes a compartmental toxicokinetic model for phenol, but the specific numeric parameter values are not present in the provided evidence. |
| PGx | Pingili_2019 | not_relevant | 0 | 0 | The study investigates the effect of a chemical inhibitor (chrysin) on paracetamol metabolism, not a genetic variant or pharmacogenomic effect. |
| popPK | Plakas_1992 | irrelevant | 0 | 0 | The study investigates phenol red, not phenol, which is a different chemical compound. |
| PD | Ponpipom_1987 | not_relevant | 0 | 0 | The paper reports IC50 values for kadsurenone analogues, not phenol, and focuses on structure-activity relationships rather than a pharmacodynamic exposure-response model for the specified drug. |
| PGx | Popović_2017 | not_relevant | 0 | 0 | The paper studies plant physiology and water stress in poplar tissue culture, not human pharmacogenomics or the pharmacokinetics of phenol. |
| popPK | Pozo_2026 | irrelevant | 0 | 0 | The paper focuses on glycine's role in hepatocyte maturation and xenobiotic metabolism mechanisms, not on the pharmacokinetic parameters of phenol. |
| PD | Pozo_2026 | not_relevant | 0 | 0 | The paper focuses on glycine's role in hepatocyte maturation and metabolism, not on the pharmacodynamics of phenol. |
| PGx | Prakash_2022 | not_relevant | 0 | 0 | The paper discusses molecular docking and ADMET properties of a plant compound against SARS-CoV-2, not the pharmacogenomics of phenol. |
| PGx | Priyadarshini_2019 | not_relevant | 0 | 0 | The paper studies the effect of ABCB1 polymorphisms on docetaxel response, not phenol. |
| PGx | Priyadarshini_2021 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on docetaxel, not phenol. |
| PGx | Priyadharsini_2014 | not_relevant | 0 | 0 | The paper studies the effect of CYP3A5*3 on clopidogrel resistance, not phenol. |
| popPK | Pu_2008 | irrelevant | 0 | 0 | The paper is a phytochemical study on lignans and sesquiterpenoids from Kadsura longipedunculata, not a pharmacokinetic study of phenol. |
| PD | Pu_2008 | not_relevant | 0 | 0 | The paper reports the isolation of natural compounds and a single EC50 value for a specific lignan (Compound 2), not a pharmacodynamic or exposure-response relationship for the drug phenol. |
| PD | Qiu_2017 | not_relevant | 0 | 0 | The paper focuses on constituents of Vitex negundo and nitric oxide inhibition, with no mention of phenol or any exposure-response relationship for it. |
| PGx | Qiu_2018 | not_relevant | 0 | 0 | The paper investigates the association between gene polymorphisms and breast cancer risk, not the pharmacokinetics or pharmacodynamics of phenol. |
| PGx | Raj_2017 | not_relevant | 0 | 0 | The paper reports allele frequencies of MATE1/MATE2 polymorphisms in a South Indian population but does not report any pharmacokinetic or pharmacodynamic effects of these variants on phenol. |
| PGx | Rocejanasaroj_2014 | not_relevant | 0 | 0 | The paper investigates the effect of a plant extract on gene expression in cells, not the effect of a human gene variant on the pharmacokinetics or pharmacodynamics of phenol. |
| PGx | Rodrigues_2020 | not_relevant | 0 | 0 | The paper reports NUDT15 variants affecting thiopurine metabolism, not phenol. |
| popPK | Roma_1994 | irrelevant | 0 | 0 | The study focuses on sulfobromophthalein and phenol-3,6-dibromophthalein as probes for hepatic transport, not phenol itself, and does not report PK parameters for phenol. |
| popPK | Rybak_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on antibiotic inhibitors of Staphylococcus aureus, not a pharmacokinetic study of phenol. |
| popPK | Sagami_2000 | irrelevant | 0 | 0 | The paper is a structural biology study on nitric-oxide synthase mutations and does not report pharmacokinetic parameters for phenol. |
| PD | Sagami_2000 | not_relevant | 0 | 0 | The paper investigates the structural role of amino acid residues in nitric-oxide synthase using site-directed mutagenesis, not the pharmacodynamics of phenol. |
| popPK | Sagués-Farreras_2026 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the metabolic effects of a (poly)phenol supplement, not a pharmacokinetic study reporting disposition parameters for phenol. |
| popPK | Saint_1998 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Saint_1998 | not_relevant | 0 | 0 | The paper investigates the effects of propofol, not phenol, on sodium currents. |
| PGx | Samgina_2022 | not_relevant | 0 | 0 | The paper investigates the association between GGT7 gene variants and the risk of developing acute pancreatitis, not the pharmacokinetics or pharmacodynamics of phenol. |
| PD | Sarkaria_1994 | not_relevant | 0 | 0 | The paper investigates the effect of 4-hydroxytamoxifen on radiation sensitivity, not phenol, and reports no concentration-effect relationship or numeric PD parameters for phenol. |
| popPK | Sawaki_2001 | irrelevant | 0 | 0 | The paper is a molecular biology study on fungal gene expression and uses phenol only as a reagent in RNA extraction, not as a subject drug for pharmacokinetic analysis. |
| PGx | Schwartz_2004 | not_relevant | 0 | 0 | The paper discusses pharmacogenetics of antihypertensive drugs (e.g., metoprolol, hydralazine) and mentions phenol sulfotransferase (SULT1A1) in the context of minoxidil metabolism, but does not report pharmacokinetic or pharmacodynamic parameters for the drug phenol itself. |
| popPK | Scow_1986 | irrelevant | 0 | 0 | The study investigates the kinetics of phenol mineralization in soil (environmental fate), not pharmacokinetic disposition parameters in a biological organism. |
| popPK | Seaton_1995 | irrelevant | 1 | 0 | The study focuses on in vitro enzymatic kinetics and steady-state concentrations of phenol as a benzene metabolite, not on the pharmacokinetic disposition parameters (CL, V, ka) of phenol as the subject drug. |
| popPK | Shah_2026 | irrelevant | 0 | 0 | The paper is a computational study on a plant extract where phenol is only a minor phytochemical component, and it reports no pharmacokinetic parameters. |
| PD | Shah_2026 | not_relevant | 0 | 0 | The paper is purely computational (molecular docking, MD, DFT) and reports binding affinities, not pharmacodynamic exposure-response or dose-response relationships with numeric PD parameters. |
| PGx | Shah_2026 | not_relevant | 0 | 0 | The paper is a computational study on a plant extract and does not report pharmacogenomic effects on the PK/PD of phenol. |
| popPK | Shahzadi_2026 | irrelevant | 0 | 0 | The paper investigates the antidiabetic effects of Fraxinus xanthoxyloides bark extract and does not study phenol or report any pharmacokinetic parameters. |
| PD | Shahzadi_2026 | not_relevant | 0 | 0 | The paper studies a plant extract (Fraxinus xanthoxyloides), not the specific drug phenol, and does not report any exposure-response or dose-response PD parameters for phenol. |
| popPK | Shan_2010 | irrelevant | 0 | 0 | The study focuses on the toxicokinetics of 4-nonylphenol (an isomer of nonylphenol) in earthworms, not the pharmacokinetics of phenol in humans or animals. |
| PGx | Shen_2012 | not_relevant | 0 | 0 | The paper studies the metabolism of flame retardants (PBDEs/TBBPA) in fish, not the pharmacogenomics of phenol in humans. |
| PGx | Shen_2014 | not_relevant | 0 | 0 | The paper studies the metabolism of neferine, not phenol, and does not report pharmacogenomic effects on phenol PK/PD. |
| popPK | Sheng_2024 | irrelevant | 0 | 0 | The paper focuses on the design and biological evaluation of phenol derivatives as ferroptosis inhibitors, reporting pharmacodynamic efficacy (EC50) rather than pharmacokinetic disposition parameters for phenol itself. |
| popPK | Simkins_1986 | irrelevant | 0 | 0 | The study focuses on microbial biodegradation kinetics in sewage, not pharmacokinetic disposition parameters (CL, V, etc.) for phenol in a biological host. |
| popPK | Sklorz_1994 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| PD | Sklorz_1994 | not_relevant | 0 | 0 | The paper focuses on a microbiological assay for activated sludge activity and does not report any pharmacodynamic or exposure-response data for phenol. |
| popPK | Spaenig_2026 | irrelevant | 2 | 0 | The paper is a review of generic PBK models for 26 chemicals, and while phenol is listed in a table, no specific quantitative PK parameter values (CL, V, ka, etc.) for phenol are provided in the evidence. |
| PD | Spaenig_2026 | not_relevant | 0 | 0 | The paper focuses on the performance of generic PBK models for predicting pharmacokinetic parameters (Cmax, AUC) for 26 chemicals, including phenol, but does not report any pharmacodynamic (PD) or exposure-response relationships. |
| PGx | Steinberg_1994 | not_relevant | 0 | 0 | The paper studies enzyme activities in rat oval cells and does not report pharmacogenomic effects on phenol PK/PD parameters. |
| PGx | Stupans_2001 | not_relevant | 0 | 0 | The paper investigates the in vitro inhibition of CYP enzymes by oleuropein, not the effect of a gene variant on the PK/PD of phenol. |
| PGx | Sun_2014 | not_relevant | 0 | 0 | The study investigates the glucuronidation of Armillarisin A, not phenol, and focuses on enzyme identification and species differences rather than human pharmacogenomic variants. |
| popPK | Sun_2023 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study on drimane meroterpenoids where phenol is mentioned only as a functional group tolerated in the reaction, not as a subject drug for pharmacokinetic analysis. |
| PD | Sun_2023 | not_relevant | 0 | 0 | The paper reports in vitro antifungal EC50 values for drimane meroterpenoids, not pharmacodynamic or exposure-response data for phenol. |
| PGx | Sundaram_1989 | not_relevant | 2 | 5 | The paper reports correlations of enzyme activity and thermal stability between tissues, but does not report a specific gene variant/genotype or its effect on a PK/PD parameter of phenol. |
| PGx | Suvorova_2019 | not_relevant | 0 | 0 | The paper focuses on comparative genomics and transcriptional regulation of aromatic metabolism in bacteria, not on human pharmacogenomics or PK/PD parameters of phenol as a drug. |
| popPK | Szallasi_1999 | irrelevant | 0 | 0 | no_text gate: only 143 chars of text extracted (&lt; 400) |
| PGx | Sánchez-Rodríguez_2011 | not_relevant | 0 | 0 | The paper studies plant physiology and phenolic metabolism in tomatoes, not human pharmacogenomics or the pharmacokinetics of phenol as a drug. |
| popPK | Sánchez_2005 | irrelevant | 0 | 0 | The study investigates enzyme kinetics and partitioning of ortho-nitro-phenol (a substrate/product) in a biochemical context, not the pharmacokinetics of phenol. |
| popPK | Sárközi_2007 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on the effects of phenol derivatives on sarcoplasmic reticulum enzymes, not a pharmacokinetic study. |
| popPK | Thoueille_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tenofovir and tenofovir alafenamide, not phenol. |
| PD | Thoueille_2023 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for tenofovir, not a pharmacodynamic (PD) or exposure-response model; no PD parameters (e.g., Emax, EC50) are reported. |
| popPK | Tomasek_2026 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action of OM-89 (Uro-Vaxom) in bladder epithelium and does not report pharmacokinetic parameters for phenol. |
| PD | Tomasek_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of OM-89 (Uro-Vaxom) on bladder epithelium and does not report any pharmacodynamic or exposure-response data for phenol. |
| PGx | Tosi_2025 | not_relevant | 2 | 0 | The paper is a systematic review of dietary (poly)phenols, not the specific drug phenol, and it reports associations without providing specific fitted effect sizes for a single compound. |
| popPK | Tran_2026 | irrelevant | 0 | 0 | The paper describes a protein engineering method (MULTI-evolve) and contains no pharmacokinetic data or parameters for phenol. |
| PD | Tran_2026 | not_relevant | 0 | 0 | The paper describes a protein engineering and directed evolution framework (MULTI-evolve) and contains no pharmacodynamic, exposure-response, or dose-response data for phenol or any other drug. |
| PGx | Treiber_2023 | not_relevant | 0 | 0 | The paper describes the metabolic pathway of daridorexant and the role of CYP3A4, but does not report pharmacogenomic effects (gene variants) on PK/PD parameters for phenol. |
| popPK | Tripathi_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on pyrazole derivatives as herbicides, not a pharmacokinetic study of phenol. |
| PGx | Umamaheswaran_2020 | not_relevant | 0 | 0 | The paper studies the pharmacogenomics of letrozole (an aromatase inhibitor), not phenol; phenol is only mentioned as a reagent for DNA extraction. |
| PGx | Umamaheswaran_2021 | not_relevant | 0 | 0 | The paper investigates the association between TCL1A gene polymorphisms and adverse events (musculoskeletal and vasomotor symptoms) in patients treated with letrozole, not phenol. |
| popPK | Van_2026 | irrelevant | 0 | 0 | The paper is a diagnostic study on exhaled breath VOCs for silicosis detection and does not report pharmacokinetic parameters for phenol. |
| PD | Van_2026 | not_relevant | 0 | 0 | The paper focuses on VOC breath profiling for silicosis detection and does not report any pharmacodynamic or exposure-response relationship for phenol. |
| PGx | Vang_1993 | not_relevant | 0 | 0 | The paper reports that CYP450 expression did not affect the inhibitory activity of phenol, and it does not report pharmacokinetic parameters or human genetic variants. |
| PGx | Vega_2026 | not_relevant | 0 | 0 | The paper studies plant physiology (oats) and silicon/nitrogen interactions, not human pharmacogenomics or phenol pharmacokinetics. |
| PD | Verotta_2007 | not_relevant | 3 | 2 | The paper reports a single IC50 value for hyperforin (a phenol-like compound) but does not provide a full concentration-effect curve, dose-response model, or other numeric PD parameters (like Emax or slope) to define a relationship. |
| popPK | Vione_2026 | irrelevant | 0 | 0 | The paper is an environmental photochemistry study modeling the fate of benzene and phenol in water and air, not a pharmacokinetic study of phenol as a drug. |
| popPK | Wang_2008 | irrelevant | 0 | 0 | The paper is a chemical engineering study on the photodegradation of chlorobenzene and does not report any pharmacokinetic parameters for phenol. |
| PD | Wang_2008 | not_relevant | 1 | 1 | The paper reports an EC50 for the total gaseous exhaust mixture, not a specific concentration-effect relationship or PD parameters for phenol alone. |
| PGx | Wang_2017 | not_relevant | 0 | 0 | The paper investigates the in vitro biological activity and metabolic stability of resveratrol imine analogs, not the pharmacogenomics of phenol. |
| popPK | Wang_2018 | irrelevant | 0 | 0 | The paper is an environmental engineering study on wastewater treatment and toxicity removal, not a pharmacokinetic study of phenol. |
| PD | Wang_2018 | not_relevant | 3 | 2 | The paper reports an EC50 for cumene hydroperoxide (CHP), not phenol, and focuses on wastewater treatment/toxicity removal rather than a pharmacodynamic exposure-response relationship for phenol. |
| popPK | Wei_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ferruginol, not phenol. |
| PGx | Willey_1996 | not_relevant | 0 | 0 | The paper reports gene expression profiles of xenobiotic metabolism enzymes in lung cells but does not report pharmacokinetic or pharmacodynamic parameters for phenol or any other specific drug. |
| popPK | Wu_2002 | irrelevant | 0 | 0 | no_text gate: only 40 chars of text extracted (&lt; 400) |
| PD | Wu_2002 | not_relevant | 0 | 0 | The paper discusses estrogenic effects from household stoves and does not report any pharmacodynamic or exposure-response analysis for phenol. |
| PD | Xie_2016 | not_relevant | 0 | 0 | The paper focuses on the isolation and characterization of new urushiols from Toxicodendron vernicifluum, not on the pharmacodynamics of phenol. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The paper describes the discovery of a YTHDC2 inhibitor using deep learning and reports IC50 values, but contains no pharmacokinetic data or disposition parameters for phenol. |
| PD | Yang_2026 | not_relevant | 0 | 0 | The paper reports in vitro binding affinities (IC50) for a YTHDC2 inhibitor, not a pharmacodynamic exposure-response relationship for phenol. |
| PD | Yu_2019 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for proteasome inhibition and cell viability, which are pharmacological potency metrics, but does not report a pharmacokinetic-pharmacodynamic (PK/PD) model, exposure-response relationship, or dose-response curve with derived PD parameters (e.g., Emax, EC50 in a PK context) for phenol or its derivatives in a biological system. |
| popPK | Yuan_2020 | irrelevant | 0 | 0 | The paper focuses on the synthesis and PET imaging of a benzimidazole derivative, where phenol is only mentioned as a chemical precursor, not as the subject drug for pharmacokinetic analysis. |
| PD | Yuan_2020 | not_relevant | 0 | 0 | The paper reports binding affinity (IC50) and allosteric modulation (EC50) for a benzimidazole derivative, not a pharmacodynamic exposure-response relationship for phenol. |
| popPK | Zamora_1983 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and mutagenicity assay, not a pharmacokinetic study, and reports no disposition parameters for phenol. |
| popPK | Zelice_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of a plant extract and uses phenol only as a chemical assay reagent (Folin-Ciocalteu) for quantification, not as a subject drug for pharmacokinetic analysis. |
| PD | Zelice_2020 | not_relevant | 0 | 0 | The study reports a single-dose in vivo effect and an in vitro antioxidant EC50 for a plant extract, but does not report a pharmacodynamic exposure-response or dose-response relationship for the specific compound phenol. |
| PD | Zeng_2019 | not_relevant | 2 | 1 | The paper reports MIC and IC50 values for an antimicrobial peptide (zp3), not a pharmacodynamic exposure-response relationship for the drug phenol. |
| popPK | Zeng_2024 | irrelevant | 0 | 0 | The paper investigates environmental degradation kinetics of phenols by pyrogenic carbon, not pharmacokinetic disposition parameters (CL, V, etc.) in biological systems. |
| PD | Zhang_2007 | not_relevant | 0 | 0 | The paper reports the isolation and structural elucidation of phenol A and its radical scavenging activity (IC50), but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for the drug in a biological system. |
| PGx | Zhang_2011 | not_relevant | 0 | 0 | The paper investigates genetic susceptibility to benzene toxicity using phenol as a toxicant, not the pharmacokinetics or pharmacodynamics of phenol as a therapeutic drug. |
| PGx | Zhao_2024 | not_relevant | 0 | 0 | The paper investigates the synergistic effects of a natural phenol compound (PCA) and 5-fluorouracil on liver cancer cells via ABCG2 inhibition, but does not report pharmacogenomic effects on the PK or PD of phenol itself. |
| PGx | Zhao_2026 | not_relevant | 0 | 0 | The paper describes microbial biodegradation of phenol in wastewater, not human pharmacogenomics or pharmacokinetics. |
| PD | Zinsstag_1991 | not_relevant | 4 | 2 | The paper describes a method to determine IC50 values for trypanocidal compounds but does not report specific numeric PD parameters or concentration-effect curves for phenol. |
| PGx | el_1993 | not_relevant | 0 | 0 | The paper studies the metabolism of naproxen by UGT1A1, not the pharmacokinetics or pharmacodynamics of phenol. |
| PGx | van_1990 | not_relevant | 0 | 0 | The paper studies breast cancer cell lines and hormone receptors, not the pharmacokinetics or pharmacodynamics of phenol. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 20:49 UTC</sub>
