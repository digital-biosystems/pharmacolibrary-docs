<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;sumatriptan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sumatriptan_Cosson1999_reference&quot;,&quot;label&quot;:&quot;Cosson_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sumatriptan/Sumatriptan_Cosson1999_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# sumatriptan

- **generic name:** sumatriptan
- **ATC codes:** `N02CC01`, `N02CC51`
- **DrugBank:** [DB00669](https://go.drugbank.com/drugs/DB00669) · **PubChem:** [CID 5358](https://pubchem.ncbi.nlm.nih.gov/compound/5358)
- **molar mass:** 295.4 g/mol (C14H21N3O2S) — DrugBank
- **groups:** approved, investigational

## About

Sumatriptan is a serotonin 5-HT1 receptor agonist used to treat migraine, including migraine with or without aura, and has also been used for giant cell arteritis. It is an approved antimigraine medicine, widely used, with products authorised across the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416978](https://www.wikidata.org/wiki/Q416978) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sumatriptan | parent | 295.4 | C14H21N3O2S | DrugBank | [5358](https://pubchem.ncbi.nlm.nih.gov/compound/5358) | Christensen_2003, Christensen_2004, Cosson_1999, Fox_2010, Ohk_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:42 | 2:47 | 1/3/1 | 1/0/4 | 0/0/0 | 127,262/25,858 | einfracz / qwen3.8-27b | 11 | 3/8 | 10/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Cosson_1999_reference](drugs/drug_sumatriptan/Sumatriptan_Cosson1999_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Cosson VF et al., Mixed effect modeling of sumatriptan ph…, Journal of pharmacokinetics… (1999) | [10.1023/a:1020601906027](https://doi.org/10.1023/a:1020601906027) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Christensen_2004_reference](drugs/drug_sumatriptan/Sumatriptan_Christensen2004_reference.md) | — | 1-compartment (no model) | 5 | Christensen ML et al., Pharmacokinetics of sumatriptan nasal s…, Journal of clinical pharmac… (2004) | [10.1177/0091270004263467](https://doi.org/10.1177/0091270004263467) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Christensen_2003_reference](drugs/drug_sumatriptan/Sumatriptan_Christensen2003_reference.md) | — | 1-compartment (no model) | 5 | Christensen ML et al., Pharmacokinetics of sumatriptan nasal s…, Journal of clinical pharmac… (2003) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Fox_2010_reference](drugs/drug_sumatriptan/Sumatriptan_Fox2010_reference.md) | — | 1-compartment (no model) | 2 | Fox AW, Subcutaneous sumatriptan pharmacokineti…, Headache (2010) | [10.1111/j.1526-4610.2009.01568.x](https://doi.org/10.1111/j.1526-4610.2009.01568.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ohk_2022_reference](drugs/drug_sumatriptan/Sumatriptan_Ohk2022_reference.md) | — | 1-compartment (no model) | 0 | Ohk B et al., Evaluation of sex differences in the ph…, Biopharmaceutics & drug dis… (2022) | [10.1002/bdd.2307](https://doi.org/10.1002/bdd.2307) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Longmore_1996_coronary_artery_contraction](drugs/drug_sumatriptan/pd_Longmore_1996_coronary_artery_contraction.md) | coronary artery contraction biomarker turnover ← sumatriptan | — | Longmore J et al., 5-HT1D receptor agonists and human coro…, British journal of clinical… (1996) | [10.1046/j.1365-2125.1996.04217.x](https://doi.org/10.1046/j.1365-2125.1996.04217.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Bax_1993_contractions_of_the_isolated_human_coronary_artery](drugs/drug_sumatriptan/pd_Bax_1993_contractions_of_the_isolated_human_coronary_artery.md) | contractions of the isolated human coronary artery ← sumatriptan · direct Emax (saturable) effect | model (no simulator) | Bax WA et al., 5-HT receptors mediating contractions o…, European journal of pharmac… (1993) | [10.1016/0014-2999(93)90995-t](https://doi.org/10.1016/0014-2999(93)90995-t) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Maas_2006_headache_response](drugs/drug_sumatriptan/pd_Maas_2006_headache_response.md) | headache response ← sumatriptan · categorical (graded) response model | — | Maas HJ et al., Prediction of headache response in migr…, Cephalalgia : an internatio… (2006) | [10.1111/j.1468-2982.2005.01050.x](https://doi.org/10.1111/j.1468-2982.2005.01050.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [MaassenVanDenBrink_1998_coronary_artery_contraction](drugs/drug_sumatriptan/pd_MaassenVanDenBrink_1998_coronary_artery_contraction.md) | coronary artery contraction ← sumatriptan · direct Emax (saturable) effect | model (no simulator) | MaassenVanDenBrink A et al., Coronary side-effect potential of curre…, Circulation (1998) | [10.1161/01.cir.98.1.25](https://doi.org/10.1161/01.cir.98.1.25) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [van_2002_CA_contraction](drugs/drug_sumatriptan/pd_van_2002_CA_contraction.md) | contraction of human coronary artery ← sumatriptan · direct Emax (saturable) effect | model (no simulator) | van den Broek RW et al., Comparison of contractile responses to…, European journal of pharmac… (2002) | [10.1016/s0014-2999(02)01576-5](https://doi.org/10.1016/s0014-2999(02)01576-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [van_2002_MMA_contraction](drugs/drug_sumatriptan/pd_van_2002_MMA_contraction.md) | contraction of human middle meningeal artery ← sumatriptan · direct Emax (saturable) effect | model (no simulator) | van den Broek RW et al., Comparison of contractile responses to…, European journal of pharmac… (2002) | [10.1016/s0014-2999(02)01576-5](https://doi.org/10.1016/s0014-2999(02)01576-5) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sumatriptan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate, `SLCO1A2` inducer | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate, `SLCO1A2` inducer | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | brain | `MAOA` substrate | DrugBank actor |
| metabolism | liver | `MAOA` substrate, `SLCO1B1` substrate | DrugBank actor |
| metabolism | small intestine | `MAOA` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HTR1A (target), HTR1B (target), HTR1D (target), HTR1F (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 133 matched, 56 returned
- **screened:** 13  ·  **relevant:** 5
- **records:** 5  ·  extracted 1  ·  needs_review 1  ·  rejected 3  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Christensen_2003.pdf` | Christensen ML et al., Pharmacokinetics of sumatriptan nasal s…, Journal of clinical pharmac… (2003) | popPK | 10 | not captured | [12856385](https://pubmed.ncbi.nlm.nih.gov/12856385) | The paper reports specific quantitative pharmacokinetic parameters (CL/F, Vd/F, Cmax, AUC, t1/2) for sumatriptan in the abstract and text. |
| `Christensen_2004.pdf` | Christensen ML et al., Pharmacokinetics of sumatriptan nasal s…, Journal of clinical pharmac… (2004) | popPK | 10 | [10.1177/0091270004263467](https://doi.org/10.1177/0091270004263467) | [15051742](https://pubmed.ncbi.nlm.nih.gov/15051742) | Reports specific quantitative PK parameters (CL/F, V, t1/2, AUC) and population model details for sumatriptan in humans. |
| `Cosson_1999.pdf` | Cosson VF et al., Mixed effect modeling of sumatriptan ph…, Journal of pharmacokinetics… (1999) | popPK | 10 | [10.1023/a:1020601906027](https://doi.org/10.1023/a:1020601906027) | [10567953](https://pubmed.ncbi.nlm.nih.gov/10567953) | The paper reports specific population PK parameter estimates (clearance and volume) for sumatriptan in humans, though some specific values like absorption rates or Q might be in figures not provided. |
| `Ohk_2022.pdf` | Ohk B et al., Evaluation of sex differences in the ph…, Biopharmaceutics & drug dis… (2022) | popPK | 10 | [10.1002/bdd.2307](https://doi.org/10.1002/bdd.2307) | [34923646](https://pubmed.ncbi.nlm.nih.gov/34923646) | The paper is a population PK study of sumatriptan in humans and explicitly reports clearance values for males and females in the abstract. |
| `Fox_2010.pdf` | Fox AW, Subcutaneous sumatriptan pharmacokineti…, Headache (2010) | popPK | 8 | [10.1111/j.1526-4610.2009.01568.x](https://doi.org/10.1111/j.1526-4610.2009.01568.x) | [19925626](https://pubmed.ncbi.nlm.nih.gov/19925626) | The paper describes a compartmental PK model for sumatriptan in humans and reports AUC values and concentration differences, but specific rate constants (CL, V, ka) are not explicitly listed as numeric parameters in the text provided. |
| `Maas_2006.pdf` | Maas HJ et al., Prediction of headache response in migr…, Cephalalgia : an internatio… (2006) | popPK | 8 | [10.1111/j.1468-2982.2005.01050.x](https://doi.org/10.1111/j.1468-2982.2005.01050.x) | [16556242](https://pubmed.ncbi.nlm.nih.gov/16556242) | The paper describes a population PK model for sumatriptan, but the specific numeric disposition parameters (CL, V, etc.) are not present in the provided evidence, which only mentions potency (EC50) and transit times. |
| `Maas_2008.pdf` | Maas HJ et al., Relevance of absorption rate and lag ti…, Clinical pharmacokinetics (2008) | popPK | 8 | [10.2165/00003088-200847020-00007](https://doi.org/10.2165/00003088-200847020-00007) | [18193920](https://pubmed.ncbi.nlm.nih.gov/18193920) | The paper reports a population PK model for sumatriptan used for simulation, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided text, only qualitative results and one lag time reference. |
| `McConnachie_2023.pdf` | McConnachie L et al., New characterization of dihydroergotami…, Frontiers in neurology (2023) | pd | 4 | [10.3389/fneur.2023.1282846](https://doi.org/10.3389/fneur.2023.1282846) | [38073648](https://www.ncbi.nlm.nih.gov/pubmed/38073648) | metadata signals extractable PD data (IC50) |
| `Gilibili_2026.pdf` | Gilibili RR et al., Investigating organic cation transporte…, Drug metabolism and disposi… (2026) | pgx | 8 | [10.1016/j.dmd.2025.100220](https://doi.org/10.1016/j.dmd.2025.100220) | [41529637](https://www.ncbi.nlm.nih.gov/pubmed/41529637) | metadata signals extractable PGX data (SLC22A1, PK/PD-context) |
| `Kashihara_2017.pdf` | Kashihara Y et al., Small-Dosing Clinical Study: Pharmacoki…, Journal of pharmaceutical s… (2017) | pgx | 8 | [10.1016/j.xphs.2017.03.010](https://doi.org/10.1016/j.xphs.2017.03.010) | [28322941](https://www.ncbi.nlm.nih.gov/pubmed/28322941) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |
| `Morse_2020.pdf` | Morse BL et al., Pharmacokinetics of Organic Cation Tran…, Drug metabolism and disposi… (2020) | pgx | 8 | [10.1124/dmd.119.088781](https://doi.org/10.1124/dmd.119.088781) | [31771949](https://www.ncbi.nlm.nih.gov/pubmed/31771949) | metadata signals extractable PGX data (SLC22A1, PK/PD-context) |
| `Varma_2023.pdf` | Varma MVS, Genetic variation in organic cation tra…, Expert opinion on drug meta… (2023) | pgx | 8 | [10.1080/17425255.2023.2202813](https://doi.org/10.1080/17425255.2023.2202813) | [37070463](https://www.ncbi.nlm.nih.gov/pubmed/37070463) | metadata signals extractable PGX data (SLC47A1, PK/PD-context) |
| `Moore_2002.pdf` | Moore KH et al., The pharmacokinetics of sumatriptan whe…, Clinical therapeutics (2002) | pgx | 7 | [10.1016/s0149-2918(02)85134-7](https://doi.org/10.1016/s0149-2918(02)85134-7) | [12017403](https://www.ncbi.nlm.nih.gov/pubmed/12017403) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T06:40:14.766297+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bax_1993 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of sumatriptan (contractile responses and receptor antagonism) in isolated human coronary arteries, not its pharmacokinetics. |
| PGx | Bokelmann_2018 | not_relevant | 0 | 0 | The study explicitly states that the analyzed OCT1 promoter SNP was not associated with the pharmacokinetics of sumatriptan in healthy individuals. |
| PGx | Capi_2016 | not_relevant | 1 | 1 | The paper is a review of eletriptan (a different triptan) and while it mentions sumatriptan as a comparison for efficacy, it does not report specific pharmacogenomic effects of genetic variants on sumatriptan's PK/PD parameters. |
| popPK | Comisar_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of zavegepant, with sumatriptan only mentioned as a co-administered drug that did not significantly affect zavegepant's PK. |
| PGx | Fiszman_2006 | not_relevant | 0 | 0 | The paper proposes a summarization methodology and mentions sumatriptan only as part of a test dataset, providing no pharmacogenomic data or results. |
| popPK | Fullerton_1999 | irrelevant | 2 | 0 | The study is primarily a pharmacodynamic investigation using sumatriptan as a therapeutic agent, and while a PK/PD model was fitted, no specific quantitative PK parameter values (CL, V, ka) are reported in the provided evidence. |
| PGx | Gilibili_2026 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (DDIs) via OCT1 inhibitors in cynomolgus monkeys, not the effect of human genetic variants on sumatriptan pharmacokinetics. |
| PGx | Grände_2014 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of sumatriptan on isolated arteries but does not report any effects of gene variants or genotypes. |
| popPK | Gul_2002 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study measuring contractile force, not a pharmacokinetic study reporting disposition parameters (CL, V, ka, etc.). |
| popPK | Heblinski_2019 | irrelevant | 0 | 0 | This is an in vitro receptor pharmacology study focusing on desensitization, not a pharmacokinetic study reporting disposition parameters for sumatriptan. |
| PGx | Jehangir_2024 | not_relevant | 0 | 0 | The paper studies the biotransformation of sumatriptan by bacteria, not human pharmacogenomics or PK/PD. |
| PGx | Jensen_2021 | not_relevant | 2 | 5 | The paper reports sumatriptan pharmacokinetics only as a correlator for IBC levels to demonstrate IBC as a biomarker for OCT1 activity; it does not present data on how OCT1 genotypes alter sumatriptan's PK parameters. |
| PGx | Kashihara_2017 | not_relevant | 5 | 2 | The study reports no effect of SLCO2B1*3 on sumatriptan PK and does not report specific ABCG2 genotype PK data for sumatriptan (only sulfasalazine and rosuvastatin). |
| PGx | Kölz_2021 | not_relevant | 4 | 5 | This is a review article on the genetic regulation of organic cation transporters (OCTs) that, while mentioning sumatriptan, does not provide a specific quantitative pharmacokinetic or pharmacodynamic effect size for a sumatriptan variant. |
| popPK | Longmore_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay of coronary artery contraction using sumatriptan as a comparator, not a pharmacokinetic study. |
| popPK | Maas_2006 | relevant | 8 | 0 | The paper describes a population PK model for sumatriptan, but the specific numeric disposition parameters (CL, V, etc.) are not present in the provided evidence, which only mentions potency (EC50) and transit times. |
| popPK | Maas_2006_2 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (EC50, Emax) for migraine efficacy, not pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Maas_2008 | relevant | 8 | 1 | The paper reports a population PK model for sumatriptan used for simulation, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided text, only qualitative results and one lag time reference. |
| popPK | MaassenVanDenBrink_1998 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of coronary artery contraction (EC50, Emax) and does not report pharmacokinetic disposition parameters (CL, V, Ka) for sumatriptan. |
| popPK | McConnachie_2023 | irrelevant | 0 | 0 | The study is an in-vitro receptor pharmacology assay for dihydroergotamine, where sumatriptan is used only as a positive control/comparator and no pharmacokinetic parameters are reported. |
| PD | McConnachie_2023 | not_relevant | 0 | 0 | The paper focuses on the receptor pharmacology of dihydroergotamine (DHE) and only provides a single qualitative screening point for sumatriptan (10 μM) without any dose-response curve or numeric PD parameters. |
| PGx | Mehrotra_2007 | not_relevant | 3 | 2 | The study investigates the association between 5-HT1B receptor variants and clinical response (PD outcome) to sumatriptan but finds no significant evidence of a pharmacogenomic effect. |
| PGx | Moore_2002 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (clarithromycin), not a pharmacogenomic effect involving gene variants. |
| PGx | Morse_2020 | not_relevant | 0 | 0 | The study investigates OCT1 substrate pharmacokinetics in knockout mice but does not report human pharmacogenomic genotype-PK associations for sumatriptan. |
| PGx | Morse_2021 | not_relevant | 1 | 2 | The paper describes preclinical studies using genetically modified rodents and compares transporter expression across species, but does not report a specific human gene variant affecting sumatriptan pharmacokinetics or pharmacodynamics. |
| PGx | Morse_2021_2 | not_relevant | 2 | 3 | The paper studies sumatriptan only in an in vitro cell uptake assay to characterize transporter kinetics, not its clinical PK/PD in humans or animals affected by genotype. |
| PGx | Petersen_2023 | not_relevant | 2 | 0 | The paper reports null associations between CYP3A4 variants and clinical treatment response to verapamil, not sumatriptan, and does not report PK/PD parameter changes for sumatriptan. |
| PGx | Pöstges_2023 | not_relevant | 0 | 0 | The paper is an in vitro mechanistic study demonstrating metabolic pathways (MAO/CYP) using recombinant enzymes, not a pharmacogenomic study reporting how genetic variants affect PK/PD parameters. |
| PGx | Rahman_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic efficacy of migraine blockers in a mouse model but contains no information regarding genetic variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Römer_2021 | not_relevant | 2 | 3 | The paper explicitly states that the rs35854239 variant "was not associated with significant changes in the pharmacokinetics of sumatriptan". |
| popPK | Schlachter_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for atogepant, not sumatriptan (sumatriptan is only mentioned as a concomitant medication with no significant effect). |
| PGx | Sternieri_2006 | not_relevant | 1 | 0 | The paper reviews drug-drug interactions and general metabolism of headache medications but does not report specific pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Takahashi_1995 | irrelevant | 0 | 0 | The study investigates pharmacodynamics (cholinergic bronchoconstriction) and receptor mechanisms, reporting no pharmacokinetic parameters for sumatriptan, which is only used as an antagonist probe. |
| PD | Takahashi_1995 | not_relevant | 0 | 0 | The paper reports pharmacological data for 5-HT and its analogs, explicitly stating that sumatriptan was essentially inactive, and does not provide any exposure-response or dose-response parameters for sumatriptan. |
| PGx | Tepper_2001 | not_relevant | 0 | 0 | The paper discusses general safety, clinical use, and drug-drug interactions of triptans but does not report any pharmacogenomic effects (gene variants) on sumatriptan PK or PD parameters. |
| PGx | Tzvetkov_2017 | not_relevant | 0 | 0 | The paper discusses OCT1 pharmacogenetics regarding opioids and anti-migraine drugs but does not report specific pharmacokinetic or pharmacodynamic data for sumatriptan. |
| PGx | Varma_2023 | not_relevant | 2 | 1 | The text mentions sumatriptan only as an example of a drug affected by OCTs but does not report specific genetic variant effects on its PK/PD parameters. |
| popPK | van_2002 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study measuring contractile responses in isolated human arteries, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:41 UTC</sub>
