<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07A&quot;,&quot;href&quot;:&quot;atc/N07A.md&quot;},{&quot;label&quot;:&quot;neostigmine&quot;}]"></div>

# neostigmine

- **generic name:** neostigmine
- **ATC codes:** `N07AA01`, `S01EB06`
- **DrugBank:** [DB01400](https://go.drugbank.com/drugs/DB01400) · **PubChem:** [CID 4456](https://pubchem.ncbi.nlm.nih.gov/compound/4456)
- **molar mass:** 223.2915 g/mol (C12H19N2O2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Neostigmine is an acetylcholinesterase inhibitor used for conditions such as myasthenia gravis and urinary retention, and also as an antiglaucoma eye preparation. It is an approved medicine, including veterinary use, and is listed among WHO essential medicines, so it remains widely available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410546](https://www.wikidata.org/wiki/Q410546) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:00 | 12:23 | 0/0/0 | 2/2/1 | 0/0/0 | 454,898/7,731 | ollama / glm-5.3-flash | 16 | 2/12 | 16/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">pig</span> | [Iwanaga_1994_AChE](drugs/drug_neostigmine/pd_Iwanaga_1994_AChE.md) | acetylcholinesterase (AChE) activity inhibition ← neostigmine · inhibition effect | — | Iwanaga Y et al., Characterization of acetylcholinesteras…, Japanese journal of pharmac… (1994) | [10.1254/jjp.66.317](https://doi.org/10.1254/jjp.66.317) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Liu_2017_IC50](drugs/drug_neostigmine/pd_Liu_2017_IC50.md) | AChE activity inhibition by neostigmine bromide ← neostigmine bromide · inhibition effect | — | Liu C et al., A microfluidic paper-based device to as…, Electrophoresis (2017) | [10.1002/elps.201600206](https://doi.org/10.1002/elps.201600206) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Caulfield_1991_Ca_current](drugs/drug_neostigmine/pd_Caulfield_1991_Ca_current.md) | Voltage-activated Ca current inhibition ← acetylcholine (with neostigmine 1 microM) · direct Emax (saturable) effect | — | Caulfield MP, Muscarinic receptor-mediated inhibition…, Neuroscience letters (1991) | [10.1016/0304-3940(91)90785-r](https://doi.org/10.1016/0304-3940(91)90785-r) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Shafer_1998_ACh](drugs/drug_neostigmine/pd_Shafer_1998_ACh.md) | CSF acetylcholine concentration ← neostigmine · stimulation effect | — | Shafer SL et al., Cerebrospinal fluid pharmacokinetics an…, Anesthesiology (1998) | [10.1097/00000542-199811000-00007](https://doi.org/10.1097/00000542-199811000-00007) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Shafer_1998_foot_VAS](drugs/drug_neostigmine/pd_Shafer_1998_foot_VAS.md) | foot visual analog scale analgesia ← neostigmine · delayed effect through an effect compartment | — | Shafer SL et al., Cerebrospinal fluid pharmacokinetics an…, Anesthesiology (1998) | [10.1097/00000542-199811000-00007](https://doi.org/10.1097/00000542-199811000-00007) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yamamoto_1996_HR](drugs/drug_neostigmine/pd_Yamamoto_1996_HR.md) | heart rate (bradycardic response) ← neostigmine · delayed effect through an effect compartment | — | Yamamoto K et al., Toxicodynamic analysis of cardiac effec…, The Journal of pharmacy and… (1996) | [10.1111/j.2042-7158.1996.tb06006.x](https://doi.org/10.1111/j.2042-7158.1996.tb06006.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=neostigmine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor | DrugBank actor |
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 306 matched, 92 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Somani_1980.pdf` | Somani SM et al., Kinetics and metabolism of intramuscula…, Clinical pharmacology and t… (1980) | popPK | 10 | [10.1038/clpt.1980.132](https://doi.org/10.1038/clpt.1980.132) | [7389256](https://pubmed.ncbi.nlm.nih.gov/7389256) | Original PK study in myasthenia gravis patients with numeric t1/2, Vd, and CL values reported directly in the abstract. |
| `Hennis_1984.pdf` | Hennis PJ et al., Metabolites of neostigmine and pyridost…, Anesthesiology (1984) | popPK | 8 | [10.1097/00000542-198411000-00010](https://doi.org/10.1097/00000542-198411000-00010) | [6149707](https://pubmed.ncbi.nlm.nih.gov/6149707) | PK of neostigmine in dogs with a three-compartment model, but numeric CL/Vdss/half-life values are not given in the abstract text. |
| `Shafer_1998.pdf` | Shafer SL et al., Cerebrospinal fluid pharmacokinetics an…, Anesthesiology (1998) | popPK | 8 | [10.1097/00000542-199811000-00007](https://doi.org/10.1097/00000542-199811000-00007) | [9821995](https://pubmed.ncbi.nlm.nih.gov/9821995) | Population PK (NONMEM) of intrathecal neostigmine in humans, but no numeric parameter values (CL, V, half-lives) appear in the evidence, likely in figures/supplement. |
| `Luo_2013.pdf` | Luo W et al., [Correlation between in vitro release a…, Sichuan da xue xue bao. Yi… (2013) | popPK | 6 | not captured | [23600216](https://pubmed.ncbi.nlm.nih.gov/23600216) | Rabbit PK of neostigmine with compartment model and deconvolution, but only regression equations are given; no CL/V/half-life values appear. |

<sub>queue written 2026-10-07T01:58:37.648565+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baker_1993 | irrelevant | 0 | 0 | In-vitro guinea pig trachea study where neostigmine is only a co-administered cholinesterase inhibitor; no PK parameters reported. |
| popPK | Bjugård_2020 | irrelevant | 0 | 0 | This is a population-PK study of ethionamide, not neostigmine; no neostigmine parameters are present. |
| popPK | Broad_2013 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of cholinergic contractions in human colon; no PK parameters for neostigmine are reported. |
| popPK | Caulfield_1991 | irrelevant | 0 | 0 | In-vitro electrophysiology/binding study where neostigmine is only a co-administered AChE inhibitor, with no PK parameters. |
| popPK | Chase_2012 | irrelevant | 0 | 0 | no_text gate: only 31 chars of text extracted (&lt; 400) |
| popPK | Chiou_1994 | irrelevant | 0 | 0 | In-vitro mouse phrenic nerve/diaphragm mechanistic study of obidoxime; no PK parameters for neostigmine. |
| popPK | Dubey_2020 | irrelevant | 0 | 0 | Clinical trial of gabapentin vs ondansetron for PONV prevention; no neostigmine PK parameters reported. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | EFSA risk assessment of potato glycoalkaloids with no neostigmine PK parameters reported. |
| popPK | Elkhateb_2025 | irrelevant | 0 | 0 | This is a retrospective practice-pattern study of neuromuscular blockade/reversal strategies; neostigmine is only a co-administered agent with no PK parameters reported. |
| popPK | Fisher_2000 | irrelevant | 1 | 0 | Neostigmine is only a reversal agent; PK parameters reported are for rapacuronium/ORG9488, not neostigmine. |
| popPK | Galli_1992 | irrelevant | 0 | 0 | In-vitro enzyme protection study with no pharmacokinetic parameters for neostigmine. |
| popPK | Graham_1986 | irrelevant | 0 | 0 | Neostigmine is only a reversal agent; the PK/effect-compartment analysis concerns pancuronium, not neostigmine, and no neostigmine disposition parameters are reported. |
| popPK | Grześkowiak_2023 | irrelevant | 0 | 0 | This is a population PK/PD study of rocuronium and sugammadex in children; neostigmine is only mentioned as a comparator, with no neostigmine PK parameters reported. |
| popPK | Gwee_1993 | irrelevant | 0 | 0 | In-vitro pharmacology study of ranitidine on rat muscle; neostigmine is only a tool agent, no PK parameters. |
| popPK | Hennis_1984 | relevant | 8 | 4 | PK of neostigmine in dogs with a three-compartment model, but numeric CL/Vdss/half-life values are not given in the abstract text. |
| popPK | Hrvat_2020 | irrelevant | 0 | 0 | This is a review of nerve agent poisoning countermeasures; neostigmine is not the subject drug and no PK parameters for it are reported. |
| popPK | Huang_2009 | irrelevant | 0 | 0 | Neostigmine is only used as a contractile agonist in an in-vitro guinea-pig colon study; no PK parameters for neostigmine are reported. |
| popPK | Jaklitsch_1990 | irrelevant | 3 | 1 | A simulation study of neuromuscular blockade; neostigmine is one of many modeled agents but no numeric PK parameter values (CL, V, etc.) are provided in the evidence. |
| popPK | Ji_2023 | irrelevant | 0 | 0 | The PK model and parameters are for sugammadex (and rocuronium); neostigmine is only a comparator reversal agent with no PK parameters reported. |
| popPK | Ji_2023_2 | irrelevant | 0 | 0 | This is a PK study of sugammadex and rocuronium in children; neostigmine is only a comparator reversal agent with no PK parameters reported for it. |
| popPK | Kato_1999 | irrelevant | 0 | 0 | Neostigmine is only mentioned as a comparator with no effect; no PK parameters reported. |
| popPK | Kimura_2007 | irrelevant | 0 | 0 | Neostigmine is only used as a co-perfused acetylcholinesterase inhibitor in a microdialysis pharmacodynamic study; no PK parameters for neostigmine are reported. |
| popPK | Kleijn_2011 | irrelevant | 0 | 0 | This is a population PK/PD study of sugammadex and rocuronium; neostigmine is not the subject drug and no neostigmine parameters appear. |
| popPK | Koo_2012 | irrelevant | 0 | 0 | This is a pharmacodynamic study of propofol (with remifentanil); neostigmine is only a co-administered reversal agent, and no neostigmine PK parameters are reported. |
| popPK | Kunisawa_2015 | irrelevant | 0 | 0 | This is a population PK study of landiolol, not neostigmine; neostigmine is only used as an enzyme inhibitor in blood sample processing, with no neostigmine PK parameters reported. |
| popPK | Lee_2008 | irrelevant | 0 | 0 | In-vitro neuromuscular pharmacology study in rat diaphragm; neostigmine is an experimental agent, no PK parameters reported. |
| popPK | Lee_2019 | irrelevant | 0 | 0 | The study models volume kinetics of Ringer's lactate solution, not neostigmine, which is only mentioned as a co-administered reversal agent. |
| popPK | Li_2018 | irrelevant | 0 | 0 | Neostigmine is only used as a pharmacological probe to induce GI hypermotility in mice; no PK parameters for neostigmine are reported. |
| popPK | Luo_2013 | relevant | 6 | 3 | Rabbit PK of neostigmine with compartment model and deconvolution, but only regression equations are given; no CL/V/half-life values appear. |
| PGx | MATTHEW_1964 | not_relevant | 0 | 0 | Only a title is provided; no gene-variant effect on neostigmine PK/PD parameters is reported. |
| popPK | Marchi_1996 | irrelevant | 0 | 0 | In vitro rat cortex study of ACh release; neostigmine is only a pharmacologic tool, no PK parameters. |
| popPK | Mills_1999 | irrelevant | 0 | 0 | Neostigmine is only used as a reversal agent; the pharmacokinetic model and parameters (CL 4.4 ml kg-1 min-1, V1 94.8 ml kg-1) describe rapacuronium, not neostigmine. |
| popPK | Mitchell_2009 | irrelevant | 0 | 0 | Neostigmine is only a co-administered cholinesterase inhibitor control in a peristalsis study; no PK parameters for it are reported. |
| popPK | Morris_1981 | irrelevant | 1 | 1 | This is a PK study of edrophonium; neostigmine is only mentioned as a comparator with no neostigmine parameters reported. |
| popPK | Mostoller_2021 | irrelevant | 0 | 0 | This is a PK study of sugammadex, not neostigmine; neostigmine is only a comparator arm with no PK parameters reported for it. |
| popPK | Ndzamba_2025 | irrelevant | 0 | 0 | This is a population PK study of ethambutol; neostigmine is only used as an LC-MS/MS internal standard, with no neostigmine PK parameters reported. |
| popPK | Nguyen-Huu_2005 | irrelevant | 0 | 0 | Neostigmine is only used as a cholinesterase-inhibiting tool in an in vitro neuromuscular pharmacology study; no PK parameters for neostigmine are reported. |
| popPK | Oh_2019 | irrelevant | 0 | 0 | Clinical outcomes study comparing reversal agents; no PK parameters for neostigmine are reported. |
| popPK | Pineda_1997 | irrelevant | 0 | 0 | This is a receptor pharmacology study in rat vas deferens; neostigmine is only a pretreatment agent and no PK parameters are reported. |
| popPK | Ridtitid_1998 | irrelevant | 0 | 0 | Neostigmine is only used as a pharmacological antagonist probe in an in-vitro neuromuscular study; no PK parameters for neostigmine are reported. |
| popPK | Rigo_2017 | irrelevant | 0 | 0 | Neostigmine is only a comparator in a pharmacodynamic antinociception study of a spider toxin; no PK parameters for neostigmine are reported. |
| popPK | Rocha_2014 | irrelevant | 0 | 0 | Ecotoxicity study in Daphnia magna reporting EC50/LOEC toxicity values, not pharmacokinetic disposition parameters for neostigmine. |
| popPK | Rupp_1983 | irrelevant | 0 | 0 | The study reports PK parameters for 4-aminopyridine, not neostigmine, which is only mentioned as a comparator. |
| popPK | Salahudeen_2017 | irrelevant | 0 | 0 | This is a review of pharmacodynamic/ligand-binding modelling; neostigmine is only mentioned as an example enzyme inhibitor, with no PK parameters for it. |
| popPK | Sasikala_2026 | irrelevant | 0 | 0 | This is a review of transdermal needle-free delivery devices; neostigmine appears only in a reference title, with no PK parameters reported. |
| popPK | Shafer_1998 | relevant | 8 | 2 | Population PK (NONMEM) of intrathecal neostigmine in humans, but no numeric parameter values (CL, V, half-lives) appear in the evidence, likely in figures/supplement. |
| popPK | Silva_1988 | irrelevant | 0 | 0 | Neostigmine is only a co-administered cholinesterase inhibitor in an in vitro receptor pharmacology study; no PK parameters reported. |
| popPK | Suganuma_2021 | irrelevant | 0 | 0 | Clinical study of oesophageal barrier pressure with neostigmine as reversal agent; no PK parameters reported. |
| popPK | Walch_1997 | irrelevant | 0 | 0 | Neostigmine is only used as a cholinesterase inhibitor tool in vascular pharmacology; no PK parameters for neostigmine are reported. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | This is a network meta-analysis of antiemetic drugs for PONV prevention with no pharmacokinetic parameters for neostigmine; neostigmine is not even among the drugs reviewed. |
| popPK | Weinstein_2018 | irrelevant | 0 | 0 | A Cochrane review of regional anaesthesia for persistent postoperative pain with no neostigmine PK data. |
| popPK | Weinstein_2018_2 | irrelevant | 0 | 0 | A Cochrane review of regional anaesthesia for persistent postoperative pain with no neostigmine PK data or parameters. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | This is a clinical analgesia trial of lidocaine/esketamine; neostigmine is not studied and no PK parameters appear. |
| popPK | Yamamoto_1996 | irrelevant | 2 | 1 | Toxicodynamic (PD) effect-compartment modeling of heart rate in rats; no PK disposition parameters (CL, V, ka) for neostigmine reported. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | Neostigmine is only used to induce pain in mice; no PK parameters for neostigmine are reported. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | This is a toxicology/protective-efficacy study of neostigmine against snake venom in mice, with no PK parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | Zhu_2026 | irrelevant | 0 | 0 | This is a population PK/PD study of ciprofol, not neostigmine; neostigmine is only mentioned as a co-administered reversal agent with no PK parameters for it. |
| PGx | Østergaard_2005 | not_relevant | 2 | 3 | The pharmacogenomic effect (atypical cholinesterase) concerns mivacurium's PK/PD; neostigmine is only used as a reversal agent, with no genotype effect on neostigmine's PK/PD reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
