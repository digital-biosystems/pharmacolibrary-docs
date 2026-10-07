<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;gallamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gallamine_Ramzan1980_reference&quot;,&quot;label&quot;:&quot;Ramzan_1980_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gallamine/Gallamine_Ramzan1980_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# gallamine

- **generic name:** gallamine
- **ATC codes:** `M03AC02`
- **DrugBank:** [DB13584](https://go.drugbank.com/drugs/DB13584) · **PubChem:** not captured
- **molar mass:** 423.642 g/mol (C24H45N3O3) — DrugBank
- **groups:** experimental

## About

Gallamine is a peripherally acting muscle relaxant that was used to relax muscles during surgical procedures. It is no longer in routine clinical use and is today regarded as an experimental compound.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q69758886](https://www.wikidata.org/wiki/Q69758886) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| gallamine | parent | 423.642 | C24H45N3O3 | DrugBank | — | Ramzan_1980 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:37 | 7:30 | 1/0/0 | 1/0/0 | 0/0/0 | 176,797/5,100 | einfracz / qwen3.8-27b | 3 | 1/0 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ramzan_1980_reference](drugs/drug_gallamine/Gallamine_Ramzan1980_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Ramzan MI et al., Pharmacokinetic studies in man with gal…, European journal of clinica… (1980) | [10.1007/BF00562622](https://doi.org/10.1007/BF00562622) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (camelid), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">camelid</span> | [Al-Jafari_1997_AChE_activity](drugs/drug_gallamine/pd_Al_Jafari_1997_AChE_activity.md) | camel retina acetylcholinesterase activity biomarker turnover ← gallamine | — | Al-Jafari AA, The inhibitory effect of the neuromuscu…, Toxicology letters (1997) | [10.1016/s0378-4274(96)03828-3](https://doi.org/10.1016/s0378-4274(96)03828-3) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 139 matched, 68 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_21 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ramzan_1980.pdf` | Ramzan MI et al., Pharmacokinetic studies in man with gal…, European journal of clinica… (1980) | popPK | 10 | [10.1007/BF00562622](https://doi.org/10.1007/BF00562622) | [7371705](https://pubmed.ncbi.nlm.nih.gov/7371705) | The study reports quantitative two-compartment pharmacokinetic parameters (clearance, volume of distribution, half-lives) for gallamine in humans. |
| `Ramzan_1981_3.pdf` | Ramzan MI et al., Gallamine disposition in surgical patie…, British journal of clinical… (1981) | popPK | 10 | [10.1111/j.1365-2125.1981.tb01192.x](https://doi.org/10.1111/j.1365-2125.1981.tb01192.x) | [7306428](https://pubmed.ncbi.nlm.nih.gov/7306428) | The study reports a two-compartment model and discusses changes in clearance, volume, and half-life for gallamine, but specific numeric values are not provided in the evidence. |
| `Shanks_1982.pdf` | Shanks CA et al., Gallamine administered by combined bolu…, Anesthesia and analgesia (1982) | popPK | 10 | not captured | [6289700](https://pubmed.ncbi.nlm.nih.gov/6289700) | The study reports quantitative pharmacokinetic parameters for gallamine in humans, including a specific elimination half-life (247 minutes) and compartmental model fit, but does not provide explicit values for clearance or volume of distribution in the text. |
| `Henthorn_1982.pdf` | Henthorn TK et al., Heterogeneity of interstitial fluid spa…, The Journal of pharmacology… (1982) | popPK | 9 | not captured | [7097559](https://pubmed.ncbi.nlm.nih.gov/7097559) | Study reports pharmacokinetic modeling of gallamine in dogs with specific intercompartmental parameters, but most numeric values are in the full text/table not fully provided in the evidence snippet. |
| `Ramzan_1981.pdf` | Ramzan MI et al., Clinical pharmacokinetics of the non-de…, Clinical pharmacokinetics (1981) | pd | 5 | [10.2165/00003088-198106010-00002](https://doi.org/10.2165/00003088-198106010-00002) | [7018787](https://www.ncbi.nlm.nih.gov/pubmed/7018787) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Tränkle_1996.pdf` | Tränkle C et al., Search for lead structures to develop n…, The Journal of pharmacology… (1996) | pd | 5 | not captured | [8930201](https://www.ncbi.nlm.nih.gov/pubmed/8930201) | metadata signals extractable PD data (EC50) |
| `Al-Jafari_1997.pdf` | Al-Jafari AA, The inhibitory effect of the neuromuscu…, Toxicology letters (1997) | pd | 4 | [10.1016/s0378-4274(96)03828-3](https://doi.org/10.1016/s0378-4274(96)03828-3) | [9020401](https://www.ncbi.nlm.nih.gov/pubmed/9020401) | metadata signals extractable PD data (IC50) |
| `Birmingham_1980.pdf` | Birmingham AT et al., A comparison of the skeletal neuromuscu…, British journal of pharmaco… (1980) | pd | 4 | [10.1111/j.1476-5381.1980.tb08730.x](https://doi.org/10.1111/j.1476-5381.1980.tb08730.x) | [6108148](https://www.ncbi.nlm.nih.gov/pubmed/6108148) | metadata signals extractable PD data (concentration-effect) |
| `Eglen_1993.pdf` | Eglen RM et al., Muscarinic M3 receptors mediate total i…, European journal of pharmac… (1993) | pd | 4 | [10.1016/0922-4106(93)90058-h](https://doi.org/10.1016/0922-4106(93)90058-h) | [8420791](https://www.ncbi.nlm.nih.gov/pubmed/8420791) | metadata signals extractable PD data (EC50) |
| `Elliott_1987.pdf` | Elliott RC, The role of acetylcholine in tetraethyl…, General pharmacology (1987) | pd | 4 | [10.1016/0306-3623(87)90160-1](https://doi.org/10.1016/0306-3623(87)90160-1) | [3557054](https://www.ncbi.nlm.nih.gov/pubmed/3557054) | metadata signals extractable PD data (EC50) |
| `Hernández-Echeagaray_1998.pdf` | Hernández-Echeagaray E et al., 3-Alpha-chloro-imperialine, a potent bl…, Neuropharmacology (1998) | pd | 4 | [10.1016/s0028-3908(98)00131-2](https://doi.org/10.1016/s0028-3908(98)00131-2) | [9886672](https://www.ncbi.nlm.nih.gov/pubmed/9886672) | metadata signals extractable PD data (IC50) |
| `Hu_1999.pdf` | Hu HZ et al., Enhancement of GABA-activated current b…, Neuroscience (1999) | pd | 4 | [10.1016/s0306-4522(98)00329-7](https://doi.org/10.1016/s0306-4522(98)00329-7) | [10199621](https://www.ncbi.nlm.nih.gov/pubmed/10199621) | metadata signals extractable PD data (EC50) |
| `Kurkinen_1997.pdf` | Kurkinen KM et al., [Gamma-35S]GTP autoradiography allows r…, Brain research (1997) | pd | 4 | [10.1016/s0006-8993(97)00663-x](https://doi.org/10.1016/s0006-8993(97)00663-x) | [9374269](https://www.ncbi.nlm.nih.gov/pubmed/9374269) | metadata signals extractable PD data (EC50) |
| `Lau_1992.pdf` | Lau WM et al., A pharmacological profile of glycopyrro…, General pharmacology (1992) | pd | 4 | [10.1016/0306-3623(92)90306-5](https://doi.org/10.1016/0306-3623(92)90306-5) | [1283139](https://www.ncbi.nlm.nih.gov/pubmed/1283139) | metadata signals extractable PD data (EC50) |
| `Lee_1990.pdf` | Lee NH et al., The allosteric binding profile of himba…, European journal of pharmac… (1990) | pd | 4 | [10.1016/0014-2999(90)90424-5](https://doi.org/10.1016/0014-2999(90)90424-5) | [2364985](https://www.ncbi.nlm.nih.gov/pubmed/2364985) | metadata signals extractable PD data (IC50) |
| `Leppik_1994.pdf` | Leppik RA et al., Role of acidic amino acids in the allos…, Molecular pharmacology (1994) | pd | 4 | not captured | [8190113](https://www.ncbi.nlm.nih.gov/pubmed/8190113) | metadata signals extractable PD data (IC50) |
| `Min_2000.pdf` | Min KT et al., Nondepolarizing neuromuscular blockers…, Anesthesia and analgesia (2000) | pd | 4 | [10.1097/00000539-200002000-00044](https://doi.org/10.1097/00000539-200002000-00044) | [10648343](https://www.ncbi.nlm.nih.gov/pubmed/10648343) | metadata signals extractable PD data (IC50) |
| `Monsma_1988.pdf` | Monsma FJ et al., Inhibition of phosphoinositide turnover…, Biochemical pharmacology (1988) | pd | 4 | [10.1016/0006-2952(88)90371-1](https://doi.org/10.1016/0006-2952(88)90371-1) | [2839194](https://www.ncbi.nlm.nih.gov/pubmed/2839194) | metadata signals extractable PD data (EC50) |
| `Pöch_1992.pdf` | Pöch G et al., Construction of antagonist dose-respons…, British journal of pharmaco… (1992) | pd | 4 | [10.1111/j.1476-5381.1992.tb14399.x](https://doi.org/10.1111/j.1476-5381.1992.tb14399.x) | [1504755](https://www.ncbi.nlm.nih.gov/pubmed/1504755) | metadata signals extractable PD data (Emax) |
| `Schoffelmeer_1986.pdf` | Schoffelmeer AN et al., Muscarine receptor-mediated modulation…, European journal of pharmac… (1986) | pd | 4 | [10.1016/0014-2999(86)90781-8](https://doi.org/10.1016/0014-2999(86)90781-8) | [3792444](https://www.ncbi.nlm.nih.gov/pubmed/3792444) | metadata signals extractable PD data (EC50) |
| `Schuh_1981.pdf` | Schuh FT, [On dose-response curves and the recept…, Der Anaesthesist (1981) | pd | 4 | not captured | [6455927](https://www.ncbi.nlm.nih.gov/pubmed/6455927) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-07T02:36:39.363309+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aas_1990 | irrelevant | 0 | 0 | Gallamine is used solely as a pharmacological tool to probe muscarinic receptor subtypes in an in-vitro study, with no pharmacokinetic parameters reported. |
| popPK | Birmingham_1980 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| popPK | Buzello_1978 | irrelevant | 2 | 0 | The study is a synoptical review of literature data without providing original quantitative pharmacokinetic parameter values in the provided evidence. |
| popPK | Buzello_1978_2 | irrelevant | 0 | 0 | The paper explicitly states that the data are "taken from the literature" and the provided evidence contains no original quantitative parameter values (CL, V, Q, etc.) for gallamine. |
| popPK | Cameron_2002 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study regarding the chemical chelation of gallamine by cyclophanes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Dussor_2004 | irrelevant | 0 | 0 | The study is a pharmacological investigation of muscarinic receptors where gallamine is used only as an antagonist tool compound, with no pharmacokinetic parameters reported. |
| popPK | Eglen_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of muscarinic receptors where gallamine is used only as a competitive antagonist, not a PK subject. |
| popPK | Elliott_1987 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study of neuromuscular blockade in chick muscle, not a pharmacokinetic study of gallamine disposition. |
| popPK | Franken_2000 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and mechanism study, not a pharmacokinetic study, and reports no disposition parameters (CL, V, t1/2, etc.) for gallamine. |
| popPK | Gardier_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of muscarinic receptor subtypes in airway smooth muscle, where gallamine is used merely as an antagonist tool, and no pharmacokinetic parameters are reported. |
| popPK | Gillard_1986 | irrelevant | 0 | 0 | The study is an in vitro binding assay examining receptor dissociation kinetics, not a pharmacokinetic study reporting disposition parameters for gallamine. |
| popPK | Henthorn_1982 | relevant | 9 | 3 | Study reports pharmacokinetic modeling of gallamine in dogs with specific intercompartmental parameters, but most numeric values are in the full text/table not fully provided in the evidence snippet. |
| popPK | Hu_1999 | irrelevant | 0 | 0 | The study is a patch-clamp investigation of GABA-gated channels where gallamine is used only as a non-specific muscarinic receptor antagonist comparator, with no pharmacokinetic data. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | The paper describes a high-throughput screen for neuroprotective compounds in zebrafish and does not involve the drug gallamine or its pharmacokinetics. |
| popPK | Klinker_1997 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of G-protein activation by muscle relaxants, not a pharmacokinetic study. |
| popPK | Kurkinen_1997 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study of muscarinic receptors in chick brain tissue where gallamine is used only as a probe antagonist, not a subject drug for PK analysis. |
| popPK | Lau_1992 | irrelevant | 0 | 0 | The paper studies the pharmacology of glycopyrrolate using gallamine only as a probe ligand for competition, not as the subject of PK modeling. |
| popPK | Milchert_2009 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological evaluation of smooth muscle relaxation, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Monsma_1988 | irrelevant | 0 | 0 | The study is a mechanistic in vitro receptor binding and phosphoinositide turnover assay, not a pharmacokinetic study, and reports no disposition parameters for gallamine. |
| popPK | Murphy_1995 | irrelevant | 0 | 0 | This is a vascular physiology study where gallamine is used as a pharmacological tool/antagonist to identify channel types, not a pharmacokinetic study of gallamine. |
| popPK | Neubig_1979 | irrelevant | 0 | 0 | This is an in-vitro receptor binding study on Torpedo membranes, not a pharmacokinetic study of gallamine disposition. |
| popPK | Potter_1989 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of muscarine receptor binding and allosteric effects, not a pharmacokinetic study of gallamine. |
| popPK | Pöch_1992 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study on dose-response curves and Schild analysis, not a pharmacokinetic study, and contains no PK parameters for gallamine. |
| popPK | Ramzan_1980_2 | irrelevant | 2 | 0 | The abstract describes a two-compartment model for gallamine in humans but does not provide specific numeric values for clearance, volume, or half-life, stating only that parameters were "significantly higher" than in a previous study. |
| popPK | Ramzan_1981_3 | relevant | 10 | 0 | The study reports a two-compartment model and discusses changes in clearance, volume, and half-life for gallamine, but specific numeric values are not provided in the evidence. |
| popPK | Ramzan_1983 | irrelevant | 1 | 0 | The study reports pharmacodynamic parameters (Cp50, ke0, lambda) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Roffel_1993 | irrelevant | 0 | 0 | The study is a pharmacological investigation of receptor mechanisms in guinea pigs where gallamine is used as a tool compound (antagonist), not a subject of pharmacokinetic analysis. |
| popPK | Roffel_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of muscarinic receptor antagonism in bovine trachea, not a pharmacokinetic study of gallamine. |
| popPK | Schoffelmeer_1986 | irrelevant | 0 | 0 | This is an in vitro receptor binding/release study measuring EC50 values for receptor antagonism, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Schuh_1981 | irrelevant | 0 | 0 | The study reports dose-response curve parameters (e.g., threshold s) for neuromuscular blockade, not pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Shanks_1982 | relevant | 10 | 3 | The study reports quantitative pharmacokinetic parameters for gallamine in humans, including a specific elimination half-life (247 minutes) and compartmental model fit, but does not provide explicit values for clearance or volume of distribution in the text. |
| popPK | Sharif_1995 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding and signaling study where gallamine is used only as a non-selective muscarinic antagonist for pharmacological specificity profiling, reporting no pharmacokinetic parameters. |
| popPK | Shivnaraine_2012 | irrelevant | 0 | 0 | The study is an in vitro receptor binding and allosteric cooperativity study, not a pharmacokinetic study of gallamine disposition. |
| popPK | Tränkle_1996 | irrelevant | 0 | 0 | The study measures allosteric potency (EC50) of gallamine on muscarinic receptors in an in-vitro binding assay, not pharmacokinetic disposition parameters. |
| popPK | Tränkle_1998 | irrelevant | 0 | 0 | The study is a receptor binding assay measuring gallamine's affinity for muscarinic M2 receptors in porcine heart tissue, not a pharmacokinetic study of gallamine's disposition. |
| popPK | Yajeya_2000 | irrelevant | 0 | 0 | The study is an in vitro neurophysiological investigation of carbachol effects on synaptic transmission, where gallamine is used only as a muscarinic receptor antagonist, not as a subject drug for pharmacokinetic analysis. |
| popPK | ten_1995 | irrelevant | 0 | 0 | The study is a pharmacodynamic/in vitro investigation of M2 receptor function using gallamine as a receptor antagonist probe, not a pharmacokinetic study of gallamine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:36 UTC</sub>
