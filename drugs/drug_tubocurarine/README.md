<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;tubocurarine&quot;}]"></div>

# tubocurarine

- **generic name:** tubocurarine
- **ATC codes:** `M03AA02`
- **DrugBank:** [DB01199](https://go.drugbank.com/drugs/DB01199) · **PubChem:** [CID 6000](https://pubchem.ncbi.nlm.nih.gov/compound/6000)
- **molar mass:** 609.7312 g/mol (C37H41N2O6) — DrugBank
- **groups:** approved, withdrawn

## About

Tubocurarine, a curare alkaloid, is a non-depolarising muscle relaxant that was used to cause muscle relaxation during anaesthesia and surgery. It has been withdrawn from use, having been replaced by newer muscle relaxants with fewer side effects.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421268](https://www.wikidata.org/wiki/Q421268) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| d-tubocurarine (tubocurarine) | parent | 609.731 | C37H41N2O6 | DrugBank | [6000](https://pubchem.ncbi.nlm.nih.gov/compound/6000) | Matteo_1984 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:01 | 8:22 | 0/0/1 | 3/4/0 | 0/0/0 | 218,174/8,690 | einfracz / qwen3.8-27b | 4 | 1/1 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Matteo_1984_reference](drugs/drug_tubocurarine/Tubocurarine_Matteo1984_reference.md) | — | 1-compartment (no model) | 2 | Matteo RS et al., Distribution, elimination, and action o…, Anesthesia and analgesia (1984) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Gronert_1984_blocking_of_tetanus](drugs/drug_tubocurarine/pd_Gronert_1984_blocking_of_tetanus.md) | blocking of tetanus ← dimethyl tubocurarine · direct sigmoid Emax (Hill) effect | — | Gronert GA et al., Canine gastrocnemius disuse atrophy: re…, Journal of applied physiolo… (1984) | [10.1152/jappl.1984.57.5.1502](https://doi.org/10.1152/jappl.1984.57.5.1502) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mair_1998_5_HT_evoked_current](drugs/drug_tubocurarine/pd_Mair_1998_5_HT_evoked_current.md) | 5-HT evoked current ← (+)-tubocurarine · inhibition effect | — | Mair ID et al., Pharmacological characterization of a r…, British journal of pharmaco… (1998) | [10.1038/sj.bjp.0702037](https://doi.org/10.1038/sj.bjp.0702037) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sheiner_1979_paralysis](drugs/drug_tubocurarine/pd_Sheiner_1979_paralysis.md) | paralysis ← d-tubocurarine · delayed effect through an effect compartment | — | Sheiner LB et al., Simultaneous modeling of pharmacokineti…, Clinical pharmacology and t… (1979) | [10.1002/cpt1979253358](https://doi.org/10.1002/cpt1979253358) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">cattle</span> | [Nooney_1992_ACh_evoked_inward_currents](drugs/drug_tubocurarine/pd_Nooney_1992_ACh_evoked_inward_currents.md) | ACh-evoked inward currents ← (+)-tubocurarine · inhibition effect | — | Nooney JM et al., A patch clamp study of the nicotinic ac…, The Journal of physiology (1992) | [10.1113/jphysiol.1992.sp019314](https://doi.org/10.1113/jphysiol.1992.sp019314) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Orko_1984_twitch_response](drugs/drug_tubocurarine/pd_Orko_1984_twitch_response.md) | twitch response ← tubocurarine · direct linear effect | — | Orko R et al., Dose-response of tubocurarine in patien…, Acta anaesthesiologica Scan… (1984) | [10.1111/j.1399-6576.1984.tb02097.x](https://doi.org/10.1111/j.1399-6576.1984.tb02097.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">cat</span> | [Uceda_1992_catecholamines](drugs/drug_tubocurarine/pd_Uceda_1992_catecholamines.md) | catecholamines ← d-Tubocurarine (DTC) · direct sigmoid Emax (Hill) effect | — | Uceda G et al., Ca(2+)-activated K+ channels modulate m…, The Journal of physiology (1992) | [10.1113/jphysiol.1992.sp019261](https://doi.org/10.1113/jphysiol.1992.sp019261) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Unadkat_1986_twitch_tension](drugs/drug_tubocurarine/pd_Unadkat_1986_twitch_tension.md) | twitch tension ← tubocurarine · delayed effect through an effect compartment | — | Unadkat JD et al., An integrated model for the interaction…, Journal of applied physiolo… (1986) | [10.1152/jappl.1986.61.4.1593](https://doi.org/10.1152/jappl.1986.61.4.1593) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tubocurarine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` substrate | DrugBank actor |
| metabolism | liver | `BCHE` substrate, `SLC22A1` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` unknown | DrugBank actor |
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHRNA2 (target), CHRNA7 (unknown), HTR3A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 442 matched, 77 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Matteo_1984.pdf` | Matteo RS et al., Distribution, elimination, and action o…, Anesthesia and analgesia (1984) | popPK | 10 | not captured | [6465573](https://pubmed.ncbi.nlm.nih.gov/6465573) | The study reports quantitative three-compartment pharmacokinetic parameters (clearance, half-life) for tubocurarine in human subjects. |
| `Morino_1983.pdf` | Morino A et al., Kinetics of d-tubocurarine disposition…, Journal of pharmacokinetics… (1983) | popPK | 9 | [10.1007/BF01061767](https://doi.org/10.1007/BF01061767) | [6875809](https://pubmed.ncbi.nlm.nih.gov/6875809) | The study reports PK parameters for tubocurarine in rats, but specific numeric values are not listed in the provided abstract text. |
| `Ramzan_1978.pdf` | Ramzan IM et al., Studies of d-tubocurarine pharmacokinet…, Anaesthesia and intensive c… (1978) | popPK | 9 | [10.1177/0310057X7800600104](https://doi.org/10.1177/0310057X7800600104) | [665974](https://pubmed.ncbi.nlm.nih.gov/665974) | The paper reports quantitative PK parameters (half-lives, two-compartment model) for tubocurarine in both humans and dogs. |
| `Ramzan_1980.pdf` | Ramzan MI et al., Pharmacokinetics of tubocurarine admini…, British journal of anaesthe… (1980) | popPK | 8 | [10.1093/bja/52.9.893](https://doi.org/10.1093/bja/52.9.893) | [7437228](https://pubmed.ncbi.nlm.nih.gov/7437228) | The paper describes a relevant PK study with a two-compartment model for tubocurarine, but specific numeric parameter values (CL, V, Q) are not explicitly listed in the evidence, only general concentration values. |
| `Sheiner_1979.pdf` | Sheiner LB et al., Simultaneous modeling of pharmacokineti…, Clinical pharmacology and t… (1979) | popPK | 8 | [10.1002/cpt1979253358](https://doi.org/10.1002/cpt1979253358) | [761446](https://pubmed.ncbi.nlm.nih.gov/761446) | The paper reports population PK/PD parameters (ke0, EC50) for tubocurarine in humans, but standard disposition parameters (CL, V) are not explicitly provided in the text. |
| `Buzello_1978_2.pdf` | Buzello W et al., Kinetics of intercompartmental disposit…, Der Anaesthesist (1978) | popPK | 5 | not captured | [150805](https://pubmed.ncbi.nlm.nih.gov/150805) | The paper describes the pharmacokinetic model and kinetics for tubocurarine but explicitly states data are taken from the literature and no specific numeric parameter values (CL, V, etc.) are provided in the evidence. |

<sub>queue written 2026-10-07T03:00:58.307769+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anderson_1988 | irrelevant | 0 | 0 | The study is a pharmacological investigation of muscarinic receptors in rat cortex where tubocurarine is used only as a negative control to rule out nicotinic receptor involvement, with no pharmacokinetic parameters reported. |
| popPK | Beani_1985 | irrelevant | 0 | 0 | The study is an in-vitro neuropharmacological investigation of acetylcholine release where tubocurarine is used solely as a pharmacological antagonist, not as the subject of a pharmacokinetic study. |
| popPK | Bertrand_1990 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment measuring the blocking potency of tubocurarine on reconstituted receptors in Xenopus oocytes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Briggs_1999 | irrelevant | 0 | 0 | This is an in vitro electrophysiological study of a nicotinic receptor mutation where tubocurarine is used only as a comparative antagonist, with no pharmacokinetic disposition parameters reported. |
| popPK | Brotz_1996 | irrelevant | 0 | 0 | The study is an in-vitro neurophysiological investigation of a fly where tubocurarine is used as a pharmacological antagonist, not a pharmacokinetic study of tubocurarine disposition. |
| popPK | Buzello_1978 | irrelevant | 4 | 0 | The paper is a review that synthesizes data from the literature and does not present original quantitative PK parameter values (CL, V, t1/2) in the provided text. |
| popPK | Buzello_1978_2 | relevant | 5 | 0 | The paper describes the pharmacokinetic model and kinetics for tubocurarine but explicitly states data are taken from the literature and no specific numeric parameter values (CL, V, etc.) are provided in the evidence. |
| popPK | Campos_2020 | irrelevant | 0 | 0 | Tubocurarine is used as a pharmacological tool (muscle relaxant/antagonist) in an in-vitro study of vascular contractions, not as the subject of a pharmacokinetic analysis. |
| popPK | Day_1996 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of cholinergic inhibition in Schistosoma mansoni, using d-tubocurarine as a test antagonist rather than reporting pharmacokinetic parameters for the drug. |
| popPK | Emerit_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 5-HT3 receptors where tubocurarine is used as a comparator antagonist, not a PK study of tubocurarine. |
| popPK | Farrell_1981 | irrelevant | 0 | 0 | The study is an in vitro potency analysis of neuromuscular blockade, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Fisher_1985 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of vecuronium, not tubocurarine. |
| popPK | Fleming_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic validation of a neuromuscular junction model using tubocurarine as a neurotoxin probe; it reports no pharmacokinetic parameters (clearance, volume, etc.) for tubocurarine. |
| popPK | Gopalakrishnan_1997 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of nicotinic acetylcholine receptor regulation where d-tubocurarine is used only as an antagonist ligand, not as a subject for pharmacokinetic analysis. |
| popPK | Gronert_1984 | irrelevant | 1 | 0 | The study reports pharmacodynamic dose-response data (paralysis resistance) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for tubocurarine. |
| popPK | Hashemzadeh-Gargari_1992 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study on lobster motor neurons where tubocurarine is used as a comparative pharmacological agent to characterize chloride channel properties, not as the subject of a pharmacokinetic study. |
| PGx | Hassan_2023 | not_relevant | 0 | 0 | The study is a computational drug repurposing effort that screens for Alzheimer's drugs; it does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of tubocurarine. |
| popPK | Higashi_1982 | irrelevant | 0 | 0 | The study investigates electrophysiological effects of 5-HT receptors in rabbit nodose ganglia and only uses tubocurarine as an inhibitory agent, not as the subject of pharmacokinetic analysis. |
| popPK | Horie_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of urotensin II's effects on guinea-pig ileum, using D-tubocurarine only as a pharmacological antagonist to block cholinergic transmission, not as the subject of PK analysis. |
| popPK | Jaklitsch_1990 | relevant | 4 | 0 | The paper develops a pharmacokinetic model including d-tubocurarine, but it does not report specific numeric PK parameter values (CL, V, etc.) for tubocurarine in the provided evidence, and the drug is one of four agents in a general simulation. |
| popPK | Johans_1980 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| popPK | Kita_2017 | irrelevant | 0 | 0 | The paper studies histamine-gated chloride channels in houseflies and uses d-tubocurarine only as a pharmacological inhibitor in an in vitro model, reporting no pharmacokinetic parameters. |
| PGx | MATTHEW_1964 | not_relevant | 0 | 0 | The paper discusses pre-ECT medication in general and does not contain data or analysis regarding the pharmacogenetics of tubocurarine. |
| popPK | Mair_1998 | irrelevant | 0 | 0 | The study is a pharmacological characterization of a 5-HT3 receptor in oocytes, using tubocurarine only as a test compound to determine an IC50 value, not to assess pharmacokinetic disposition parameters. |
| popPK | Martin_1997 | irrelevant | 0 | 0 | The study is a mechanistic investigation of acetylcholine receptor mutations where tubocurarine is used only as a binding ligand to characterize site asymmetry, not as a subject of pharmacokinetic analysis. |
| popPK | Massingham_1985 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of cinitapride and metoclopramide, where tubocurarine is used only as a blocking agent, not as the subject drug for PK analysis. |
| popPK | Morino_1983 | relevant | 9 | 2 | The study reports PK parameters for tubocurarine in rats, but specific numeric values are not listed in the provided abstract text. |
| popPK | Nguyen-Huu_2005 | irrelevant | 0 | 0 | The study is an in vitro pharmacological/mechanistic investigation of neuromuscular blocking effects and cholinesterase activity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | OGara_1999 | irrelevant | 0 | 0 | The study is a pharmacological characterization of cholinergic receptors in leech pharynx, using d-tubocurarine only as an antagonist, and contains no pharmacokinetic parameters. |
| popPK | Park_1994 | irrelevant | 0 | 0 | The paper studies ion channel selectivity and gating in rat cells using tubocurarine as a blocker, not its pharmacokinetics. |
| popPK | Patil_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of acetylcholinesterase inhibitors (huperzine-A and physostigmine) and does not report pharmacokinetic parameters for tubocurarine. |
| popPK | Piscopo_2007 | irrelevant | 0 | 0 | The study is a neurophysiological investigation of synaptic transmission in octopus, where tubocurarine is used only as a pharmacological agent (comparator/antagonist), not as the subject of a pharmacokinetic analysis. |
| popPK | Ramzan_1978 | relevant | 9 | 4 | The paper reports quantitative PK parameters (half-lives, two-compartment model) for tubocurarine in both humans and dogs. |
| popPK | Ramzan_1980 | relevant | 8 | 2 | The paper describes a relevant PK study with a two-compartment model for tubocurarine, but specific numeric parameter values (CL, V, Q) are not explicitly listed in the evidence, only general concentration values. |
| popPK | Ramzan_1983 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of gallamine, and d-tubocurarine is only mentioned as a comparator without providing specific pharmacokinetic parameters (CL, Vd, etc.). |
| popPK | Rao_1997 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of neurotransmitter release, using d-tubocurarine only as a receptor antagonist tool rather than studying its pharmacokinetics. |
| popPK | Ridtitid_1998 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on a plant extract comparing neuromuscular blocking activity with tubocurarine, and does not report pharmacokinetic parameters for tubocurarine. |
| popPK | Rozman_2010 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study investigating the binding mode of parazoanthoxanthin A on Torpedo nicotinic acetylcholine receptors, with tubocurarine used only as a comparator, and contains no pharmacokinetic parameters. |
| popPK | Salgado_2016 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study measuring antagonist potency on cockroach neurons, not a pharmacokinetic study of tubocurarine disposition. |
| popPK | Shanks_1980 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| popPK | Sheiner_1979 | relevant | 8 | 2 | The paper reports population PK/PD parameters (ke0, EC50) for tubocurarine in humans, but standard disposition parameters (CL, V) are not explicitly provided in the text. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay investigating the interaction between quinolones and anti-inflammatories on GABA receptors, and D-tubocurarine is only used as a control GABA antagonist, not as a subject for PK parameter estimation. |
| popPK | Unadkat_1986 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic interaction modeling of tubocurarine with an antagonist in dogs and does not report quantitative population-pharmacokinetic parameters (CL, V, etc.) for tubocurarine in the provided evidence. |
| popPK | Wittekindt_2004 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study characterizing the pharmacology of SK3 ion channels, using tubocurarine only as a blocker to test channel sensitivity, not as a subject for pharmacokinetic analysis. |
| popPK | Wüstenberg_2004 | irrelevant | 0 | 0 | The study focuses on the electrophysiology of honeybee nicotinic receptors, not the pharmacokinetics of tubocurarine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:00 UTC</sub>
